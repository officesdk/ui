# Toast 使用指南

## 全局 Toast API（推荐）

无需在应用中手动放置 `ToastContainer` 组件，直接调用全局 `toast` 对象即可。

**前提条件**：需要先使用 `UIConfigProvider` 初始化渲染函数（兼容 React 18 及以下版本）。

### 初始化

```typescript
import { UIConfigProvider, createUIConfig } from '@officesdk/design';
import { lightTheme } from '@officesdk/design-theme';

const config = createUIConfig({
  theme: lightTheme,
  icons: {},
});

function App() {
  return (
    <UIConfigProvider config={config}>
      <YourApp />
    </UIConfigProvider>
  );
}
```

### 基本使用

```typescript
import { toast } from '@officesdk/design';

// 显示成功提示
toast.success('操作成功！');

// 显示错误提示
toast.error('操作失败，请重试');

// 显示信息提示
toast.info('这是一条信息');

// 显示警告提示
toast.warn('请注意这个操作');
```

### 自定义配置

```typescript
import { toast } from '@officesdk/design';

// 配置全局设置（可选）
toast.configure({
  placement: 'top-right',  // 位置：top-right | top-left | top-center | bottom-right | bottom-left | bottom-center
  maxCount: 5,             // 最多显示的 toast 数量
  defaultDuration: 3000,   // 默认显示时长（毫秒）
});

// 显示带自定义选项的 toast
toast.success('文件上传成功', {
  duration: 5000,           // 自定义显示时长
  closable: true,           // 显示关闭按钮
  description: '文件大小：2.5MB', // 描述文本
});

// 显示带操作按钮的 toast
toast.info('发现新版本', {
  mainButtonText: '立即更新',
  onMainButtonClick: () => {
    console.log('开始更新');
  },
  secondaryButtonText: '稍后提醒',
  onSecondaryButtonClick: () => {
    console.log('稍后提醒');
  },
  closable: true,
});
```

### 手动控制 Toast

```typescript
import { toast } from '@officesdk/design';

// 显示 toast 并获取 ID
const toastId = toast.show({
  variant: 'info',
  message: '正在处理...',
  duration: 0, // 0 表示不自动关闭
});

// 稍后手动关闭
setTimeout(() => {
  toast.hide(toastId);
}, 3000);

// 关闭所有 toast
toast.hideAll();
```

### 清理资源

```typescript
import { toast } from '@officesdk/design';

// 在应用卸载时清理 toast 容器（可选）
toast.destroy();
```

## ToastContainer 组件方式（适用于特殊场景）

如果需要在特定区域显示 toast，可以使用 `ToastContainer` 组件。

```typescript
import { ToastContainer, useToast } from '@officesdk/design';

function App() {
  return (
    <ToastContainer placement="top-right" maxCount={5} defaultDuration={3000}>
      <MyComponent />
    </ToastContainer>
  );
}

function MyComponent() {
  const toast = useToast();

  const handleClick = () => {
    toast.success('操作成功！');
  };

  return <button onClick={handleClick}>点击我</button>;
}
```

## API 参考

### toast 对象

| 方法 | 参数 | 返回值 | 说明 |
|------|------|--------|------|
| `configure` | `ToastContainerConfig` | `void` | 配置全局设置 |
| `show` | `ToastProps` | `string` | 显示自定义 toast，返回 toast ID |
| `hide` | `id: string` | `void` | 隐藏指定 ID 的 toast |
| `hideAll` | - | `void` | 隐藏所有 toast |
| `success` | `message: string, options?: Partial<ToastProps>` | `string` | 显示成功 toast |
| `info` | `message: string, options?: Partial<ToastProps>` | `string` | 显示信息 toast |
| `error` | `message: string, options?: Partial<ToastProps>` | `string` | 显示错误 toast |
| `warn` | `message: string, options?: Partial<ToastProps>` | `string` | 显示警告 toast |
| `destroy` | - | `void` | 销毁 toast 容器 |

### ToastContainerConfig

```typescript
interface ToastContainerConfig {
  placement?: 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';
  maxCount?: number;
  defaultDuration?: number;
}
```

### ToastProps

```typescript
interface ToastProps {
  variant?: 'success' | 'info' | 'error' | 'warn';
  message: string;
  description?: string;
  mainButtonText?: string;
  onMainButtonClick?: () => void;
  secondaryButtonText?: string;
  onSecondaryButtonClick?: () => void;
  closable?: boolean;
  duration?: number; // 0 表示不自动关闭
  icon?: React.ReactNode;
  showIcon?: boolean;
}
```

