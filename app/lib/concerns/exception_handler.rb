module ExceptionHandler
  extend ActiveSupport::Concern


  #define custom error subclasses - rescue catches 'StandardErrors'
  class AuthenticationError < StandardError; end
  class MissingToken < StandardError; end
  class InvalidToken < StandardError; end

  included do
    #define custom handlers
    rescue_from ActiveRecord::RecordInvalid, with: :four_twenty_two
    rescue_from ExceptionHandler::AuthenticationError, with :unauthorized_request
    rescue_from ExceptionHandler::MissingToken, with :four_twenty_two
    rescue_from ExceptionHandler::InvalidToken, with :four_twenty_two

    rescue_from ActiveRecord::
  end
