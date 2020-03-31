import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-be87d.firebaseio.com/'
})