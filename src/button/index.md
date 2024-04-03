# Button

只需轻点按钮，用户就可以触发动作或做出选择。

按钮 传达了一系列用户可以执行的操作命令。 他们通常直接放置在您的用户界面中，例如：

- Dialogs 对话框
- Modal windows 模态窗口
- Forms 表单
- Cards 卡片
- Toolbars 工具栏

<br />

## 代码演示

### 实心按钮

实心按钮 表示高度的强调，你根据它们的立体效果和填充颜色来区分彼此。 它们用于触发应用程序所具有的主要功能。

```jsx
import { Button, Space } from 'xiaoyang-design';

export default () => {
  return (
    <Space>
      <Button variant="contained">DEFAULTE</Button>
      <Button variant="contained" color="primary">
        PRIMARY
      </Button>
      <Button variant="contained" color="secondary">
        SECONDARY
      </Button>
      <Button variant="contained" disabled>
        DISABLED
      </Button>
      <Button variant="contained" color="primary" href="#代码演示">
        LINK
      </Button>
    </Space>
  );
};
```

你也可以使用属性 disableElevation 属性来消除实心按钮的立体效果。

```jsx
import { Button } from 'xiaoyang-design';

export default () => {
  return (
    <>
      <Button variant="contained" color="primary" disableElevation>
        DISABLE ELEVATION
      </Button>
    </>
  );
};
```

<br/>

### 文本按钮

文本按钮通常用于不太明显的操作，包括那些存在于：

- 在 dialogs 对话框中的
- 在 cards 卡片中的
- 在卡片中，文本按钮有助于强调卡片的内容。

```jsx
import { Button, Space } from 'xiaoyang-design';

export default () => {
  return (
    <Space>
      <Button>DEFAULT</Button>
      <Button color="primary">PRIMARY</Button>
      <Button color="secondary">SECONDARY</Button>
      <Button disabled>DISABLED</Button>
      <Button href="#代码演示" color="primary">
        LINK
      </Button>
    </Space>
  );
};
```

<br/>

### 描边按钮

描边按钮 表示中等程度的强调。 它们包含了一些重要的操作，但不是一个 app 中的主要操作。

你也可以将描边按钮作为比实心按钮次要一点的替代方案，或者用来作为比文本按钮重要一点的展示。

```jsx
import { Button, Space } from 'xiaoyang-design';

export default () => {
  return (
    <Space>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#代码演示">
        Link
      </Button>
    </Space>
  );
};
```

<br/>

### 处理点击

所有组件都接受 onClick 处理程序，该处理程序被应用到根 DOM 元素中。

```jsx
import { Button } from 'xiaoyang-design';

export default () => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          alert('clicked');
        }}
      >
        请点击我
      </Button>
    </>
  );
};
```

请注意，文档里组件的 API 部分 避免 提到原生的属性（还是有很多）。

<br/>

### 上传按钮

所有组件都接受 onClick 处理程序，该处理程序被应用到根 DOM 元素中。

```jsx
import { Button } from 'xiaoyang-design';

export default () => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          alert('clicked');
        }}
      >
        请点击我
      </Button>
    </>
  );
};
```

请注意，文档里组件的 API 部分 避免 提到原生的属性（还是有很多）。

<br />

### 尺寸

您想要一个大一点或者小一点的按钮吗？ 我们提供了 size 这个属性供您调整。

```jsx
import { Button, Col, Row, Space } from 'xiaoyang-design';

export default () => {
  const style: React.CssProperties = {
    padding: '6px 0',
  };

  return (
    <>
      <Row>
        <Space style={style}>
          <Button size="small">SMALL</Button>
          <Button size="medium">MEDIUM</Button>
          <Button size="large">LARGE</Button>
        </Space>
      </Row>
      <Row>
        <Space style={style}>
          <Button size="small" variant="outlined" color="primary">
            SMALL
          </Button>
          <Button size="medium" variant="outlined" color="primary">
            MEDIUM
          </Button>
          <Button size="large" variant="outlined" color="primary">
            LARGE
          </Button>
        </Space>
      </Row>
      <Row>
        <Space style={style}>
          <Button size="small" variant="contained" color="primary">
            SMALL
          </Button>
          <Button size="medium" variant="contained" color="primary">
            MEDIUM
          </Button>
          <Button size="large" variant="contained" color="primary">
            LARGE
          </Button>
        </Space>
      </Row>
    </>
  );
};
```

请注意，文档里组件的 API 部分 避免 提到原生的属性（还是有很多）。

<br />

### 带有 icons（图标）和 label（标签）的按钮

有时您可能希望为某个按钮添加图标以增强应用程序的用户体验，因为我们识别徽标比纯文本更容易。 例如，如果您有删除按钮，则可以使用垃圾箱图标对其进行标记。

```jsx
import {
  Button,
  DeleteIcon,
  SendIcon,
  CloudUpLoadIcon,
  keyboardVoiceIcon,
  SaveIcon,
  Space,
} from 'xiaoyang-design';

export default () => {
  return (
    <Space>
      <Button variant="contained" color="secondary" startIcon={DeleteIcon}>
        Delete
      </Button>
      <Button variant="contained" color="primary" endIcon={SendIcon}>
        Send
      </Button>
      <Button variant="contained" color="default" startIcon={CloudUpLoadIcon}>
        Upload
      </Button>
      <Button
        variant="contained"
        disabled
        color="secondary"
        startIcon={keyboardVoiceIcon}
      >
        Talk
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={SaveIcon}
      >
        Save
      </Button>
      <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={SaveIcon}
      >
        Save
      </Button>
    </Space>
  );
};
```

请注意，文档里组件的 API 部分 避免 提到原生的属性（还是有很多）。

<br />

### Icon Buttons（图标按钮）

所有组件都接受 onClick 处理程序，该处理程序被应用到根 DOM 元素中。

```jsx
import { Button } from 'xiaoyang-design';

export default () => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          alert('clicked');
        }}
      >
        请点击我
      </Button>
    </>
  );
};
```

请注意，文档里组件的 API 部分 避免 提到原生的属性（还是有很多）。

<br />

### Customized Buttons（自定义按钮）

所有组件都接受 onClick 处理程序，该处理程序被应用到根 DOM 元素中。

```jsx
import { Button } from 'xiaoyang-design';

export default () => {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          alert('clicked');
        }}
      >
        请点击我
      </Button>
    </>
  );
};
```

请注意，文档里组件的 API 部分 避免 提到原生的属性（还是有很多）。

<br />

## API

<API id="Button"></ API>

<br />

## CSS 变量

<API id="ButtonThemeVariable"></ API>
