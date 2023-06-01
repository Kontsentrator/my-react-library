const ButtonStatus = ['system', 'success', 'error'] as const;
export type ButtonStatusType = typeof ButtonStatus[number];

const ButtonView = ['primary', 'secondary'] as const;
export type ButtonViewType = typeof ButtonView[number];