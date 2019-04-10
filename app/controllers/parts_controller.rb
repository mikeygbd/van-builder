class PartsController < ApplicationController

  def index
    @parts = Part.all

  end

  def new
    @part = Part.new

  end

  def show
    @part = Part.find(params[:id])
  end

  def edit
    @part = Part.find(params[:id])
  end

  def update
    @part = Part.find(params[:id])
    if @part.update(part_params)
      redirect_to part_path(@part)
    else
      render :new
    end
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
