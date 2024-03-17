"use client";
import Card from "./components/Card/Card";
import SearchBar from "./components/SearchBar/SearchBar";
import mok from "./components/Card/mok.json";
import { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(mok);
    }, []);

    return (
        <>
            <div className="flex items-center justify-center my-8">
                <SearchBar />
            </div>
            <div className="flex items-center justify-center flex-wrap gap-2">
                {data.map((i) => {
                    return (
                        <div>
                            <Card
                                key={i.id}
                                title={i.titulo}
                                content={i.descricao}
                            />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
