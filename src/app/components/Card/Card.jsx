"use client";
import Image from "next/image";
import configIcon from "../../../../public/Setting_line.svg";
import sortIcon from "../../../../public/Sort_random.svg";
import { useState } from "react";

export default function Card({ title, content }) {
    const [contentCard, setContentCard] = useState(true);
    const [contentConfig, setContentConfig] = useState(false);

    function handleClickSort(e) {
        setContentCard(!contentCard);
    }

    function handleClickConfig(e) {
        console.log("handleClickConfig");
    }

    return (
        <div className="bg-neutral-400 w-96 h-64 rounded p-3">
            <div className="flex justify-around mb-4">
                <Image
                    onClick={(e) => {
                        handleClickConfig(e);
                    }}
                    src={configIcon}
                    alt="icon config"
                ></Image>{" "}
                <Image
                    onClick={(e) => {
                        handleClickSort(e);
                    }}
                    src={sortIcon}
                    alt="sort config"
                ></Image>
            </div>
            {contentCard ? (
                <div className="flex justify-center items-center mt-10">
                    {title}
                </div>
            ) : (
                <div className="bg-white h-40 p-1 overflow-auto">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
}
