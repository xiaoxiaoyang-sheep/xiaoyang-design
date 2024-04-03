import classNames from 'classnames';
import React, { ReactNode, type FC } from 'react';

import './index.less';

export interface XYSpaceProps {
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
}

export type XYSpaceElement = FC<XYSpaceProps>;

const Space: XYSpaceElement = (props) => {
  const { children, style, ...others } = props;

  const cls = classNames({
    'xy-space': true,
  });
  return (
    <div className={cls} style={style} {...others}>
      {children}
    </div>
  );
};

export default Space;
