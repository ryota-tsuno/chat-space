class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  # validate :name, unique: true
  has_many :group_users
  has_many :groups, through: :group_users
end
