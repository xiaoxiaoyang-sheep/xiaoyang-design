# Grid

按钮用于开始一个即时操作。

<br />

## 代码演示

```jsx
import { Row, Col } from 'xiaoyang-design';

export default () => {
  const style: React.CSSProperties = {
    height: '54px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '14px',
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <div style={{ ...style, background: '#1677ffbf' }}>col-24</div>
        </Col>
        <Col span={12}>
          <div style={{ ...style, background: '#1677ffbf' }}>col-12</div>
        </Col>
        <Col span={12}>
          <div style={{ ...style, background: '#1677ff' }}>col-12</div>
        </Col>

        <Col span={8}>
          <div style={{ ...style, background: '#1677ffbf' }}>col-8</div>
        </Col>
        <Col span={8}>
          <div style={{ ...style, background: '#1677ff' }}>col-8</div>
        </Col>
        <Col span={8}>
          <div style={{ ...style, background: '#1677ffbf' }}>col-8</div>
        </Col>

        <Col span={6}>
          <div style={{ ...style, background: '#1677ffbf' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ ...style, background: '#1677ff' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ ...style, background: '#1677ffbf' }}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={{ ...style, background: '#1677ff' }}>col-6</div>
        </Col>
      </Row>
    </>
  );
};
```

<br />

## API

<API id="Grid" />
