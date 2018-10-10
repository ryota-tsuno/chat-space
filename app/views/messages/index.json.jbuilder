json.array! @messages.each do |message|
    json.name message.user.name
    json.date message.created_at.strftime("%Y年%m月%d日 %H時%M分")
    json.id message.id
    json.image message.image.url
    json.content message.content
end