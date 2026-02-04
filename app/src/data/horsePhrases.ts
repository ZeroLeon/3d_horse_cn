// 马年新年喜庆短语库 - 200个
export interface HorsePhrase {
  foreground: string;  // 前景主文字（2-4字）
  background: string;  // 后景辅助文字（有错位遮挡效果）
}

export const horsePhrases: HorsePhrase[] = [
  // 经典四字成语 - 30个
  { foreground: '马到成功', background: '事业腾飞\n前程似锦' },
  { foreground: '龙马精神', background: '身体健康\n活力四射' },
  { foreground: '一马当先', background: '勇攀高峰\n独占鳌头' },
  { foreground: '万马奔腾', background: '势不可挡\n欣欣向荣' },
  { foreground: '快马加鞭', background: '步步高升\n蒸蒸日上' },
  { foreground: '金马玉堂', background: '富贵吉祥\n福禄双全' },
  { foreground: '天马行空', background: '梦想成真\n心想事成' },
  { foreground: '汗马功劳', background: '辛勤耕耘\n收获满满' },
  { foreground: '金戈铁马', background: '勇往直前\n无所畏惧' },
  { foreground: '马踏飞燕', background: '身轻如燕\n捷足先登' },
  { foreground: '老马识途', background: '经验丰富\n游刃有余' },
  { foreground: '马首是瞻', background: '引领潮流\n走在前列' },
  { foreground: '策马扬鞭', background: '乘风破浪\n一往无前' },
  { foreground: '人强马壮', background: '家兴业旺\n福寿安康' },
  { foreground: '马跃龙门', background: '飞黄腾达\n平步青云' },
  { foreground: '马不停蹄', background: '奋斗不息\n再创辉煌' },
  { foreground: '马放南山', background: '国泰民安\n天下太平' },
  { foreground: '龙马呈祥', background: '瑞气千条\n祥云万朵' },
  { foreground: '骏马奔腾', background: '前程万里\n大展宏图' },
  { foreground: '马驰千里', background: '志在四方\n鹏程万里' },
  { foreground: '金马迎春', background: '喜气盈门\n万象更新' },
  { foreground: '瑞马呈祥', background: '福星高照\n好运连连' },
  { foreground: '马运亨通', background: '顺风顺水\n万事如意' },
  { foreground: '马年大吉', background: '阖家欢乐\n幸福安康' },
  { foreground: '福马临门', background: '财源广进\n五福临门' },
  { foreground: '吉马迎春', background: '春满人间\n喜气洋洋' },
  { foreground: '宝马馳春', background: '富贵荣华\n锦衣玉食' },
  { foreground: '神馬送福', background: '心想事成\n美梦成真' },
  { foreground: '駿馬報喜', background: '捷报频传\n喜事连连' },
  { foreground: '馬馳吉運', background: '时来运转\n否极泰来' },

  // 新年祝福 - 25个
  { foreground: '新春快乐', background: '阖家欢乐\n喜气洋洋' },
  { foreground: '恭喜发财', background: '红包拿来\n财运亨通' },
  { foreground: '万事如意', background: '心想事成\n顺顺利利' },
  { foreground: '吉祥如意', background: '福星高照\n好运连连' },
  { foreground: '五福临门', background: '福禄寿喜\n财全齐来' },
  { foreground: '岁岁平安', background: '年年有余\n幸福美满' },
  { foreground: '阖家欢乐', background: '团团圆圆\n其乐融融' },
  { foreground: '大吉大利', background: '红红火火\n兴旺发达' },
  { foreground: '福星高照', background: '喜气盈门\n鸿运当头' },
  { foreground: '鸿运当头', background: '好运连连\n财源滚滚' },
  { foreground: '年年有余', background: '富贵有余\n生活美满' },
  { foreground: '心想事成', background: '梦想成真\n如愿以偿' },
  { foreground: '步步高升', background: '平步青云\n前程似锦' },
  { foreground: '财源广进', background: '日进斗金\n腰缠万贯' },
  { foreground: '身体健康', background: '龙马精神\n生龙活虎' },
  { foreground: '平安喜乐', background: '无病无灾\n顺遂安康' },
  { foreground: '福寿安康', background: '长命百岁\n寿比南山' },
  { foreground: '金玉满堂', background: '珠光宝气\n富贵逼人' },
  { foreground: '花开富贵', background: '繁花似锦\n春色满园' },
  { foreground: '竹报平安', background: '节节高升\n平安吉祥' },
  { foreground: '四季平安', background: '八方来财\n四季发财' },
  { foreground: '七星报喜', background: '八面威风\n九九同心' },
  { foreground: '十全十美', background: '百事亨通\n千祥云集' },
  { foreground: '六六大顺', background: '一帆风顺\n二气雍和' },
  { foreground: '三阳开泰', background: '万象更新\n春回大地' },

  // 事业财运 - 25个
  { foreground: '财源滚滚', background: '日进斗金\n财运亨通' },
  { foreground: '生意兴隆', background: '客似云来\n门庭若市' },
  { foreground: '招财进宝', background: '金玉满堂\n富贵荣华' },
  { foreground: '日进斗金', background: '腰缠万贯\n富可敌国' },
  { foreground: '财运亨通', background: '八方来财\n四季发财' },
  { foreground: '富贵吉祥', background: '荣华富贵\n锦衣玉食' },
  { foreground: '前程似锦', background: '鹏程万里\n大展宏图' },
  { foreground: '飞黄腾达', background: '功成名就\n名利双收' },
  { foreground: '平步青云', background: '步步高升\n扶摇直上' },
  { foreground: '大展鸿图', background: '伟业千秋\n宏图大展' },
  { foreground: '业绩腾飞', background: '月月爆数\n蒸蒸日上' },
  { foreground: '一本万利', background: '积金至斗\n近悦远来' },
  { foreground: '八方来财', background: '四面进宝\n财源茂盛' },
  { foreground: '富贵临门', background: '金银满屋\n聚宝盆满' },
  { foreground: '开市大发', background: '贵客盈门\n兴旺发达' },
  { foreground: '扭转乾坤', background: '如鱼得水\n旗开得胜' },
  { foreground: '马到功成', background: '功成名就\n功德圆满' },
  { foreground: '駿業宏發', background: '事業輝煌\n規模宏大' },
  { foreground: '領先群駒', background: '產業領頭\n無人能及' },
  { foreground: '穩操馬韁', background: '達成目標\n獲得成功' },
  { foreground: '一馬平川', background: '順風順水\n毫無阻礙' },
  { foreground: '業績奔騰', background: '成交量高\n止不住' },
  { foreground: '躍馬爭春', background: '搶得商機\n開春大吉' },
  { foreground: '千里馬遇伯樂', background: '才華被看見\n貴人不斷' },
  { foreground: '馬到金入庫', background: '事業順利\n大獲成功' },

  // 马上系列创意祝福 - 20个
  { foreground: '马上有钱', background: '财运滚滚\n钱包鼓鼓' },
  { foreground: '马上有福', background: '福气满满\n好运连连' },
  { foreground: '马上有爱', background: '桃花朵朵\n姻缘美满' },
  { foreground: '马上有喜', background: '喜事连连\n好事成双' },
  { foreground: '马上成功', background: '心想事成\n梦想成真' },
  { foreground: '马上快乐', background: '笑口常开\n幸福满满' },
  { foreground: '马上健康', background: '身体倍棒\n吃嘛嘛香' },
  { foreground: '马上好运', background: '时来运转\n否极泰来' },
  { foreground: '马上暴富', background: '一夜暴富\n财务自由' },
  { foreground: '马上脱单', background: '缘分到来\n爱情甜蜜' },
  { foreground: '马上加薪', background: '工资翻倍\n奖金多多' },
  { foreground: '马上顺利', background: '事事顺心\n万事如意' },
  { foreground: '马上幸福', background: '甜甜蜜蜜\n幸福美满' },
  { foreground: '马上平安', background: '出入平安\n身体健康' },
  { foreground: '马上中奖', background: '好运爆棚\n锦鲤附体' },
  { foreground: '马上升职', background: '平步青云\n步步高升' },
  { foreground: '马上买房', background: '安居乐业\n家兴业旺' },
  { foreground: '马上买车', background: '一路顺风\n出入平安' },
  { foreground: '马上退休', background: '享尽清福\n无忧无虑' },
  { foreground: '马上放假', background: '游山玩水\n逍遥自在' },

  // 爱情婚姻 - 15个
  { foreground: '百年好合', background: '永结同心\n白头偕老' },
  { foreground: '永结同心', background: '相亲相爱\n甜甜蜜蜜' },
  { foreground: '白头偕老', background: '相濡以沫\n不离不弃' },
  { foreground: '情投意合', background: '心心相印\n两情相悦' },
  { foreground: '天作之合', background: '珠联璧合\n佳偶天成' },
  { foreground: '花好月圆', background: '良辰美景\n美满姻缘' },
  { foreground: '鸳鸯比翼', background: '琴瑟和鸣\n相敬如宾' },
  { foreground: '喜结良缘', background: '早生贵子\n儿孙满堂' },
  { foreground: '恩爱有加', background: '如胶似漆\n举案齐眉' },
  { foreground: '佳偶天成', background: '郎才女貌\n天生一对' },
  { foreground: '姻缘美满', background: '情比金坚\n爱意绵绵' },
  { foreground: '桃花朵朵', background: '缘分满满\n爱情甜蜜' },
  { foreground: '情定三生', background: '缘定今生\n执手偕老' },
  { foreground: '比翼双飞', background: '双宿双飞\n形影不离' },
  { foreground: '缘定今生', background: '执子之手\n与子偕老' },

  // 学业进步 - 15个
  { foreground: '学业有成', background: '金榜题名\n前程似锦' },
  { foreground: '金榜题名', background: '高中状元\n独占鳌头' },
  { foreground: '才华横溢', background: '学富五车\n才高八斗' },
  { foreground: '聪明伶俐', background: '智慧过人\n天资聪颖' },
  { foreground: '勤奋好学', background: '博览群书\n满腹经纶' },
  { foreground: '名列前茅', background: '成绩优异\n出类拔萃' },
  { foreground: '前程似锦', background: '鹏程万里\n大展宏图' },
  { foreground: '梦想成真', background: '心想事成\n如愿以偿' },
  { foreground: '勇攀高峰', background: '力争上游\n成就非凡' },
  { foreground: '笃志好学', background: '乐学苦思\n梦笔生花' },
  { foreground: '鱼跃鸢飞', background: '前途无量\n展翅高飞' },
  { foreground: '出类拔萃', background: '鹤立鸡群\n卓尔不群' },
  { foreground: '功成名就', background: '学业进步\n金榜题名' },
  { foreground: '马跃新程', background: '前途光明\n大展鸿图' },
  { foreground: '駿馬奔騰', background: '前程似錦\n一帆風順' },

  // 家庭幸福 - 15个
  { foreground: '家和万事兴', background: '其乐融融\n温馨美满' },
  { foreground: '天伦之乐', background: '儿孙满堂\n享尽清福' },
  { foreground: '子孙满堂', background: '人丁兴旺\n后继有人' },
  { foreground: '家庭美满', background: '夫妻恩爱\n父慈子孝' },
  { foreground: '幸福安康', background: '平安喜乐\n岁月静好' },
  { foreground: '阖家团圆', background: '欢聚一堂\n喜气洋洋' },
  { foreground: '其乐融融', background: '欢声笑语\n温馨和睦' },
  { foreground: '父慈子孝', background: '兄友弟恭\n家庭和睦' },
  { foreground: '人丁兴旺', background: '子孙贤达\n后继有人' },
  { foreground: '福寿双全', background: '福如东海\n寿比南山' },
  { foreground: '享尽天伦', background: '安享晚年\n幸福安康' },
  { foreground: '欢聚一堂', background: '其乐融融\n喜气洋洋' },
  { foreground: '温馨和睦', background: '相敬如宾\n举案齐眉' },
  { foreground: '平安喜乐', background: '无病无灾\n顺遂安康' },
  { foreground: '岁月静好', background: '现世安稳\n幸福绵长' },

  // 健康平安 - 15个
  { foreground: '身体健康', background: '龙马精神\n生龙活虎' },
  { foreground: '平安喜乐', background: '无病无灾\n顺遂安康' },
  { foreground: '福寿安康', background: '长命百岁\n寿比南山' },
  { foreground: '延年益寿', background: '福如东海\n寿比南山' },
  { foreground: '康泰如意', background: '百病不侵\n身强体壮' },
  { foreground: '龙马康健', background: '精神矍铄\n活力充沛' },
  { foreground: '馬躍康莊', background: '健康長壽\n平安喜樂' },
  { foreground: '駿馬安行', background: '出入平安\n順順利利' },
  { foreground: '身壮力健', background: '百病不侵\n健康长寿' },
  { foreground: '万寿无疆', background: '福寿绵长\n健康长寿' },
  { foreground: '精神矍铄', background: '容光焕发\n神采奕奕' },
  { foreground: '百病不侵', background: '身强体壮\n健康长寿' },
  { foreground: '出入平安', background: '一路顺风\n平平安安' },
  { foreground: '健康长寿', background: '福如东海\n寿比南山' },
  { foreground: '平安吉祥', background: '吉祥如意\n万事顺遂' },

  // 励志向上 - 15个
  { foreground: '乘风破浪', background: '披荆斩棘\n勇往直前' },
  { foreground: '勇往直前', background: '无所畏惧\n所向披靡' },
  { foreground: '奋发图强', background: '自强不息\n厚德载物' },
  { foreground: '志存高远', background: '胸怀大志\n志在四方' },
  { foreground: '鹏程万里', background: '展翅高飞\n一飞冲天' },
  { foreground: '大展宏图', background: '宏图大展\n伟业千秋' },
  { foreground: '百尺竿头', background: '更进一步\n精益求精' },
  { foreground: '厚积薄发', background: '蓄势待发\n一鸣惊人' },
  { foreground: '破茧成蝶', background: '浴火重生\n华丽蜕变' },
  { foreground: '梦想成真', background: '心想事成\n如愿以偿' },
  { foreground: '自强不息', background: '厚德载物\n奋发向上' },
  { foreground: '力争上游', background: '勇攀高峰\n追求卓越' },
  { foreground: '出类拔萃', background: '鹤立鸡群\n卓尔不群' },
  { foreground: '一鸣惊人', background: '一举成名\n名扬四海' },
  { foreground: '前程万里', background: '前途无量\n大展宏图' },

  // 现代流行语 - 15个
  { foreground: '2026暴富', background: '钱包鼓鼓\n财务自由' },
  { foreground: '新年新气象', background: '焕然一新\n万象更新' },
  { foreground: '好运爆棚', background: '欧气满满\n锦鲤附体' },
  { foreground: '颜值爆表', background: '貌美如花\n帅气逼人' },
  { foreground: '实力圈粉', background: '人气爆棚\n粉丝无数' },
  { foreground: '躺赢人生', background: '轻松自在\n无忧无虑' },
  { foreground: 'C位出道', background: '光芒万丈\n万众瞩目' },
  { foreground: '人生巅峰', background: '高光时刻\n荣耀加身' },
  { foreground: '开挂人生', background: '一路顺风\n所向无敌' },
  { foreground: 'YYDS', background: '永远的神\n无敌存在' },
  { foreground: '馬尼多多', background: 'Money多多\n財源滾滾' },
  { foreground: 'Horse花生', background: '好事發生\n好運連連' },
  { foreground: '神馬都好', background: '什麼都好\n什麼都順' },
  { foreground: '錢錢加馬', background: '好運加碼\n財運加倍' },
  { foreground: '馬力全開', background: '動力十足\n效率驚人' },
];

// 马图案列表 - 50个AI生成的精美图案
export const horseImages: string[] = [
  '/horse-1.png', '/horse-2.png', '/horse-3.png', '/horse-4.png', '/horse-5.png',
  '/horse-6.png', '/horse-7.png', '/horse-8.png', '/horse-9.png', '/horse-10.png',
  '/horse-11.png', '/horse-12.png', '/horse-13.png', '/horse-14.png', '/horse-15.png',
  '/horse-16.png', '/horse-17.png', '/horse-18.png', '/horse-19.png', '/horse-20.png',
  '/horse-21.png', '/horse-22.png', '/horse-23.png', '/horse-24.png', '/horse-25.png',
  '/horse-26.png', '/horse-27.png', '/horse-28.png', '/horse-29.png', '/horse-30.png',
  '/horse-31.png', '/horse-32.png', '/horse-33.png', '/horse-34.png', '/horse-35.png',
  '/horse-36.png', '/horse-37.png', '/horse-38.png', '/horse-39.png', '/horse-40.png',
  '/horse-41.png', '/horse-42.png', '/horse-43.png', '/horse-44.png', '/horse-45.png',
  '/horse-46.png', '/horse-47.png', '/horse-48.png', '/horse-49.png', '/horse-50.png',
];

// 初始化马图案列表
export function initHorseImages() {
  // 已预定义，无需初始化
}

// 随机获取一个短语
export function getRandomPhrase(): HorsePhrase {
  return horsePhrases[Math.floor(Math.random() * horsePhrases.length)];
}

// 随机获取一个马图案
export function getRandomHorseImage(): string {
  if (horseImages.length === 0) {
    initHorseImages();
  }
  return horseImages[Math.floor(Math.random() * horseImages.length)];
}

// 获取所有马图案
export function getAllHorseImages(): string[] {
  if (horseImages.length === 0) {
    initHorseImages();
  }
  return horseImages;
}
