# Switch 开关

使用开关切换两种状态之间。

<br />

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；
- 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

<br />

## 代码演示

### 基本

最简单的用法。

```jsx
import React from 'react';
import { Switch } from 'xiaoyang-design';

export default () => {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return <Switch defaultChecked onChange={onChange} />;
};
```

<br />

### 不可用

Switch 失效状态。

```jsx
import React, { useState } from 'react';
import { Switch, Space, Button } from 'xiaoyang-design';

export default () => {
  const [disabled, setDisabled] = useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <Space>
      <Switch disabled={disabled} defaultChecked />
      <Button variant="contained" color="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </Space>
  );
};
```

<br />

### 文字和图标

带有文字和图标。

```jsx
import React, { useState } from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space } from 'xiaoyang-design';

export default () => {
  return (
    <Space>
      <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked />
      <Switch checkedChildren="1" unCheckedChildren="0" />
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked
      />
    </Space>
  );
};
```

<br />

### 两种大小

size="small" 表示小号开关。

```jsx
import React, { useState } from 'react';
import { Switch, Space } from 'xiaoyang-design';

export default () => {
  return (
    <Space>
      <Switch defaultChecked />
      <Switch size="small" defaultChecked />
    </Space>
  );
};
```

<br />

### 加载中

标识开关操作仍在执行中。

```jsx
import React, { useState } from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch, Space } from 'xiaoyang-design';

export default () => {
  return (
    <Space>
      <Switch loading defaultChecked />
      <Switch size="small" loading />
    </Space>
  );
};
```

<br />

## API

<API id="Switch" />
