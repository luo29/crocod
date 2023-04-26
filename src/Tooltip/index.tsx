/* eslint-disable @typescript-eslint/no-use-before-define */
import classnames from 'classnames';
import React, { forwardRef } from 'react';
// import ReactDOM from 'react-dom';
import Portal from '../common/Portal';
import useControlled from '../hooks/useControlled';
import { useTrigger } from './hooks/useTrigger';
import './Tooltip.scss';
import { ToolTipPlacement, TooltipTrigger } from './tooltipHelper';
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

  attach: string;
  /**
   * 当浮层隐藏或显示时触发，`trigger=document` 表示点击非浮层元素触发；`trigger=context-menu` 表示右击触发
   */
  onVisibleChange?: (visible: boolean) => void;
}
const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    children,
    content,
    placement = 'left',
    trigger = 'click',
    attach,
  } = props;

  const [visible, onVisibleChange] = useControlled(
    props,
    'visible',
    props.onVisibleChange,
  );

  const { tooltipRef, position, getTriggerNode } = useTrigger({
    visible,
    onVisibleChange,
    placement,
    trigger,
  });

  const triggerNode = getTriggerNode(children);

  return (
    <>
      {triggerNode}
      <Portal triggerNode={triggerNode} attach={attach} ref={Portal}>
        <TooltipComponent
          content={content}
          visible={visible}
          ref={tooltipRef}
          position={position}
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
  position: { top: number; left: number };
  placement: ToolTipPlacement;
  trigger?: string;
}

const TooltipComponent = forwardRef<HTMLDivElement, TooltipComponentProps>(
  (props, ref) => {
    const { content, visible, position, placement } = props;
    const { top, left } = position;

    return (
      <div
        className={classnames('g-tooltip-text', {
          'g-tooltip-text-open': visible,
          [`g-tooltip-${placement}`]: placement,
        })}
        ref={ref}
        //@ts-ignore
        style={{
          ...(visible ? { top, left } : { top: -9999, left: -9999 }),
          position: 'absolute',
        }}
      >
        {content}
      </div>
    );
  },
);
export default Tooltip;
