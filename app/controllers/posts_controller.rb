class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
    respond_to do |format|
      format.html {render :show}
      format.json {render json: @post}
    end
  end

  def new
    @post = Post.new
  end

  def create
    if user_signed_in?
    @post = Post.create(post_params)
    @post.user_id = current_user.id
    @post.user = current_user
    @post.save
    render json: @post
  else
    redirect_to root_path
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    @post.update(post_params)
      redirect_to post_path(@post)
  end

  def destroy
    @post = Post.find(params[:id])
    @post.delete
    redirect_to posts_path(@posts)
  end

  def post_data
    post = Post.find(params[:id])
    render json: post.to_json(only: [:title, :description, :id])
  end

  private

  def post_params
    params.require(:post).permit(:title, :description, :user_id, :embed)
  end
end
