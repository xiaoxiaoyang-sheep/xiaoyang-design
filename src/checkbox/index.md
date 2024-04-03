# Checkbox 多选框

收集用户的多项选择。

<br />

## 何时使用

在一组可选项中进行多项选择时；
单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

<br />

## 代码演示

### 简单用法

简单的 checkbox。

```jsx
import React from 'react';
import { Checkbox } from 'xiaoyang-design';

export default () => (
  <Checkbox checked onChange={(e) => console.log(e)}>
    Checkbox
  </Checkbox>
);
```

<br/>

### 不可用

checkbox 不可用。

```jsx
import React from 'react';
import { Checkbox, Space } from 'xiaoyang-design';

export default () => {
  return (
    <Space>
      <Checkbox disabled></Checkbox>
      <Checkbox checked disabled></Checkbox>
    </Space>
  );
};
```

<br/>

### 受控的 Checkbox

联动 checkbox。

```jsx
import React, { useState } from 'react';
import { Checkbox, Button, Space } from 'xiaoyang-design';

export default () => {
  const [disabled, setDisabled] = useState(true);
  const [checked, setChecked] = useState(false);

  const handleDisable = () => {
    setDisabled(!disabled);
  };

  const handleCheck = () => {
    setChecked(!checked);
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <Checkbox disabled={disabled} checked={checked} onChange={handleChange}>
        Unchecked disabled
      </Checkbox>
      <Space style={{ marginTop: '20px' }}>
        <Button variant="contained" color="primary" onClick={handleCheck}>
          {checked ? 'Uncheck' : 'Check'}
        </Button>
        <Button variant="contained" color="primary" onClick={handleDisable}>
          {disabled ? 'Enable' : 'Disable'}
        </Button>
      </Space>
    </>
  );
};
```

<br />

### Checkbox 组

方便的从数组生成 Checkbox 组。

```jsx
import React from 'react';
import { Checkbox, Space } from 'xiaoyang-design';

export default () => {
  return (
    <>
      <Space>
        <Checkbox.Group
          defaultValue={['0', '1', '2']}
          onChange={(e) => console.log(e)}
        >
          <Checkbox value={'0'}>Apple</Checkbox>
          <Checkbox value={'1'}>Pear</Checkbox>
          <Checkbox value={'2'}>Orange</Checkbox>
        </Checkbox.Group>
      </Space>
      <Space style={{ marginTop: '20px' }}>
        <Checkbox.Group
          defaultValue={['0', '1', '2']}
          onChange={(e) => console.log(e)}
        >
          <Checkbox value={'0'}>Apple</Checkbox>
          <Checkbox value={'1'}>Pear</Checkbox>
          <Checkbox value={'2'}>Orange</Checkbox>
        </Checkbox.Group>
      </Space>
      <Space style={{ marginTop: '20px' }}>
        <Checkbox.Group
          defaultValue={['1', '2']}
          onChange={(e) => console.log(e)}
          disabled
        >
          <Checkbox value={'0'}>Apple</Checkbox>
          <Checkbox value={'1'}>Pear</Checkbox>
          <Checkbox value={'2'}>Orange</Checkbox>
        </Checkbox.Group>
      </Space>
    </>
  );
};
```

<br />

## API

<API id="Checkbox" />
