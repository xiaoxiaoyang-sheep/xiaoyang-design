import classNames from 'classnames';
import React, { ReactNode, type FC } from 'react';

import './index.less';

export interface XYColProps {
  /**
   * @description 自定义样式类名
   * @default ""
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
   * @description 栅格占位格数，为 0 时相当于 display: none
   * @default -
   */
  span?: number;
}

export type XYColElement = FC<XYColProps>;

const Row: XYColElement = (props) => {
  const { children, style, span, ...others } = props;

  const cls = classNames({
    'xy-col': true,
  });

  const _style: React.CSSProperties = {
    ...style,
    flex: span ? `0 0 ${(span / 24) * 100}%` : 'unset',
  };

  return (
    <div className={cls} style={_style} {...others}>
      {children}
    </div>
  );
};

export default Row;
