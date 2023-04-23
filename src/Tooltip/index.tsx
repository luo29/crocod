/* eslint-disable @typescript-eslint/no-use-before-define */
import classnames from 'classnames';
import React, { forwardRef, ReactElement, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePosition } from './hooks/usePosition';
import { ToolTipPlacement, TooltipTrigger } from './tooltipHelper';
// import {useTrigger} from "./hooks/useTrigger"
import './Tooltip.scss';
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
}
const Tooltip: React.FC<TooltipProps> = (props) => {
  const { children, content, placement = 'left', trigger = 'click' } = props;
  const [visible, setVisible] = useState(false);
  const child = React.Children.only(children);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const UsehandleMouseEvents = (e: MouseEvent) => {
    const { top, left } = usePosition(
      e.currentTarget as HTMLElement,
      tooltipRef.current as HTMLElement,
      placement,
    );
    setPosition({ top, left });
  };
  const handleMouseClick = (e: MouseEvent) => {
    if (trigger === 'click') {
      if (!visible) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      UsehandleMouseEvents(e);
    }
  };
  const handleMouseFocus = (e: MouseEvent) => {
    if (trigger === 'focus') {
      setVisible(true);
      UsehandleMouseEvents(e);
    }
  };
  const handleMouseEnter = (e: MouseEvent) => {
    if (trigger === 'hover') {
      setVisible(true);
      UsehandleMouseEvents(e);
    }
  };
  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setVisible(false);
    }
  };

  return (
    <>
      {React.cloneElement(children as ReactElement, {
        // @ts-ignore
        className: classnames('g-tooltip-trigger', child.props.className),
        onClick: handleMouseClick,
        onFocus: handleMouseFocus,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      })}
      <TooltipComponent
        content={content}
        visible={visible}
        ref={tooltipRef}
        position={position}
        placement={placement}
        trigger={trigger}
      />
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

    return ReactDOM.createPortal(
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
      </div>,
      document.body,
    );
  },
);
export default Tooltip;
