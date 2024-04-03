# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

<br />

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

<br />

## 代码演示

### 简单使用

简单使用

```jsx
import React, { useState } from 'react';
import { Input, Space } from 'xiaoyang-design';

export default () => {
  const [value, setValue] = useState('controlled');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Space>
      <Input placeholder="Basic usage" />
      <Input
        placeholder="controlled
"
        value={value}
        onChange={handleChange}
      />
    </Space>
  );
};
```

<br />

### 三种大小

我们为 Input 输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px。

```jsx
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input, Space } from 'xiaoyang-design';

export default () => {
  return (
    <Space>
      <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
      <Input placeholder="default size" prefix={<UserOutlined />} />
      <Input size="small" placeholder="small size" prefix={<UserOutlined />} />
    </Space>
  );
};
```

<br/>

### 带字数提示

展示字数提示。

```jsx
import React, { useState } from 'react';
import { Input, Space } from 'xiaoyang-design';

export default () => {
  const [value, setValue] = useState('controlled');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Space>
      <Input maxLength={20} />
    </Space>
  );
};
```

## API

<API id="Input" />
