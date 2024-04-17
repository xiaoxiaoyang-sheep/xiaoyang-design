# Progress 进度条

展示操作的当前进度。

<br />

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；
- 当需要显示一个操作完成的百分比时。

## 代码演示

### 进度条

标准的进度条。

```jsx
import React from 'react';
import { Progress } from 'xiaoyang-design';

export default () => {
  return (
    <>
      <Progress percent={30} />
      <Progress percent={50} status="active" style={{ marginTop: '15px' }} />
      <Progress percent={70} status="exception" style={{ marginTop: '15px' }} />
      <Progress percent={100} style={{ marginTop: '15px' }} />
      <Progress percent={50} showInfo={false} style={{ marginTop: '15px' }} />
    </>
  );
};
```

<br />

### 进度圈

圈形的进度。

```jsx
import React from 'react';
import { Progress } from 'xiaoyang-design';

export default () => {
  return (
    <>
      <Progress type="circle" percent={75} />
      <Progress percent={50} status="active" style={{ marginTop: '15px' }} />
      <Progress percent={70} status="exception" style={{ marginTop: '15px' }} />
      <Progress percent={100} style={{ marginTop: '15px' }} />
      <Progress percent={50} showInfo={false} style={{ marginTop: '15px' }} />
    </>
  );
};
```

<br />

### 动态展示

会动的进度条才是好进度条。

```jsx
import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Progress, Button, Space } from 'xiaoyang-design';

export default () => {
  const [percent, setPercent] = useState(0);

  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };

  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };

  return (
    <>
      <Progress percent={percent} />
      <Space style={{ marginTop: '10px' }}>
        <Button onClick={decline} icon={MinusOutlined} />
        <Button onClick={increase} icon={PlusOutlined} />
      </Space>
    </>
  );
};
```

<br />

## API

<API id="Progress" />
