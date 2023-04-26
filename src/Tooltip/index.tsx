/* eslint-disable @typescript-eslint/no-use-before-define */
import classnames from 'classnames';
import React, { forwardRef, useRef, } from 'react';
import { ToolTipPlacement, TooltipTrigger } from './tooltipHelper';
import Portal from '../common/Portal';
import './Tooltip.scss';
import useControlled from '../hooks/useControlled';
import { useTrigger } from './hooks/useTrigger';
export interface TooltipProps {
  classname?: string;
  placement?: ToolTipPlacement;
  trigger?: TooltipTrigger;
  // 控制显隐
  visible?: boolean;

  content?: string;

  // 是否显示空内容
  hideEmptyPopup?: boolean;

  // 浮层关闭时是否销毁浮层
  destroyOnClose?: boolean;

  children?: React.ReactNode;

  attach: string
  /**
 * 当浮层隐藏或显示时触发，`trigger=document` 表示点击非浮层元素触发；`trigger=context-menu` 表示右击触发
 */
  onVisibleChange?: (visible: boolean) => void;
}
const Tooltip: React.FC<TooltipProps> = (props) => {
  const { children, content, placement = 'left', trigger = 'click', attach } = props;
  const [visible, onVisibleChange] = useControlled(props, 'visible', props.onVisibleChange);
  const portalRef = useRef(null); // portal dom 元素

  const { tooltipRef, getTriggerNode, getPopupProps } = useTrigger({ visible, onVisibleChange, placement, trigger })

  const triggerNode = getTriggerNode(children)

  return (
    <>
      {triggerNode}
      <Portal attach={attach} ref={portalRef}>
        <TooltipComponent
          {...getPopupProps()}
          content={content}
          visible={visible}
          ref={tooltipRef}
          placement={placement}
          trigger={trigger}
        />
      </Portal>

    </>
  );
};


interface TooltipComponentProps {
  content?: string;
  visible?: boolean;
  placement: ToolTipPlacement;
  trigger?: string;
  [k in string]: any;
}

const TooltipComponent = forwardRef<HTMLDivElement, TooltipComponentProps>(
  (props, ref) => {
    const { content, visible, placement, ...rest } = props;

    return (
      <div
        className={classnames('g-tooltip-text', {
          'g-tooltip-text-open': visible,
          [`g-tooltip-${placement}`]: placement,
        })}
        ref={ref}
        {...rest}
      >
        {content}
      </div>
    )
  },
);
export default Tooltip;
