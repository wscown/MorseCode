//var userinput = prompt();
var userinput = prompt();
answer = getChars(userinput.toLowerCase());

function getChars(userinput){

	var answer = "";

	for(var i = 0; i < userinput.length; i++){
		answer += morseFinder(userinput.charAt(i));
	}

	return answer;
}

function morseFinder(input1){

	switch(input1) {
	    case "a":
	        return ".-";
	        break;
	    case "b":
	        return "-...";
	        break;
	    case "c":
	    	return "-.-.";
	        break;
	    case "d":
	    	return "-..";
	        break;
	    case "e":
	    	return ".";
	        break;
	    case "f":
	    	return "..-.";
	        break;
	    case "g":
	    	return "--.";
	        break;
	    case "h":
	    	return "....";
	        break;
	    case "i":
	    	return "..";
	        break;
	    case "j":
	    	return ".---";
	        break;
	    case "k":
	    	return "-.-";
	        break;
	    case "l":
	    	return ".-..";
	        break;
	    case "m":
	    	return "--";
	        break;
	    case "n":
	    	return "-.";
	        break;
	    case "o":
	    	return "---";
	        break;
	    case "p":
	    	return ".--.";
	        break;
	    case "q":
	    	return "--.-";
	        break;
	    case "r":
	    	return ".-.";
	        break;
	    case "s":
	    	return "...";
	        break;
	    case "t":
	    	return "-";
	        break;
	    case "u":
	        return "..-";
	        break;
	    case "v":
	        return "...-";
	        break;
	    case "w":
	    	return ".--";
	        break;
	    case "x":
	    	return "-..-";
	        break;
	    case "y":
	    	return "-.--";
	        break;
	    case "z":
	    	return "--..";
	        break;
	    case "1":
	    	return ".----";
	        break;
	    case "2":
	    	return "..---";
	        break;
	    case "3":
	    	return "...--";
	        break;
	    case "4":
	    	return "....-";
	        break;
	    case "5":
	    	return ".....";
	        break;
	    case "6":
	    	return "-....";
	        break;
	    case "7":
	    	return "--...";
	        break;
	    case "8":
	    	return "---..";
	        break;
	    case "9":
	    	return "----.";
	        break;
	    case "0":
	    	return "-----";
	        break;
	    case " ":
	    	return "|";
	        break;
	    default:
	        return "";
	}
}

document.getElementById('result').innerHTML = answer;