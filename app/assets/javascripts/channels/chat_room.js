// app/assets/javascripts/channels/chat_room_channel.js
App.chat_room = App.cable.subscriptions.create("ChatRoomChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server

  },
  received: function(data) {
    // Called when there's incoming data on the websocket for this channel
    const html = `<div class= "message">
                    <div class= "message__date">
                      ${data['message'].created_at}
                    </div>
                    <div class= "message__content">
                      ${data['message'].content}
                    </div>
                  </div>`;
    // var chat = document.getElementById('chat');
    // var newMessage1 = document.createElement('li');
    // newMessage1.innerText = data['message'].id;
    // var newMessage2 = document.createElement('li');
    // newMessage2.innerText = data['message'].content;
    $('#chat').append(html);
    $('html, body').animate({scrollTop: $('html, body')[0].scrollHeight}, 1000, 'swing');
  },

  speak: function(message) {
    return this.perform('speak', { message: message });
  }
});

function postChatMessage() {
  event.preventDefault();
  var element = document.querySelector('input[type="text"]');
  App.chat_room.speak(element.value);
  element.value = '';
}
