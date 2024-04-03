export interface ButtonThemeProps {
  /**
   * @description 禁用状态边框颜色
   * @default #d9d9d9
   */
  borderColorDisabled?: string;
  /**
   * @description 按钮内容字体大小
   * @default 14
   */
  contentFontSize?: number;
  /**
   * @description 大号按钮内容字体大小
   * @default 16
   */
  contentFontSizeLG?: number;
  /**
   * @description 小号按钮内容字体大小
   * @default 14
   */
  contentFontSizeSM?: number;
  /**
   * @description 按钮内容字体行高
   * @default 1.5714285714285714
   */
  contentLineHeight?: number;
  /**
   * @description 大号按钮内容字体行高
   * @default 1.5
   */
  contentLineHeightLG?: number;
  /**
   * @description 小号按钮内容字体行高
   * @default 1.5714285714285714
   */
  contentLineHeightSM?: number;
  /**
   * @description 危险按钮文本颜色
   * @default #fff14
   */
  dangerColor?: string;
  /**
   * @description 危险按钮阴影
   * @default 0 2px 0 rgba(255, 38, 5, 0.06)
   */
  dangerShadow?: string;
  /**
   * @description 默认按钮激活态背景色
   * @default #ffffff
   */
  defaultActiveBg?: string;
  /**
   * @description 默认按钮激活态边框颜色
   * @default #0958d9
   */
  defaultActiveBorderColor?: string;
  /**
   * @description 默认按钮激活态文字颜色
   * @default #0958d9
   */
  defaultActiveColor?: string;
  /**
   * @description 默认按钮背景色
   * @default 	#ffffff
   */
  defaultBg?: string;
  /**
   * @description 默认按钮边框颜色
   * @default 	#d9d9d9
   */
  defaultBorderColor?: string;
  /**
   * @description 默认按钮文本颜色
   * @default 	rgba(0, 0, 0, 0.88)
   */
  defaultColor?: string;
  /**
   * @description 默认幽灵按钮边框颜色
   * @default 	#ffffff
   */
  defaultGhostBorderColor?: string;
  /**
   * @description 默认幽灵按钮文本颜色
   * @default 	#ffffff
   */
  defaultGhostColor?: string;
  /**
   * @description 默认按钮悬浮态背景色
   * @default 	#ffffff
   */
  defaultHoverBg?: string;
  /**
   * @description 默认按钮悬浮态边框颜色
   * @default 	#4096ff
   */
  defaultHoverBorderColor?: string;
  /**
   * @description 	默认按钮悬浮态文本颜色
   * @default 	#4096ff
   */
  defaultHoverColor?: string;
  /**
   * @description 	默认按钮阴影
   * @default 0 2px 0 rgba(0, 0, 0, 0.02)
   */
  defaultShadow: string;
  /**
   * @description 	文字字重
   * @default 400
   */
  fontWeight: number;
  /**
   * @description 幽灵按钮背景色
   * @default transparent
   */
  ghostBg?: string;
  /**
   * @description 按钮组边框颜色
   * @default 	#4096ff
   */
  groupBorderColor?: string;
  /**
   * @description 链接按钮悬浮态背景色
   * @default transparent
   */
  linkHoverBg?: string;
  /**
   * @description 只有图标的按钮图标尺寸
   * @default 16
   */
  onlyIconSize?: number;
  /**
   * @description 大号只有图标的按钮图标尺寸
   * @default 18
   */
  onlyIconSizeLG?: number;
  /**
   * @description 小号只有图标的按钮图标尺寸
   * @default 14
   */
  onlyIconSizeSM?: number;
  /**
   * @description 按钮纵向内间距
   * @default 4
   */
  paddingBlock?: number;
  /**
   * @description 	大号按钮纵向内间距
   * @default 7
   */
  paddingBlockLG?: number;
  /**
   * @description 	小号按钮纵向内间距
   * @default 0
   */
  paddingBlockSM?: number;
  /**
   * @description 		按钮横向内间距
   * @default 15
   */
  paddingInline?: number;
  /**
   * @description 		大号按钮横向内间距
   * @default 15
   */
  paddingInlineLG?: number;
  /**
   * @description 		小号按钮横向内间距
   * @default 7
   */
  paddingInlineSM?: number;
  /**
   * @description 主要按钮文本颜色
   * @default #fff
   */
  primaryColor?: string;
  /**
   * @description 主要按钮阴影
   * @default 0 2px 0 rgba(5, 145, 255, 0.1)
   */
  primaryShadow?: string;
  /**
   * @description 		文本按钮悬浮态背景色
   * @default rgba(0, 0, 0, 0.06)
   */
  textHoverBg?: string;
}
