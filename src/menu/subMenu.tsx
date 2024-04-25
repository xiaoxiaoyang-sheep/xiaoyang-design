import classNames from 'classnames';
import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FC,
} from 'react';
import MenuContext from './menuContext';

import './index.less';

export interface XYSubmenuProps {
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
   * @description 设置子菜单文本
   * @default -
   */
  title?: string;
  /**
   * @description 设置子菜单图标
   * @default null
   */
  icon?: ReactNode;
  /**
   * @description 设置子菜单id
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

export type XYSubmenuElement = FC<XYSubmenuProps>;

const Submenu: XYSubmenuElement = (props) => {
  const { className, children, style, icon, title, id, ...others } = props;

  const {
    level,
    mode,
    inlineIndent,
    selectedKeys,
    openedKeys,
    onOpenChange,
    onSubHeightChange,
    ...otherContext
  } = useContext(MenuContext);

  const isChildrenSelected: any = (node: ReactNode) => {
    return React.Children.toArray(node).some((item: any) => {
      if (!item?.props) {
        return false;
      }

      const { id, children } = item.props;
      if (Array.isArray(children) && children.length) {
        return isChildrenSelected(children);
      }
      return selectedKeys.indexOf(id) !== -1;
    });
  };

  const [wrapperHeight, setWrapperHeight] = useState(0);

  const isSelected = isChildrenSelected(children);
  const isOpened = openedKeys.indexOf(id) !== -1;

  useEffect(() => {
    if (wrapperHeight) {
      onSubHeightChange?.(wrapperHeight, isOpened);
    }
  }, [isOpened]);

  const subRef = useCallback((node: HTMLUListElement) => {
    if (node) {
      setWrapperHeight(node.getBoundingClientRect().height);
    }
  }, []);

  const cls = classNames({
    'xy-menu-submenu': true,
    [`xy-menu-submenu-${mode}`]: true,
    'xy-menu-submenu-open': isOpened,
    'xy-menu-submenu-selected': isSelected,
    [className as string]: !!className,
  });

  const subcls = classNames({
    'xy-menu': true,
    'xy-menu-sub': true,
    // 'xy-menu-hidden': !isOpened,
    [`xy-menu-${mode}`]: true,
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
    onOpenChange?.(id);
  };

  const handleHeightChange = (height: number, isOpen: boolean) => {
    if (isOpen) {
      setWrapperHeight(wrapperHeight + height);
    } else {
      setWrapperHeight(wrapperHeight - height);
    }
    onSubHeightChange?.(height, isOpen);
  };

  return (
    <MenuContext.Provider
      value={{
        inlineIndent,
        mode,
        level: level + 1,
        selectedKeys,
        openedKeys,
        onOpenChange,
        onSubHeightChange: handleHeightChange,
        ...otherContext,
      }}
    >
      <li className={cls} style={style} onClick={handleClick} {...others}>
        <div className="xy-menu-submenu-title" style={itemStyle}>
          {iconEle}
          <span className="xy-menu-title-content"> {title}</span>
          <i className="xy-menu-submenu-arrow" />
        </div>
        <div
          className="xy-menu-submenu-wrapper"
          style={{
            height: isOpened ? wrapperHeight : 0,
            opacity: isOpened ? 1 : 0,
            transition: 'all 0.3s ease-in-out',
            overflow: 'hidden',
          }}
        >
          <ul ref={subRef} className={subcls}>
            {children}
          </ul>
        </div>
      </li>
    </MenuContext.Provider>
  );
};

export default Submenu;
