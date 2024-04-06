import classNames from 'classnames';
import React, {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
  type FC,
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';

import './index.less';

export interface XYAvatarProps {
  /**
   * @description 自定义样式类名
   * @default -
   */
  className?: string;
  /**
   * @description 设置头像尺寸
   * @default medium
   */
  size?: number | 'small' | 'medium' | 'large';
  /**
   * @description 设置头像形状
   * @default circle
   */
  shape?: 'circle' | 'square';
  /**
   * @description 设置头像icon
   * @default -
   */
  icon?: React.ReactNode;
  /**
   * @description 设置头像url地址
   * @default -
   */
  src?: string;
  /**
   * @description 设置头像间距
   * @default -
   */
  gap?: number;
  /**
   * @description 设置内部节点
   * @default null
   */
  children?: ReactNode;
  /**
   * @description 设置按钮样式
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
}

export type XYAvatarElement = FC<XYAvatarProps>;

const Avatar: XYAvatarElement = (props) => {
  const {
    className,
    size = 'medium',
    icon,
    gap = 4,
    src,
    shape,
    children,
    ...others
  } = props;

  const [scale, setScale] = useState(1);

  const wrapperRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const textNode = textRef.current;
    if (!textNode) return;

    const reRender = () => {
      const wrapperNode = wrapperRef.current;

      if (!wrapperNode) return;

      const wrapperWidth = wrapperNode.offsetWidth;
      const textWidth = textNode.offsetWidth;

      const scale =
        wrapperWidth - gap * 2 < textWidth
          ? (wrapperWidth - gap * 2) / textWidth
          : 1;
      setScale(scale);
    };

    const ob = new ResizeObserver(reRender);
    ob.observe(textNode);
  }, [gap]);

  const cls = classNames({
    'xy-avatar': true,
    'xy-avatar-lg': size === 'large',
    'xy-avatar-sm': size === 'small',
    'xy-avatar-square': shape === 'square',
    'xy-avatar-icon': icon,
    [className as string]: !!className,
  });

  const style: CSSProperties =
    typeof size === 'number'
      ? {
          width: size,
          height: size,
          lineHeight: `${size}px`,
          fontSize: size / 2,
        }
      : props.style || {};

  const textStyle: CSSProperties = {
    lineHeight: `${size}px`,
    transform: `scale(${scale}) translateX(-50%)`,
  };

  return (
    <span className={cls} style={style} {...others} ref={wrapperRef}>
      {icon ? icon : null}
      {src ? typeof src === 'string' ? <img src={src} /> : src : null}
      {children ? (
        typeof children === 'string' ? (
          <span style={textStyle} ref={textRef} className="xy-avatar-string">
            {children}
          </span>
        ) : (
          children
        )
      ) : null}
    </span>
  );
};

export default Avatar;
