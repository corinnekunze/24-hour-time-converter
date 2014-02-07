// function InputValidation() {
//	var re = /^([01]\d|2[0-3]):?([0-5]\d)$/;
//	var firstTime = document.getElementById("first-time").value;
//	alert(firstTime.match(re));
// }

function byId(id) {
    return document.getElementById(id);
}

function activeInput(x) {
    if (x === 'military') {
        byId('second-time').classList.remove('active');
        byId('first-time').classList.add('active');
    }
    else if (x === '12hour') {
        byId('first-time').classList.remove('active');
        byId('second-time').classList.add('active');
    }
}

function ConvertTimes() {
    if (byId('first-time').classList.contains('active') || byId('first-time').classList.contains('firstLoad')) {
    	var militaryTime = byId("first-time").value;
    	var parts = militaryTime.split(':'),
    	hour = parts[0],
    	minutes = parts[1];

    	if (hour > 12) {
            militaryTime = (hour - 12) + ':' + minutes + ' pm';
        } else if (hour == 0) {
            militaryTime = 12 + ':' + minutes + ' am';
        } else if (hour == 12) {
            militaryTime += ' pm';
        } else {
            militaryTime += ' am';
        }
        var convertedTime = militaryTime;
        byId("second-time").value = convertedTime;
    } else if (byId('second-time').classList.contains('active')) {
        var twelveHour = byId("second-time").value;
        var hours = Number(twelveHour.match(/^(\d+)/)[1]);
        var minutes = Number(twelveHour.match(/:(\d+)/)[1]);
        var AMPM = twelveHour.match(/\s(.*)$/)[1];
        if (AMPM == "PM" || "pm" && hours < 12) hours = hours + 12;
        if (AMPM == "AM" || "am" && hours == 12) hours = hours - 12;
        var sHours = hours.toString();
        var sMinutes = minutes.toString();
        if (hours < 10) sHours = "0" + sHours;
        if (minutes < 10) sMinutes = "0" + sMinutes;
        var endTime = sHours + ":" + sMinutes;
        byId("first-time").value = endTime;
    }
}


