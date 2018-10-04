json.id @message.id
json.image @message.image.url
json.created_at format_posted_time(@message.created_at)
json.content @message.content
json.user_id @message.user.id
json.user_name @message.user.name