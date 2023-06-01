import * as React from "react";

import './Button.scss';
import { ButtonStatusType, ButtonViewType } from "./config";

type ButtonProps = {
    onClick?: () => void;
    childrend?: React.ReactNode;
    disabled?: boolean;
    status?: ButtonStatusType;
    view?: ButtonViewType;
}

const Button: React.FC<ButtonProps> = ({ childrend, disabled, status = 'system', view = 'primary', onClick }) => {
    const classNames = ['button', disabled && 'button_disabled', status && `button_${status}`, view && `button_${view}`];

    return <button className={classNames.join(' ')} onClick={onClick} disabled={disabled}>{childrend}</button>
};

export default Button;