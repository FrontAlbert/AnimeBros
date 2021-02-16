import "./sass/app.css";
import React, { useEffect, useState } from "react";
import TopAiring from "./components/TopAiring";
import TopUpcoming from "./components/TopUpcoming";
import TopRecommended from "./components/TopRecommended";
import SearchAnime from "./components/SearchAnime";
import Nav from "./components/Nav";
import TopAnimesAllTime from './components/TopAnimesAllTime'

//Router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
    // Top Airing Animes
    const [topAiringAnimes, setTopAiringAnimes] = useState([]);
    const getTopAiringAnimes = async () => {
        const temp = await fetch(
            `https://api.jikan.moe/v3/top/anime/1/airing`
        ).then((res) => res.json());
        console.log(temp.top);
        setTopAiringAnimes(temp.top.slice(0, 5));
    };
    // Top Airing Animes

    // Top Upcoming Animes
    const [topUpcoming, setTopUpcoming] = useState([]);
    const getTopUpcoming = async () => {
        const temp = await fetch(
            `https://api.jikan.moe/v3/top/anime/1/upcoming`
        ).then((res) => res.json());
        console.log(temp.top);
        setTopUpcoming(temp.top.slice(0, 5));
    };
    // Top UpComing Animes

    // Top Recommended Animes
    const [recommended, setRecommended] = useState([]);
    const getRecommended = async () => {
        const temp = await fetch(
            `https://api.jikan.moe/v3/top/anime/1/bypopularity`
        ).then((res) => res.json());
        console.log(temp.top);
        setRecommended(temp.top.slice(0, 5));
    };
    // Top Recommended Animes

    // Top Animes All Time
    const [recommended2, setRecommended2] = useState([]);
    const getRecommended2 = async () => {
        const temp = await fetch(
            `https://api.jikan.moe/v3/top/anime/1/bypopularity`
        ).then((res) => res.json());
        console.log(temp.top);
        setRecommended2(temp.top.slice(0, 25));
    };

    // Top Animes All Time

    // Searching for Animes
    const HandleSearch = (e) => {
        e.preventDefault();
        FetchAnime(search);
    };
    const [search, setSearch] = useState("");
    const [animeList, setAnimeList] = useState([]);
    const FetchAnime = async (query) => {
        const temp = await fetch(
            `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
        ).then((res) => res.json());
        // Results is from the API
        setAnimeList(temp.results);
    };
    // Searching for Animes


    // UseEffect
    useEffect(() => {
        getRecommended2();
        getRecommended();
        getTopAiringAnimes();
        getTopUpcoming();

    }, []);

    return (
        <div className="App">
            <Nav />
            <Switch>
                <Route path="/" exact>
                    <TopAiring topAiringAnimes={topAiringAnimes} />
                    <TopUpcoming topUpcoming={topUpcoming} />
                    <TopRecommended recommended={recommended} />
                </Route>
                <Route path="/search" exact>
                    <SearchAnime
                        HandleSearch={HandleSearch}
                        search={search}
                        setSearch={setSearch}
                        animeList={animeList}
                    />
                </Route>
                <Route path="/topanime" exact>
                    <TopAnimesAllTime recommended2={recommended2}/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
