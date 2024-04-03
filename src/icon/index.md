# Icon

This is an example component1.

<br/>

## 代码演示

### Color 颜色

```jsx
import { HomeIcon, Space } from 'xiaoyang-design';

export default () => {
  return (
    <Space>
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon style={{ fill: 'green' }} />
    </Space>
  );
};
```

<br/>

### Size 大小

```jsx
import { HomeIcon, Space } from 'xiaoyang-design';

export default () => {
  return (
    <Space>
      <HomeIcon size={16} />
      <HomeIcon />
      <HomeIcon size={30} />
      <HomeIcon style={{ width: 40, height: 40 }} />
    </Space>
  );
};
```

<br/>

### 自定义图标

利用 Icon 组件封装一个可复用的自定义图标。可以通过 component 属性传入一个组件来渲染最终的图标，以满足特定的需求。

```jsx
import { Icon, Space } from 'xiaoyang-design';

const copy = () => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="636"
  >
    <path
      d="M672 832 224 832c-52.928 0-96-43.072-96-96L128 160c0-52.928 43.072-96 96-96l448 0c52.928 0 96 43.072 96 96l0 576C768 788.928 724.928 832 672 832zM224 128C206.368 128 192 142.368 192 160l0 576c0 17.664 14.368 32 32 32l448 0c17.664 0 32-14.336 32-32L704 160c0-17.632-14.336-32-32-32L224 128z"
      p-id="637"
    ></path>
    <path
      d="M800 960 320 960c-17.664 0-32-14.304-32-32s14.336-32 32-32l480 0c17.664 0 32-14.336 32-32L832 256c0-17.664 14.304-32 32-32s32 14.336 32 32l0 608C896 916.928 852.928 960 800 960z"
      p-id="638"
    ></path>
    <path
      d="M544 320 288 320c-17.664 0-32-14.336-32-32s14.336-32 32-32l256 0c17.696 0 32 14.336 32 32S561.696 320 544 320z"
      p-id="639"
    ></path>
    <path
      d="M608 480 288.032 480c-17.664 0-32-14.336-32-32s14.336-32 32-32L608 416c17.696 0 32 14.336 32 32S625.696 480 608 480z"
      p-id="640"
    ></path>
    <path
      d="M608 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l320 0c17.696 0 32 14.304 32 32S625.696 640 608 640z"
      p-id="641"
    ></path>
  </svg>
);

export default () => {
  return (
    <Space>
      <Icon component={copy} />
      <Icon component={copy} color="primary" />
      <Icon component={copy} color="secondary" />
      <Icon component={copy} color="action" />
      <Icon component={copy} color="disabled" />
    </Space>
  );
};
```

## API

<API id="Icon" />
