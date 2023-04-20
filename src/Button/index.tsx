import React from 'react';
import classnames from 'classnames';
import { ButtonType, ButtonTheme,ButtonSize} from './buttonHelper';
import './Button.scss';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>{
  type?: ButtonType,
  theme?: ButtonTheme,
  size?: ButtonSize,
  disabled?:boolean,
  children: React.ReactNode,
  className?:string
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme,
    size,
    type,
    disabled,
    ...rest
  } = props;
  const classes = classnames('c-button', className, {
    [`c-theme-${theme}`]: theme,
    [`c-size-${size}`]: size,
    [`c-type-${type}`]: type,
  });
  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  type:"default",
  // theme:"",
  size: 'normal',
  disabled: false,
};

export default Button;
