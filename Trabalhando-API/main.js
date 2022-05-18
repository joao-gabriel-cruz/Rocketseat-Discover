const url = "http://localhost:5500/api"


function getUsers(){
    fetch(url)
    .then(res => res.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(err => console.error(err))
}
function getUser(){
fetch(`${url}/1`)
    .then(res => res.json())
    .then(data => {
          userName.textContent = data.name
          userCity.textContent = data.city
          userAvatar.src = data.avatar 
    })
    .catch(err => console.error(err))
}

getUser()
getUsers()