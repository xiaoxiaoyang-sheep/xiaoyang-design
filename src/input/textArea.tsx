import classNames from 'classnames';
import React, {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type FC,
} from 'react';

import './index.less';

export type AutoSizeType = {
  minRows: number;
  maxRows: number;
};

export interface XYTextAreaProps {
  /**
   * @description 设置文本域默认内容
   * @default -
   */
  defaultValue?: string;
  /**
   * @description 设置文本域内容
   * @default -
   */
  value?: string;
  /**
   * @description 设置文本域提示内容
   * @default -
   */
  placeholder?: string;
  /**
   * @description 设置文本域自动高度
   * @default false
   */
  autoSize?: boolean | AutoSizeType;
  /**
   * @description 设置文本域是否展示字数
   * @default false
   */
  showCount?: boolean;
  /**
   * @description 设置文本域最大长度
   * @default 20
   */
  maxLength?: number;
  /**
   * @description 自定义样式类名
   * @default -
   */
  className?: string;
  /**
   * @description 设置文本域样式
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
  /**
   * @description 监听文本域改变
   * @default null
   */
  onChange?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
}

export type XYTextAreaElement = FC<XYTextAreaProps>;

const hiddenStyle: CSSProperties = {
  visibility: 'hidden',
  position: 'absolute',
  zIndex: '-1000',
  top: '-1000px',
  overflowY: 'hidden',
  left: 0,
  right: 0,
};

const TextArea: XYTextAreaElement = (props) => {
  const {
    className,
    showCount = false,
    defaultValue,
    value: pvalue,
    style,
    autoSize = false,
    placeholder,
    onChange,
    ...others
  } = props;

  const [value, setValue] = useState(defaultValue || pvalue || '');
  const [height, setHeight] = useState<number>(0);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fakeRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if ('value' in props) {
      setValue(pvalue!);
    }
  }, [pvalue]);

  useLayoutEffect(() => {
    if (autoSize) {
      let line = value.split('\n').length;
      if (line < 2) line = 2;

      const fakeNode = fakeRef.current!;
      fakeNode.value = value;

      fakeNode.setAttribute('rows', '2');
      const minHeight = fakeNode.clientHeight;
      const height = fakeNode.scrollHeight;

      textareaRef.current?.setAttribute(
        'style',
        `min-height: ${minHeight}px; height: ${height}px;`,
      );

      fakeNode.setAttribute('rows', '1');

      if (typeof autoSize === 'object') {
        const { maxRows, minRows } = autoSize;

        fakeNode.setAttribute('rows', minRows.toString());
        const minHeight = fakeNode.clientHeight;
        fakeNode.setAttribute('rows', maxRows.toString());
        const maxHeight = fakeNode.clientHeight;

        textareaRef.current?.setAttribute(
          'style',
          `min-height: ${minHeight}px; max-height: ${maxHeight}px; height: ${height}px;`,
        );

        fakeNode.setAttribute('rows', '1');
      }
    }
  }, [value]);

  const cls = classNames({
    'xy-input': true,
    [className as string]: !!className,
  });

  const wrapperCls = classNames({
    'xy-input-textarea': true,
    'xy-input-textarea-show-count': showCount,
  });

  const textareaStyle: CSSProperties = {
    ...style,
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!('value' in props)) {
      const value = e.target.value;
      setValue(value);
    }

    onChange?.(e);
  };

  const textarea = (
    <textarea
      className={cls}
      value={value}
      style={textareaStyle}
      placeholder={placeholder}
      onChange={handleChange}
      ref={textareaRef}
      {...others}
    />
  );

  if (props.showCount && props.maxLength) {
    return (
      <span
        className={wrapperCls}
        data-count={`${value.length}/${props.maxLength}`}
      >
        {textarea}
      </span>
    );
  }

  return (
    <>
      {textarea}
      {autoSize ? (
        <textarea className={cls} ref={fakeRef} data-fade style={hiddenStyle} />
      ) : null}
    </>
  );
};

export default TextArea;
