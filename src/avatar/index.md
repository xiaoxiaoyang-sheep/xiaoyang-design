# Avatar

用来代表用户或事物，支持图片、图标或字符展示。

<br />

## 代码演示

### 基本

头像有三种尺寸，两种形状可选。

```jsx
import { UserOutlined } from '@ant-design/icons';
import { Button, Space, Avatar } from 'xiaoyang-design';

export default () => {
  return (
    <Space>
      <Space>
        <Avatar size={64} icon={<UserOutlined />} />
        <Avatar size="large" icon={<UserOutlined />} />
        <Avatar icon={<UserOutlined />} />
        <Avatar size="small" icon={<UserOutlined />} />
        <Avatar size={14} icon={<UserOutlined />} />
      </Space>
      <Space>
        <Avatar shape="square" size={64} icon={<UserOutlined />} />
        <Avatar shape="square" size="large" icon={<UserOutlined />} />
        <Avatar shape="square" icon={<UserOutlined />} />
        <Avatar shape="square" size="small" icon={<UserOutlined />} />
        <Avatar shape="square" size={14} icon={<UserOutlined />} />
      </Space>
    </Space>
  );
};
```

<br />

### 类型

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

```jsx
import { UserOutlined } from '@ant-design/icons';
import { Button, Space, Avatar } from 'xiaoyang-design';

const url =
  'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

export default () => {
  return (
    <Space>
      <Avatar icon={<UserOutlined />} />
      <Avatar>U</Avatar>
      <Avatar size={40}>USER</Avatar>
      <Avatar src={url} />
      <Avatar src={<img src={url} alt="avatar" />} />
      <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
        U
      </Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    </Space>
  );
};
```

<br/>

### 自动调整字符大小

对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。也可使用 gap 来设置字符距离左右两侧边界单位像素。

```jsx
import React, { useState } from 'react';
import { Avatar, Button, Space } from 'xiaoyang-design';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const GapList = [4, 3, 2, 1];

export default () => {
  const [user, setUser] = useState(UserList[0]);
  const [color, setColor] = useState(ColorList[0]);
  const [gap, setGap] = useState(GapList[0]);

  const changeUser = () => {
    const index = UserList.indexOf(user);
    setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
    setColor(
      index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0],
    );
  };

  const changeGap = () => {
    const index = GapList.indexOf(gap);
    setGap(index < GapList.length - 1 ? GapList[index + 1] : GapList[0]);
  };

  return (
    <Space>
      <Avatar
        style={{ backgroundColor: color, verticalAlign: 'middle' }}
        size="large"
        gap={gap}
      >
        {user}
      </Avatar>
      <Button size="small" variant="outlined" onClick={changeUser}>
        ChangeUser
      </Button>
      <Button size="small" variant="outlined" onClick={changeGap}>
        changeGap
      </Button>
    </Space>
  );
};
```

## API

<API id="Avatar" />
