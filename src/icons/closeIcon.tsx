import React from 'react';
import type { XYIconElement } from '../icon';
import { Icon } from '../icon';

const CloseIcon: XYIconElement = (props) => {
  const {
    className,
    size = 24,
    color = 'default',
    style = {},
    ...others
  } = props;

  const svg = () => (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2062"
    >
      <path
        d="M268.501333 268.501333a42.666667 42.666667 0 0 1 60.330667 0l426.666667 426.666667a42.666667 42.666667 0 0 1-60.330667 60.330667l-426.666667-426.666667a42.666667 42.666667 0 0 1 0-60.330667z"
        fill="#000000"
        p-id="2063"
      ></path>
      <path
        d="M755.498667 268.501333a42.666667 42.666667 0 0 1 0 60.330667l-426.666667 426.666667a42.666667 42.666667 0 0 1-60.330667-60.330667l426.666667-426.666667a42.666667 42.666667 0 0 1 60.330667 0z"
        fill="#000000"
        p-id="2064"
      ></path>
    </svg>
  );

  return <Icon component={svg} {...props} />;
};

export default CloseIcon;
