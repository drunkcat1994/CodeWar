/*一个空格分隔morse code，三个空格分隔单词；应忽略代码前后的空格。通过空格截取字符段。
MORSE_CODE 在JavaScript中是当做一个object来获取。
*/
decodeMorse = function(morseCode){
	var newmorseCode = morseCode.trim();
	var len = newmorseCode.length;
	var outputWords = "",preData = "";
	var flag = 0,char;//flag用来标记已经连续读取到的空格符
	for(var i =0;i < len;i++) {
		if(newmorseCode[i] !== " ") {
			preData += newmorseCode[i];//preData储存每一个字母
		} else{
			flag++;
			if(flag === 1) {
				char = MORSE_CODE[preData];//遇到第一个空格符，对已经获取到的morsecode进行翻译
				outputWords += char ;//将已经翻译好的字符存入到最终返回的变量中去
				if(newmorseCode[i+1] !== " ") {//当字符遍历到边界外第一个时，没必要进行这一步
					preData = "";
					flag = 0;
				}
			//由于题意中已经告知只可能有一个或三个连续的空格符，故当遇到第二个空格符的时候只会对其进行flag+1，便进入flag===3的操作中去
			} else if( flag === 3) {
				outputWords += " ";//已经遇到三个空格符，说明前面的字母可以组成一个单词，故添加空格符。
				flag = 0;
				preData = "";
			}
		}
	}
	if(i === len) {//遍历进行到边界的时候的特殊判别。
		char = MORSE_CODE[preData];
		outputWords += char ;
	}
  return outputWords;
}
'.... . -.--   .--- ..- -.. .'
/*
1、JavaScript中遍历字符：可以通过从0开始的下标找到特定的字符。
2、用一个临时变量储存遍历到的字符，当第一次遇到一个空字符的时候对其进行翻译
3、中间变量在转换后需要清空，转换后的变量存入另外一个变量outputwords。
4、另外一种解法：用一个循环将所有morsecode拆分，并储存到数组内，最后再遍历所有字符并对其进行翻译。
5、最好把重要的部分放在if else结构的前面，这样避免显得头重脚轻。