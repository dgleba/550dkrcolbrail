
# Dockerfile.dev
# FROM ruby:2.6.5 as builder
FROM ruby:2.7.2 as builder

# ENV BUNDLE_PATH /bundle
# ENV RAILS_ROOT /myapp

# nothanks RUN bundle config --global frozen 1


RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs mc \
  && echo "alias ll='ls -la'" >>   ~/.bashrc ; chmod ugo+rw  ~/.bashrc \
  && echo "alias psg='ps -ef|grep '" >>   ~/.bashrc  


EXPOSE 3000

WORKDIR /app

# COPY apprails/Gemfile apprails/Gemfile.lock ./
# COPY apprails/Gemfile  ./

# RUN cd /app &&  gem install bundler -v "~>2.0"  && bundle update --bundler && bundle install
# RUN cd /app &&  gem install bundler -v "~>2.0"  && bundle install
RUN cd /app &&  gem install bundler -v "~>2.0"  

# RUN   mkdir -p /app && mkdir  /app/shared \
#   && mkdir  /app/shared/log && mkdir  /app/shared/pids && mkdir  /app/shared/sockets 


CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]

