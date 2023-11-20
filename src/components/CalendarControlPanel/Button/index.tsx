import React, { FC, memo } from 'react';

import { ButtonProps } from './interfaces';
import { ButtonStyled } from './styled';

export const Button: FC<ButtonProps> = memo(({ isSetNextButton, callback }) => {
  Button.displayName = 'Button';

  const handleChange = callback(isSetNextButton);

  return (
    <ButtonStyled issetnextbutton={isSetNextButton.toString()} onClick={handleChange}>
      {isSetNextButton ? '»' : '«'}
    </ButtonStyled>
  );
});
