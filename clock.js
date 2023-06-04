// clock face
let clock = setInterval(clockRunning, 1000);
function clockRunning() {
    let date = new Date();
    let clockTime = date.toLocaleTimeString();
    let clockFace = document.getElementById("clock-face");
    clockFace.innerText = clockTime;

    //check if the alarm mateches the current time
    checkAlarm(clockTime);
}

//to check the current clock time and the alarm time
function checkAlarm(currentTime) {
    let alarms = document.querySelectorAll('.addAlarms div');

    alarms.forEach(function (alarm) {
        let alarmTime = alarm.innerText.split(' ')[0];//to extract the time from div
        let alarmIndicator = alarm.innerText.split(' ')[1];
        //console.log(alarmTime, alarmIndicator);
        let alarmtime = alarmTime + ' '+ alarmIndicator;
        console.log(alarmtime);

        if (currentTime ===  alarmtime){
            alert('Alarm Triggring!!');
        }
    });
}

// fetching the ids of sections
let setAlarm = document.querySelector('.set-alarms');
let addAlarms = document.querySelector('.addAlarms');


//on clicking the button the alarm will set
const addBtn = document.getElementById('alarmSet');
addBtn.addEventListener('click', addAlarm);

//add alarm
function addAlarm() {
    //creating new element
    var newDiv = document.createElement('div');

    //taking th values from inputs
    const hours = document.getElementById('hrs').value;
    const minutes = document.getElementById('min').value;
    const seconds= document.getElementById('sec').value;
    const timeIndicator = document.getElementById('time-indicator').value.toUpperCase();
    newDiv.innerHTML = hours + ":" + minutes + ':' + seconds + ' ' + timeIndicator + ' ' + `<button>Delete</button>`;
    addAlarms.appendChild(newDiv);
    
     // Add event listener for the click event on the delete button
    var deleteButton = newDiv.querySelector('button');
    deleteButton.addEventListener('click', function(event) {
    newDiv.remove();
  });
}





