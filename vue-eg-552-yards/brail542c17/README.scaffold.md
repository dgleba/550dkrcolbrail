

docker-compose  -f docker-compose.yml  exec web rails generate scaffold Post title body:text active_status:integer log_date:date 



2021-01-06
change to:


docker-compose  -f docker-compose.yml  exec web rails generate scaffold Pbook title author active_status:integer 

docker-compose  -f docker-compose.yml  exec web rails generate scaffold Ppost title body:text active_status:integer log_date:date user:references Pbook:references

