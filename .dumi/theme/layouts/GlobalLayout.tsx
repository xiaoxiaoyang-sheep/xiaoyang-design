import { ConfigProvider } from 'antd';
import { useOutlet, usePrefersColor } from 'dumi';
import React, { useEffect } from 'react';
import { changeTheme } from '../../../src/index';

const GlobalLayout: React.FC = ({ children }: any) => {
  const outlet = useOutlet();
  // color 为当前应用的主题色，dark or light
  const [color] = usePrefersColor();

  useEffect(() => {
    switch (color) {
      case 'light':
        changeTheme('DEFAULT_THEME');
        break;
      case 'dark':
        changeTheme('DARK_THEME');
        break;
      default:
        break;
    }
  }, [color]);

  return <ConfigProvider>{outlet}</ConfigProvider>;
};

export default GlobalLayout;
