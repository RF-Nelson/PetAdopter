json.array!(@listings) do |listing|
  json.partial!('listings', listing: listing, show_comments: false)
end
