# README

## Name
- Chatspace

## membersテーブル

|Column|Type|options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|name|string|null: false, foreign_key: true|
|email|string|null: false|
|pasword|string|null: false|

### Association
- belongs_to :group
- has_many :chats

## chatテーブル

|Column|Type|options|
|------|----|-------|
|caht_id|integer|null: false, foreign_key: true|
|text|text|null: false|
|image|text|

### Association
- belongs_to :user
