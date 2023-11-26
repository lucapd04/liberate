import { invoke } from '@tauri-apps/api/tauri'
// invoke('get_process', {})

interface unanalizedData{
    Enviroment: string | null,
    Hobbies: string | null
}

let data: unanalizedData;

// Formats the user info that will be sent to the AI 
function user_info () {

    const userEnviro = document.getElementById('userEnviro')
    data.Hobbies = document.getElementById('userHobbies')

    if (userEnviro === 1) {
        data.Enviroment = "Urban"
    } else if (userEnviro === 2) {
        data.Enviroment = "Suburban"
    } else {
        data.Enviroment = "Rural"
    }

}


function appTimeLimit (get_process) {

    var appsAndTimeLimit = [
        // FileName: TimeLimit
        // ...
    ]

    

}


function popUp () {

}