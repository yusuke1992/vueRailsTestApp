class ChatRoomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from 'chat_room_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    # ActionCable.server.broadcast 'chat_room_channel', message: data['message']
  end

  def speak(data)
    chat_message = ChatMessage.create!(id: data['message.id'], content: data['message']) # 追記
    ActionCable.server.broadcast 'chat_room_channel', message: chat_message
  end
end
