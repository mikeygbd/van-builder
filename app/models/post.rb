class Post < ActiveRecord::Base
  has_many :comments
  has_many :replies, through: :comments
  belongs_to :user
  scope :published, -> { where(published: true) }
  scope :published_and_commented, -> { published.where("comments_count > 0") }

  validates :title, presence: true
  validates :description, presence: true
end
