import React, {
  ReactElement,
  cloneElement,
  useRef,
  useState,
  type FC,
} from 'react';
import type { XYOverlayProps } from '.';
import { Overlay } from '.';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface XYPopuoProps extends Omit<XYOverlayProps, 'children'> {
  /**
   * @description 设置popup触发器
   * @default -
   */
  trigger: ReactElement;
  /**
   * @description 设置popup触发器
   * @default click
   */
  triggerType?: 'hover' | 'click';
  /**
   * @description 设置内部节点
   * @default null
   */
  children?: ReactElement | string;
}

export type XYPopupElement = FC<XYPopuoProps>;

const Popup: XYPopupElement = (props) => {
  const { children, trigger, triggerType = 'click', ...others } = props;

  const [visible, setVisible] = useState(false);

  const triggerRef = useRef<HTMLElement>(null);

  const triggerPorops: any = {
    ref: triggerRef,
  };
  if (triggerType === 'hover') {
    triggerPorops.onMouseEnter = () => setVisible(true);
    triggerPorops.onMouseOut = () => setVisible(false);
  } else {
    triggerPorops.onClick = () => setVisible(true);
  }

  const triggerEle =
    typeof trigger === 'string' ? <span>{trigger}</span> : trigger;

  const triggerNode = cloneElement(triggerEle, triggerPorops);

  const handleVisibleChange = (v: boolean) => {
    setVisible(v);
  };

  return (
    <>
      {triggerNode}
      <Overlay
        {...others}
        visable={visible}
        onVisableChange={handleVisibleChange}
        target={() => triggerRef.current!}
      >
        {typeof children === 'string' ? <span>{children}</span> : children}
      </Overlay>
    </>
  );
};

export default Popup;
