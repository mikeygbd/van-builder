class VansController < ApplicationController

  def index
    @vans = Van.all

  end

  def new
    @van = Van.new
  end

  def show
    @van = Van.find(params[:id])
  end

  def create
    if user_signed_in?
    @van = Van.new(van_params)
    @van_slug = "#{@van.van_make} #{@van.van_model} #{@van.van_year} #{@van.van_color} #{@van.van_wheelbase}".downcase.gsub(' ','+')
    url = "https://www.google.com/search?biw=1680&bih=976&tbm=isch&sa=1&q=" + @van_slug + "&oq=" + @van_slug + "&gs_l=psy-ab.3..0l10.4067.7152.0.7267.19.19.0.0.0.0.120.1489.17j2.19.0....0...1.1.64.psy-ab..0.19.1488...0i67k1.0.J04MymRcUzg"
    VanScraper.scrape_van(url)
    @url = VanScraper.image_url
    @van.url = @url
    @van.user_id = current_user.id
    @van.save
    redirect_to user_path(current_user)
  else
    redirect_to root_path
    end
  end

  def edit
    @van = Van.find(params[:id])
  end

  def update
    @van = Van.find(params[:id])
    @van.update(van_params)
      redirect_to van_path(@van)
  end

  def destroy
    @van = Van.find(params[:id])
    @van.delete
    redirect_to user_path(current_user)
  end

  private

  def van_params
    params.require(:van).permit(:van_year, :van_make, :van_model, :van_color, :van_wheelbase, :url)
  end

end
