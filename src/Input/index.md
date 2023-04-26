# Input

## 不同尺寸的输入框

### 代码演示

```jsx
import { Input } from 'crocod-ui';
import React, { useState } from 'react';
export default () => {
  const [value, setValue] = useState('');
  return (
    <>
      <div style={{ marginBottom: '15px', width: '200px' }}>
        <Input
          size="small"
          placeholder="小输入框"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <Input
          size="default"
          placeholder="默认输入框"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <Input
          size="large"
          placeholder="大输入框"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};
```

## 不同对齐方式的输入框

### 代码演示

```jsx
import { Input } from 'crocod-ui';
import React, { useState } from 'react';
export default () => {
  const [value, setValue] = useState('');
  return (
    <>
      <div style={{ marginBottom: '15px' }}>
        <Input
          align="left"
          placeholder="左边"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <Input
          align="center"
          placeholder="中间"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <Input
          align="right"
          placeholder="右边"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};
```

## 禁止输入的输入框

### 代码演示

```jsx
import { Input } from 'crocod-ui';
import React, { useState } from 'react';
export default () => {
  const [value, setValue] = useState('');
  return (
    <>
      <div>
        <Input
          disabled
          placeholder="禁止输入"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};
```

## 只读的输入框

### 代码演示

```jsx
import { Input } from 'crocod-ui';
import React, { useState } from 'react';
export default () => {
  const [value, setValue] = useState('');
  return (
    <>
      <div>
        <Input
          readOnly
          placeholder="只读输入框"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};
```

## 输入框的类型

### 代码演示

```jsx
import { Input } from 'crocod-ui';
import React, { useState } from 'react';
export default () => {
  const [value, setValue] = useState('');
  return (
    <>
      <div style={{ marginBottom: '15px' }}>
        <span>数字：</span>
        <Input
          type="number"
          placeholder="请输入数字"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <span>密码：</span>
        <Input
          type="password"
          placeholder="请输入密码"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <span>文本：</span>
        <Input
          type="text"
          placeholder="请输入内容"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};
```

## 输入框的状态

### 代码演示

```jsx
import { Input } from 'crocod-ui';
import React, { useState } from 'react';
export default () => {
  const [value, setValue] = useState('');
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '30px' }}>
          <div style={{ marginBottom: '15px' }}>
            <span>默认状态：</span>
            <Input
              placeholder="默认状态"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <span>成功状态：</span>
            <Input
              status="success"
              placeholder="成功状态"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <span>警告状态：</span>
            <Input
              status="warning"
              placeholder="警告状态"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <span>错误状态：</span>
            <Input
              status="error"
              placeholder="错误状态"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div style={{ marginBottom: '15px' }}>
            <Input
              placeholder="默认状态"
              tip="默认情况下显示的文本"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <Input
              status="success"
              tip="验证成功后返回的信息"
              placeholder="成功状态"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <Input
              status="warning"
              tip="验证得到警告后返回的信息"
              placeholder="警告状态"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <Input
              status="error"
              tip="验证失败后返回的信息"
              placeholder="错误状态"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
```

## 清空输入框快捷按钮

### 代码演示

```jsx
import { Input } from 'crocod-ui';
import React, { useState } from 'react';
export default () => {
  const [value, setValue] = useState('');
  return (
    <>
      <div>
        <Input
          clearable
          placeholder="快捷键清空输入框"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </>
  );
};
```
