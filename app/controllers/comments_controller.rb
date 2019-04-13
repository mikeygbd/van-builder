class CommentsController < ApplicationController

  def new
    @comment = Comment.new
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    if user_signed_in?
    @comment = Comment.new(comment_params)
    # @post = Post.find(params[:id])
    #  @comment.post_id = @post.id
    @comment.user = current_user
    @comment.save

    redirect_to news_feeds_path
  else
    redirect_to root_path
  end
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :post_id, user_attributes:[:email])
  end
end
