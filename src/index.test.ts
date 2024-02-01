import ConsoleBadge from '.';

describe('ConsoleBadge 类的完整测试', () => {
  let consoleBadge;
  const mockConsole = jest.spyOn(console, 'log').mockImplementation();

  beforeEach(() => {
    consoleBadge = new ConsoleBadge();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('构造函数应当正确设置默认值', () => {
    expect(consoleBadge.dir).toBe('ltr');
    expect(consoleBadge.consoleType).toBe('log');
    expect(consoleBadge.leftStyle).toEqual({
      text: '',
      padding: [6, 4, 6, 6],
      radius: 3,
      color: {
        bg: '#555',
        fg: '#fff'
      },
      font: {
        size: 12,
        weight: 'bold',
        family: `DejaVu Sans,Verdana,Geneva,'Microft YaHei','Microft YaHei UI',sans-serif`,
        lineHeight: 8,
        shadow: '0 1px 0 rgba(1, 1, 1, .3)'
      }
    });
    expect(consoleBadge.rightStyle).toEqual({
      text: '',
      padding: [6, 6, 6, 4],
      radius: 3,
      color: {
        bg: '#4c1',
        fg: '#fff'
      },
      font: {
        size: 12,
        weight: 'normal',
        family: `DejaVu Sans,Verdana,Geneva,'Microft YaHei','Microft YaHei UI',sans-serif`,
        lineHeight: 8,
        shadow: '0 1px 0 rgba(1, 1, 1, .3)'
      }
    });
  });

  it('direction 方法应当设置阅读方向', () => {
    consoleBadge.direction('rtl');
    expect(consoleBadge.dir).toBe('rtl');
  });

  it('type 方法应当设置console输出类型', () => {
    consoleBadge.type('warn');
    expect(consoleBadge.consoleType).toBe('warn');
  });

  it('text 方法应当设置左右文字', () => {
    consoleBadge.text('左边文字', '右边文字');
    expect(consoleBadge.leftStyle.text).toBe('左边文字');
    expect(consoleBadge.rightStyle.text).toBe('右边文字');
  });

  it('color 方法应当设置左右颜色', () => {
    const leftColor = { bg: '#123', fg: '#456' };
    const rightColor = { bg: '#789', fg: '#abc' };
    consoleBadge.color(leftColor, rightColor);
    expect(consoleBadge.leftStyle.color).toEqual(leftColor);
    expect(consoleBadge.rightStyle.color).toEqual(rightColor);
  });

  it('bgColor 方法应当设置左右背景颜色', () => {
    consoleBadge.bgColor('#001', '#002');
    expect(consoleBadge.leftStyle.color.bg).toBe('#001');
    expect(consoleBadge.rightStyle.color.bg).toBe('#002');
  });

  it('fgColor 方法应当设置左右前景色，即文字颜色', () => {
    consoleBadge.fgColor('#111', '#222');
    expect(consoleBadge.leftStyle.color.fg).toBe('#111');
    expect(consoleBadge.rightStyle.color.fg).toBe('#222');
  });

  it('padding 方法应当设置左右内边距', () => {
    consoleBadge.padding([1, 2, 3, 4], [4, 3, 2, 1]);
    expect(consoleBadge.leftStyle.padding).toEqual([1, 2, 3, 4]);
    expect(consoleBadge.rightStyle.padding).toEqual([4, 3, 2, 1]);
  });

  it('radius 方法应当设置左右圆角半径', () => {
    consoleBadge.radius(5, 10);
    expect(consoleBadge.leftStyle.radius).toBe(5);
    expect(consoleBadge.rightStyle.radius).toBe(10);
  });

  it('font 方法应当设置左右字体样式', () => {
    const leftFont = { size: 14, weight: 'normal', family: 'Arial', lineHeight: 24, shadow: 'none' };
    const rightFont = { size: 16, weight: 'bold', family: 'Times New Roman', lineHeight: 26, shadow: 'none' };
    consoleBadge.font(leftFont, rightFont);
    expect(consoleBadge.leftStyle.font).toEqual(leftFont);
    expect(consoleBadge.rightStyle.font).toEqual(rightFont);
  });

  it('fontFamily 方法应当设置左右文本字体', () => {
    consoleBadge.fontFamily('Arial', 'Times New Roman');
    expect(consoleBadge.leftStyle.font.family).toBe('Arial');
    expect(consoleBadge.rightStyle.font.family).toBe('Times New Roman');
  });

  it('fontSize 方法应当设置左右文本字体大小', () => {
    consoleBadge.fontSize(14, 16);
    expect(consoleBadge.leftStyle.font.size).toBe(14);
    expect(consoleBadge.rightStyle.font.size).toBe(16);
  });

  it('fontWeight 方法应当设置左右文本字体字重', () => {
    consoleBadge.fontWeight('normal', 'bold');
    expect(consoleBadge.leftStyle.font.weight).toBe('normal');
    expect(consoleBadge.rightStyle.font.weight).toBe('bold');
  });

  it('lineHeight 方法应当设置左右文本行高', () => {
    consoleBadge.lineHeight(24, 26);
    expect(consoleBadge.leftStyle.font.lineHeight).toBe(24);
    expect(consoleBadge.rightStyle.font.lineHeight).toBe(26);
  });

  it('textShadow 方法应当设置左右文本字体阴影', () => {
    const shadow = '1px 1px 2px #000';
    consoleBadge.textShadow(shadow, shadow);
    expect(consoleBadge.leftStyle.font.shadow).toBe(shadow);
    expect(consoleBadge.rightStyle.font.shadow).toBe(shadow);
  });

  it('left 和 right 方法应当分别设置左边和右边的样式', () => {
    const leftStyle = {
      text: '左边测试',
      padding: [7, 5, 7, 7],
      radius: 4,
      color: {
        bg: '#666',
        fg: '#eee'
      },
      font: {
        size: 14,
        weight: 'normal',
        family: 'Arial',
        lineHeight: 24,
        shadow: '1px 1px 1px rgba(0, 0, 0, 0.5)'
      }
    };
    const rightStyle = {
      text: '右边测试',
      padding: [7, 7, 7, 5],
      radius: 4,
      color: {
        bg: '#4c2',
        fg: '#eee'
      },
      font: {
        size: 14,
        weight: 'bold',
        family: 'Times New Roman',
        lineHeight: 24,
        shadow: '1px 1px 1px rgba(0, 0, 0, 0.5)'
      }
    };
    consoleBadge.left(leftStyle);
    consoleBadge.right(rightStyle);
    expect(consoleBadge.leftStyle).toEqual(leftStyle);
    expect(consoleBadge.rightStyle).toEqual(rightStyle);
  });

  it('fontWeight 方法在未传递 rightWeight 时应使用 leftWeight 作为默认值', () => {
    consoleBadge.fontWeight('normal');
    expect(consoleBadge.leftStyle.font.weight).toBe('normal');
    expect(consoleBadge.rightStyle.font.weight).toBe('normal');
  });

  it('fontWeight 方法在传递 rightWeight 时应分别设置 leftWeight 和 rightWeight', () => {
    consoleBadge.fontWeight('normal', 'bold');
    expect(consoleBadge.leftStyle.font.weight).toBe('normal');
    expect(consoleBadge.rightStyle.font.weight).toBe('bold');
  });

  it('bgColor 方法在未传递 rightBgColor 时应将 leftBgColor 同时应用于 leftStyle 和 rightStyle', () => {
    consoleBadge.bgColor('#123456');
    expect(consoleBadge.leftStyle.color.bg).toBe('#123456');
    expect(consoleBadge.rightStyle.color.bg).toBe('#123456');
  });

  it('bgColor 方法在传递 rightBgColor 时应分别设置 leftStyle 和 rightStyle 的背景色', () => {
    consoleBadge.bgColor('#123456', '#654321');
    expect(consoleBadge.leftStyle.color.bg).toBe('#123456');
    expect(consoleBadge.rightStyle.color.bg).toBe('#654321');
  });

  it('color 方法在未传递 rightColor 时应将 leftColor 同时应用于 leftStyle 和 rightStyle', () => {
    const leftColor = { bg: '#123', fg: '#456' };
    consoleBadge.color(leftColor);
    expect(consoleBadge.leftStyle.color).toEqual(leftColor);
    expect(consoleBadge.rightStyle.color).toEqual(leftColor);
  });

  it('color 方法在传递 rightColor 时应分别设置 leftStyle 和 rightStyle 的颜色', () => {
    const leftColor = { bg: '#123', fg: '#456' };
    const rightColor = { bg: '#789', fg: '#abc' };
    consoleBadge.color(leftColor, rightColor);
    expect(consoleBadge.leftStyle.color).toEqual(leftColor);
    expect(consoleBadge.rightStyle.color).toEqual(rightColor);
  });

  it('fgColor 方法在未传递 rightFgColor 时应将 leftFgColor 同时应用于 leftStyle 和 rightStyle', () => {
    consoleBadge.fgColor('#123456');
    expect(consoleBadge.leftStyle.color.fg).toBe('#123456');
    expect(consoleBadge.rightStyle.color.fg).toBe('#123456');
  });

  it('fgColor 方法在传递 rightFgColor 时应分别设置 leftStyle 和 rightStyle 的前景色', () => {
    consoleBadge.fgColor('#123456', '#654321');
    expect(consoleBadge.leftStyle.color.fg).toBe('#123456');
    expect(consoleBadge.rightStyle.color.fg).toBe('#654321');
  });

  it('padding 方法在未传递 rightPadding 时应将 leftPadding 同时应用于 leftStyle 和 rightStyle', () => {
    consoleBadge.padding([1, 2, 3, 4]);
    expect(consoleBadge.leftStyle.padding).toEqual([1, 2, 3, 4]);
    expect(consoleBadge.rightStyle.padding).toEqual([1, 2, 3, 4]);
  });

  it('padding 方法在传递 rightPadding 时应分别设置 leftStyle 和 rightStyle 的内边距', () => {
    consoleBadge.padding([1, 2, 3, 4], [4, 3, 2, 1]);
    expect(consoleBadge.leftStyle.padding).toEqual([1, 2, 3, 4]);
    expect(consoleBadge.rightStyle.padding).toEqual([4, 3, 2, 1]);
  });

  it('radius 方法，leftRadius使用默认值，而且在未传递 rightRadius 时应将 leftRadius 同时应用于 leftStyle 和 rightStyle', () => {
    consoleBadge.radius();
    expect(consoleBadge.leftStyle.radius).toBe(3);
    expect(consoleBadge.rightStyle.radius).toBe(3);
  });

  it('radius 方法在未传递 rightRadius 时应将 leftRadius 同时应用于 leftStyle 和 rightStyle', () => {
    consoleBadge.radius(5);
    expect(consoleBadge.leftStyle.radius).toBe(5);
    expect(consoleBadge.rightStyle.radius).toBe(5);
  });

  it('radius 方法在传递 rightRadius 时应分别设置 leftStyle 和 rightStyle 的圆角半径', () => {
    consoleBadge.radius(5, 10);
    expect(consoleBadge.leftStyle.radius).toBe(5);
    expect(consoleBadge.rightStyle.radius).toBe(10);
  });

  it('font 方法在未传递 rightFont 时应将 leftFont 同时应用于 leftStyle 和 rightStyle', () => {
    const leftFont = { size: 14, weight: 'normal', family: 'Arial', lineHeight: 24, shadow: 'none' };
    consoleBadge.font(leftFont);
    expect(consoleBadge.leftStyle.font).toEqual(leftFont);
    expect(consoleBadge.rightStyle.font).toEqual(leftFont);
  });

  it('font 方法在传递 rightFont 时应分别设置 leftStyle 和 rightStyle 的字体样式', () => {
    const leftFont = { size: 14, weight: 'normal', family: 'Arial', lineHeight: 24, shadow: 'none' };
    const rightFont = { size: 16, weight: 'bold', family: 'Times New Roman', lineHeight: 26, shadow: 'none' };
    consoleBadge.font(leftFont, rightFont);
    expect(consoleBadge.leftStyle.font).toEqual(leftFont);
    expect(consoleBadge.rightStyle.font).toEqual(rightFont);
  });

  it('fontWeight 方法仅使用第一个参数的默认值', () => {
    consoleBadge.fontWeight();
    expect(consoleBadge.leftStyle.font.weight).toBe('bold');
    expect(consoleBadge.rightStyle.font.weight).toBe('bold');
  });

  it('bgColor 方法只传递第一个参数时，第二个参数应使用第一个参数的值', () => {
    consoleBadge.bgColor('#123456');
    expect(consoleBadge.leftStyle.color.bg).toBe('#123456');
    expect(consoleBadge.rightStyle.color.bg).toBe('#123456');
  });

  it('fontSize 方法使用第一个参数的默认值且未传递第二个参数', () => {
    consoleBadge.fontSize();
    expect(consoleBadge.leftStyle.font.size).toBe(12);
    expect(consoleBadge.rightStyle.font.size).toBe(12);
  });

  it('fontFamily 方法仅使用第一个参数的默认值', () => {
    consoleBadge.fontFamily();
    expect(consoleBadge.leftStyle.font.family).toBe(`DejaVu Sans,Verdana,Geneva,'Microft YaHei','Microft YaHei UI',sans-serif`);
    expect(consoleBadge.rightStyle.font.family).toBe(`DejaVu Sans,Verdana,Geneva,'Microft YaHei','Microft YaHei UI',sans-serif`);
  });

  it('fontFamily 方法只传递第一个参数时，第二个参数应使用第一个参数的值', () => {
    const customFamily = 'Custom Font';
    consoleBadge.fontFamily(customFamily);
    expect(consoleBadge.leftStyle.font.family).toBe(customFamily);
    expect(consoleBadge.rightStyle.font.family).toBe(customFamily);
  });

  it('lineHeight 方法仅使用第一个参数的默认值', () => {
    consoleBadge.lineHeight();
    expect(consoleBadge.leftStyle.font.lineHeight).toBe(22);
    expect(consoleBadge.rightStyle.font.lineHeight).toBe(22);
  });

  it('lineHeight 方法只传递第一个参数时，第二个参数应使用第一个参数的值', () => {
    consoleBadge.lineHeight(24);
    expect(consoleBadge.leftStyle.font.lineHeight).toBe(24);
    expect(consoleBadge.rightStyle.font.lineHeight).toBe(24);
  });

  it('textShadow 方法仅使用第一个参数的默认值', () => {
    consoleBadge.textShadow();
    expect(consoleBadge.leftStyle.font.shadow).toBe('0 1px 0 rgba(1, 1, 1, .3)');
    expect(consoleBadge.rightStyle.font.shadow).toBe('0 1px 0 rgba(1, 1, 1, .3)');
  });

  it('textShadow 方法只传递第一个参数时，第二个参数应使用第一个参数的值', () => {
    const customShadow = '2px 2px 2px rgba(0, 0, 0, 0.5)';
    consoleBadge.textShadow(customShadow);
    expect(consoleBadge.leftStyle.font.shadow).toBe(customShadow);
    expect(consoleBadge.rightStyle.font.shadow).toBe(customShadow);
  });

  it('leftRadius 使用默认值', () => {
    consoleBadge.leftRadius();
    expect(consoleBadge.leftStyle.radius).toBe(3);
  });

  it('leftRadius 传递自定义值', () => {
    consoleBadge.leftRadius(5);
    expect(consoleBadge.leftStyle.radius).toBe(5);
  });

  it('leftFontFamily 使用默认值', () => {
    consoleBadge.leftFontFamily();
    expect(consoleBadge.leftStyle.font.family).toBe(`DejaVu Sans,Verdana,Geneva,'Microft YaHei','Microft YaHei UI',sans-serif`);
  });

  it('leftFontFamily 传递自定义值', () => {
    const customFamily = 'Custom Font';
    consoleBadge.leftFontFamily(customFamily);
    expect(consoleBadge.leftStyle.font.family).toBe(customFamily);
  });
  it('leftFontSize 使用默认值', () => {
    consoleBadge.leftFontSize();
    expect(consoleBadge.leftStyle.font.size).toBe(12);
  });

  it('leftFontSize 传递自定义值', () => {
    consoleBadge.leftFontSize(14);
    expect(consoleBadge.leftStyle.font.size).toBe(14);
  });
  it('leftFontWeight 使用默认值', () => {
    consoleBadge.leftFontWeight();
    expect(consoleBadge.leftStyle.font.weight).toBe('bold');
  });

  it('leftFontWeight 传递自定义值', () => {
    consoleBadge.leftFontWeight('normal');
    expect(consoleBadge.leftStyle.font.weight).toBe('normal');
  });
  it('leftLineHeight 使用默认值', () => {
    consoleBadge.leftLineHeight();
    expect(consoleBadge.leftStyle.font.lineHeight).toBe(22);
  });

  it('leftLineHeight 传递自定义值', () => {
    consoleBadge.leftLineHeight(24);
    expect(consoleBadge.leftStyle.font.lineHeight).toBe(24);
  });
  it('leftTextShadow 使用默认值', () => {
    consoleBadge.leftTextShadow();
    expect(consoleBadge.leftStyle.font.shadow).toBe('0 1px 0 rgba(1, 1, 1, .3)');
  });

  it('leftTextShadow 传递自定义值', () => {
    const customShadow = '1px 1px 1px rgba(0, 0, 0, 0.5)';
    consoleBadge.leftTextShadow(customShadow);
    expect(consoleBadge.leftStyle.font.shadow).toBe(customShadow);
  });

  it('rightRadius 使用默认值', () => {
    consoleBadge.rightRadius();
    expect(consoleBadge.rightStyle.radius).toBe(3);
  });

  it('rightRadius 传递自定义值', () => {
    consoleBadge.rightRadius(5);
    expect(consoleBadge.rightStyle.radius).toBe(5);
  });

  it('rightFontFamily 使用默认值', () => {
    consoleBadge.rightFontFamily();
    expect(consoleBadge.rightStyle.font.family).toBe(`DejaVu Sans,Verdana,Geneva,'Microft YaHei','Microft YaHei UI',sans-serif`);
  });

  it('rightFontFamily 传递自定义值', () => {
    const customFamily = 'Custom Font';
    consoleBadge.rightFontFamily(customFamily);
    expect(consoleBadge.rightStyle.font.family).toBe(customFamily);
  });

  it('rightFontSize 使用默认值', () => {
    consoleBadge.rightFontSize();
    expect(consoleBadge.rightStyle.font.size).toBe(12);
  });

  it('rightFontSize 传递自定义值', () => {
    consoleBadge.rightFontSize(14);
    expect(consoleBadge.rightStyle.font.size).toBe(14);
  });

  it('rightFontWeight 使用默认值', () => {
    consoleBadge.rightFontWeight();
    expect(consoleBadge.rightStyle.font.weight).toBe('bold');
  });

  it('rightFontWeight 传递自定义值', () => {
    consoleBadge.rightFontWeight('normal');
    expect(consoleBadge.rightStyle.font.weight).toBe('normal');
  });

  it('rightLineHeight 使用默认值', () => {
    consoleBadge.rightLineHeight();
    expect(consoleBadge.rightStyle.font.lineHeight).toBe(22);
  });

  it('rightLineHeight 传递自定义值', () => {
    consoleBadge.rightLineHeight(24);
    expect(consoleBadge.rightStyle.font.lineHeight).toBe(24);
  });

  it('rightTextShadow 使用默认值', () => {
    consoleBadge.rightTextShadow();
    expect(consoleBadge.rightStyle.font.shadow).toBe('0 1px 0 rgba(1, 1, 1, .3)');
  });

  it('rightTextShadow 传递自定义值', () => {
    const customShadow = '1px 1px 1px rgba(0, 0, 0, 0.5)';
    consoleBadge.rightTextShadow(customShadow);
    expect(consoleBadge.rightStyle.font.shadow).toBe(customShadow);
  });

  it('padding 为数字时正确应用样式', () => {
    consoleBadge.padding(10);
    expect(consoleBadge.leftStyle.padding).toEqual(10);
    expect(consoleBadge.rightStyle.padding).toEqual(10);
  });

  it('direction 设置为 rtl 时应正确应用样式', () => {
    consoleBadge.direction('rtl');
    expect(consoleBadge.dir).toBe('rtl');
  });

  it('print 方法应当正确输出', () => {
    consoleBadge.text('左边', '右边');
    consoleBadge.print();
    expect(mockConsole).toHaveBeenCalledWith(expect.any(String), expect.any(String), expect.any(String), expect.any(String));
  });

  it('当 direction 为 ltr 时 borderRadius 应正确计算', () => {
    consoleBadge.direction('ltr');
    consoleBadge.left({ radius: 5 });
    consoleBadge.right({ radius: 10 });

    const styleString = consoleBadge.buildStyleString(consoleBadge.leftStyle, true, true);
    expect(styleString).toContain('border-radius:5px 0 0 5px');
  });

  it('当 direction 为 rtl 时 borderRadius 应正确计算', () => {
    consoleBadge.direction('rtl');
    consoleBadge.left({ radius: 5 });
    consoleBadge.right({ radius: 10 });

    const styleString = consoleBadge.buildStyleString(consoleBadge.leftStyle, true, false);
    expect(styleString).toContain('border-radius:0 5px 5px 0');
  });

  it('padding 为数字时应正确应用样式', () => {
    consoleBadge.left({ padding: 10 });
    consoleBadge.right({ padding: 15 });

    const leftStyleString = consoleBadge.buildStyleString(consoleBadge.leftStyle, true);
    const rightStyleString = consoleBadge.buildStyleString(consoleBadge.rightStyle, false);

    expect(leftStyleString).toContain('padding:10px');
    expect(rightStyleString).toContain('padding:15px');
  });

  it('当 isLtr 为 true 时，code 应正确格式化', () => {
    consoleBadge.direction('ltr');
    consoleBadge.text('左边', '右边');

    const mockConsoleLog = jest.spyOn(console, 'log');
    consoleBadge.print();

    expect(mockConsoleLog).toHaveBeenCalledWith(expect.stringContaining('%c 左边 %c 右边 %c'), expect.any(String), expect.any(String), 'background-color:transparent;');
    mockConsoleLog.mockRestore();
  });

  it('当 isLtr 为 false 时，code 应正确格式化', () => {
    consoleBadge.direction('rtl');
    consoleBadge.text('左边', '右边');

    const mockConsoleLog = jest.spyOn(console, 'log');
    consoleBadge.print();

    expect(mockConsoleLog).toHaveBeenCalledWith(expect.stringContaining('%c 右边 %c 左边 %c'), expect.any(String), expect.any(String), 'background-color:transparent;');
    mockConsoleLog.mockRestore();
  });
});
