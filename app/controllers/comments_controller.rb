class CommentsController < ApplicationController
before_action :authenticate_user!
  def index
    if params[:post_id]
      @comments = Post.find(params[:post_id]).comments
    else
      @comments = Comment.all
    end
  end
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

    redirect_to news_feeds_path, notice: "Your comment was successfully posted."
  else
    redirect_to root_path
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.delete
    redirect_to post_path(@post)
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :post_id, user_attributes:[:email])
  end
end
