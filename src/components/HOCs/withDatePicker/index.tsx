import { CalendarAllProps } from 'components/Calendar/interfaces';
import { onlyNumbersAndDot } from 'constants/regex';
import { theme } from 'constants/theme';
import { parseDate } from 'helpers/parseDate';
import React, { FC, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { config } from '../config';
import { ClearButton, InputDate, WithDatePicker } from '../styled';
import { DefaultProps } from './interfaces';

const { unselectedDate } = config;

export const withDatePicker = (WrappedComponent: FC<CalendarAllProps>) => {
  const ComponentWithInput = (props: DefaultProps) => {
    const { defaultSelectedDay } = props;

    const [selectedDay, setSelectedDay] = useState(defaultSelectedDay || new Date());
    const [inputValue, setInputValue] = useState('');
    const [isNotValid, setIsNotValid] = useState(false);

    useEffect(() => {
      setSelectedDay(defaultSelectedDay || new Date(unselectedDate));
      setInputValue(defaultSelectedDay?.toLocaleDateString() || '');
    }, [defaultSelectedDay]);

    const handleClearButton = (): void => {
      setSelectedDay(new Date());
      setInputValue('');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      if (onlyNumbersAndDot.test(inputValue)) {
        const { day, month, year, date } = parseDate(e);

        if (
          date.getDate() === day &&
          date.getMonth() === month &&
          date.getFullYear() === year &&
          date.getFullYear() <= 9999
        ) {
          setSelectedDay(date);
          setIsNotValid(false);
        } else {
          setIsNotValid(true);
        }
        setInputValue(inputValue);
      }
    };

    const handleSelectDay = (date: Date) => {
      const stringDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
      setSelectedDay(date);
      setInputValue(stringDate);
      setIsNotValid(false);
    };

    return (
      <ThemeProvider theme={theme}>
        <WithDatePicker>
          <InputDate
            isnotvalid={isNotValid.toString()}
            type="text"
            placeholder="dd.mm.yyyy"
            value={inputValue}
            onChange={(e) => {
              handleInputChange(e);
            }}
            pattern="[0-9.]*"
          />
          <WrappedComponent
            {...props}
            handleSelectDay={handleSelectDay}
            selectedDay={selectedDay}
            isInputHaveValue={!!inputValue}
          />
          {inputValue && <ClearButton onClick={handleClearButton}>Clear all</ClearButton>}
        </WithDatePicker>
      </ThemeProvider>
    );
  };
  return ComponentWithInput;
};
