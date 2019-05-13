class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :embed, :user_id
  has_many :comments
end
