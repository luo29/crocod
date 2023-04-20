# button
## 基础使用
### 代码演示
```jsx
import { Button } from 'crocod-ui';

export default() => (
  <>
  <Button>普通按钮</Button>
  <Button type="dashed" >虚线按钮</Button>
  <Button type="text">文字按钮</Button>
  <Button type="link">link按钮</Button>
  </>
)
```

## 控制大小
### 代码演示
```jsx
import { Button } from 'crocod-ui';

export default() => (
  <>
  <Button size="small">小按钮</Button>
  <Button>正常按钮</Button>
  <Button size="large" >大按钮</Button>
  </>
)
```

## 主题选择
### 代码演示
```jsx
import { Button } from "crocod-ui"
export default() => (
  <>
  <Button>普通按钮</Button>
  <Button theme="primary">主要按钮</Button>
  <Button theme="success">成功按钮</Button>
  <Button theme="warming">警告按钮</Button>
  <Button theme="error">错误按钮</Button>
  </>
)
```

## 是否禁用
### 代码演示
```jsx
import { Button } from "crocod-ui"
export default() => (
  <>
  <Button>普通按钮</Button>
  <Button disabled>禁用按钮</Button>
  </>
)
```
