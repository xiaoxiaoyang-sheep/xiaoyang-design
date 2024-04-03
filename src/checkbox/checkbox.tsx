import classNames from 'classnames';
import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
  type FC,
} from 'react';
import checkboxContext from './context';

import './index.less';

export interface XYCheckboxProps {
  /**
   * @description 前缀样式类名
   * @default -
   */
  prefixCls?: string;
  /**
   * @description 设置复选框默认选择
   * @default -
   */
  defaultChecked?: boolean;
  /**
   * @description 设置复选框是否选中
   * @default false
   */
  checked?: boolean;
  /**
   * @description 设置复选框值
   * @default -
   */
  value?: string;
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

export type XYCheckboxElement = FC<XYCheckboxProps>;

const Checkbox: XYCheckboxElement = (props) => {
  const { prefixCls = 'xy-', onChange, disabled, value } = props;

  const [checked, setChecked] = useState(props.defaultChecked || false);

  const inputEl = useRef(null);
  const {
    onChange: conChange,
    disabled: cdisabled,
    value: values,
  } = useContext(checkboxContext);

  useEffect(() => {
    if ('checked' in props) {
      setChecked(props.checked || false);
    }
  }, [props.checked]);

  useEffect(() => {
    if (values && 'value' in props) {
      setChecked(values.indexOf(props.value!) > -1);
    }
  }, [values]);

  const handleClick = (e: any) => {
    if (props.disabled || cdisabled) {
      return;
    }

    const state = !checked;
    if (!('checked' in props)) {
      setChecked(state);
    }

    if (typeof onChange === 'function') {
      e.target = inputEl.current;
      e.target.checked = state;
      onChange(e);
    }

    if (typeof conChange === 'function') {
      e.target = inputEl.current;
      e.target.checked = state;
      conChange(e);
    }
  };

  const handleChange = () => {};

  const cls = classNames({
    [`${prefixCls}checkbox`]: true,
    [`${prefixCls}checkbox-checked`]: checked,
    [`${prefixCls}checkbox-disabled`]: props.disabled || cdisabled,
  });

  const wrapperCls = classNames({
    [`${prefixCls}checkbox-wrapper`]: true,
    [`${prefixCls}checkbox-wrapper-disabled`]: props.disabled || cdisabled,
  });

  return (
    <span className={wrapperCls} onClick={handleClick}>
      <span className={cls}>
        <input
          type="checkbox"
          ref={inputEl}
          className="xy-checkbox-input"
          value={value}
          checked={checked}
          onChange={handleChange}
        />
        <span className="xy-checkbox-inner"></span>
      </span>
      <span>{props.children}</span>
    </span>
  );
};

export default Checkbox;
