class Part < ActiveRecord::Base
  belongs_to :user

  validates :name, presence: true
  validates :price, presence: true
  validates :manufacturer, presence: true
end
