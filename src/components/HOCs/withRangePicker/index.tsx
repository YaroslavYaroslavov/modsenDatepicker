import { CalendarAllProps } from 'components/Calendar/interfaces';
import { onlyNumbersAndDot } from 'constants/regex';
import { theme } from 'constants/theme';
import { parseDate } from 'helpers/parseDate';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { config } from '../config';
import { ClearButton, InputDate, WithDatePicker } from '../styled';
import { DefaultProps } from './interfaces';

const { unselectedDate } = config;

export const withRangePicker = (WrappedComponent: FC<CalendarAllProps>) => {
  const ComponentWithInput = (props: DefaultProps) => {
    const { defaultSelectedFirstDay, defaultSelectedSecondDay } = props;

    const [selectedFirstDay, setSelectedFirstDay] = useState(
      defaultSelectedFirstDay || new Date(unselectedDate)
    );
    const [selectedSecondDay, setSelectedSecondDay] = useState(
      defaultSelectedSecondDay || new Date(unselectedDate)
    );
    const [firstInputValue, setFirstInputValue] = useState(
      defaultSelectedFirstDay?.toLocaleDateString() || ''
    );
    const [secondInputValue, setSecondInputValue] = useState(
      defaultSelectedSecondDay?.toLocaleDateString() || ''
    );
    const [isNotValidFirstInput, setIsNotValidFirstInput] = useState(false);
    const [isNotValidSecondInput, setIsNotValidSecondInput] = useState(false);

    useEffect(() => {
      setSelectedSecondDay(defaultSelectedSecondDay || new Date(unselectedDate));
      setSelectedFirstDay(defaultSelectedFirstDay || new Date(unselectedDate));
      setFirstInputValue(defaultSelectedFirstDay?.toLocaleDateString() || '');
      setSecondInputValue(defaultSelectedSecondDay?.toLocaleDateString() || '');
    }, [defaultSelectedFirstDay, defaultSelectedSecondDay]);

    const handleClearButton = useCallback((): void => {
      setSelectedFirstDay(new Date(unselectedDate));
      setSelectedSecondDay(new Date(unselectedDate));
      setSecondInputValue('');
      setFirstInputValue('');
    }, []);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      if (!onlyNumbersAndDot.test(inputValue)) {
        return;
      }

      const { day, month, year, date } = parseDate(e);

      if (date.getDate() === day && date.getMonth() === month && date.getFullYear() === year) {
        if (e.target.id === 'firstInput') {
          setSelectedFirstDay(date);
          setIsNotValidFirstInput(false);
        }
        if (e.target.id === 'secondInput') {
          setSelectedSecondDay(date);
          setIsNotValidSecondInput(false);
        }
      } else {
        if (e.target.id === 'firstInput') {
          setIsNotValidFirstInput(true);
        }
        if (e.target.id === 'secondInput') {
          setIsNotValidSecondInput(true);
        }
      }
      if (e.target.id === 'firstInput') {
        setFirstInputValue(inputValue);
      }
      if (e.target.id === 'secondInput') {
        setSecondInputValue(inputValue);
      }
    }, []);

    const handleSelectDay = useCallback(
      (date: Date) => {
        const stringDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        if (selectedFirstDay.toLocaleDateString() === '01.01.1970') {
          setSelectedFirstDay(date);
          setFirstInputValue(stringDate);
          setIsNotValidFirstInput(false);
        } else {
          if (selectedFirstDay.getTime() === date.getTime()) {
            return;
          }
          if (selectedFirstDay.getTime() < date.getTime()) {
            setSelectedSecondDay(date);
            setIsNotValidSecondInput(false);
            setSecondInputValue(stringDate);
          } else {
            setSelectedSecondDay(selectedFirstDay);
            setSelectedFirstDay(date);
            setSecondInputValue(firstInputValue);
            setFirstInputValue(stringDate);
            setIsNotValidFirstInput(false);
            setIsNotValidSecondInput(false);
          }
        }
      },
      [selectedFirstDay, selectedSecondDay, setFirstInputValue, setSecondInputValue]
    );

    const isInputHaveValue: boolean = !!firstInputValue || !!secondInputValue;

    return (
      <ThemeProvider theme={theme}>
        <WithDatePicker>
          <InputDate
            isnotvalid={isNotValidFirstInput.toString()}
            type="text"
            id="firstInput"
            placeholder="dd.mm.yyyy"
            value={firstInputValue}
            onChange={(e) => {
              handleInputChange(e);
            }}
            pattern="[0-9.]*"
          />
          <InputDate
            isnotvalid={isNotValidSecondInput.toString()}
            type="text"
            id="secondInput"
            placeholder="dd.mm.yyyy"
            value={secondInputValue}
            onChange={(e) => {
              handleInputChange(e);
            }}
            pattern="[0-9.]*"
          />

          <WrappedComponent
            {...props}
            handleSelectDay={handleSelectDay}
            selectedFirstDay={selectedFirstDay}
            selectedSecondDay={selectedSecondDay}
            isInputHaveValue={isInputHaveValue}
          />
          {(firstInputValue || secondInputValue) && (
            <ClearButton onClick={handleClearButton}>Clear all</ClearButton>
          )}
        </WithDatePicker>
      </ThemeProvider>
    );
  };
  return ComponentWithInput;
};
