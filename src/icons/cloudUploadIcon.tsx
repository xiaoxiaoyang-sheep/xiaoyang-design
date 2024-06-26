import React from 'react';
import type { XYIconElement } from '../icon';
import { Icon } from '../icon';

const CloudUploadIcon: XYIconElement = (props) => {
  const {
    className,
    size = 24,
    color = 'default',
    style = {},
    ...others
  } = props;

  const svg = () => (
    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path>
    </svg>
  );

  return <Icon component={svg} {...props} />;
};

export default CloudUploadIcon;
