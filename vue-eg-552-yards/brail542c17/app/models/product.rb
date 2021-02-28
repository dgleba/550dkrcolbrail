class Product < ApplicationRecord
has_many :product_feature
  has_many :pfeature, through: :product_feature

  belongs_to :country_of_origin

  # https://stackoverflow.com/questions/18996255/rails-foreign-key-other-than-id
  belongs_to :post , :primary_key => :title
end
