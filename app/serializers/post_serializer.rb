class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :embed, :user_id
  has_many :comments
  has_one :user

  # def comment_list
  # object.comments.map do |comment|
  #   {
  #     id: comment.id,
  #     user: {
  #       id: comment.user_id,
  #       email: User.find(comment.user_id).email
  #     },
  #     content: comment.content
  #   }
  #   end
  # end
end
