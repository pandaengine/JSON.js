/**
 * Copyright (c) 2024 xiaowang <pandaengine@qq.com>
 * License http://www.apache.org/licenses/LICENSE-2.0
 */
import TestMod from './test-mod.js';

/// enum
const ResolutionPolicy = {
	EXACT_FIT: 0,
	NO_BORDER: 1,
	SHOW_ALL: 2,
	FIXED_HEIGHT: 3,
	FIXED_WIDTH: 4,
};

//console.log(JSON.stringify(TestMod, undefined, 2));
//console.log(typeof ResolutionPolicy.SHOW_ALL);

/// fonts
let fonts = [
	["C:/Windows/Fonts/msyh.ttc", 36.0, true],
	["C:/Windows/Fonts/msyh.ttc", 24.0, true],
	["C:/Windows/Fonts/msyh.ttc", 16.0, true],
];

/*
3200 2000
1366 768
*/
let fontSize = 3200/1366*16;
let ScaleAllSizes = 3200/1366;

/// imgui 设置
let imgui = {
	"fontSize": 16.000001,
	"ScaleAllSizes": ScaleAllSizes,
};

export default {
	"imgui": imgui,
	"fonts": fonts,
	"mod01": TestMod,
	"StatusBarHeight": 56.000001,
	"HierarchyWidth": 0.25,
	"InspectorWidth": 0.25,
	
	// 帧率
	"FPS": 60,
	"FPS": 20,
	
	// 屏幕分辨率适配方案
	//; EXACT_FIT,NO_BORDER,SHOW_ALL,FIXED_HEIGHT,FIXED_WIDTH
	"ResolutionPolicy":
	{
		"0": "EXACT_FIT",
		"1": "NO_BORDER",
		"2": "SHOW_ALL",
		"3": "FIXED_HEIGHT",
		"4": "FIXED_WIDTH",
	},
	"ResolutionPolicy_enum":
	{
		"0": ResolutionPolicy.EXACT_FIT,
		"1": ResolutionPolicy.NO_BORDER,
		"2": ResolutionPolicy.SHOW_ALL,
		"3": ResolutionPolicy.FIXED_HEIGHT,
		"4": ResolutionPolicy.FIXED_WIDTH,
	},
	
	// [设计分辨率]
	"DesignResolutionWidth": 960,
	"DesignResolutionHeight": 640,
	
	// 窗口尺寸
	"WindowedOn": 1,
	"WindowedWidth": 1200,
	"WindowedHeight": 554,
	
	"APP_KEY": "APP_KEY",
	
	222: "bbb"
};
