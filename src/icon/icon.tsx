import classNames from 'classnames';
import React, { ReactElement, type FC } from 'react';

import './index.less';

export interface XYIconProps {
  /**
   * @description 自定义样式类名
   * @default ""
   */
  className?: string;
  /**
   * @description 设置图标尺寸
   * @default 22
   */
  size?: number;
  /**
   * @description 设置图标尺寸
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
  /**
   * @description 设置图标颜色
   * @default default
   */
  color?: 'primary' | 'secondary' | 'default' | 'action' | 'disabled';
  /**
   * @description 设置按钮点击事件
   * @default null
   */
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export interface XYCustomIconProps {
  /**
   * @description 自定义样式类名
   * @default ""
   */
  className?: string;
  /**
   * @description 设置图标内容
   * @default null
   * @type () => React.SVGProps<SVGSVGElement>
   */
  component: () => React.SVGProps<SVGSVGElement>;
  /**
   * @description 设置图标尺寸
   * @default 22
   */
  size?: number;
  /**
   * @description 设置图标尺寸
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
  /**
   * @description 设置图标颜色
   * @default default
   */
  color?: 'primary' | 'secondary' | 'default' | 'action' | 'disabled';
  /**
   * @description 设置按钮点击事件
   * @default null
   */
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export type XYCustomIconElement = FC<XYCustomIconProps>;

const Icon: XYCustomIconElement = (props) => {
  const {
    className,
    size = 24,
    component,
    color = 'default',
    style = {},
    ...others
  } = props;

  const cls = classNames({
    'xy-icon-default': true,
    [`xy-icon-${color}`]: color,
    [className as string]: !!className,
  });

  const customStyle: React.CSSProperties = {
    width: size,
    height: size,
    ...style,
  };

  return React.cloneElement(component() as ReactElement, {
    className: cls,
    style: customStyle,
    ...others,
  });
};

export default Icon;
