import type {
  XYOverlayElement as InternalXYOverlayElement,
  XYOverlayProps,
} from './overlay';
import { default as InternalOverlay } from './overlay';
import type { XYPopuoProps, XYPopupElement } from './popup';
import { default as Popup } from './popup';

type OverlayType = typeof Overlay;
interface XYOverlayElement extends InternalXYOverlayElement {
  Popup: typeof Popup;
}

const Overlay = InternalOverlay as XYOverlayElement;
Overlay.Popup = Popup;

export { Overlay, Popup };
export type { XYOverlayElement, XYOverlayProps, XYPopuoProps, XYPopupElement };
