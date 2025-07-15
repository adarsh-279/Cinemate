import axios from 'axios'

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
     headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDU1ZDg0MzAzMjQ4NTJkNmYxYmI4OGVkNThhM2NiNyIsIm5iZiI6MTc1MjU2MzQzMi43ODIsInN1YiI6IjY4NzVmZWU4ZmY3MDYxMWZmN2QxNjBiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4g4CuTK1vzy4SHKsFswN8PJNpGMDvteetuI--HClQcA'
  },
});

export default instance;