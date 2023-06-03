const TextBoxStatus = ['system', 'success', 'error'] as const;
export type TextBoxStatusType = typeof TextBoxStatus[number];

const TextBoxView = ['primary', 'secondary'] as const;
export type TextBoxViewType = typeof TextBoxView[number];