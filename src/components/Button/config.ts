const ButtonStatus = ['system', 'success', 'error', 'warning'] as const;
export type ButtonStatusType = typeof ButtonStatus[number];

const ButtonView = ['primary', 'secondary'] as const;
export type ButtonViewType = typeof ButtonView[number];