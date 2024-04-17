import classNames from 'classnames';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  type FC,
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';

import './index.less';

export interface XYAffixProps {
  /**
   * @description 自定义样式类名
   * @default -
   */
  className?: string;
  /**
   * @description 设置内部节点
   * @default null
   */
  children?: ReactNode;
  /**
   * @description 设置图钉顶部偏移量
   * @default null
   */
  offsetTop?: number;
  /**
   * @description 设置图钉底部偏移量
   * @default null
   */
  offsetBottom?: number;
  /**
   * @description 设置图钉样式
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
  /**
   * @description 设置图钉点击事件
   * @default null
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /**
   * @description 监听图钉固定状态改变
   * @default null
   */
  onChange?: (affix: boolean) => void;
}

export type XYAffixElement = FC<XYAffixProps>;

const Affix: XYAffixElement = (props) => {
  const {
    className,
    children,
    offsetTop,
    offsetBottom,
    style,
    onClick,
    onChange,
    ...others
  } = props;

  const fixedRef = useRef<HTMLDivElement>(null);
  const fakeRef = useRef<HTMLDivElement>(null);
  const affix = useRef<boolean>(false);
  const updateFn = useRef<any>(null);

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', updateFn.current, false);
    };
  }, []);

  const cls = classNames({
    'xy-affix': true,
    [className as string]: !!className,
  });

  const wrapperRefCB = useCallback(
    (node: HTMLDivElement) => {
      if (!node) return;

      updateFn.current = function () {
        const { top, width, height, bottom } = node.getBoundingClientRect();
        const clientHeight = window.innerHeight;

        if ('offsetTop' in props && top <= offsetTop!) {
          fakeRef.current?.setAttribute(
            'style',
            `width: ${width}px; height: ${height}px;`,
          );
          fixedRef.current?.setAttribute(
            'style',
            `position: fixed; top: ${offsetTop}px`,
          );
          if (!affix.current) {
            affix.current = true;
            onChange?.(true);
          }
        } else if (
          'offsetBottom' in props &&
          !('offsetTop' in props) &&
          clientHeight - bottom <= offsetBottom!
        ) {
          fakeRef.current?.setAttribute(
            'style',
            `width: ${width}px; height: ${height}px;`,
          );
          fixedRef.current?.setAttribute(
            'style',
            `position: fixed; bottom: ${offsetBottom}px`,
          );
          if (!affix.current) {
            affix.current = true;
            onChange?.(true);
          }
        } else {
          fakeRef.current?.setAttribute('style', '');
          fixedRef.current?.setAttribute('style', '');
          if (affix.current) {
            affix.current = false;
            onChange?.(false);
          }
        }
      };

      window.addEventListener('scroll', updateFn.current, false);

      const ob = new ResizeObserver(updateFn.current);
      ob.observe(node);
    },
    [offsetTop, offsetBottom],
  );

  return (
    <div ref={wrapperRefCB} style={style} onClick={onClick} {...others}>
      <div ref={fakeRef} />
      <div ref={fixedRef}>{children}</div>
    </div>
  );
};

export default Affix;
