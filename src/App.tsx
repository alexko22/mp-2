import type {SW_Char} from "./interfaces/SW_Char.ts";
import StarWars from "./components/StarWars.tsx";
import {useEffect, useState} from "react";
import styled from "styled-components";

const H1n=styled.h1`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    padding: 1%;
`;

const ParentDiv=styled.div`
`;

export default function App(){

    const [data, setData] = useState<SW_Char[]>([]);

    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://starwars-databank-server.vercel.app/api/v1/characters");
            const {data} : {data: SW_Char[]} = await rawData.json();
            setData(data);
            console.log(data);
        }
        fetchData()
            .then(() => console.log("data has been fetched"))
            .catch((e: Error) => console.log("received the following error: " + e));
    }, [data.length]);

    return(
        <div>
            <StarWars data={data}/>
        </div>
    )
}



