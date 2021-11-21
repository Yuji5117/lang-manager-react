const Twitter = require('twitter');

export const client = new Twitter({
  consumer_key: process.env.TWITTER_APP_API_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_APP_API_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_APP_API_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_APP_API_ACCESS_TOKEN_SECRET,
});
