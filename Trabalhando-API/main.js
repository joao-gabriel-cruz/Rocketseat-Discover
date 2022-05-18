const url = 'http://localhost:5500/api';

function getUsers() {
  axios.get(url)
    .then((res) => {
      apiResult.textContent = JSON.stringify(res.data);
    })
    .catch((err) => console.error(err));
}

getUsers();