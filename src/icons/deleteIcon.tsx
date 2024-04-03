import React from 'react';
import type { XYIconElement } from '../icon';
import { Icon } from '../icon';

const DeleteIcon: XYIconElement = (props) => {
  const {
    className,
    size = 24,
    color = 'default',
    style = {},
    ...others
  } = props;

  const svg = () => (
    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
    </svg>
  );

  return <Icon component={svg} {...props} />;
};

export default DeleteIcon;
