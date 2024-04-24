import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC,
} from 'react';
import { createPortal } from 'react-dom';
import { getPlacement, type PlacementType } from './placement';
import { useListener } from './utils';

export interface XYOverlayProps {
  /**
   * @description 自定义样式类名
   * @default -
   */
  className?: string;
  /**
   * @description 设置内部节点
   * @default null
   */
  children?: ReactElement;
  /**
   * @description 设置覆盖层样式
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
  /**
   * @description 设置覆盖层阴影
   * @default false
   */
  hasMask?: boolean;
  /**
   * @description 设置弹出层隐藏
   * @default false
   */
  visable?: boolean;
  /**
   * @description 设置弹出层位置回调
   * @default false
   */
  onBeforePosition?: (e: any, a: any) => any;
  /**
   * @description 设置弹出层位置
   * @default false
   * @type PlacementType
   */
  placement?: PlacementType;
  /**
   * @description 设置目标对象
   * @default null
   */
  target?: HTMLElement | (() => HTMLElement);
  /**
   * @description 响应弹出层隐藏改变
   * @default null
   */
  onVisableChange?: (evt: any) => void;
  /**
   * @description 设置覆盖层点击事件
   * @default null
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export type XYOverlayElement = FC<XYOverlayProps>;

const Overlay: XYOverlayElement = (props) => {
  const {
    className,
    children,
    style,
    hasMask,
    target,
    placement,
    visable: pvisable,
    onVisableChange,
    onBeforePosition,
    onClick,
    ...others
  } = props;

  const [visable, setVisable] = useState(pvisable || false);
  const [positionStyle, setPositionStyle] = useState({});

  const overlayRef = useRef(null);

  useEffect(() => {
    if ('visable' in props) {
      setVisable(pvisable!);
    }
  }, [pvisable]);

  const handleMouseDown = (e: any) => {
    const safeNodeList: HTMLElement[] = [];
    // 弹窗默认为安全节点
    if (overlayRef.current) {
      safeNodeList.push(overlayRef.current);
    }

    if (target) {
      safeNodeList.push(typeof target === 'function' ? target() : target);
    }

    const clickNode = e.target;

    for (let index = 0; index < safeNodeList.length; index++) {
      const node = safeNodeList[index];
      if (node && node.contains(clickNode)) {
        return;
      }
    }

    onVisableChange?.(false);
  };

  const handleKeyDown = (e: any) => {
    if (!overlayRef.current || !visable) return;
    if (e.keyCode === 27) {
      onVisableChange?.(false);
    }
  };

  useListener(window, 'mousedown', handleMouseDown, visable);
  useListener(window, 'keydown', handleKeyDown, visable);

  const overlayCallback = useCallback(
    (node: any) => {
      overlayRef.current = node;
      if (node && target) {
        const targetElement = typeof target === 'function' ? target() : target;
        const positionStyle = getPlacement({
          target: targetElement,
          overlay: overlayRef.current!,
          placement: placement,
          onBeforePosition: onBeforePosition,
        });
        setPositionStyle(positionStyle);
      }
    },
    [placement],
  );

  const child = React.Children.only(children);

  const newChildren = React.cloneElement(child as any, {
    ref: overlayCallback,
    style: {
      ...positionStyle,
      ...child?.props?.style,
    },
  });

  if (!visable) return null;

  return createPortal(
    <div>
      {hasMask && <div />}
      {newChildren}
    </div>,
    document.body,
  );
};

export default Overlay;
