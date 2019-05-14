class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :post_id, :user_id
  belongs_to :post
  has_one :user
end
