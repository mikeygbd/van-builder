require 'test_helper'

class ReplysControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get replys_index_url
    assert_response :success
  end

  test "should get show" do
    get replys_show_url
    assert_response :success
  end

  test "should get create" do
    get replys_create_url
    assert_response :success
  end

  test "should get destroy" do
    get replys_destroy_url
    assert_response :success
  end

end
