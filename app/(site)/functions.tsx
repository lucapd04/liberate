// import { invoke } from '@tauri-apps/api/tauri'
// invoke('get_process', {})  Get process returns a string with the name of the application running

var userEnviro

var unanalizedData = {
  "Environment": '',
  "Hobbies": ''
}


// Formats the user info that will be sent to the AI 
export function userEnviroBtn (enviroInput) {

  if (enviroInput === 1) {
      unanalizedData["Environment"] = "Urban";
      console.log(unanalizedData)
  } else if (enviroInput === 2) {
      unanalizedData["Environment"] = "Suburban";
      console.log(unanalizedData)
  } else {
      unanalizedData["Environment"] = "Rural";
      console.log(unanalizedData)
  }
}


export function continueBtn (userTxt, get_process, appToBlock) {
  var appRunning = false;
  data.Hobbies = userTxt;

  while (appRunning === false) {
    appRunning = appListener(get_process, appToBlock);
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
