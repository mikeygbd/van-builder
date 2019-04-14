class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :post
  has_many :replies
  validates :content, presence: true
end
