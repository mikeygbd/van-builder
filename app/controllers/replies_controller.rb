class RepliesController < ApplicationController
  def index
    @replys = Reply.all
  end

  def show
    @reply = Reply.find(params[:id])
  end

  def create
    if user_signed_in?
    @reply = Reply.new(reply_params)
    # @post = Post.find(params[:id])
    #  @reply.post_id = @post.id
    @reply.user = current_user
    @reply.save

    redirect_to news_feeds_path, notice: "Your reply was successfully posted."
  else
    redirect_to root_path
    end
  end

  def destroy
    @reply = Reply.find(params[:id])
    @reply.delete
    redirect_to post_path(@post)
  end

  private

  def reply_params
    params.require(:reply).permit(:content, :comment_id, :user_id, user_attributes:[:email])
  end
end
