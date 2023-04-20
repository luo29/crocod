// 按钮的类型
const ButtonTypes = ['default', 'dashed', 'link', 'text'] as const;
export type ButtonType = typeof ButtonTypes[number]

// 按钮的大小
const ButtonSizes = ["large","normal","small"] as const
export type ButtonSize = typeof ButtonSizes[number]

// 按钮的主题
const ButtonThemes = ["primary","success","warming","error"] as const
export type ButtonTheme = typeof ButtonThemes[number]
