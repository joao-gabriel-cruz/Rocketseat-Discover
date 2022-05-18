const url = "http://localhost:5500/api"


function getUsers(){
    fetch(url)
    .then(res => res.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(err => console.error(err))
}


getUsers()