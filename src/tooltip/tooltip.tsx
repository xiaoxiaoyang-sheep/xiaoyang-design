import classNames from 'classnames';
import React, { ReactElement, type FC } from 'react';
import { PlacementType, Popup } from '..';

import './index.less';

export interface XYTooltipProps {
  /**
   * @description 自定义样式类名
   * @default -
   */
  className?: string;
  /**
   * @description 设置内部节点
   * @default null
   */
  children: ReactElement;
  /**
   * @description 设置样式
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
  /**
   * @description 设置文字提示名称
   * @default null
   */
  title: ReactElement | string;
  /**
   * @description 设置文字提示位置
   * @default top
   * @type PlacementType
   */
  placement: PlacementType;
  /**
   * @description 设置箭头位置
   * @default false
   */
  arrowPointAtCenter?: boolean;
}

export type XYTooltipElement = FC<XYTooltipProps>;

const Tooltip: XYTooltipElement = (props) => {
  const {
    className,
    children,
    style,
    title,
    arrowPointAtCenter = false,
    placement = 'top',
    ...others
  } = props;

  const cls = classNames({
    'xy-tooltip': true,
    [`xy-tooltip-placement-${placement}`]: placement,
    [className as string]: !!className,
  });

  const handleBeforePositon = (position: any, { target }: any) => {
    if (!arrowPointAtCenter) return position;
    return {
      ...position,
      left: position.left + target.width / 2 - 24,
    };
  };

  const overlayContent = (
    <div className={cls}>
      <div className="xy-tooltip-content">
        <div className="xy-tooltip-arrow">
          <span className="xy-tooltip-arrow-content"></span>
        </div>
        <div className="xy-tooltip-inner">{title}</div>
      </div>
    </div>
  );

  return (
    <Popup
      trigger={children}
      triggerType="hover"
      style={style}
      placement={placement}
      onBeforePosition={handleBeforePositon}
      {...others}
    >
      {overlayContent}
    </Popup>
  );
};

export default Tooltip;
