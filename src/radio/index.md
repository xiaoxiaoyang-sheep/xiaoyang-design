# Radio

按钮用于开始一个即时操作。

<br />

## 代码演示

### 基本使用

最简单的用法。

```jsx
import React from 'react';
import { Radio } from 'xiaoyang-design';

export default () => <Radio onChange={(e) => console.log(e)}>Radio</Radio>;
```

<br/>

### 不可用

Radio 不可用。

```jsx
import React from 'react';
import { Radio } from 'xiaoyang-design';

export default () => <Radio disabled>Disabled Radio</Radio>;
```

<br/>

### 单选组合

一组互斥的 Radio 配合使用。

```jsx
import React from 'react';
import { Radio, RadioGroup, Space } from 'xiaoyang-design';

export default () => {
  return (
    <Space>
      <Radio.Group value="3">
        <Radio value="1">A</Radio>
        <Radio value="2">B</Radio>
        <Radio value="3">C</Radio>
      </Radio.Group>
      <Radio.Group value="3" disabled>
        <Radio value="1">A</Radio>
        <Radio value="2">B</Radio>
        <Radio value="3">C</Radio>
      </Radio.Group>
    </Space>
  );
};
```

<br />

## API

<API id="Radio" />
