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
    if user_signed_in?
    @wishlist_part = WishlistPart.new(wishlist_part_params)
    @part_slug = "#{@wishlist_part.manufacturer} #{@wishlist_part.name} #{@wishlist_part.description}".downcase.gsub(' ','+')
    url = "https://www.google.com/search?biw=1680&bih=976&tbm=isch&sa=1&q=" + @part_slug + "&oq=" + @part_slug + "&gs_l=psy-ab.3..0l10.4067.7152.0.7267.19.19.0.0.0.0.120.1489.17j2.19.0....0...1.1.64.psy-ab..0.19.1488...0i67k1.0.J04MymRcUzg"
    PartsScraper.scrape_part(url)
    @url = PartsScraper.image_url
    @wishlist_part.url = @url
    @wishlist_part.user_id = current_user.id
    @wishlist_part.user = current_user
    @wishlist_part.save
    redirect_to wishlist_part_path(@wishlist_part)
  else
    redirect_to root_path
    end
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
    params.require(:wishlist_part).permit(:name, :price, :description, :manufacturer, :user_id, :url, :page_link, :qty)
  end
end
