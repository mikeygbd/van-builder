class WishlistPartsController < ApplicationController
  def index
    @wishlist_parts = WishlistPart.all
  end

  def new
    @wishlist_part = WishlistPart.new
  end

  def show
    @wishlist_part = WishlistPart.find(params[:id])
  end

  def create
    @wishlist_part = WishlistPart.new(wishlist_part_params)
    @wishlist_part.save
    redirect_to wishlist_part_path(@wishlist_part)
  end

  def edit
    @wishlist_part = WishlistPart.find(params[:id])
  end

  def update
    @wishlist_part = WishlistPart.find(params[:id])
    @wishlist_part.update(wishlist_part_params)
    redirect_to wishlist_part_path(@wishlist_part)
  end

  def destroy
    @wishlist_part = WishlistPart.find(params[:id])
    @wishlist_part.delete
    redirect_to wishlist_parts_path(@wishlist_parts)
  end

  private

  def wishlist_part_params
    params.require(:part).permit(:name, :price, :description, :manufacturer, :user_id, :url, :page_link, :qty)
  end
end
