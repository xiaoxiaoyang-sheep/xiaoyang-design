import { LoadingOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import React, { ReactNode, useEffect, useState, type FC } from 'react';

import './index.less';

export interface XYSwitchProps {
  /**
   * @description 自定义样式类名
   * @default -
   */
  className?: string;
  /**
   * @description 设置开关默认选择状态
   * @default true
   */
  defaultChecked?: boolean;
  /**
   * @description 设置开关选择状态
   * @default true
   */
  checked?: boolean;
  /**
   * @description 设置开关大小
   * @default medium
   */
  size?: 'small' | 'medium';
  /**
   * @description 设置开关禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 设置开关是否加载
   * @default false
   */
  loading?: boolean;
  /**
   * @description 设置开关样式
   * @default null
   * @type React.CSSProperties
   */
  style?: React.CSSProperties;
  /**
   * @description 设置开关选中子组件
   * @default null
   * @type ReactNode
   */
  checkedChildren?: ReactNode;
  /**
   * @description 设置开关未选中子组件
   * @default null
   * @type ReactNode
   */
  unCheckedChildren?: ReactNode;
  /**
   * @description 监听开关改变事件
   * @default null
   */
  onChange?: (checked: boolean) => void;
}

export type XYSwitchElement = FC<XYSwitchProps>;

const Switch: XYSwitchElement = (props) => {
  const {
    className,
    disabled,
    defaultChecked,
    checked: pchecked,
    style,
    loading,
    size,
    onChange,
    checkedChildren,
    unCheckedChildren,
    ...others
  } = props;

  const [checked, setChecked] = useState(defaultChecked || pchecked || false);

  useEffect(() => {
    if ('checked' in props) {
      setChecked(pchecked!);
    }
  }, [pchecked]);

  const cls = classNames({
    'xy-switch': true,
    'xy-switch-checked': checked,
    'xy-switch-disabled': disabled,
    'xy-switch-small': size === 'small',
    [className as string]: !!className,
  });

  const handleClick = () => {
    if (disabled) return;

    if (!('checked' in props)) {
      setChecked(!checked);
    }
    onChange?.(!checked);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked="true"
      className={cls}
      onClick={handleClick}
      {...others}
    >
      <div className="xy-switch-handle">
        {loading && <LoadingOutlined className="xy-switch-loading-icon" />}
      </div>
      <span className="xy-switch-inner">
        {checked ? checkedChildren : unCheckedChildren}
      </span>
    </button>
  );
};

export default Switch;
