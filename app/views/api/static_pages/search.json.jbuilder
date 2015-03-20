json.results do
  json.array! @search_results do |search_result|
    json.partial!("api/listings/listings", listing: search_result.searchable, show_comments: false)
    json._type "Listing"
  end
end




# json.total_count @search_results.total_count
