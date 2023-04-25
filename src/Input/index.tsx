import classNames from 'classnames';
import React, { useRef } from 'react';
import './Input.scss';
import {
  InputSize,
  InputStatus,
  InputTextPlacement,
  InputType,
} from './inputHelper';
export interface InputProps {
  size?: InputSize;
  align?: InputTextPlacement;
  status?: InputStatus;
  type?: InputType;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  tip?: string;
  clearable?: boolean;
}
const Input: React.FC<InputProps> = (props) => {
  const inputRef = useRef();
  const {
    size = 'default',
    align = 'left',
    status = 'default',
    type = 'text',
    disabled,
    readOnly,
    placeholder,
    tip,
    clearable,
    ...rest
  } = props;
  const emptyInput = () => {
    inputRef.current.value = '';
  };
  const classes = classNames('c-input', {
    [`c-size-${size}`]: size,
    [`c-status-${status}`]: status,
    [`c-align-${align}`]: align,
  });
  return (
    <>
      <input
        ref={inputRef}
        className={classes}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        type={type}
        {...rest}
      ></input>
      {clearable && size === 'default' && <i onClick={emptyInput}>x</i>}
      {tip && <div>{tip}</div>}
    </>
  );
};

export default Input;
