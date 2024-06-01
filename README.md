
[简体中文(Chinese)](README-zh.md)

# JSON.js

.js Generate .json Configuration File

## Introduction

1. Use quickjs/qjs.exe to generate/convert .js to JSON files.
	Essentially, it is JavaScript programming.

2. cc.bat is a compiler, while cc.js is a compilation script.
	You can also use nodejs/deno to execute cc.js for compilation.

3. Usage scenarios:
	Used for editing relatively complex configuration files.
	A simple configuration file can be created using .ini.

## JSON.js features

1. Support single line/multi line comments, JavaScript comments.
	Essentially, it is JavaScript programming that supports any JavaScript code.

2. The key values of two objects can be repeated, and the subsequent values will overwrite the previous ones.

3. "Modularization" allows for the import of external modules.

4 tools: `enum-tojs.html`, C/C++ enum to js object.

## Example

```
/// External modules
import TestMod from './test-mod.js';

/// "Module 1"
let fonts = [
	["C:/Windows/Fonts/consola.ttf", 36.0, true],
];

export default {
	"fonts": fonts,
	"mod01": TestMod,
	"key": "value", // [comment] key-value
	"key": "value2", /* duplicate key value, overwrite previous ones */
};

```

## TODO

Scan all JSON.js file in the current working directory, generating .json.
