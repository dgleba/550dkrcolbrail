json.extract! contact, :id, :name, :bio, :created_at, :updated_at
json.url contact_url(contact, format: :json)
