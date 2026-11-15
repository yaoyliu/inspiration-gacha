/*
 * 组合校验规则
 * ------------------------------------------------------------
 * 一行写一组互斥说法，左右两边用竖线 | 分开；同一边的多个说法用逗号分开。
 * 中文和英文说法可以并列，匹配时不区分大小写，只要词里包含就会命中。
 * 想加自己的规则，照着下面的格式加一行；不想用某条规则，删掉那一行。
 * 设置里的「自定义冲突词组」也能临时补充，两处会一起生效。
 * 只在不同维度之间比较，同一个维度抽到多个标签不会互相排斥。
 */
window.TAG_CONFLICTS = [
  "长发,long hair | 短发,short hair,bob cut,精灵短发",
  "直发,straight hair | 卷发,微卷,curly,wavy",
  "微笑,笑容,坏笑,苦笑,smile,grin,smirk | 面无表情,无表情,blank expression",
  "闭眼,eyes closed,closed eyes | 注视,凝视,对视,gaze,eye contact",
  "俯视,俯拍,high angle,top-down | 仰视,low angle,worm",
  "正面,frontal,front view | 侧面,侧脸,profile,side view",
  "顶光,top light | 逆光,backlight",
  "盛夏,酷暑,midsummer | 寒冬,严冬,deep winter",
  "白昼,正午,daylight,noon | 深夜,夜景,midnight,night",
  "写实,realistic,photoreal | 像素,pixel,水彩,watercolor,扁平,flat color",
  "无袖,sleeveless | 长袖,短袖,宽袖,泡泡袖,long sleeves,short sleeves,wide sleeves,puff sleeves",
  "高领,turtleneck | V 领,v-neck,方领,square neckline,露肩,off shoulder",
  "夜晚,深夜,night | 蓝天,晴空,blue sky"
];
