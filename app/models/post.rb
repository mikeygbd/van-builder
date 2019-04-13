class Post < ActiveRecord::Base
  has_many :comments
  belongs_to :user

  validates :title, presence: true
  validates :description, presence: true
end
