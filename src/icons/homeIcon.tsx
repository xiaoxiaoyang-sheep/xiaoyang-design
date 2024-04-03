import React from 'react';
import type { XYIconElement } from '../icon';
import { Icon } from '../icon';

const HomeIcon: XYIconElement = (props) => {
  const {
    className,
    size = 24,
    color = 'default',
    style = {},
    ...others
  } = props;

  const svg = () => (
    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
    </svg>
  );

  return <Icon component={svg} {...props} />;
};

export default HomeIcon;
