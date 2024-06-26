// <- 돌아가기 아이콘
// 검색바 auto focus 

import { useEffect, useRef, useState } from "react";

const TITLES = [
    "healing playlist",
    "healing asmr",
    "hiphop mixtape",
    "top100 playlist",
    "no oven baking",
    "how to make cookie",
    "4hour asmr"
];

export default function Search({active, setActive}) {
    // 검색어 저장
    const [query, setQuery] = useState("");
    // auto focus
    const inputRef = useRef(null);
     
    // 엘리먼트에 접근 후 autofocus 호출
    useEffect(() => {
        if (active) {
        inputRef.current.focus();
        }
    })

    // 검색 결과
    const titleLists = TITLES
    // name : 각 title
        .filter(name => name.indexOf(query.toLocaleLowerCase()) > -1)
        .map(name => (
        <li key={name} className="mb-2 text-white">{name}</li>
    ))
    
    // 검색창 닫기
    function handleClose() {
        setActive(false);
        // 기존 검색어 삭제 
        setQuery("");
    }

    return(
        <div 
            className="fixed inset-0 bg-black hidden" 
            style={{display:active && "block"}}
        >
            <div className="flex items-center mt-4 px-4">
            <svg
                className="w-4 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                onClick={handleClose}
                >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            <input
                className="w-full px-4 py-1 ml-2 bg-zinc-800 text-white outline-none rounded-full"
                type="text"
                value={query}
                onChange={({ target }) => setQuery(target.value)}
                placeholder="Search MyTube"
                ref={inputRef}
            />
            </div>
            <ul className="mt-4 px-4">
                {query.trim() && titleLists}
            </ul>
        </div>
    )
}

