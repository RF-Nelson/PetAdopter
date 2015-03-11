require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'creates user' do
    it 'saves a user' do
      u = User.new(
        email: 'yahoo@yahoo.com',
        password: "password1",
      )

      expect(u.save).to be true
    end
  end

  describe 'User validations' do
    it {should validate_presence_of(:email)}
    it {should validate_length_of(:password)}

    it 'should ensure a unique email on signup' do
      User.create!(
        email: 'yahoo@yahoo.com',
        password: "password1",
      )

      user = User.new(email: 'yahoo@yahoo.com', password: "123456")
      user.save
      expect(user.errors.full_messages[0]).to eq("Email has already been taken")
    end
  end


end
