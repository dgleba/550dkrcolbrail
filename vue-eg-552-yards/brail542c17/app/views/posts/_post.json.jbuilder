json.extract! post, :id, :title, :body, :active_status, :log_date, :created_at, :updated_at
json.url post_url(post, format: :json)
