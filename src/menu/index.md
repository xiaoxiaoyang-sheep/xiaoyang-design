# Menu 导航菜单

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

<br />

## 代码演示

### 内嵌菜单

垂直菜单，子菜单内嵌在菜单区域。

```jsx
import React from 'react';
import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { Menu } from 'xiaoyang-design';

export default () => {
  const handleSelect = (id) => {
    console.log(id);
  };

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['four']}
      style={{ width: '240px' }}
      onSelect={handleSelect}
      theme="light"
    >
      <Menu.Item id="one" icon={<MailOutlined />}>
        Option One
      </Menu.Item>
      <Menu.Submenu
        id="submenu1"
        icon={<SettingOutlined />}
        title="Navigation One"
      >
        <Menu.Item id="two" icon={<MailOutlined />}>
          Option Two
        </Menu.Item>
        <Menu.Item id="three" icon={<MailOutlined />}>
          Option Three
        </Menu.Item>
        <Menu.Submenu
          id="submenu2"
          icon={<SettingOutlined />}
          title="Navigation Two"
        >
          <Menu.Item id="four" icon={<MailOutlined />}>
            Option Four
          </Menu.Item>
          <Menu.Item id="five" icon={<MailOutlined />}>
            Option Five
          </Menu.Item>
          <Menu.Submenu
            id="submenu3"
            icon={<SettingOutlined />}
            title="Navigation Three"
          >
            <Menu.Item id="six" icon={<MailOutlined />}>
              Option Six
            </Menu.Item>
            <Menu.Item id="seven" icon={<MailOutlined />}>
              Option Seven
            </Menu.Item>
          </Menu.Submenu>
        </Menu.Submenu>
      </Menu.Submenu>
    </Menu>
  );
};
```

<br/>

### 主题

内建了两套主题 light 和 dark，默认 light。

```jsx
import React, { useState } from 'react';
import {
  MailOutlined,
  SettingOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { Menu, Switch } from 'xiaoyang-design';

export default () => {
  const [theme, setTheme] = useState('dark');

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <>
      <Switch
        checkedChildren="Dark"
        unCheckedChildren="Light"
        defaultChecked
        onChange={changeTheme}
      />
      <Menu
        mode="inline"
        defaultSelectedKeys={['six']}
        defaultOpenedKeys={['submenu1']}
        style={{ width: '240px' }}
        theme={theme}
        style={{ marginTop: '20px', width: '240px' }}
      >
        <Menu.Item id="one" icon={<MailOutlined />}>
          Option One
        </Menu.Item>
        <Menu.Submenu
          id="submenu1"
          icon={<SettingOutlined />}
          title="Navigation One"
        >
          <Menu.Item id="two" icon={<MailOutlined />}>
            Option Two
          </Menu.Item>
          <Menu.Item id="three" icon={<MailOutlined />}>
            Option Three
          </Menu.Item>
          <Menu.Submenu
            id="submenu2"
            icon={<SettingOutlined />}
            title="Navigation Two"
          >
            <Menu.Item id="four" icon={<MailOutlined />}>
              Option Four
            </Menu.Item>
            <Menu.Item id="five" icon={<MailOutlined />}>
              Option Five
            </Menu.Item>
            <Menu.Submenu
              id="submenu3"
              icon={<SettingOutlined />}
              title="Navigation Three"
            >
              <Menu.Item id="six" icon={<MailOutlined />}>
                Option Six
              </Menu.Item>
              <Menu.Item id="seven" icon={<MailOutlined />}>
                Option Seven
              </Menu.Item>
            </Menu.Submenu>
          </Menu.Submenu>
        </Menu.Submenu>
      </Menu>
    </>
  );
};
```

<br />

## API

<API id="Menu" />
