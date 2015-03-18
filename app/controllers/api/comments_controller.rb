class Api::CommentsController < ApplicationController

  def index
    render :json => Comment.find(params[:listing_id])
  end

  def show
    render :json => Comment.find(params[:id])
  end

  def create
    # listing = Listing.find(params[:listing_id])
    # comment = listing.comments.new(comment_params)
    # comment.commenter_id = current_user.id
    # debugger
    comment = Comment.new(comment_params)
    comment.save
    if comment
      render :json => comment
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy if comment
    render :json => {}
    # redirect_to listing_url(comment.listing_id)
  end


  private

    def comment_params
      params.require(:comment).permit(:listing_id, :commenter_id, :body)
    end

end
