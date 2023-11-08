import { CalendarAllProps } from 'components/Calendar/interfaces';
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
    const [selectedDay, setSelectedDay] = useState(props.selectedDay || new Date());
    const [inputValue, setInputValue] = useState('');
    const [isNotValid, setIsNotValid] = useState(false);

    useEffect(() => {
      setSelectedDay(props.selectedDay || new Date(unselectedDate));
      setInputValue(props.selectedDay?.toLocaleDateString() || '');
    }, [props.selectedDay]);

    const handleClearButton = (): void => {
      setSelectedDay(new Date());
      setInputValue('');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { day, month, year, date } = parseDate(e);

      if (date.getDate() === day && date.getMonth() === month && date.getFullYear() === year) {
        setSelectedDay(date);
        setIsNotValid(false);
      } else {
        setIsNotValid(true);
      }
      setInputValue(inputValue);
    };

    const handleSelectDay = (date: Date) => {
      const stringDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
      setSelectedDay(date);
      setInputValue(stringDate);
    };

    const isInputHaveValue: boolean = !!inputValue;

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
          />
          <WrappedComponent
            {...props}
            handleSelectDay={handleSelectDay}
            selectedDay={selectedDay}
            isInputHaveValue={isInputHaveValue}
          />
          {inputValue && <ClearButton onClick={handleClearButton}>Clear all</ClearButton>}
        </WithDatePicker>
      </ThemeProvider>
    );
  };
  return ComponentWithInput;
};
