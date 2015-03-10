require 'spec-helper'

feature "the signup process" do

  it "has a new user page" do
    visit new_user_url
    expect(page).to have_content "Sign Up"
  end

  it "signs user in and shows the user's email on header after sign up" do
    visit new_user_url
    fill_in 'E-mail', :with => "testname"
    fill_in 'password', :with => "password"
    click_on "Sign Up"
    expect(page).to have_content "testname"
  end

end

feature "logging in" do

  before(:each) do
    visit new_user_url
    fill_in 'E-mail', :with => "testname"
    fill_in 'password', :with => "password"
    click_on "Sign Up"
    click_on "Sign Out"
  end

  it "shows user's email after login" do
    visit new_session_url
    fill_in 'E-mail', :with => "testname"
    fill_in 'password', :with => "password"
    expect(page).to have_content "testname"
  end

end

feature "logging out" do

  it "logs out a user" do
    visit new_session_url
    fill_in 'E-mail', :with => "testname"
    fill_in 'password', :with => "password"
    click_on "Sign In"
    click_on "Sign Out"
    expect(page).not_to have_content "testname"
  end

end
