import classNames from 'classnames';
import React, { ReactNode, useEffect, useRef, useState, type FC } from 'react';

import './index.less';

export interface XYRadioProps {
  /**
   * @description 设置单选框的值
   * @default -
   */
  value?: string;
  /**
   * @description 自定义样式类名
   * @default -
   */
  className?: string;
  /**
   * @description 设置单选框状态
   * @default false
   */
  checked?: boolean;
  /**
   * @description 设置单选框是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 设置内部节点
   * @default null
   */
  children?: ReactNode;
  /**
   * @description 设置单选框样式
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
  /**
   * @description 监听单选框改变
   * @default null
   * @type (event: React.FormEvent) => void
   */
  onChange?: (event: React.FormEvent) => void;
}

export type XYRadioElement = FC<XYRadioProps>;

const Radio: XYRadioElement = (props) => {
  const { className, children, disabled, style, value, onChange, ...others } =
    props;

  const [checked, setChecked] = useState(false);

  const inputEl = useRef(null);

  useEffect(() => {
    if ('checked' in props && props.checked !== checked) {
      setChecked(props.checked!);
    }
  }, [props.checked]);

  const cls = classNames({
    'xy-radio': true,
    'xy-radio-checked': checked,
    'xy-radio-disabled': disabled,
    [className as string]: !!className,
  });

  const wrapperCls = classNames({
    'xy-radio-wrapper': true,
    'xy-radio-wrapper-disabled': disabled,
  });

  const handleClick = (e: React.FormEvent) => {
    if (checked || disabled) return;

    if (!('checked' in props)) {
      setChecked(true);
    }

    if (typeof onChange === 'function') {
      e.target = inputEl.current!;
      onChange(e);
    }
  };

  return (
    <label
      className={wrapperCls}
      style={style}
      onClick={handleClick}
      {...others}
    >
      <span className={cls}>
        <input
          type="radio"
          className="xy-radio-input"
          ref={inputEl}
          value={value}
        />
        <span className="xy-radio-inner"></span>
      </span>
      <span>{children}</span>
    </label>
  );
};

export default Radio;
