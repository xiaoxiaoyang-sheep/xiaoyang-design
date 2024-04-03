import classNames from 'classnames';
import React, { useState, type FC } from 'react';
import { Radio, XYRadioElement, XYRadioProps } from './index';
import './index.less';

export interface XYRadioGroupProps {
  /**
   * @description 设置单选框组的值
   * @default -
   */
  value?: string;
  /**
   * @description 设置单选框组的默认值值
   * @default -
   */
  defaultValue?: string;
  /**
   * @description 自定义样式类名
   * @default -
   */
  className?: string;
  /**
   * @description 设置单选框组状态
   * @default false
   */
  checked?: boolean;
  /**
   * @description 设置单选框组是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 设置内部节点
   * @default null
   * @type XYRadioElement
   */
  children: XYRadioElement;
  /**
   * @description 设置单选框组样式
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
  /**
   * @description 监听单选框组改变
   * @default null
   * @type (event: React.FormEvent) => void
   */
  onChange?: (event: React.FormEvent) => void;
}

export type XYRadioGroupElement = FC<XYRadioGroupProps>;

const RadioGroup: XYRadioGroupElement = (props) => {
  const { className, children, disabled, style, onChange, ...others } = props;

  const [value, setValue] = useState(props.defaultValue || props.value);

  const cls = classNames({
    'xy-radio-group': true,
  });

  const handleClick = (e: any) => {
    const value = e.target.value;
    setValue(value);
    onChange?.(e);
  };

  const newChildren = React.Children.map(children, (child: any) => {
    if (child.type !== Radio) {
      return null;
    }
    return React.cloneElement(child, {
      checked: child.props.value === value,
      disabled: disabled,
      onChange: handleClick,
    } as XYRadioProps);
  });

  return (
    <span className={cls} {...others}>
      {newChildren}
    </span>
  );
};

export default RadioGroup;
