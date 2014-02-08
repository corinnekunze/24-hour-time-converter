// 24 Hour Time Converter was a little personal project to learn a little more
// about javascript without the help of any Jquery. 


function byId(id) { // So I don't have to write document.getElementById a million times
    return document.getElementById(id);
}

function activeInput(x) { // Adds an active class onto an input so we know which way to convert
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

    var MilitaryReg = byId('first-time').value.match(/^([0-9]{2})\:([0-9]{2})$/);
    var AmPmReg = byId('second-time').value.match(/^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/);

    byId('alert').classList.add('hide');

    if (byId('first-time').classList.contains('active')) { // From 24 to 12
        if (!MilitaryReg) { // Validate Time entered correctly
            byId('alert').classList.remove('hide');
        } else {
        	var militaryTime = byId('first-time').value;
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
            byId('second-time').value = convertedTime;
        }
    } else if (byId('second-time').classList.contains('active')) { // From 12 to 24
        if (!AmPmReg) { // Validate Time entered correctly
            byId('alert').classList.remove('hide');
        } else {
            var twelveHour = byId('second-time').value;
            var hours = Number(twelveHour.match(/^(\d+)/)[1]);
            var minutes = Number(twelveHour.match(/:(\d+)/)[1]);
            var AMPM = twelveHour.match(/\s(.*)$/)[1];
            if ((AMPM == "PM" && hours < 12) || (AMPM == "pm" && hours < 12)) hours = hours + 12;
            if ((AMPM == "AM" && hours == 12) || (AMPM == "am" && hours == 12)) hours = hours - 12;
            var sHours = hours.toString();
            var sMinutes = minutes.toString();
            if (hours < 10) sHours = "0" + sHours;
            if (minutes < 10) sMinutes = "0" + sMinutes;
            var endTime = sHours + ":" + sMinutes;
            byId('first-time').value = endTime;
        }
    }
}


