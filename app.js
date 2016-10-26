function unicodeParse(str// 
	for (var i = 0; i <= str.length; i++) {
		var uniValue = str.charCodeAt(i).toString(16);
		while (uniValue.length < 4) {
			uniValue = '0' + uniValue;
		}
		uniValue = '\\u' + uniValue;
		unicode += uniValue;
	}
	
	return unicode;
}
