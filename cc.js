/**
 * Copyright (c) 2024 xiaowang <pandaengine@qq.com>
 * License http://www.apache.org/licenses/LICENSE-2.0
 */
import * as std from 'std';
import JSONConf from 'test.JSON.js';

/// output file
let output = "test.json";
let space = 2;
//space = 0;//Minimalist/compression

function file_put_contents(file, content) {
	let fp = std.open(file, 'w+');
	fp.puts(content);
	fp.close();
}

file_put_contents(output, JSON.stringify(JSONConf, undefined, space));
