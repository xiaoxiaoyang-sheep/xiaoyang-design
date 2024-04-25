import classNames from 'classnames';
import React, { ReactNode, type FC } from 'react';

import './index.less';

export interface XYDropdownProps {
  /**
   * @description 自定义样式类名
   * @default -
   */
  className?: string;
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
   * @description 设置按钮点击事件
   * @default null
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export type XYDropdownElement = FC<XYDropdownProps>;

const Dropdown: XYDropdownElement = (props) => {
  const { className, children, style, onClick, ...others } = props;

  const cls = classNames({
    'xy-dropdown': true,
    [className as string]: !!className,
  });
  return (
    <div className={cls} style={style} onClick={onClick} {...others}>
      <span>{children}</span>
    </div>
  );
};

export default Dropdown;
