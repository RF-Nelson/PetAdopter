require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Petadopter
  class Application < Rails::Application
    config.generators do |g|
      g.test_framework :rspec,
        :fixtures => true,
        :view_specs => false,
        :helper_specs => false,
        :routing_specs => false,
        :controller_specs => true,
        :request_specs => true
    end

    config.paperclip_defaults = {
      :storage => :s3,
      :s3_protocol => 'https',
      :path => "images/:class/:id.:style.:extension", # this is how you specify
      :s3_credentials =>  {                           # the path and file name
        :bucket => ENV["S3_BUCKET"],
        :access_key_id => ENV["S3_ACCESS_KEY_ID"],
        :secret_access_key => ENV["S3_SECRET_ACCESS_KEY"],
        :s3_host_name => "s3.amazonaws.com" # to find this, manually upload a file into your S3 bucket and then look at the file's properties (button in the top right in the bucket). The host_name is the host of the "link" for the file.
      }
    }

  end
end
