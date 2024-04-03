import classNames from 'classnames';
import React, { ReactNode, useEffect, useState, type FC } from 'react';
import CheckboxContext from './context';

import './index.less';

export interface XYCheckboxGroupProps {
  /**
   * @description 前缀样式类名
   * @default -
   */
  prefixCls?: string;
  /**
   * @description 设置复选框组默认值
   * @default -
   */
  defaultValue?: Array<string>;
  /**
   * @description 设置复选框组值
   * @default -
   */
  value?: Array<string>;
  /**
   * @description 设置复选框是否选中
   * @default false
   */
  checked?: boolean;
  /**
   * @description 设置复选框禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 自定义样式类名
   * @default ""
   */
  className?: string;
  /**
   * @description 设置内部节点
   * @default null
   */
  children?: ReactNode;
  /**
   * @description 设置复选框样式
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
  /**
   * @description 监听复选框改变
   * @default null
   * @type (event: React.FormEvent) => void
   */
  onChange?: (e: any) => void;
}

export interface CheckboxChangeEventTarget {
  value: string;
  checked: boolean;
}

export interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
}

export type XYCheckboxGroupElement = FC<XYCheckboxGroupProps>;

const Checkbox: XYCheckboxGroupElement = (props) => {
  const { disabled, children, onChange, ...others } = props;

  const [value, setValue] = useState<Array<string>>(
    props.defaultValue || props.value || [],
  );

  useEffect(() => {
    if ('value' in props) {
      setValue(props.value!);
    }
  }, [props.value]);

  const cls = classNames({
    'xy-checkbox-group': true,
  });

  const handleChange = (e: CheckboxChangeEvent) => {
    const targetValue = e.target.value;
    const idx = value.indexOf(targetValue);
    const checked = e.target.checked;

    let nvalue = value;
    if (idx === -1 && checked) {
      nvalue = value.concat([targetValue]);
      setValue(nvalue);
    } else if (idx > -1 && !checked) {
      value.splice(idx, 1);
      nvalue = value.concat([]);
      setValue(nvalue);
    }

    onChange?.(nvalue);
  };

  return (
    <span className={cls}>
      <CheckboxContext.Provider
        value={{
          onChange: handleChange,
          disabled: disabled,
          value,
        }}
      >
        {children}
      </CheckboxContext.Provider>
    </span>
  );
};

export default Checkbox;
