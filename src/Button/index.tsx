/* eslint-disable react/button-has-type */
import classnames from 'classnames';
import React from 'react';
import './Button.scss';
import { ButtonSize, ButtonTheme, ButtonType } from './buttonHelper';

export interface ButtonProps {
  type?: ButtonType;
  theme?: ButtonTheme;
  size?: ButtonSize;
  disabled?: boolean;
  children: React.ReactNode;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, theme, size, type, disabled, loading, ...rest } = props;
  const classes = classnames('c-button', {
    [`c-theme-${theme}`]: theme,
    [`c-size-${size}`]: size,
    [`c-type-${type}`]: type,
  });
  return (
    <button className={classes} disabled={disabled} {...rest}>
      {loading && <span className="c-loadingIndicator"></span>}
      {children}
    </button>
  );
};
Button.defaultProps = {
  type: 'button',
  // theme:"",
  size: 'normal',
  disabled: false,
};

export default Button;
