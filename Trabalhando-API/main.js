const url = 'http://localhost:5500/api';

function getUsers() {
  axios.get(url)
    .then((res) => {
      apiResult.textContent = JSON.stringify(res.data);
    })
    .catch((err) => console.error(err));
}
function addNewUser(){
  axios.post(url, newUser)
  .then(res => console.log(res))
  .catch(err => console.error(err))
}
function getUser(id){
  axios.get(`${url}/${id}`)
  .then(res =>{
    const data = res.data

    userName.textContent = data.name
    userID.textContent = data.id
    userCity.textContent = data.city
    userAvatar.src = data.avatar

  })
  .catch(err => console.error(err))
}
function updateUsers(id){
  axios.put(`${url}/${id}`,updateUser)
  .then(res => console.log(res))
  .catch(err => console.error(err))
}

const newUser ={
  name: 'Dione',
  avatar: 'https://picsum.photo/200/300',
   city: 'Rio Grande do Sul'
}
const updateUser = {
  name: 'Valdo',
  avatar: 'https://picsum.photo/200/300',
   city: 'Colombia'
} 

updateUsers(3)
getUser(3)
getUsers();
//addNewUser()