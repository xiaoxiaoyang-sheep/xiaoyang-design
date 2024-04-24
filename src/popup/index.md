# Popup 气泡卡片

气泡弹出框

<br />

## 代码演示

### 基本

基本操作

```jsx
import React, { useState } from 'react';
import { Popup, Button } from 'xiaoyang-design';

export default () => {
  const [visable, setVisable] = useState(false);

  const TopLeft = <Button variant="outlined">topLeft</Button>;
  const Top = <Button variant="outlined">top</Button>;
  const TopRight = <Button variant="outlined">topRight</Button>;

  const LeftTop = <Button variant="outlined">leftTop</Button>;
  const Left = <Button variant="outlined">left</Button>;
  const LeftBottom = <Button variant="outlined">leftBottom</Button>;

  const BottomLeft = <Button variant="outlined">bottomLeft</Button>;
  const Bottom = <Button variant="outlined">bottom</Button>;
  const BottomRight = <Button variant="outlined">bottomRight</Button>;

  const RightTop = <Button variant="outlined">rightTop</Button>;
  const Right = <Button variant="outlined">right</Button>;
  const RightBottom = <Button variant="outlined">rightBottom</Button>;

  return (
    <>
      <div style={{ marginLeft: '80px', width: '300px' }}>
        <Popup trigger={TopLeft} placement="topLeft">
          topLeft
        </Popup>
        <Popup trigger={Top} placement="top">
          topLeft
        </Popup>
        <Popup trigger={TopRight} placement="topRight">
          topLeft
        </Popup>
      </div>
      <div style={{ display: 'flex' }}>
        <div
          style={{ display: 'flex', flexDirection: 'column', width: '80px' }}
        >
          <Popup trigger={LeftTop} placement="leftTop">
            leftTop
          </Popup>
          <Popup trigger={Left} placement="left">
            left
          </Popup>
          <Popup trigger={LeftBottom} placement="leftBottom">
            leftBottom
          </Popup>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '210px',
          }}
        >
          <Popup trigger={RightTop} placement="rightTop">
            rightTop
          </Popup>
          <Popup trigger={Right} placement="right">
            right
          </Popup>
          <Popup trigger={RightBottom} placement="rightBottom">
            rightBottom
          </Popup>
        </div>
      </div>
      <div style={{ marginLeft: '80px', width: '300px' }}>
        <Popup trigger={BottomLeft} placement="bottomLeft">
          bottomLeft
        </Popup>
        <Popup trigger={Bottom} placement="bottom">
          bottom
        </Popup>
        <Popup trigger={BottomRight} placement="bottomRight">
          bottomRight
        </Popup>
      </div>
    </>
  );
};
```

<br />

<br />

## API

<API id="Popup" />
