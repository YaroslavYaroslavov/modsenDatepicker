import { CalendarAllProps } from 'components/Calendar';
import { CalendarProps } from 'constants/types';
import React, { FC, useState } from 'react';

import { ClearButton, WithInput } from '../styled';

interface DefaultProps extends CalendarProps {
  selectedFirstDay?: Date;
  selectedSecondDay?: Date;
}

export const withInputs = (WrappedComponent: FC<CalendarAllProps>) => {
  const ComponentWithInput = (props: DefaultProps) => {
    const [selectedFirstDay, setSelectedFirstDay] = useState(
      props.selectedFirstDay || new Date(0)
    );
    const [selectedSecondDay, setSelectedSecondDay] = useState(
      props.selectedSecondDay || new Date(0)
    );
    const [firstInputValue, setFirstInputValue] = useState(
      props.selectedFirstDay?.toLocaleDateString() || ''
    );
    const [secondInputValue, setSecondInputValue] = useState(
      props.selectedSecondDay?.toLocaleDateString() || ''
    );
    const [isNotValid, setIsNotValid] = useState(false);

    const handleClearButton = (): void => {
      setSelectedFirstDay(new Date(0));
      setSelectedSecondDay(new Date(0));
      setSecondInputValue('');
      setFirstInputValue('');
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
        if (e.target.id === 'firstInput') {
          setSelectedFirstDay(date);
          setIsNotValid(true);
        }
        if (e.target.id === 'secondInput') {
          setSelectedSecondDay(date);
          setIsNotValid(true);
        }
      } else {
        setIsNotValid(true);
      }
      if (e.target.id === 'firstInput') {
        setFirstInputValue(inputValue);
      }
      if (e.target.id === 'secondInput') {
        setSecondInputValue(inputValue);
      }
    };
    const handleSelectDay = (date: Date) => {
      const stringDate = `${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`;

      if (selectedFirstDay.toLocaleDateString() === '01.01.1970') {
        setSelectedFirstDay(date);
        setFirstInputValue(stringDate);
      } else if (
        selectedSecondDay.getTime() - date.getTime() >
        date.getTime() - selectedFirstDay.getTime()
      ) {
        setSelectedFirstDay(date);
        setFirstInputValue(stringDate);
      } else {
        setSelectedSecondDay(date);
        setSecondInputValue(stringDate);
      }
    };
    const isInputHaveValue: boolean = !!firstInputValue || !!secondInputValue;
    return (
      <WithInput isnotvalid={isNotValid.toString()}>
        <input
          type="text"
          id="firstInput"
          placeholder="dd-mm-yyyy"
          value={firstInputValue}
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <input
          type="text"
          id="secondInput"
          placeholder="dd-mm-yyyy"
          value={secondInputValue}
          onChange={(e) => {
            handleInputChange(e);
          }}
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
      </WithInput>
    );
  };
  return ComponentWithInput;
};
