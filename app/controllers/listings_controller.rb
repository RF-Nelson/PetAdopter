class ListingsController < ApplicationController

  def index
    @listings = Listing.all
    render :index
  end

  def show
    @listing = Listing.find(params[:id])
    render :show
  end

  def new
    @listing = Listing.new
    render :new
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      redirect_to listing_url(@listing.id)
    else
      flash.now[:errors] = @listing.errors.full_messages
      render :new
    end
  end

  def edit
    @listing = Listing.find(params[:id])
    render :edit
  end

  def update
    @listing = Listing.find(params[:id])
    if @listing.update(listing_params)
      redirect_to listing_url(@listing.id)
    else
      flash.now[:errors] = Listing.new(listing_params).errors.full_messages
      render :edit
    end
  end

  private

    def listing_params
      params.require(:listing).permit(:owner_id, :location, :pet_name, :species,
      :breed, :age, :body)
    end

end
