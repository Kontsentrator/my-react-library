import * as React from "react";

import './Button.scss';
import { ButtonStatusType, ButtonViewType } from "./config";

type ButtonProps = {
    onClick?: () => void;
    children?: React.ReactNode;
    disabled?: boolean;
    status?: ButtonStatusType;
    view?: ButtonViewType;
}

const Button: React.FC<ButtonProps> = ({ children, disabled, status = 'system', view = 'primary', onClick }) => {
    const classNames = ['button', disabled && 'button_disabled', status && `button_status_${status}`, view && `button_view_${view}`];

    return <button className={classNames.join(' ')} onClick={onClick} disabled={disabled}>{children}</button>
};

export default Button;