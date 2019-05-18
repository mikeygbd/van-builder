class PartSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :manufacturer, :user_id, :url, :page_link, :qty
  belongs_to :user
end
