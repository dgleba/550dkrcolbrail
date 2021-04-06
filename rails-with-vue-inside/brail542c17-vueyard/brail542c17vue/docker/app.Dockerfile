
# Dockerfile.dev
# FROM ruby:2.6.5 as builder
FROM ruby:2.7.2 as builder

# ENV BUNDLE_PATH /bundle
# ENV RAILS_ROOT /myapp

# nothanks RUN bundle config --global frozen 1


RUN apt-get update && apt-get install -y \
  curl \
  build-essential \
  libpq-dev &&\
  curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && apt-get install -y nodejs yarn
  

RUN  apt-get install -y  mc  \
  && echo "alias ll='ls -la'" >>   ~/.bashrc ; chmod ugo+rw  ~/.bashrc \
  && echo "alias psg='ps -ef|grep '" >>   ~/.bashrc  


EXPOSE 3000

WORKDIR /app
COPY Gemfile Gemfile.lock ./

RUN cd /app &&  gem install bundler -v "~>2.0" && bundle install

# RUN   mkdir -p /app && mkdir  /app/shared \
#   && mkdir  /app/shared/log && mkdir  /app/shared/pids && mkdir  /app/shared/sockets 

COPY package.json .
COPY yarn.lock .
RUN yarn install

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]


