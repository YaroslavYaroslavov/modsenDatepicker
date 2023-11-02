import { CalendarAllProps } from 'components/Calendar';
import { CalendarProps } from 'constants/types';
import React, { FC, useState } from 'react';

import { ClearButton, WithInput } from '../styled';

interface DefaultProps extends CalendarProps {
  selectedDay?: Date;
  withTodos?: boolean;
}

export const withInput = (WrappedComponent: FC<CalendarAllProps>) => {
  const ComponentWithInput = (props: DefaultProps) => {
    const [selectedDay, setSelectedDay] = useState(
      props.selectedDay || new Date()
    );
    const [inputValue, setInputValue] = useState('');
    const [isNotValid, setIsNotValid] = useState(false);
    const handleClearButton = (): void => {
      setSelectedDay(new Date());
      setInputValue('');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      const parts = inputValue.split('-');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      const date = new Date(year, month, day);

      if (
        date.getDate() === day &&
        date.getMonth() === month &&
        date.getFullYear() === year
      ) {
        setSelectedDay(date);
        setIsNotValid(false);
      } else {
        setIsNotValid(true);
      }
      setInputValue(inputValue);
    };

    const handleSelectDay = (date: Date) => {
      const stringDate = `${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`;
      setSelectedDay(date);
      setInputValue(stringDate);
    };

    const isInputHaveValue: boolean = !!inputValue;

    return (
      <WithInput isnotvalid={isNotValid.toString()}>
        <input
          type="text"
          placeholder="dd-mm-yyyy"
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
        {inputValue && (
          <ClearButton onClick={handleClearButton}>Clear all</ClearButton>
        )}
      </WithInput>
    );
  };
  return ComponentWithInput;
};
