import React, {
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useRef,
  useState,
} from 'react';
import { ToolTipPlacement, TooltipTrigger } from '../tooltipHelper';
import { getPosition } from './usePosition';

interface UseTriggerParams {
  visible?: boolean;
  onVisibleChange: (value: UseTriggerParams['visible']) => void;
  placement: ToolTipPlacement;
  trigger: TooltipTrigger;
}

export const useTrigger = (params: UseTriggerParams) => {
  const { visible, onVisibleChange, placement, trigger } = params;

  const tooltipRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const handleMouseEvents = (e: MouseEvent) => {
    const { top, left } = getPosition(
      e.currentTarget as HTMLElement,
      tooltipRef.current as HTMLElement,
      placement,
    );
    setPosition({ top, left });
  };

  // 弹出内容交互处理
  const getPopupProps = () => {
    const { top, left } = position;
    return {
      style: {
        ...(visible ? { top, left } : { top: -9999, left: -9999 }),
        position: 'absolute',
      },
      onMouseEnter: () => {
        if (trigger === 'hover') {
          onVisibleChange(true);
        }
      },
      onMouseLeave: () => {
        if (trigger === 'hover') {
          onVisibleChange(false);
        }
      },
      onMouseDown: () => {
        onVisibleChange(true);
      },
      onTouchEnd: () => {
        onVisibleChange(true);
      },
    };
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getTriggerProps = (triggerNode: ReactElement) => {
    return {
      onClick: (e: MouseEvent) => {
        console.log('onClick');
        if (trigger === 'click') {
          if (!visible) {
            onVisibleChange(true);
          } else {
            onVisibleChange(false);
          }
          handleMouseEvents(e);
        }
      },
      onFocus: (e: MouseEvent) => {
        if (trigger === 'focus') {
          onVisibleChange(true);
          handleMouseEvents(e);
        }
      },
      onMouseOver: (e: MouseEvent) => {
        console.log('onMouse');

        if (trigger === 'hover') {
          onVisibleChange(true);
          handleMouseEvents(e);
        }
      },
      onMouseLeave: () => {
        if (trigger === 'hover') {
          onVisibleChange(false);
        }
      },
    };
  };

  // 整理 trigger 元素
  const getTriggerNode = (children: ReactNode) => {
    const triggerNode =
      // eslint-disable-next-line react/no-unknown-property
      isValidElement(children) && children?.type !== '' ? (
        children
      ) : (
        <span className="t-trigger"> {children} </span>
      );

    console.log(
      'triggerNode',
      cloneElement(triggerNode, getTriggerProps(triggerNode)),
    );
    return cloneElement(triggerNode, getTriggerProps(triggerNode));
  };

  return {
    tooltipRef,
    position,
    getTriggerNode,
    getPopupProps,
  };
};
