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


const newUser ={
  name: 'Dione',
  avatar: 'http://picsum.photo/200/300',
   city: 'Rio Grande do Sul'
}

getUsers();
//addNewUser()