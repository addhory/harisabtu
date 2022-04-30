import React from 'react';
import styled from 'styled-components';

interface StyledHeadingProps {
  size: string;
}

const Heading = styled.p<StyledHeadingProps>`
  font-size: ${(props) => props.size};
  color: black;
`;

interface TypographyProps {
  children: React.ReactNode;
  variant: 'h1' | 'h2' | 'h3';
}

const Typography = (props: TypographyProps) => {
  const { variant = 'h1' } = props;

  let fontsize = '';

  if (variant === 'h1') {
    fontsize = '4rem';
  }

  if (variant === 'h2') {
    fontsize = '2rem';
  }

  return <Heading size={fontsize}>{props.children}</Heading>;
};

export default Typography;
