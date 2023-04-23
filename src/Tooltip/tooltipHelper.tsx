// 浮层的位置
const ToolTipPlacements = ['top', 'left', 'right', 'bottom'] as const;
export type ToolTipPlacement = (typeof ToolTipPlacements)[number];

// 触发的条件
const TooltipTriggers = ['hover', 'click', 'focus'] as const;
export type TooltipTrigger = (typeof TooltipTriggers)[number];
