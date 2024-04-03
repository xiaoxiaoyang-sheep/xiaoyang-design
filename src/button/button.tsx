import classNames from 'classnames';
import React, { FC, ReactNode, useCallback } from 'react';
import { type XYIconElement } from '..';

import './index.less';

export interface XYButtonProps {
  /**
   * @description 自定义样式类名
   * @default ""
   */
  className?: string;
  /**
   * @description 设置按钮类型
   * @default text
   */
  variant?: 'contained' | 'text' | 'outlined';
  /**
   * @description 设置按钮颜色
   * @default default
   */
  color?: 'primary' | 'secondary' | 'default';
  /**
   * @description 设置按钮大小
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * @description 设置按钮禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 设置按钮链接
   * @default '''
   */
  href?: string;
  /**
   * @description 消除实心按钮的立体效果
   * @default false
   */
  disableElevation?: boolean;
  /**
   * @description 设置内部节点
   * @default null
   */
  children?: ReactNode;
  /**
   * @description 设置按钮样式
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
  /**
   * @description 设置按钮头部icon样式
   * @default null
   * @type XYIconElement
   */
  startIcon?: XYIconElement;
  /**
   * @description 设置按钮尾部icon样式
   * @default null
   * @type XYIconElement
   */
  endIcon?: XYIconElement;
  /**
   * @description 设置按钮点击事件
   * @default null
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * @description 设置按钮失焦事件
   * @default null
   */
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

export type XYButtonElement = FC<XYButtonProps>;

const Button: XYButtonElement = (props) => {
  const {
    className,
    variant = 'text',
    size = 'medium',
    color = 'default',
    disabled = false,
    href = '',
    disableElevation = false,
    startIcon,
    endIcon,
    children,
    style,
    onClick,
    onBlur,
    ...others
  } = props;

  const cls = classNames({
    'xy-btn': true,
    'xy-btn-text': true,
    'xy-btn-default': true,
    'xy-btn-medium': true,
    [`xy-btn-${variant}`]: variant,
    [`xy-btn-${color}`]: color,
    [`xy-btn-${size}`]: size,
    [`xy-btn-disabled`]: disabled,
    [`xy-btn-disable-elevation`]: disableElevation,
    [className as string]: !!className,
  });

  const clickHrefHandle = useCallback(() => {
    console.log('123', '');
    window.location.href = href;
  }, []);

  const StartICon = startIcon as XYIconElement;
  const EndIcon = endIcon as XYIconElement;

  const iconSize = () => {
    switch (size) {
      case 'medium':
        return 14 * 1.5;
      case 'large':
        return 15 * 1.5;
      case 'small':
        return 13 * 1.5;
    }
  };

  const iconColor = () => {
    switch (color) {
      case 'default':
        return 'rgba(0, 0, 0, 0.87)';
      default:
        return disabled ? 'rgba(0, 0, 0, 0.26)' : 'rgba(255, 255, 255)';
    }
  };

  return (
    <button
      className={cls}
      style={style}
      onClick={href ? clickHrefHandle : onClick}
      onBlur={onBlur}
      {...others}
    >
      {startIcon && (
        <StartICon
          className="left-icon"
          size={iconSize()}
          style={{ fill: iconColor() }}
        />
      )}
      <span className="text">{children}</span>
      {endIcon && (
        <EndIcon
          className="right-icon"
          size={iconSize()}
          style={{ fill: iconColor() }}
        />
      )}
    </button>
  );
};

export default Button;
