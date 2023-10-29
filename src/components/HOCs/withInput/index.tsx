import React, { FC, useState } from 'react';

interface WithInputProps {
  selectedDay: Date;
  handleSelectDay: (date: Date) => void;
}

const validDate = (inputDate: string) => {
    const parts = inputDate.split('-');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
};

export const withInput = (WrappedComponent: FC<WithInputProps>) => {
    return () => {
        const [selectedDay, setSelectedDay] = useState(new Date());
        const [inputValue, setInputValue] = useState('');

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const iv = e.target.value;
            const parts = iv.split('-');
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
            } else {
                console.log(e.target);
            }
            setInputValue(iv);
        };

        const handleSelectDay = (date: Date) => {
            const stringDate = `${date.getDate()}-${
                date.getMonth() + 1
            }-${date.getFullYear()}`;
            setSelectedDay(date);
            setInputValue(stringDate);
        };

        return (
            <>
                <input
                    type="text"
                    placeholder="dd-mm-yyyy"
                    value={inputValue}
                    onChange={(e) => {
                        handleInputChange(e);
                    }}
                />
                <WrappedComponent
                    handleSelectDay={handleSelectDay}
                    selectedDay={selectedDay}
                />
            </>
        );
    };
};
