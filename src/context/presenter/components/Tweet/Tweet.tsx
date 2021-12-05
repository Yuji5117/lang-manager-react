import { useState, useEffect } from 'react';
import axios from "axios";

import { TextField, Button, Select, MenuItem } from "@mui/material";

function Tweet() {
    const [tweetKr, setTweetKr] = useState('');
    const [tweetJp, setTweetJp] = useState('');
    const [textFormat, setTextFormat] = useState(`＜簡単表現＞\n\n【韓国語】\n・${tweetKr}\n\n【日本語】\n・${tweetJp}`);
    const [formatNum, setFormatNum] = useState('');

    const handleChange = (e: any) => {
        console.log(e);
        switch (e.target.value) {
            case 1:
                setTextFormat(`＜簡単表現＞\n\n【日本語】\n・${tweetKr}\n\n【韓国語】\n・${tweetJp}`);
                break;
            case 2:
                setTextFormat(`＜難しい表現＞\n\n【日本語】\n・${tweetKr}\n\n【韓国語】\n・${tweetJp}`);
                break;
            case 3:
                setTextFormat(`＜フレーズ表現＞\n\n【日本語】\n・${tweetKr}\n\n【韓国語】\n・${tweetJp}`);
                break;

            default:
                break;
        }

        console.log(textFormat);
        setFormatNum(e.target.value);
    };

    const onHandleTweetValue = (e: any) => {
        e.preventDefault();
        switch (e.target.name) {
            case 'tweetKr':
                setTweetKr(e.target.value);
                break;
            case 'tweetJp':
                setTweetJp(e.target.value);
                break
        }
        setTextFormat(textFormat);
        console.log(tweetKr);
        console.log(tweetJp);
        console.log(textFormat);
    }

    const onTweet = async () => {
        const endpoint = `${process.env.REACT_APP_API_ENDPOINT_URL}/twitter-manager`

        try {
            const res = await axios.post(endpoint, textFormat);
            return {
                statusCode: 200,
                body: JSON.stringify(res)
            }
        } catch (e) {
            console.log(e)
            return {
                statusCode: 400,
                body: JSON.stringify(e)
            }
        }
    }

    // TODO: フォーマット切り替え処理
    const onChangeTweetFormat = (e: any) => {
        e.preventDefault();
        console.log(e);
        setTextFormat('');
    }

    return (
        <div>
            <h1>ツイートせよ！</h1>
            <form className="tweet_form">
                <div className="tweet_container">
                    <div>
                        <TextField fullWidth name='tweetKr' label="韓国語" onChange={onHandleTweetValue} />
                    </div>
                    <div>
                        <TextField fullWidth name='tweetJp' label="日本語" onChange={onHandleTweetValue} />
                    </div>
                    <Button variant="contained" color="primary" type="submit" onClick={onTweet}>ツイート</Button>
                </div>
            </form>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={formatNum}
                onChange={handleChange}
                autoWidth
                label="Format"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Twenty</MenuItem>
                <MenuItem value={2}>Twenty one</MenuItem>
                <MenuItem value={3}>Twenty one and a half</MenuItem>
            </Select>
            <Button variant="contained" color="secondary" onClick={onChangeTweetFormat}>変更</Button>
        </div>
    )
}

export default Tweet
