import InternalCheckbox from './checkbox';
import CheckboxGroup from './checkboxGroup';

import type {
  XYCheckboxElement as InternalXYCheckboxElement,
  XYCheckboxProps,
} from './checkbox';
export type {
  XYCheckboxGroupElement,
  XYCheckboxGroupProps,
} from './checkboxGroup';

type RadioType = typeof InternalCheckbox;
interface XYCheckboxElement extends InternalXYCheckboxElement {
  Group: typeof CheckboxGroup;
}

const Checkbox = InternalCheckbox as XYCheckboxElement;
Checkbox.Group = CheckboxGroup;

export { Checkbox };
export type { XYCheckboxElement, XYCheckboxProps };
