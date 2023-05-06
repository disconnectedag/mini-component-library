/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': 8 + 'px',
    '--borderRadius': 4 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--borderRadius': 4 + 'px',
  },
  large: {
    '--height': 24 + 'px',
    '--borderRadius': 8 + 'px',
    '--padding': 4 + 'px',
  },
};
const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <Wrapper
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      role="progressbar"
      style={styles}
    >
      <BarWrapper>
        <Bar value={value}></Bar>
      </BarWrapper>
      <VisuallyHidden>{value}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--borderRadius);
`;
const BarWrapper = styled.div`
  border-radius: 4px;
  /* trim off corners when progress is near full */
  overflow: hidden;
`;
const Bar = styled.div`
  height: var(--height);
  width: ${(props) => props.value}%;
  background-color: hsla(240, 80%, 60%, 1);
  border-radius: inherit;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`;

export default ProgressBar;
