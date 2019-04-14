class PartsController < ApplicationController

 # skip_before_action :verify_authenticity_token
  def index
    @parts = Part.all

  end

  def new
    @part = Part.new
  end

  def show
    @part = Part.find(params[:id])
  end

  def create
    if user_signed_in?
    @part = Part.new(part_params)
    @part_slug = "#{@part.manufacturer} #{@part.name} #{@part.description}".downcase.gsub(' ','+')
    url = "https://www.google.com/search?biw=1680&bih=976&tbm=isch&sa=1&q=" + @part_slug + "&oq=" + @part_slug + "&gs_l=psy-ab.3..0l10.4067.7152.0.7267.19.19.0.0.0.0.120.1489.17j2.19.0....0...1.1.64.psy-ab..0.19.1488...0i67k1.0.J04MymRcUzg"
    PartsScraper.scrape_part(url)
    @url = PartsScraper.image_url
    @part.url = @url
    @part.user_id = current_user.id
    @part.user = current_user
    @part.save
    redirect_to part_path(@part)
  else
    redirect_to root_path
    end
  end

  def edit
    @part = Part.find(params[:id])
  end

  def update
    @part = Part.find(params[:id])
    @part.update(part_params)
      redirect_to part_path(@part)
  end

  def destroy
    @part = Part.find(params[:id])
    @part.delete
    redirect_to parts_path(@parts)
  end

  private

  def part_params
    params.require(:part).permit(:name, :price, :description, :manufacturer, :user_id, :url, :page_link, :qty)
  end

end
