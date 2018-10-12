json.array! @messages.each do |message|
    json.name message.user.name
    json.date message.created_at.strftime("%Y/%m/%d/ %H:%M")
    json.id message.id
    json.image message.image.url
    json.content message.content
end