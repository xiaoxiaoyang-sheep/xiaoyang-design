import { FC } from 'react';
import type { XYCustomIconElement, XYCustomIconProps } from './icon';
import { XYIconProps } from './icon';

type XYIconElement = FC<XYIconProps>;

export { default as Icon } from './icon';
export type {
  XYCustomIconElement,
  XYCustomIconProps,
  XYIconElement,
  XYIconProps,
};
