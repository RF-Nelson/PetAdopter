class Api::ListingsController < ApplicationController

  def index
    @listings = Listing.all
    render json: @listings
  end

  def show
    @listing = Listing.find(params[:id])
    render json: @listing, include: :comments
  end

  def new
    @listing = Listing.new
    render :new
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render json: @listing
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def edit
    @listing = Listing.find(params[:id])
    render :edit
  end

  def update
    @listing = Listing.find(params[:id])
    if @listing.update(listing_params)
      render json: @listing
      # redirect_to listing_url(@listing.id)
    else
      render json: Listing.new(listing_params).errors.full_messages, status: 422
      # flash.now[:errors] = Listing.new(listing_params).errors.full_messages
      # render :edit
    end
  end

  def destroy
    listing = Listing.find(params[:id])
    listing.destroy
    redirect_to listings_url
  end

  private

    def listing_params
      params.require(:listing).permit(:owner_id, :location, :pet_name, :species,
      :breed, :age, :body)
    end

end
