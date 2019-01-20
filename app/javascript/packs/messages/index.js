import Vue from 'vue/dist/vue.esm.js'
// import App from '../app.vue'
import axios from 'axios';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: '#message-table',
    data: {
      messages: rails.messages
    },
    methods: {

    }
  })

  new Vue({
    el: '#message-form',
    data: {
      message: {
        username: document.querySelector("[v-model='message.username']").value,
        body: document.querySelector("[v-model='message.body']").value,
      },
      messages: rails.messages
    },
    methods: {
      addNewMessage: function() {
        console.log('addNewMessage')
        axios.post('/messages.json', {
          message: this.message
        })
        .then(res => {
          // console.log(res.data)
          this.messages.push({
            username: this.message.username,
            body: this.message.body
          })
        })
      },
      showData: function(){
        console.log('reloadDone')
        axios.get('/messages.json')
          .then(res => {
            this.messages.push({
              username: this.message.username,
              body: this.message.body
            })
          });
      }
    }
  })
})