class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :embed, :user_id
  has_many :comments
  belongs_to :user


end
