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
|name|string|null: false, foreign_key: true|
|email|string|null: false, unique: true|
|pasword|string|null: false, unique: true|

### Association
- belongs_to :group
- has_many :chats

## groupテーブル

|Column|Type|options|
|------|----|-------|
|text|text|null: false|
|image|string|

### Association
- belongs_to :user
