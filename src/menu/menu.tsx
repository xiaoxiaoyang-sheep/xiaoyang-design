import classNames from 'classnames';
import React, { ReactNode, useEffect, useState, type FC } from 'react';
import type { MenuMode } from './menuContext';
import MenuContext from './menuContext';

import './index.less';

export interface XYMenuProps {
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
   * @description 设置菜单样式
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
  /**
   * @description 设置菜单模式
   * @default vertical
   * @type MenuMode
   */
  mode?: MenuMode;
  /**
   * @description 设置菜单缩紧
   * @default 24
   */
  inlineIndent?: number;
  /**
   * @description 设置菜单主题
   * @default light
   */
  theme?: 'light' | 'dark';
  /**
   * @description 设置菜单是否为多选
   * @default false
   */
  multiple?: boolean;
  /**
   * @description 设置菜单默认选择项
   * @default -
   */
  defaultSelectedKeys?: Array<string>;
  /**
   * @description 设置菜单打开项
   * @default -
   */
  openedKeys?: Array<string>;
  /**
   * @description 设置菜单默认打开项
   * @default -
   */
  defaultOpenedKeys?: Array<string>;
  /**
   * @description 设置菜单选择项
   * @default -
   */
  selectedKeys?: Array<string>;
  /**
   * @description 设置菜单选择回调
   * @default null
   */
  onSelect?: (key: string) => void;
}

export type XYMenuElement = FC<XYMenuProps>;

const Menu: XYMenuElement = (props) => {
  const {
    className,
    children,
    style,
    mode = 'vertical',
    theme = 'light',
    multiple = false,
    selectedKeys: pselectedKeys,
    defaultSelectedKeys,
    openedKeys: popenedKeys,
    defaultOpenedKeys,
    inlineIndent = 24,
    onSelect,
    ...others
  } = props;

  const [selectedKeys, setSelectedKeys] = useState<Array<string>>(
    pselectedKeys || defaultSelectedKeys || [],
  );
  const [openedKeys, setOpenedKeys] = useState<Array<string>>(
    popenedKeys || defaultOpenedKeys || [],
  );

  useEffect(() => {
    if (pselectedKeys) {
      setSelectedKeys(pselectedKeys);
    }
  }, [pselectedKeys]);

  useEffect(() => {
    if (popenedKeys) {
      setOpenedKeys(popenedKeys);
    }
  }, [popenedKeys]);

  const cls = classNames({
    'xy-menu': true,
    'xy-menu-root': true,
    [`xy-menu-${mode}`]: true,
    [`xy-menu-${theme}`]: true,
    [className as string]: !!className,
  });

  const handleOpen = (key: string) => {
    const newOpenedKeys = [...openedKeys];
    if (openedKeys.indexOf(key) === -1) {
      newOpenedKeys.push(key);
    } else {
      newOpenedKeys.splice(openedKeys.indexOf(key), 1);
    }
    setOpenedKeys(newOpenedKeys);
  };

  const handleSelect = (key: string) => {
    if (multiple) {
      const newSelectedKeys = [...selectedKeys];
      if (selectedKeys.indexOf(key) === -1) {
        newSelectedKeys.push(key);
      } else {
        newSelectedKeys.splice(selectedKeys.indexOf(key), 1);
      }
      setSelectedKeys(newSelectedKeys);
    } else {
      setSelectedKeys([key]);
      onSelect?.(key);
    }
  };

  return (
    <MenuContext.Provider
      value={{
        inlineIndent,
        mode,
        level: 1,
        selectedKeys,
        openedKeys,
        onSelect: handleSelect,
        onOpenChange: handleOpen,
      }}
    >
      <ul className={cls} style={style} {...others}>
        {children}
      </ul>
    </MenuContext.Provider>
  );
};

export default Menu;
