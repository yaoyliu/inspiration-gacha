/*
 * 选项卡清单 + 角色基础设定
 * ------------------------------------------------------------
 * TAG_TABS    每根选项卡对应本文件夹里的一个词库文件。
 *             id 唯一；name 显示名；file 文件名；color 标记色；
 *             baseOn 是否把基础设定一起放进结果；
 *             kind 是「复制完整提示词」的引导语：image = 绘图提示词，text = 文字设定。
 *             加、删、排序、改名都在这里改，保存后刷新网页生效。
 * TAG_PROFILE 角色基础设定，写 {"name":"名称","value":"值"}，
 *             值可以写 "中文|English"，也可以只写一段文字。
 * 文件必须是合法 JSON：英文双引号、逗号分隔，最后一项后不加逗号。
 */
window.TAG_TABS = [
  {
    "id": "avatar",
    "name": "头像",
    "file": "avatar.js",
    "color": "#7c6cf5",
    "baseOn": true,
    "kind": "image"
  },
  {
    "id": "art",
    "name": "立绘",
    "file": "art.js",
    "color": "#3d8ce0",
    "baseOn": true,
    "kind": "image"
  },
  {
    "id": "persona",
    "name": "人设",
    "file": "persona.js",
    "color": "#e08a3c",
    "baseOn": true,
    "kind": "text"
  },
  {
    "id": "world",
    "name": "世界观",
    "file": "world.js",
    "color": "#2fa88f",
    "baseOn": false,
    "kind": "text"
  }
];

window.TAG_PROFILE = [
  {
    "name": "性别",
    "value": "女|Female"
  },
  {
    "name": "年龄",
    "value": "18 岁|18 years old"
  },
  {
    "name": "身高",
    "value": "165 cm|165 cm"
  },
  {
    "name": "体重",
    "value": "48 kg|48 kg"
  }
];
