require 'rails_helper'

RSpec.describe Item, type: :model do

  # Associate test
  # ensure an item record belongs to a single todo Record
  it { should belong_to(:todo) }

  # Validation test
  # ensure column name is present before saving
  it { should validate_presence_of(:name) }

end
