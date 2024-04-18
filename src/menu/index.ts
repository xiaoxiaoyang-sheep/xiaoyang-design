import type {
  XYMenuElement as XYInternalMenuElemen,
  XYMenuProps,
} from './menu';

import Item from './item';
import InternalMenu from './menu';
import Submenu from './subMenu';

type MenuType = typeof InternalMenu;
interface XYMenuElement extends XYInternalMenuElemen {
  Item: typeof Item;
  Submenu: typeof Submenu;
}

const Menu = InternalMenu as XYMenuElement;
Menu.Item = Item;
Menu.Submenu = Submenu;

export type { XYMenuItemElement, XYMenuItemProps } from './item';
export type { XYSubmenuElement, XYSubmenuProps } from './subMenu';
export { Menu };
export type { XYMenuElement, XYMenuProps };
