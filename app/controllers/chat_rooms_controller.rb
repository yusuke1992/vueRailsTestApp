class ChatRoomsController < ApplicationController
  def show
    @messages = ChatMessage.all
  end
end
