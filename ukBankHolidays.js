// Easter function care of Gavin Gilmour (http://stackoverflow.com/questions/1284314/easter-date-in-javascript)
// Date calculation for bank holidays by Scott Pritchard

function calculateBankHolidays(theYear){
	var _currDate	= new Date();
	if (!theYear || theYear != ""){
		theYear = _currDate.getFullYear();
	}
	function padout(number) { return (number < 10) ? '0' + number : number; }
	var Easter = function(Y) {
		var C = Math.floor(Y/100);
		var N = Y - 19*Math.floor(Y/19);
		var K = Math.floor((C - 17)/25);
		var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
		I = I - 30*Math.floor((I/30));
		I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
		var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
		J = J - 7*Math.floor(J/7);
		var L = I - J;
		var M = 3 + Math.floor((L + 40)/44);
		var D = L + 28 - 31*Math.floor(M/4);	
		var months = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
		var obj = {
			"day"	:	padout(D),
			"mon"	:	months[M-1],
			"monnum"	:	M-1,
			"year"	:	Y
		}
		return obj;
	}

	var springBank = function(){
		var mondayDoW	=	1; // Monday 'day of week' value is 1 (Week start on Sunday, value of 0)
		var srDate			=	new Date();
		srDate.setYear(theYear);
		srDate.setDate(1);
		srDate.setMonth(5);
		srDate.setDate(srDate.getDate()-1); // In case 1st June falls on Monday
		while (srDate.getDay() != mondayDoW){	
			srDate.setDate(srDate.getDate() -1);
		}
		var srDateStr	=	srDate.toString();
		return srDateStr;
	};
	
	var mayDay	=	function(){
		var mondayDoW	=	1; // Monday 'day of week' value is 1 (Week start on Sunday, value of 0)
		var srDate			=	new Date();
		srDate.setYear(theYear);
		srDate.setDate(1);
		srDate.setMonth(4);
		
		while (srDate.getDay() != mondayDoW){	
			srDate.setDate(srDate.getDate() +1);
		}
		var srDateStr	=	srDate.toString();
		return srDateStr;
	}
	
	var augustBank	=	function(){
		var mondayDoW	=	1; // Monday 'day of week' value is 1 (Week start on Sunday, value of 0)
		var srDate			=	new Date();

		srDate.setYear(theYear);
		srDate.setDate(1);
		srDate.setMonth(8);
		srDate.setDate(srDate.getDate()-1); // In case 1st Sept falls on Monday
		while (srDate.getDay() != mondayDoW){	
			srDate.setDate(srDate.getDate() -1);
		}
		var srDateStr	=	srDate.toString();
		return srDateStr;
	}
	
	var easterMonday	=	function(){
		var fridayDoW	=	5; // Friday 'day of week' value is 5 (Week start on Sunday, value of 0)
		var srDate		=	new Date();
		var _easter = Easter(theYear);
		srDate.setYear(theYear);
		srDate.setDate(_easter.day);
		srDate.setMonth(_easter.monnum);
		while (srDate.getDay() != fridayDoW){	
			srDate.setDate(srDate.getDate() -1);
		}
		srDate.setDate(srDate.getDate() +3); // Add 3 days for Easter Monday (follows Good Friday)
		var srDateStr	=	srDate.toString();
		return srDateStr;
	}
	
	var goodFriday	=	function(){
		var fridayDoW	=	5; // Friday 'day of week' value is 5 (Week start on Sunday, value of 0)
		var srDate		=	new Date();
		var _easter = Easter(theYear);
		srDate.setYear(theYear);
		srDate.setDate(_easter.day);
		srDate.setMonth(_easter.monnum);
		
		while (srDate.getDay() != fridayDoW){	
			srDate.setDate(srDate.getDate() -1);
		}
		var srDateStr	=	srDate.toString();
		return srDateStr;
	}
	
	var christmasDay	=	function(){
		var srDate			=	new Date();
		srDate.setYear(theYear);
		srDate.setDate(25);
		srDate.setMonth(11);
		var srDateStr	=	srDate.toString();
		return srDateStr;
	}
	
	var boxingDay	=	function(){
		var srDate			=	new Date();
		srDate.setYear(theYear);
		srDate.setDate(26);
		srDate.setMonth(11);
		var srDateStr	=	srDate.toString();
		return srDateStr;
	}
	
	var newYearsDay = function(){
		var srDate			=	new Date();
		srDate.setYear(theYear);
		srDate.setDate(01);
		srDate.setMonth(0);
		var srDateStr	=	srDate.toString();
		return srDateStr;
	}
	
	var arr = [
		newYearsDay(),
		goodFriday(),
		easterMonday(),
		mayDay(),
		springBank(),
		augustBank(),
		christmasDay(),
		boxingDay()
	];
	
	return arr;
}