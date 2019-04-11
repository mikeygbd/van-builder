require 'test_helper'

class NewsFeedsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get news_feeds_index_url
    assert_response :success
  end

end
