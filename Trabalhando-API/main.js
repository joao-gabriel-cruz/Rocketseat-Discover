

const url = "http://localhost:5500/api"


function getUsers(){
    fetch(url)
    .then(res => res.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(err => console.error(err))
}
function getUser(){
fetch(`${url}/5`)
    .then(res => res.json())
    .then(data => {
          userName.textContent = data.name
          userCity.textContent = data.city
          userAvatar.src = data.avatar 
    })
    .catch(err => console.error(err))
}

function addUser(newUser){
    fetch(url,{
        method:"POST",
        body: JSON.stringify(newUser),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(data => alertApi.textContent = data)
    .catch(err => console.log(err))
}

const newUser = {
    name: "Roberta",
    avatar: "http://picsum.photos/400/200",
    city: "Rio do Sul"
}

addUser(newUser)

getUser()
getUsers()