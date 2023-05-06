import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  let height, iconSize, borderSize, padding, fontSize;
  if (size.toLowerCase() === 'small') {
    height = 24;
    fontSize = 14;
    iconSize = 16;
    borderSize = 1;
  } else {
    height = 36;
    iconSize = 24;
    fontSize = 18;
    borderSize = 2;
  }
  return (
    <Wrapper
      style={{
        '--border-size': borderSize + 'px',
        '--height': height + 'px',
        '--width': width + 'px',
        '--font-size': fontSize + 'px',
        '--icon-size': iconSize + 'px',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper>
        <Icon id={icon} size={iconSize} />
      </IconWrapper>
      <Input id="input" {...delegated} />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  width: max-content;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;
const Input = styled.input`
  border: none;
  border-bottom: var(--border-size) solid ${COLORS.black};
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  font-size: var(--font-size);
  color: inherit;
  font-weight: 700;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  &:focus {
    outline: -webkit-focus-ring-color solid 2px;
    border-radius: 2px;
    outline-offset: 2px;
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto 0;
  height: var(--icon-size);
`;

export default IconInput;
