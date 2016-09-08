
var test = [
		"I will build a huge wall",
		"HUUUUUGEEEE WAAAAAALL",
		"MEXICAAAAAAAANS GOOOO HOOOMEEEE",
		"America NUUUUUKEEEE Oooobaaaamaaaaa",
		"listen migrants: IIII KIIIDD YOOOUUU NOOOOOOTTT"
		]
function trumpDetector(trumpySpeech){
	trumpySpeech = trumpySpeech.trim().toLowerCase();
	var test = [];
	var len = trumpySpeech.length;
	var vowelArray = ['a','o','i','e','u'];
	var repeatNum=0,baseVowelNum = 0;
	for(var i = 0; i < len; i++) {
  		var charNow = trumpySpeech[i];
  		if(charNow!== trumpySpeech[i-1] && vowelArray.indexOf(charNow) >= 0) {
  			baseVowelNum++;
  		}
  		if(charNow=== trumpySpeech[i-1] && vowelArray.indexOf(charNow) >= 0) {
  			repeatNum++;
  		} 		
  	}
  	extraTimes = (repeatNum  / baseVowelNum).toFixed(2);
  	extraTimes = window.parseFloat(extraTimes);
  	return extraTimes;
}
window.onload = function() {
	for(var i = 0; i < test.length; i++) {
		var result = trumpDetector(test[i]);
		console.log(result);
	}
	
}
