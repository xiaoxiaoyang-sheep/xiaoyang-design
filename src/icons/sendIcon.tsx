import React from 'react';
import type { XYIconElement } from '../icon';
import { Icon } from '../icon';

const SendIcon: XYIconElement = (props) => {
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
      p-id="5726"
    >
      <path
        d="M85.333333 896l896-384L85.333333 128v298.666667l640 85.333333-640 85.333333z"
        p-id="5727"
      ></path>
    </svg>
  );

  return <Icon component={svg} {...props} />;
};

export default SendIcon;
