
see..
C:\n\sfile\0computersf\2019\02019cmnotes\nuxtvue\nuxtrl490\README.notes.nuxtrl.railnuxt490.autheg_master.txt




Status: works.


Summary: good rails docker example to learn the gemfile.lock problem.

  can login and log out..

  shows examples table on index.vue.


-----

now..

albe@pmdsdata7:/srv/file/test/nuxtrl/railnuxt490$ git lds
7f926bf\ 2019-10-21 (HEAD -> master, origin/master, origin/HEAD)\ 1021\ [David Glebagit]
fb72905\ 2019-10-18\ update.notes\ [David Glebagit]

albe@pmdsdata7:/srv/file/test/nuxtrl/railnuxt490$ git r
origin  https://github.com/dgleba/railnuxt490.git (fetch)
origin  https://github.com/dgleba/railnuxt490.git (push)


-----

was..
sftp://10.4.1.228/srv/file/test/nuxtrl/autheg

2019-10-18_Fri_12.03-PM


--


the gemfile.lock docker problem..

yes.. https://stackoverflow.com/questions/37927978/how-do-i-update-gemfile-lock-on-my-docker-host

no.. https://nickjanetakis.com/blog/dealing-with-lock-files-when-using-ruby-node-and-elixir-with-docker





# Interesting bundle behavior.

  This will put the bundled packages inside the rails project. This may desirable if wanting to move all files to another
  server..
    RUN bundle install -j3 --path vendor/bundle




--

https://github.com/fishpercolator/autheg

https://medium.com/@fishpercolator/how-to-separate-frontend-backend-with-rails-api-nuxt-js-and-devise-jwt-cf7dd9da9d16




--

grep -rLZE '.{300}' . | xargs -r0 grep -i --color cors



docker-compose build


no..
docker-compose run -u root backend bundle

docker-compose run frontend yarn


dc run frontend /bin/bash

dc run backend /bin/bash


cd build


_____________

error.

Step 3/10 : RUN adduser frontend --uid $UID --disabled-password --gecos ""
 ---> Running in 7809bc9ffded
adduser: The UID 1000 is already in use.
ERROR: Service 'frontend' failed to build: The command '/bin/sh -c adduser frontend --uid $UID --disabled-password --gecos ""' returned a non-zero code: 1
albe@pmdsdata7:/srv/file/test/nuxtrl/autheg$ 

I changed to user 1000, OK.

_____________

I changed rails to root user.

_____________



  docker images | grep "autheg_b" | awk '{print $1 ":" $2}' | xargs docker rmi
  
 
docker-compose build

touch autheg-backend/Gemfile.lock
#try this first..
  docker-compose run backend bundle
#then if necessary..
  docker-compose build backend


# no need..
docker-compose run --rm backend bundle exec bundle install


docker-compose run --rm backend bundle exec rails db:migrate
docker-compose run --rm backend bundle exec rails db:seed

 
docker-compose run --rm backend bundle exec rails db:migrate RAILS_ENV=development



  
  
  

----------------------------------------------------
Title:  .
-----------------------2019-10-18[Oct-Fri]11-21AM

didn't do this..

docker-compose run backend bundle exec rails g resource example name:string colour:string

no..
> rails db:migrate
> rails c
> > {"foo" => "green", "bar" => "red", "baz" => "purple"}.each {|n,c| Example.create!(name: n, colour: c)}
  
  
  
no..  
docker-compose run backend bash
> rails g resource example name:string colour:string
> rails db:migrate
> rails c
> > {"foo" => "green", "bar" => "red", "baz" => "purple"}.each {|n,c| Example.create!(name: n, colour: c)}
  

----------------------------------------------------
  
#no..
curl -i -H "Content-Type: application/json" \
      -X POST -D ./curldump -i\
      -d '{"user": {"email":"a@a","password":"123123"}}' \
      http://10.4.1.228:8080/api/users/sign_in.json
      
# yes..      
curl -i -H "Content-Type: application/json" \
      -X POST -D ./curldump -i\
      -d '{"user": {"email":"a@a","password":"123123"}}' \
      http://10.4.1.228:8080/api/users/sign_in
      

_____________

      
albe@pmdsdata7:/srv/file/test/nuxtrl/autheg$ curl -i -H "Content-Type: application/json" \
>       -X POST -D ./curldump -i\
>       -d '{"user": {"email":"a@a","password":"123123"}}' \
>       http://10.4.1.228:8080/api/users/sign_in
HTTP/1.1 200 OK
Location: /
Content-Type: application/json; charset=utf-8
Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNTcxNDEyNzg0LCJleHAiOjE1NzE0MTYzODQsImp0aSI6IjI3MGFmODc1LTA4ZjEtNGQwZC1hM2U2LTMzN2NiZTU2Njg3YiJ9.cc4tyhuHBJ24CGgAMQRTfvIf9pJRrMmI93KM9GpkTmg
ETag: W/"c5f2b40871a5d9d42be3b71a57eae3b3"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: e9f04b01-a8eb-419a-865a-30fec3109b0a
X-Runtime: 0.525804
Vary: Origin
Transfer-Encoding: chunked

{"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwic2NwIjoidXNlciIsImF1ZCI6bnVsbCwiaWF0IjoxNTcxNDEyNzg0LCJleHAiOjE1NzE0MTYzODQsImp0aSI6IjI3MGFmODc1LTA4ZjEtNGQwZC1hM2U2LTMzN2NiZTU2Njg3YiJ9.cc4tyhuHBJ24CGgAMQRTfvIf9pJRrMmI93KM9GpkTmg"}albe@pmdsdata7:/srv/file/test/nuxtrl/autheg$
albe@pmdsdata7:/srv/file/test/nuxtrl/autheg$


_____________

4login?redirect=%2F:1 Access to XMLHttpRequest at 'http://10.4.1.228:8080/api/users/sign_in' from origin 'http://10.4.1.228:7000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

  
nuxt Access to XMLHttpRequest at sign_in' from origin  has been blocked by CORS policy

Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
  
  
grep -rLZE '.{300}' . | xargs -r0 grep -i --color cors


_____________


not needed I don't think....

https://nuxtjs.org/faq/http-proxy/

npm i @nuxtjs/proxy --save
or  
add to package.json



    "@nuxtjs/proxy": "^1.3"
    
    
    
_____________


dc build frontend


 modules: [
    "@nuxtjs/vuetify",
    "@nuxtjs/proxy",
    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],
  proxy: {
    target: "10.4.1.228:8080",
    prefix: "/api"
  },
  auth: {
    endpoints: {
      login: { url: "/users/sign_in" },
      logout: { url: "/users/sign_out", method: "delete" },
      user: { url: "/users/current" }
    }
  }
  
  

NuxtServerError
$axios is not available

_____________
  
  
docker-compose   exec backend /bin/bash -c ' rm -r vendor/bundle/ '
   
  
  
---

Access to XMLHttpRequest at 'http://10.4.1.228:8080/api/users/sign_in' from origin 'http://10.4.1.228:7000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.

Set up rack cors..  
  
  https://github.com/cyu/rack-cors
  
-----

tried..

  modules: ["@nuxtjs/vuetify", "@nuxtjs/axios", "@nuxtjs/auth"],
  axios: {
    baseURL: "http://10.4.1.228:6035",
    proxyHeaders: false
  },


-----  
  
  


Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:3000', 'autheg.herokuapp.com', '10.4.1.228', '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end

_____________



----------------------------------------------------
Title:  .
-----------------------2019-10-18[Oct-Fri]19-43PM

works..


dkd -v --rmi local
make clean

dc build

docker-compose run frontend yarn


touch autheg-backend/Gemfile.lock
#try this first..
  docker-compose run backend bundle

dc up


docker-compose exec  backend bundle exec rails db:migrate RAILS_ENV=development
# or
docker-compose run --rm backend bundle exec rails db:migrate RAILS_ENV=development


docker-compose exec backend bundle exec rails db:seed
# or
docker-compose run --rm backend bundle exec rails db:seed


adminer
  http://10.4.1.228:6119/?server=db3309&username=root&db=dkrdb&select=users

nuxt app.. 
  http://10.4.1.228:7000/login
 
 
Tools..
 
dc run frontend /bin/bash

dc run backend /bin/bash





----------------------------------------------------


----------------------------------------------------
Title:  .
-----------------------2019-10-18[Oct-Fri]20-46PM

copy..


clone autheg to railnuxt490. copy my changes over top using rsync.

1.
fork.
   origin  https://github.com/fishpercolator/autheg.git (fetch)


2.

git clone https://github.com/dgleba/railnuxt490.git

3.
copy from
sftp://10.4.1.228/srv/file/test/nuxtrl/autheg

  cd /srv/file/test/nuxtrl/
     Source=autheg;    
     Dest=railnuxt490;
  rsync -av  --exclude '.git'  --exclude 'node_modules'  $Source/ $Dest/

4.
git cap


was.. origin  https://github.com/fishpercolator/autheg.git (fetch)



----------------------------------------------------
 