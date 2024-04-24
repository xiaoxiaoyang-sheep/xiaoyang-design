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
   * @description 设置内部节点
   * @default null
   */
  children?: ReactElement | string;
}

export type XYPopupElement = FC<XYPopuoProps>;

const Popup: XYPopupElement = (props) => {
  const { children, trigger, ...others } = props;

  const [visible, setVisible] = useState(false);

  const triggerRef = useRef<HTMLElement>(null);

  const triggerPorops = {
    ref: triggerRef,
    onClick: () => {
      setVisible(true);
    },
  };

  const triggerNode = cloneElement(trigger, triggerPorops);

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
