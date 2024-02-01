/**
 * @zh 徽章颜色，支持 hex、rgb、rgba、hsl、hsla
 * @en Badge color, support hex, rgb, rgba, hsl, hsla
 */
type TOptionTextColor = {
  /**
   * @zh 背景颜色
   * @en Background color
   */
  bg: string;
  /**
   * @zh 文字颜色
   * @en Text color
   */
  fg: string;
};

/**
 * @zh 徽章内边距，与 CSS padding 属性一致，但只支持数字，单位是 px
 * @en Badge padding，consistent with CSS padding property, but only supports numbers, the unit is px
 */
type TOptionsPadding = number | [number, number?, number?, number?];

/**
 * @zh 字体设置
 * @en Font setting
 */
type TOptionsFont = {
  /**
   * @zh 字体，默认：DejaVu Sans,Verdana,Geneva,'Microft YaHei','Microft YaHei UI',sans-serif`
   * @en Font, default: DejaVu Sans,Verdana,Geneva,'Microft YaHei','Microft YaHei UI',sans-serif`
   */
  family: string;
  /**
   * @zh 字号
   * @en Font size
   */
  size: number;
  /**
   * @zh 字重
   * @en Font weight
   */
  weight: number | string;
  /**
   * @zh 行高
   * @en Line height
   */
  lineHeight: number;
  /**
   * @zh 阴影
   * @en Shadow
   */
  shadow: string;
};

/**
 * @zh 徽章样式
 * @en Badge style
 */
type TOptionsTextStyle = {
  /**
   * @zh 文字
   * @en Text
   */
  text: string;
  /**
   * @zh 内边距
   * @en Padding
   */
  padding: TOptionsPadding;
  /**
   * @zh 圆角，0 表示直角，单位是 px
   * @en Radius, 0 means right angle, the unit is px
   */
  radius: number;
  /**
   * @zh 颜色，支持 hex、rgb、rgba、hsl、hsla
   * @en Color, support hex, rgb, rgba, hsl, hsla
   */
  color: TOptionTextColor;

  /**
   * @zh 字体
   * @en Font
   */
  font: TOptionsFont;
};

/**
 * @zh 控制台类型，默认：log
 * @en Console type, default: log
 */
type TType = 'debug' | 'error' | 'info' | 'log' | 'warn';

/**
 * @zh 阅读方向，默认：ltr
 * @en Reading direction, default: ltr
 */
type TDirection = 'ltr' | 'rtl';

export { TOptionTextColor, TOptionsPadding, TOptionsFont, TOptionsTextStyle, TType, TDirection };
