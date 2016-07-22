decodeMorse = function(morseCode){
	var newmorseCode = morseCode.trim();
	var len = newmorseCode.length;
	var preData = "",midData = new Array,flag = 0;//flag用来标记已经连续读取到的空格符
	if(!MORSE_CODE["BlankSpace"]) {
		MORSE_CODE["BlankSpace"] = " ";
	}
	var j = 0;//j的值不能在每次进入循环的时候都清0
	for(var i = 0; i < len ; i++) {
		if(newmorseCode[i] === " ") {
			flag++;
			if(flag === 1) {
				midData[j] = preData;
				preData = "";
				j++;
				if(newmorseCode[i+1] !== " ") {//开始的时候忘了这一步，判断下一字符是否是空格符，从而决定对flag标记是否清空，很关键
					flag = 0;
				}	
			}
			if(flag === 3) {
				midData[j] = "BlankSpace";
				j++;
				flag = 0;
			}
		} else {
			preData += newmorseCode[i]
		}
	}
	if(i === len) {//边界处的一定不会是空格符
		midData[j] = preData;
	}
	var newLen = midData.length,outputWords = "";
	for(var i = 0; i < newLen; i++) {
		var key = midData[i];//将储存在数组中的每个字符
		outputWords += MORSE_CODE[key];
	}
	return outputWords;
}
'.... . -.--   .--- ..- -.. .'
/*通过遍历，一次性分隔所有morsecode，然后再用一次遍历翻译所有的morsecode字符，这样的方法存在一个问题：
即三个空格符的作用将会被忽略，记录其出现的位置以及将它转换为一个空格符出现在最终的字符串中将显得很麻烦。
解决方法：遇到三个连续的空格符，就将其作为一个morsecode字符，将其翻译成一个空格符。若初始的MORSE_CODE中没有
三个连续空格符对应一个空格符，就可以自行添加。
1、依然避免不了需要通过判断是否是边界位置，来对字符进行操作。因为是否是一个完整的可以翻译的字符不能取决于当前字符，
而是取决于它的下一个字符是否是空格符。