import { changeTheme } from './theme';

// export ComponentType
export type { XYAffixElement, XYAffixProps } from './affix';
export type { XYButtonElement, XYButtonProps } from './button';
export type {
  XYCheckboxElement,
  XYCheckboxGroupElement,
  XYCheckboxGroupProps,
  XYCheckboxProps,
} from './checkbox';
export type {
  XYColElement,
  XYColProps,
  XYRowElement,
  XYRowProps,
} from './grid';
export type {
  XYCustomIconElement,
  XYCustomIconProps,
  XYIconElement,
  XYIconProps,
} from './icon';
export type {
  XYInputElement,
  XYInputProps,
  XYTextAreaElement,
  XYTextAreaProps,
} from './input';
export type { XYProgressElement, XYProgressProps } from './progress';
export type {
  XYRadioElement,
  XYRadioGroupElement,
  XYRadioGroupProps,
  XYRadioProps,
} from './radio';
export type { XYSpaceElement, XYSpaceProps } from './space';
export type { XYSwitchElement, XYSwitchProps } from './switch';

// export  Component
export { default as Foo } from './Foo';
export { Affix } from './affix';
export { Avatar } from './avatar';
export { Button } from './button';
export { Checkbox } from './checkbox';
export { Col, Row } from './grid';
export { Icon } from './icon';
export { Input, TextArea } from './input';
export { Progress } from './progress';
export { Radio } from './radio';
export { Space } from './space';
export { Switch } from './switch';
export { Tag } from './tag';

// export IconType

// export Icon
export {
  CloseIcon,
  CloudUpLoadIcon,
  DeleteIcon,
  HomeIcon,
  SaveIcon,
  SendIcon,
  keyboardVoiceIcon,
} from './icons';

export { changeTheme } from './theme';

changeTheme('DEFAULT_THEME');

export { default as ButtonThemeVariable } from '../themeVariableApi/button';
