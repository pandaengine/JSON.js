
# JSON.js

.js 生成 .json 配置文件。<br/>
.js Generate .json Configuration File.

## 简介

1 使用 quickjs/qjs.exe 使用 .js 生成/转换为 json 文件。
	本质是 js 编程。

2 cc.bat 是一个"编译器", cc.js 是编译脚本。
	你也可以使用 nodejs/deno 执行 cc.js 进行编译。

4 使用场景: 
	用于编辑相对复杂的配置文件。
	简单配置文件可以用 .ini。
	
## JSON.js 特性

1 支持单行/多行注释，js 注释。
	本质是 js 编程，支持任意 js 代码。
	
2 对象键值可以重复，后面的值会覆盖前面的。

3 "模块化"，可以导入外部模块。

4 tools: `enum-tojs.html`, C/C++ enum to js object.

## 示例 example

```
/// 外部模块
import TestMod from './test-mod.js';

/// "模块1"
let fonts = [
	["C:/Windows/Fonts/consola.ttf", 36.0, true],
];

export default {
	"fonts": fonts,
	"mod01": TestMod,
	"key": "value", // [注释] key-value
	"key": "value2", /* 键值重复, 覆盖前面 */
};
```

## TODO 待办

1. 扫描当前工作目录所有 *.JSON.js 文件, 生成 .json。

