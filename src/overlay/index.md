# Overlay

<br />

## 代码演示

### 基本

基本的弹框。

```jsx
import React, { useState } from 'react';
import { Overlay, Button } from 'xiaoyang-design';

export default () => {
  const [visable, setVisable] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setVisable(true)}
      >
        click
      </Button>
      <Overlay visable={visable} onVisableChange={(v) => setVisable(v)}>
        <div
          style={{
            width: 200,
            height: 200,
            border: '1px solid black',
            position: 'absolute',
            top: 200,
            left: 200,
          }}
        >
          overlay
        </div>
      </Overlay>
    </>
  );
};
```

<br />

### 定位

弹框的位置计算。

```jsx
import React, { useState, useRef } from 'react';
import { Overlay, Button } from 'xiaoyang-design';

export default () => {
  const [visable, setVisable] = useState(false);

  const buttonRef = useRef(null);

  return (
    <>
      <Button
        ref={buttonRef}
        variant="contained"
        color="primary"
        onClick={() => setVisable(true)}
      >
        click
      </Button>
      <Overlay
        visable={visable}
        onVisableChange={(v) => setVisable(v)}
        target={() => buttonRef.current}
      >
        <div
          style={{
            width: 200,
            height: 200,
            border: '1px solid black',
          }}
        >
          overlay
        </div>
      </Overlay>
    </>
  );
};
```

### 多种定位

自定义弹框的位置(十二种)。

```jsx
import React, { useState, useRef } from 'react';
import { Overlay, Button, Space } from 'xiaoyang-design';

export default () => {
  const [visable1, setVisable1] = useState(false);
  const [visable2, setVisable2] = useState(false);
  const [visable3, setVisable3] = useState(false);
  const [visable4, setVisable4] = useState(false);
  const [visable5, setVisable5] = useState(false);
  const [visable6, setVisable6] = useState(false);

  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const buttonRef3 = useRef(null);
  const buttonRef4 = useRef(null);
  const buttonRef5 = useRef(null);
  const buttonRef6 = useRef(null);

  return (
    <Space>
      {/* LeftTop */}
      <Button
        ref={buttonRef1}
        variant="contained"
        color="primary"
        onClick={() => setVisable1(true)}
      >
        LeftTop
      </Button>
      <Overlay
        visable={visable1}
        placement="topLeft"
        onVisableChange={(v) => setVisable1(v)}
        target={() => buttonRef1.current}
      >
        <div
          style={{
            width: 200,
            height: 200,
            border: '1px solid black',
          }}
        >
          overlay
        </div>
      </Overlay>

      {/* TopCenter */}
      <Button
        ref={buttonRef2}
        variant="contained"
        color="primary"
        onClick={() => setVisable2(true)}
      >
        Top
      </Button>
      <Overlay
        visable={visable2}
        placement="top"
        onVisableChange={(v) => setVisable2(v)}
        target={() => buttonRef2.current}
      >
        <div
          style={{
            width: 200,
            height: 200,
            border: '1px solid black',
          }}
        >
          overlay
        </div>
      </Overlay>

      {/* TopRight */}
      <Button
        ref={buttonRef3}
        variant="contained"
        color="primary"
        onClick={() => setVisable3(true)}
      >
        TopRight
      </Button>
      <Overlay
        visable={visable3}
        placement="topRight"
        onVisableChange={(v) => setVisable3(v)}
        target={() => buttonRef3.current}
      >
        <div
          style={{
            width: 200,
            height: 200,
            border: '1px solid black',
          }}
        >
          overlay
        </div>
      </Overlay>

      {/* LeftTop */}
      <Button
        ref={buttonRef4}
        variant="contained"
        color="primary"
        onClick={() => setVisable4(true)}
      >
        LeftTop
      </Button>
      <Overlay
        visable={visable4}
        placement="leftTop"
        onVisableChange={(v) => setVisable4(v)}
        target={() => buttonRef4.current}
      >
        <div
          style={{
            width: 200,
            height: 200,
            border: '1px solid black',
          }}
        >
          overlay
        </div>
      </Overlay>

      {/* LeftCenter */}
      <Button
        ref={buttonRef5}
        variant="contained"
        color="primary"
        onClick={() => setVisable5(true)}
      >
        Left
      </Button>
      <Overlay
        visable={visable5}
        placement="left"
        onVisableChange={(v) => setVisable5(v)}
        target={() => buttonRef5.current}
      >
        <div
          style={{
            width: 200,
            height: 200,
            border: '1px solid black',
          }}
        >
          overlay
        </div>
      </Overlay>

      {/* LeftBottom */}
      <Button
        ref={buttonRef6}
        variant="contained"
        color="primary"
        onClick={() => setVisable6(true)}
      >
        LeftBottom
      </Button>
      <Overlay
        visable={visable6}
        placement="leftBottom"
        onVisableChange={(v) => setVisable6(v)}
        target={() => buttonRef6.current}
      >
        <div
          style={{
            width: 200,
            height: 200,
            border: '1px solid black',
          }}
        >
          overlay
        </div>
      </Overlay>
    </Space>
  );
};
```

<br />

<br />

## API

<API id="Overlay" />
