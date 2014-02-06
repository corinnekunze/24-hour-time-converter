// function InputValidation() {
//	var re = /^([01]\d|2[0-3]):?([0-5]\d)$/;
//	var firstTime = document.getElementById("first-time").value;
//	alert(firstTime.match(re));
// }

function activeInput(x) {
    if (x === 'military') {
        document.getElementById('first-time').classList.remove('firstLoad');
        document.getElementById('second-time').classList.remove('active');
        document.getElementById('first-time').classList.add('active');
    }
    else if (x === '12hour') {
        document.getElementById('first-time').classList.remove('active');
        document.getElementById('second-time').classList.add('active');
    }
}

function ConvertTimes() {
    if (document.getElementById('first-time').classList.contains('active') || document.getElementById('first-time').classList.contains('firstLoad')) {

    	var initialTime = document.getElementById("first-time").value;
    	var parts = initialTime.split(':'),
    	hour = parts[0],
    	minutes = parts[1];

    	if (hour > 12) {
            initialTime = (hour - 12) + ':' + minutes + ' pm';
        } else if (hour == 0) {
            initialTime = 12 + ':' + minutes + ' am';
        } else if (hour == 12) {
            initialTime += ' pm';
        } else {
            initialTime += ' am';
        }
        var convertedTime = initialTime;
        document.getElementById("second-time").value = convertedTime;
    }
}


