// 输入框的大小
const InputSizes = ['small', 'default', 'large'] as const;
export type InputSize = (typeof InputSizes)[number];

// 输入框的类型
const InputTypes = ['text', 'number', 'password'] as const;
export type InputType = (typeof InputTypes)[number];

// 输入框中文本的位置
const InputTextPlacements = ['center', 'left', 'right'] as const;
export type InputTextPlacement = (typeof InputTextPlacements)[number];

// 输入框的状态
const InputStatuss = ['default', 'success', 'warning', 'error'] as const;
export type InputStatus = (typeof InputStatuss)[number];
