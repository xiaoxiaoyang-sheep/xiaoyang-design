import { createContext } from 'react';

export type MenuMode = 'vertical' | 'horizontal' | 'inline';

export interface MenuContextProps {
  mode: MenuMode;
  inlineIndent: number;
  level: number;
  selectedKeys: Array<string>;
  openedKeys: Array<string>;
  onSelect?: (key: string) => void;
  onOpenChange?: (key: string) => void;
  onSubHeightChange?: (height: number, isOpen: boolean) => void;
}

export default createContext<MenuContextProps>({
  mode: 'vertical',
  inlineIndent: 24,
  level: 0,
  selectedKeys: [],
  openedKeys: [],
});
