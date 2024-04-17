import classNames from 'classnames';
import React, { ReactNode, type FC } from 'react';

import './index.less';

export interface XYProgressProps {
  /**
   * @description 自定义样式类名
   * @default -
   */
  className?: string;
  /**
   * @description 设置进度条进度
   * @default 0
   */
  percent?: number;
  /**
   * @description 设置进度条大小
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * @description 设置进度条类型
   * @default line
   */
  type?: 'line' | 'circle';
  /**
   * @description 设置进度条大小
   * @default medium
   */
  status?: 'active' | 'exception';
  /**
   * @description 设置内部节点
   * @default null
   */
  children?: ReactNode;
  /**
   * @description 设置进度条样式
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
  /**
   * @description 设置进度条点击事件
   * @default null
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export type XYProgressElement = FC<XYProgressProps>;

const Progress: XYProgressElement = (props) => {
  const {
    className,
    children,
    percent = 0,
    type,
    status,
    style,
    onClick,
    ...others
  } = props;

  const cls = classNames({
    'xy-progress-active': true,
    'xy-progress-exception': status === 'exception',
    [className as string]: !!className,
  });

  if (type === 'circle') {
    return <div className="xy-progress-circle"></div>;
  }

  return (
    <div className="xy-progress" style={style}>
      <div className="xy-progress-background">
        <div className={cls} style={{ width: `${percent}%` }} />
      </div>
      <div className=".ant-progress-text">{percent}%</div>
    </div>
  );
};

export default Progress;
