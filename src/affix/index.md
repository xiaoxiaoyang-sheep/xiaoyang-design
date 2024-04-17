# Affix 固钉

将页面元素钉在可视范围。

<br />

## 何时使用

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

页面可视范围过小时，慎用此功能以免出现遮挡页面内容的情况。

<br />

## 代码演示

### 基本

最简单的用法。

```jsx
import React, { useState } from 'react';
import { Button, Space, Affix } from 'xiaoyang-design';

export default () => {
  const [top, setTop] = React.useState(100);
  const [bottom, setBottom] = React.useState(100);

  return (
    <>
      <Space>
        <Affix offsetTop={top}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setTop(top + 10)}
          >
            Affix top
          </Button>
        </Affix>
      </Space>
      <Space style={{ marginTop: '20px' }}>
        <Affix offsetBottom={bottom}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setBottom(bottom + 10)}
          >
            Affix bottom
          </Button>
        </Affix>
      </Space>
    </>
  );
};
```

<br />

### 固定状态改变的回调

可以获得是否固定的状态。

```jsx
import React from 'react';
import { Button, Affix } from 'xiaoyang-design';

export default () => {
  return (
    <Affix offsetTop={120} onChange={(affix) => console.log(affix)}>
      <Button variant="contained" color="default">
        120px to affix top
      </Button>
    </Affix>
  );
};
```

<br />

## API

<API id="Affix" />
