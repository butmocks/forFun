// import axios from 'axios'

// export default {
//   name: 'Task',
//   data() {
//     return {
//       taskDataList: []
//     }
//   },
//   computed: {
//     RandomTask() {
//       const rand = Math.floor(Math.random() * this.taskDataList.length)
//       return this.taskDataList[rand] ? this.taskDataList[rand].quote : ""
//     }
//   },
//   methods: {
//     getTaskData() {
//       axios.get('./dbv6.json').then((response) => {
//         this.taskDataList = response.data
//       })
//     }
//   }
// }
//   // < div >
//   // <span class="quote">
//   //   {{
//   //     randomQuote
//   //   }}</span>
//   //     </div >

