import { useState, useEffect } from 'react';
import axios from "axios";


function TweetList() {
    const [tweets, setTweets] = useState([]);

    const endpoint = `${process.env.REACT_APP_API_ENDPOINT_URL}/twitter-manager/tweet-list`;

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(endpoint);
            const contents = response.data.map((tweet: any) => tweet.text);
            setTweets(contents);
            return response;
        }
        fetchData();
    }, [endpoint]);

    return (
        <div>
            <h1>ツイート一覧</h1>
            <ol>
                {tweets.map((tweet, index) => <li key={index}>{tweet}</li>)}
            </ol>
        </div>
    )
}

export default TweetList;
