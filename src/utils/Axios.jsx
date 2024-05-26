import axios from 'axios'

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDAwMjU2ODQ5MTIzMmRjNzgzMzAyY2NhOWY1MDAwNiIsInN1YiI6IjY2NGM5M2U0YjE0MjUxN2I2OTdkMTVmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WNeFOP3fYF6ZQc4tORMDYAbLvuv4n-gjHYWsYQRBw-w'
      }
})


export default instance