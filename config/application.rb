require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ChatSpace
  class Application < Rails::Application
    # 日本語に対応する
    config.i18n.default_locale = :ja
    config.active_record.default_timezone = :local
    # 東京の時間に合わせる
    config.time_zone = 'Tokyo'
    config.generators do |g|
      g.stylesheets false
      g.javascripts false
      g.helper false
      g.test_framework false
    end

  end
end
