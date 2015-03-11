class Api::CommentsController < ApplicationController

  def create
    listing = Listing.find(params[:listing_id])
    comment = listing.comments.new(comment_params)
    comment.commenter_id = current_user.id

    comment.save
    redirect_to listing_url(listing)
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    redirect_to listing_url(comment.listing_id)
  end


  private

    def comment_params
      params.require(:comment).permit(:listing_id, :commenter_id, :body)
    end

end
