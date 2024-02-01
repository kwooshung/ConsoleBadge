import { TDirection, TType, TOptionTextColor, TOptionsFont, TOptionsPadding, TOptionsTextStyle } from './interface';

const fontFamily = `DejaVu Sans,Verdana,Geneva,'Microft YaHei','Microft YaHei UI',sans-serif`;

class ConsoleBadge {
  public leftStyle: TOptionsTextStyle = {
    text: '@kwooshung',
    padding: [6, 4, 6, 6],
    radius: 3,
    color: {
      bg: '#555',
      fg: '#fff'
    },
    font: {
      size: 12,
      weight: 'bold',
      family: fontFamily,
      lineHeight: 8,
      shadow: '0 1px 0 rgba(1, 1, 1, .3)'
    }
  };
  public rightStyle: TOptionsTextStyle = {
    text: 'console-badge',
    padding: [6, 6, 6, 4],
    radius: 3,
    color: {
      bg: '#4c1',
      fg: '#fff'
    },
    font: {
      size: 12,
      weight: 'normal',
      family: fontFamily,
      lineHeight: 8,
      shadow: '0 1px 0 rgba(1, 1, 1, .3)'
    }
  };
  public dir: TDirection = 'ltr';
  public consoleType: TType = 'log';

  /**
   * @zh 构造函数
   * @en Constructor
   * @param {string} [leftText=''] 左边文字
   * @param {string} [rightText=''] 右边文字
   */
  constructor(leftText: string = '', rightText: string = '') {
    this.text(leftText, rightText);
  }

  /**
   * @zh 设置阅读方向
   * @en Set reading direction
   * @param {TDirection} direction 方向
   * @returns {ConsoleBadge} 返回自身
   */
  public direction(direction: TDirection): ConsoleBadge {
    this.dir = direction;
    return this;
  }

  /**
   * @zh 设置console输出类型
   * @en Set console output type
   * @param {TType} type 类型
   * @returns {ConsoleBadge} 返回自身
   */
  public type(type: TType): ConsoleBadge {
    this.consoleType = type;
    return this;
  }

  /**
   * @zh 设置文字
   * @en Set text
   * @param {string} leftText 左边文字
   * @param {string} rightText 右边文字
   */
  public text(leftText: string, rightText: string): ConsoleBadge {
    this.leftText(leftText);
    this.rightText(rightText);
    return this;
  }

  /**
   * @zh 设置颜色
   * @en Set color
   * @param {TOptionTextColor} leftColor 左边颜色
   * @param {TOptionTextColor} [rightColor] 右边颜色，如果不传则与左边颜色一致
   * @returns {ConsoleBadge} 返回自身
   */
  public color(leftColor: TOptionTextColor, rightColor?: TOptionTextColor): ConsoleBadge {
    this.leftColor(leftColor);
    this.rightColor(rightColor ?? leftColor);
    return this;
  }

  /**
   * @zh 设置背景色
   * @en Set background color
   * @param {string} leftBgColor 左边背景色
   * @param {string} [rightBgColor] 右边背景色，如果不传则与左边背景色一致
   * @returns {ConsoleBadge} 返回自身
   */
  public bgColor(leftBgColor: string, rightBgColor?: string): ConsoleBadge {
    this.leftBgColor(leftBgColor);
    this.rightBgColor(rightBgColor ?? leftBgColor);
    return this;
  }

  /**
   * @zh 设置前景色，即文字颜色
   * @en Set foreground color, that is, text color
   * @param {string} leftFgColor 左边前景色
   * @param {string} [rightFgColor] 右边前景色，如果不传则与左边前景色一致
   * @returns {ConsoleBadge} 返回自身
   */
  public fgColor(leftFgColor: string, rightFgColor?: string): ConsoleBadge {
    this.leftFgColor(leftFgColor);
    this.rightFgColor(rightFgColor ?? leftFgColor);
    return this;
  }

  /**
   * @zh 设置内边距，与 CSS padding 属性一致，但只支持数字，单位是 px
   * @en Set padding, consistent with CSS padding property, but only supports numbers, the unit is px
   * @param {TOptionsPadding} leftPadding 左边内边距
   * @param {TOptionsPadding} [rightPadding] 右边内边距，如果不传则与左边内边距一致
   * @returns {ConsoleBadge} 返回自身
   */
  public padding(leftPadding: TOptionsPadding, rightPadding?: TOptionsPadding): ConsoleBadge {
    this.leftPadding(leftPadding);
    this.rightPadding(rightPadding ?? leftPadding);
    return this;
  }

  /**
   * @zh 设置圆角半径
   * @en Set corner radius
   * @param {number} [leftRadius=3] 左边半径，单位是 px
   * @param {number} [rightRadius] 右边半径，单位是 px，如果不传则与左边半径一致
   * @returns {ConsoleBadge} 返回自身
   */
  public radius(leftRadius: number = 3, rightRadius?: number): ConsoleBadge {
    this.leftRadius(leftRadius);
    this.rightRadius(rightRadius ?? leftRadius);
    return this;
  }

  /**
   * @zh 设置字体样式
   * @en Set font
   * @param {TOptionsFont} leftFont 左边字体
   * @param {TOptionsFont} [rightFont] 右边字体，如果不传则与左边字体一致
   * @returns {ConsoleBadge} 返回自身
   */
  public font(leftFont: TOptionsFont, rightFont?: TOptionsFont): ConsoleBadge {
    this.leftFont(leftFont);
    this.rightFont(rightFont ?? leftFont);
    return this;
  }

  /**
   * @zh 设置文本字体
   * @en Set font family
   * @param {string} [leftFamily=fontFamily] 左边字体名称
   * @param {string} [rightFamily] 右边字体名称，如果不传则与左边字体名称一致
   * @returns {ConsoleBadge} 返回自身
   */
  public fontFamily(leftFamily: string = fontFamily, rightFamily?: string): ConsoleBadge {
    this.leftFontFamily(leftFamily);
    this.rightFontFamily(rightFamily ?? leftFamily);
    return this;
  }

  /**
   * @zh 设置文本字体大小
   * @en Set font size
   * @param {number} [leftSize=12] 左边字体大小
   * @param {number} [rightSize] 右边字体大小，如果不传则与左边字体大小一致
   * @returns {ConsoleBadge} 返回自身
   */
  public fontSize(leftSize: number = 12, rightSize?: number): ConsoleBadge {
    this.leftFontSize(leftSize);
    this.rightFontSize(rightSize ?? leftSize);
    return this;
  }

  /**
   * @zh 设置文本字体字重
   * @en Set font weight
   * @param {number | string} [leftWeight='bold'] 左边字体字重
   * @param {number | string} [rightWeight] 右边字体字重，如果不传则与左边字体字重一致
   * @returns {ConsoleBadge} 返回自身
   */
  public fontWeight(leftWeight: number | string = 'bold', rightWeight?: number | string): ConsoleBadge {
    this.leftFontWeight(leftWeight);
    this.rightFontWeight(rightWeight ?? leftWeight);
    return this;
  }

  /**
   * @zh 设置文本行高
   * @en Set line height
   * @param {number} [leftLineHeight=22] 左边行高
   * @param {number} [rightLineHeight] 右边行高，如果不传则与左边行高一致
   * @returns {ConsoleBadge} 返回自身
   */
  public lineHeight(leftLineHeight: number = 22, rightLineHeight?: number): ConsoleBadge {
    this.leftLineHeight(leftLineHeight);
    this.rightLineHeight(rightLineHeight ?? leftLineHeight);
    return this;
  }

  /**
   * @zh 设置文本字体阴影
   * @en Set shadow
   * @param {string} [leftShadow='0 1px 0 rgba(1, 1, 1, .3)'] 左边阴影
   * @param {string} [rightShadow] 右边阴影，如果不传则与左边阴影一致
   * @returns {ConsoleBadge} 返回自身
   */
  public textShadow(leftShadow: string = '0 1px 0 rgba(1, 1, 1, .3)', rightShadow?: string): ConsoleBadge {
    this.leftTextShadow(leftShadow);
    this.rightTextShadow(rightShadow ?? leftShadow);
    return this;
  }

  /**
   * @zh 设置左边样式
   * @en Set left style
   * @param {TOptionsTextStyle} style 样式
   * @returns {ConsoleBadge} 返回自身
   */
  public left(style: TOptionsTextStyle): ConsoleBadge {
    this.leftStyle = { ...this.leftStyle, ...style };
    return this;
  }

  /**
   * @zh 设置左边文字
   * @en Set left text
   * @param {string} text 文字
   * @returns {ConsoleBadge} 返回自身
   */
  public leftText(text: string): ConsoleBadge {
    this.leftStyle.text = text;
    return this;
  }

  /**
   * @zh 设置左边文字颜色
   * @en Set left text color
   * @param {TOptionTextColor} color 颜色
   * @returns {ConsoleBadge} 返回自身
   */
  public leftColor(color: TOptionTextColor): ConsoleBadge {
    this.leftStyle.color = { ...this.leftStyle.color, ...color };
    return this;
  }

  /**
   * @zh 设置左边背景色，支持 hex、rgb、rgba、hsl、hsla
   * @en Set left background color，support hex, rgb, rgba, hsl, hsla
   * @param {string} color 颜色
   * @returns {ConsoleBadge} 返回自身
   */
  public leftBgColor(color: string): ConsoleBadge {
    this.leftStyle.color.bg = color;
    return this;
  }

  /**
   * @zh 设置左边前景色，即文字颜色，支持 hex、rgb、rgba、hsl、hsla
   * @en Set left foreground color, that is, text color, support hex, rgb, rgba, hsl, hsla
   * @param {string} color 颜色
   * @returns {ConsoleBadge} 返回自身
   */
  public leftFgColor(color: string): ConsoleBadge {
    this.leftStyle.color.fg = color;
    return this;
  }

  /**
   * @zh 设置左边内边距，与 CSS padding 属性一致，但只支持数字，单位是 px
   * @en Set left padding, consistent with CSS padding property, but only supports numbers, the unit is px
   * @param {TOptionsPadding} padding 内边距
   * @returns {ConsoleBadge} 返回自身
   */
  public leftPadding(padding: TOptionsPadding): ConsoleBadge {
    this.leftStyle.padding = padding;
    return this;
  }

  /**
   * @zh 设置左边圆角半径
   * @en Set left corner radius
   * @param {number} [radius=3] 半径，单位是 px
   * @returns {ConsoleBadge} 返回自身
   */
  public leftRadius(radius: number = 3): ConsoleBadge {
    this.leftStyle.radius = radius;
    return this;
  }

  /**
   * @zh 设置左边文本样式
   * @en Set left text style
   * @param {TOptionsFont} font 字体
   * @returns {ConsoleBadge} 返回自身
   */
  public leftFont(font: TOptionsFont): ConsoleBadge {
    this.leftStyle.font = { ...this.leftStyle.font, ...font };
    return this;
  }

  /**
   * @zh 设置左边文本字体
   * @en Set left font family
   * @param {string} [family=fontFamily] 字体名称
   * @returns {ConsoleBadge} 返回自身
   */
  public leftFontFamily(family: string = fontFamily): ConsoleBadge {
    this.leftStyle.font.family = family;
    return this;
  }

  /**
   * @zh 设置左边文本字体大小
   * @en Set left font size
   * @param {number} [size=12] 字体大小
   * @returns {ConsoleBadge} 返回自身
   */
  public leftFontSize(size: number = 12): ConsoleBadge {
    this.leftStyle.font.size = size;
    return this;
  }

  /**
   * @zh 设置左边文本字体字重
   * @en Set left font weight
   * @param {number | string} [weight='bold'] 字体字重
   * @returns {ConsoleBadge} 返回自身
   */
  public leftFontWeight(weight: number | string = 'bold'): ConsoleBadge {
    this.leftStyle.font.weight = weight;
    return this;
  }

  /**
   * @zh 设置左边文本行高
   * @en Set left line height
   * @param {number} [lineHeight=22] 行高
   * @returns {ConsoleBadge} 返回自身
   */
  public leftLineHeight(lineHeight: number = 22): ConsoleBadge {
    this.leftStyle.font.lineHeight = lineHeight;
    return this;
  }

  /**
   * @zh 设置左边文本字体阴影
   * @en Set left text shadow
   * @param {string} [shadow='0 1px 0 rgba(1, 1, 1, .3)'] 阴影
   * @returns {ConsoleBadge} 返回自身
   */
  public leftTextShadow(shadow: string = '0 1px 0 rgba(1, 1, 1, .3)'): ConsoleBadge {
    this.leftStyle.font.shadow = shadow;
    return this;
  }

  /**
   * @zh 设置右边样式
   * @en Set right style
   * @param {TOptionsTextStyle} style 样式
   * @returns {ConsoleBadge} 返回自身
   */
  public right(style: TOptionsTextStyle): ConsoleBadge {
    this.rightStyle = { ...this.rightStyle, ...style };
    return this;
  }

  /**
   * @zh 设置右边文字
   * @en Set right text
   * @param {string} text 文字
   * @returns {ConsoleBadge} 返回自身
   */
  public rightText(text: string): ConsoleBadge {
    this.rightStyle.text = text;
    return this;
  }

  /**
   * @zh 设置右边文字颜色
   * @en Set right text color
   * @param {TOptionTextColor} color 颜色
   * @returns {ConsoleBadge} 返回自身
   */
  public rightColor(color: TOptionTextColor): ConsoleBadge {
    this.rightStyle.color = { ...this.rightStyle.color, ...color };
    return this;
  }

  /**
   * @zh 设置右边背景色，支持 hex、rgb、rgba、hsl、hsla
   * @en Set right background color，support hex, rgb, rgba, hsl, hsla
   * @param {string} color 颜色
   * @returns {ConsoleBadge} 返回自身
   */
  public rightBgColor(color: string): ConsoleBadge {
    this.rightStyle.color.bg = color;
    return this;
  }

  /**
   * @zh 设置右边前景色，即文字颜色，支持 hex、rgb、rgba、hsl、hsla
   * @en Set right foreground color, that is, text color, support hex, rgb, rgba, hsl, hsla
   * @param {string} color 颜色
   * @returns {ConsoleBadge} 返回自身
   */
  public rightFgColor(color: string): ConsoleBadge {
    this.rightStyle.color.fg = color;
    return this;
  }

  /**
   * @zh 设置右边内边距，与 CSS padding 属性一致，但只支持数字，单位是 px
   * @en Set right padding, consistent with CSS padding property, but only supports numbers, the unit is px
   * @param {TOptionsPadding} padding 内边距
   * @returns {ConsoleBadge} 返回自身
   */
  public rightPadding(padding: TOptionsPadding): ConsoleBadge {
    this.rightStyle.padding = padding;
    return this;
  }

  /**
   * @zh 设置右边圆角半径
   * @en Set right corner radius
   * @param {number} [radius=3] 半径，单位是 px
   * @returns {ConsoleBadge} 返回自身
   */
  public rightRadius(radius: number = 3): ConsoleBadge {
    this.rightStyle.radius = radius;
    return this;
  }

  /**
   * @zh 设置右边文本样式
   * @en Set right text style
   * @param {TOptionsFont} font 字体
   * @returns {ConsoleBadge} 返回自身
   */
  public rightFont(font: TOptionsFont): ConsoleBadge {
    this.rightStyle.font = { ...this.rightStyle.font, ...font };
    return this;
  }

  /**
   * @zh 设置右边文本字体
   * @en Set right font family
   * @param {string} [family=fontFamily] 字体名称
   * @returns {ConsoleBadge} 返回自身
   */
  public rightFontFamily(family: string = fontFamily): ConsoleBadge {
    this.rightStyle.font.family = family;
    return this;
  }

  /**
   * @zh 设置右边文本字体大小
   * @en Set right font size
   * @param {number} [size=12] 字体大小
   * @returns {ConsoleBadge} 返回自身
   */
  public rightFontSize(size: number = 12): ConsoleBadge {
    this.rightStyle.font.size = size;
    return this;
  }

  /**
   * @zh 设置右边文本字体字重
   * @en Set right font weight
   * @param {number | string} [weight='bold'] 字体字重
   * @returns {ConsoleBadge} 返回自身
   */
  public rightFontWeight(weight: number | string = 'bold'): ConsoleBadge {
    this.rightStyle.font.weight = weight;
    return this;
  }

  /**
   * @zh 设置右边文本行高
   * @en Set right line height
   * @param {number} [lineHeight=22] 行高
   * @returns {ConsoleBadge} 返回自身
   */
  public rightLineHeight(lineHeight: number = 22): ConsoleBadge {
    this.rightStyle.font.lineHeight = lineHeight;
    return this;
  }

  /**
   * @zh 设置右边文本字体阴影
   * @en Set right text shadow
   * @param {string} [shadow='0 1px 0 rgba(1, 1, 1, .3)'] 阴影
   * @returns {ConsoleBadge} 返回自身
   */
  public rightTextShadow(shadow: string = '0 1px 0 rgba(1, 1, 1, .3)'): ConsoleBadge {
    this.rightStyle.font.shadow = shadow;
    return this;
  }

  /**
   * @zh 构建样式字符串
   * @en Build style string
   * @param {TOptionsTextStyle} style 样式
   * @param {boolean} isLeft 是否左边
   * @param {boolean} isLtr 是否从左到右
   * @returns {string} 返回样式字符串
   */
  public buildStyleString(style: TOptionsTextStyle, isLeft: boolean, isLtr: boolean): string {
    const radius = [`${style.radius}px 0 0 ${style.radius}px`, `0 ${style.radius}px ${style.radius}px 0`];
    const borderRadius = isLeft ? (isLtr ? radius[0] : radius[1]) : isLtr ? radius[1] : radius[0];

    const baseStyle = [
      `color:${style.color.fg}`,
      `background-color:${style.color.bg}`,
      typeof style.padding === 'number' ? `padding:${style.padding}px` : `padding:${style.padding.join('px ')}px`,
      `border-radius:${borderRadius}`,
      `font-family:${style.font.family}`,
      `font-size:${style.font.size}px`,
      `font-weight:${style.font.weight}`,
      `line-height:${style.font.lineHeight}px`,
      `text-shadow:${style.font.shadow}`
    ];

    return baseStyle.join(';');
  }

  /**
   * @zh 输出徽章
   * @en Output badge
   * @returns {ConsoleBadge} 返回自身
   */
  public print(): ConsoleBadge {
    const isLtr = this.dir === 'ltr';
    const code = isLtr ? `%c ${this.leftStyle.text} %c ${this.rightStyle.text} %c` : `%c ${this.rightStyle.text} %c ${this.leftStyle.text} %c`;

    const styleCodeL = this.buildStyleString(this.leftStyle, true, isLtr);
    const styleCodeR = this.buildStyleString(this.rightStyle, false, isLtr);

    console[this.consoleType](code, styleCodeL, styleCodeR, 'background-color:transparent;');

    return this;
  }
}

export default ConsoleBadge;
