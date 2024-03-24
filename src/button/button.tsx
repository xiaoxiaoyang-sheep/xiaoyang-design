import classNames from 'classnames';
import React, { ReactNode, type FC } from 'react';

import './index.less';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, variant, size = 'medium', children, style, onClick, onBlur, ...others } = props;

  const cls = classNames({
    'xy-btn-text': true,
    [`xy-btn-${variant}`]: variant,
    [`xy-btn-${size}`]: size,
    [className as string]: !!className,
  });
  return (
    <button className={cls} style={style} onClick={onClick} onBlur={onBlur} {...others}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
