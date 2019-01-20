json.array! @messages, partial: 'messages/message', as: :message
# json.array! @messages do |message|
#   json.usernamea @message.username
#   json.body @message.body
# end