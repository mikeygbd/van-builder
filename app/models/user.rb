class User < ActiveRecord::Base
  has_many :parts, -> {distinct}
  has_many :wishlist_parts, -> {distinct}
  has_many :posts, -> {distinct}
  has_many :comments, through: :posts
  has_many :replies, through: :posts
  has_many :vans
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :omniauthable, :omniauth_providers => [:facebook, :google]

  validates_uniqueness_of :email

   def self.from_omniauth(auth)
     where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
       user.email = auth.info.email
       user.password = Devise.friendly_token[0,20]
         # assuming the user model has a name
       # user.image = auth.info.image # assuming the user model has an image
     end
   end
 end
