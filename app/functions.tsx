import { invoke } from '@tauri-apps/api/tauri'
// invoke('get_process', {})  Get process returns a string with the name of the application running

interface unanalizedData{
    Enviroment: string | null,
    Hobbies: string | null
}

let data: unanalizedData;


// Formats the user info that will be sent to the AI 
function user_info () {

    const userEnviro = document.getElementById('userEnviro');
    data.Hobbies = document.getElementById('userHobbies');

    if (userEnviro === 1) {
        data.Enviroment = "Urban";
    } else if (userEnviro === 2) {
        data.Enviroment = "Suburban";
    } else {
        data.Enviroment = "Rural";
    }

}

function timer (get_process, specifiedProcess) {
    var Timer = function(callback, delay) {
        var timerId, start, remaining = delay;
  
        this.pause = function() {
            window.clearTimeout(timerId);
            timerId = null;
            remaining -= Date.now() - start;
        };
  
        this.resume = function() {
            if (timerId) {
                return;
            }
  
            start = Date.now();
            timerId = window.setTimeout(callback, remaining);
        };
  
        this.resume();
    };
  
    var timer = new Timer(function() {
        return true;
    }, appsAndTimeLimit[specifiedProcess]);
  
    if (get_process !== specifiedProcess) {
        timer.pause()
    }
}


// Times the user and executes the popup when they go over their specified time limit
function appTimeLimit (get_process) {

    // Dictionary w/ The names of the applications the user wants blocked [KEY] : [VALUE] The user specified time limit 
    var appsAndTimeLimit = {
        // FileName: [TimeLimit, TimeCompletion]
        // URL: [TimeLimit, TimeCompletion]
        // ...
    }

    // Timer that can pause using 'timer.pause()' and resume using 'timer.resume()'
    


}


function popUp () {
    console.log("Done!");
}
