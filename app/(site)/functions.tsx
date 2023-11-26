// import { invoke } from '@tauri-apps/api/tauri'
import { tauri } from '@tauri-apps/api';
// invoke('get_process', {})  Get process returns a string with the name of the application running

interface unanalizedData{
    Enviroment: string | null,
    Hobbies: string | null
}

let data: unanalizedData;


// Formats the user info that will be sent to the AI 
function user_info () {
  var appRunning = false
  const userEnviro = document.getElementById('userEnviro');
  data.Hobbies = document.getElementById('userHobbies');
  const appToBlock = ---

  if (userEnviro === 1) {
      data.Enviroment = "Urban";
  } else if (userEnviro === 2) {
      data.Enviroment = "Suburban";
  } else {
      data.Enviroment = "Rural";
  }

  while (appRunning === false) {
    appRunning = appListener(get_process, appToBlock)
  }

}

function appListener (get_process, appToBlock) {

  for (var process in get_process) {
    if (process == appToBlock) {
      popUp();
      return true;
    }
  }
  return false;

}

// Timer that can pause using timer.pause() and resume using timer.resume()
// Returns true when complete
// function timer (get_process, specifiedProcess) {
//     var Timer = function(callback, delay) {
//         var timerId, start, remaining = delay;
  
//         this.pause = function() {
//             window.clearTimeout(timerId);
//             timerId = null;
//             remaining -= Date.now() - start;
//         };
  
//         this.resume = function() {
//             if (timerId) {
//                 return;
//             }
  
//             start = Date.now();
//             timerId = window.setTimeout(callback, remaining);
//         };
  
//         this.resume();
//     };
  
//     var timer = new Timer(function() {
//         return true;
//     }, appsAndTimeLimit[specifiedProcess]);
  
//     if (get_process !== specifiedProcess) {
//         timer.pause()
//     }
// }


function popUp () {
    console.log("Done!");
}
