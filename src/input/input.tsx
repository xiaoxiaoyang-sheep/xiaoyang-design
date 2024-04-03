import classNames from 'classnames';
import React, { useEffect, useState, type FC } from 'react';

import './index.less';

export interface XYInputProps {
  /**
   * @description 设置输入框前缀
   * @default -
   * @type JSX.Element
   */
  prefix?: JSX.Element;
  /**
   * @description 设置输入框默认内容
   * @default -
   */
  defaultValue?: string;
  /**
   * @description 设置输入框内容
   * @default -
   */
  value?: string;
  /**
   * @description 设置输入框提示内容
   * @default -
   */
  placeholder?: string;
  /**
   * @description 设置输入框大小
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * @description 设置输入框最大长度
   * @default 20
   */
  maxLength?: number;
  /**
   * @description 自定义样式类名
   * @default -
   */
  className?: string;
  /**
   * @description 设置输入框样式
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
  /**
   * @description 监听输入框改变
   * @default null
   */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export type XYInputElement = FC<XYInputProps>;

const Input: XYInputElement = (props) => {
  const {
    className,
    size = 'medium',
    defaultValue,
    value: pvalue,
    style,
    placeholder,
    prefix,
    onChange,
    ...others
  } = props;

  const [value, setValue] = useState(defaultValue || pvalue || '');

  useEffect(() => {
    if ('value' in props) {
      setValue(pvalue!);
    }
  }, [pvalue]);

  const cls = classNames({
    'xy-input': true,
    'xy-input-lg': size === 'large',
    'xy-input-sm': size === 'small',
    [className as string]: !!className,
  });

  const wrapperCls = classNames({
    'xy-input-affix-wrapper': true,
    'xy-input-affix-wrapper-lg': size === 'large',
    'xy-input-affix-wrapper-sm': size === 'small',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!('value' in props)) {
      setValue(e.target.value);
    }
    onChange?.(e);
  };

  const input = (
    <input
      className={cls}
      value={value}
      style={style}
      placeholder={placeholder}
      onChange={handleChange}
      {...others}
    />
  );

  if (props.maxLength || prefix) {
    return (
      <span className={wrapperCls}>
        {prefix ? <span className="xy-input-prefix">{prefix}</span> : null}
        {input}
        {props.maxLength ? (
          <span className="xy-input-suffix">
            <span className="xy-input-show-count-suffix">
              {value.length} / {props.maxLength}
            </span>
          </span>
        ) : null}
      </span>
    );
  }

  return input;
};

export default Input;
