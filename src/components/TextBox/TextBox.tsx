import * as React from "react";

import './TextBox.scss';
import { TextBoxStatusType, TextBoxViewType } from "./config";

type TextBoxProps = {
    onChange?: (value: string) => void;
    value?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    status?: TextBoxStatusType;
    view?: TextBoxViewType;
    readOnly?: boolean;
}

const TextBox: React.FC<TextBoxProps> = ({ placeholder, disabled, status = 'system', view = 'primary', onChange, required, value, readOnly }) => {
    const classNames = ['textBox', disabled && 'textBox_disabled', status && `textBox_status_${status}`, view && `textBox_view_${view}`];

    const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange && !disabled) {
            onChange(e.target.value);
        }
    }, [disabled, onChange]);

    return <input className={classNames.join(' ')} value={value} placeholder={placeholder} onChange={handleChange} disabled={disabled} required={required} readOnly={readOnly} />
};

export default TextBox;