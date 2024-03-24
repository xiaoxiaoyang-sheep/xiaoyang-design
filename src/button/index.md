# Button

This is an example component1.

```jsx
import { Button } from 'xiaoyang-design';

export default () => {
  return (
    <>
      <Button variant="text">TEXT</Button>
      <Button variant="contained">CONTAINER</Button>
      <Button variant="outlined">OUTLINED</Button>
    </>
  );
};
```

size.

```jsx
import { Button } from 'xiaoyang-design';

export default () => {
  return (
    <>
      <Button variant="contained" size="small">CONTAINER</Button>
      <Button variant="contained" size="medium">CONTAINER</Button>
      <Button variant="contained" size="large">CONTAINER</Button>
    </>
  );
};
```
