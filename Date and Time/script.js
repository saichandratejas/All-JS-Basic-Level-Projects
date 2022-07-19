function realtimeClock(){
	var rtclock=new Date();
	var hours=rtclock.getHours();
	var minutes=rtclock.getMinutes();
	var seconds=rtclock.getSeconds();

	// AM PM system
	var ampm=(hours < 12)?"AM":"PM";

	//convert hrs to 12 hr
	hours=(hours >12)? hours -12:hours;

	// hrs,min,sec should lead with zero
	hours=("0"+hours).slice(-2);
	minutes=("0"+minutes).slice(-2);
	seconds=("0"+seconds).slice(-2);


	//display clock
	document.getElementById('clock').innerHTML=hours + " : "+ minutes
	+ " : " + seconds + " "+ ampm;
	var t=setTimeout(realtimeClock,500);
}