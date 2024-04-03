import type {
  XYRadioElement as XYInternalRadioElement,
  XYRadioProps,
} from './radio';
export type { XYRadioGroupElement, XYRadioGroupProps } from './radioGroup';

import InternalRadio from './radio';
import RadioGroup from './radioGroup';

type RadioType = typeof InternalRadio;
interface XYRadioElement extends XYInternalRadioElement {
  Group: typeof RadioGroup;
}

const Radio = InternalRadio as XYRadioElement;
Radio.Group = RadioGroup;

export { Radio };
export type { XYRadioElement, XYRadioProps };
