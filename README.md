# README

## Name
- Chatspace

<!-- 中間テーブル -->
## group_userテーブル

|Column|Type|options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type|options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :chats
- has_many :users, through: :group_users
- has_many :group_user

## usersテーブル

|Column|Type|options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|pasword|string|null: false, unique: true|

### Association
- has_many :groups, through: :group_users
- has_many :group_users
- has_many :chats

## chatsテーブル

|Column|Type|options|
|------|----|-------|
|text|text|null: false|
|image|string|

### Association
- belongs_to :user
- belongs_to :group