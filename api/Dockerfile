FROM ruby:2.7.1 as base
RUN apt-get update -qq && apt-get install -y
RUN mkdir /api
WORKDIR /api
COPY Gemfile /api/Gemfile
COPY Gemfile.lock /api/Gemfile.lock
RUN bundle install
COPY . /api
EXPOSE 3000
