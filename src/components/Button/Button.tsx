import * as React from "react";

type ButtonProps = {
    onClick?: () => void;
    childrend?: React.ReactNode;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ childrend, disabled, onClick }) => {
    return <button onClick={onClick} disabled={disabled}>{childrend}</button>
};

export default Button;