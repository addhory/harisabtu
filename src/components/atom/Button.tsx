import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.color};
  padding: 1rem;
  color: white;
  padding: 1rem;
`;

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary' | 'outlined';
  size: 'small' | 'medium' | 'large' | undefined;
}
// type ButtonProps = {
//   children: ReactNode;
// };

// Primary | Secondary | Outlined

const Button = (props: ButtonProps) => {
  const { size = 'medium' } = props;
  let buttonColor;
  let buttonSize;

  if (props.variant === 'primary') {
    buttonColor = 'blue';
  }

  if (props.variant === 'secondary') {
    buttonColor = 'red';
  }

  if (size === 'medium') {
    buttonSize = '1rem';
  }

  return <StyledButton color={buttonColor}>{props.children}</StyledButton>;
};

export default Button;
