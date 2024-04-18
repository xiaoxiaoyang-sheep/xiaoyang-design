import classNames from 'classnames';
import React, { ReactNode, useContext, type FC } from 'react';
import MenuContext from './menuContext';

import './index.less';

export interface XYMenuItemProps {
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
   * @description 设置菜单栏图标
   * @default null
   */
  icon?: ReactNode;
  /**
   * @description 设置菜单栏id
   * @default -
   */
  id: string;
  /**
   * @description 设置菜单栏样式
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
}

export type XYMenuItemElement = FC<XYMenuItemProps>;

const Item: XYMenuItemElement = (props) => {
  const { className, children, style, icon, id, ...others } = props;

  const { level, mode, inlineIndent, selectedKeys, onSelect } =
    useContext(MenuContext);

  const selected = selectedKeys.indexOf(id) !== -1;

  const cls = classNames({
    'xy-menu-item': true,
    'xy-menu-item-selected': selected,
    [className as string]: !!className,
  });

  const iconEle = React.isValidElement(icon)
    ? React.cloneElement(icon as any, {
        className: 'xy-menu-item-icon',
      })
    : null;

  const itemStyle: React.CSSProperties = {
    paddingLeft: level * inlineIndent,
    ...style,
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
    onSelect?.(id);
  };

  return (
    <li className={cls} style={itemStyle} onClick={handleClick} {...others}>
      {iconEle}
      <span className="xy-menu-title-content"> {children}</span>
    </li>
  );
};

export default Item;
