# Tooltip 文字提示

简单的文字提示气泡框。

<br />

## 何时使用

鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

可用来代替系统默认的 title 提示，提供一个 按钮/文字/操作 的文案解释。

## 代码演示

### 基本

最简单的用法。

```jsx
import React from 'react';
import { Tooltip } from 'xiaoyang-design';

export default () => {
  return (
    <Tooltip title="prompt text">
      <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
  );
};
```

<br />

### 位置

位置有 12 个方向。

```jsx
import React from 'react';
import { Tooltip, Button } from 'xiaoyang-design';

const text = <span>prompt text</span>;

const buttonWidth = 80;

export default () => {
  return (
    <div className="demo">
      <div style={{ marginInlineStart: buttonWidth, whiteSpace: 'nowrap' }}>
        <Tooltip placement="topLeft" title={text}>
          <Button>TL</Button>
        </Tooltip>
        <Tooltip placement="top" title={text}>
          <Button>Top</Button>
        </Tooltip>
        <Tooltip placement="topRight" title={text}>
          <Button>TR</Button>
        </Tooltip>
      </div>
      <div style={{ width: buttonWidth, float: 'inline-start' }}>
        <Tooltip placement="leftTop" title={text}>
          <Button>LT</Button>
        </Tooltip>
        <Tooltip placement="left" title={text}>
          <Button>Left</Button>
        </Tooltip>
        <Tooltip placement="leftBottom" title={text}>
          <Button>LB</Button>
        </Tooltip>
      </div>
      <div
        style={{ width: buttonWidth, marginInlineStart: buttonWidth * 4 + 24 }}
      >
        <Tooltip placement="rightTop" title={text}>
          <Button>RT</Button>
        </Tooltip>
        <Tooltip placement="right" title={text}>
          <Button>Right</Button>
        </Tooltip>
        <Tooltip placement="rightBottom" title={text}>
          <Button>RB</Button>
        </Tooltip>
      </div>
      <div
        style={{
          marginInlineStart: buttonWidth,
          clear: 'both',
          whiteSpace: 'nowrap',
        }}
      >
        <Tooltip placement="bottomLeft" title={text}>
          <Button>BL</Button>
        </Tooltip>
        <Tooltip placement="bottom" title={text}>
          <Button>Bottom</Button>
        </Tooltip>
        <Tooltip placement="bottomRight" title={text}>
          <Button>BR</Button>
        </Tooltip>
      </div>
    </div>
  );
};
```

<br />

### 箭头展示

支持显示、隐藏以及将箭头保持居中定位。

```jsx
import React from 'react';
import { Tooltip, Button, Space } from 'xiaoyang-design';

export default () => {
  return (
    <>
      <Space>
        <Tooltip title="prompt text" placement="topLeft">
          <Button variant="outlined">Align edge / 边缘对齐.</Button>
        </Tooltip>
      </Space>
      <Space style={{ marginTop: '20px' }}>
        <Tooltip title="prompt text" placement="topLeft" arrowPointAtCenter>
          <Button variant="outlined">
            Arrow points to center / 箭头指向中心.
          </Button>
        </Tooltip>
      </Space>
    </>
  );
};
```

<br />

## API

<API id="Tooltip" />
