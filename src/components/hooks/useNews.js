import { useEffect, useState } from 'react';

const useNews = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=apple&from=2022-11-07&to=2022-11-07&sortBy=popularity&apiKey=fdfdb59571a94244bd00c16c6d3a09f3')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return news
};

export default useNews;