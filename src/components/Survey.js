import { useState } from "react";

// 옵션리스트 4개
const OPTIONS = [
    { id:"o1", name:"팝" },
    { id:"o2", name:"락/밴드" },
    { id:"o3", name:"힙합" },
    { id:"o4", name:"발라드" }
]

// 로컬스토리 > 데이터 저장 함수
function saveData(id) {
    localStorage.setItem("survey", id);
}

export default function Survey() {
    const [selectedId, setSelectedId] = useState(localStorage.getItem("survey"));

    function handleChange(id) {
        saveData(id)
        setSelectedId(id);
    }

    const optionLists = OPTIONS.map(option => (
        <li key={option.id} className="mb-2">
            <input 
                type="radio"
                id={option.id}
                name="survey"
                className="peer hidden"
                checked={option.id === selectedId}
                onChange={() => handleChange(option.id)}
            />
            <label
                htmlFor={option.id}
                className="block p-2 border-2 rounded border-gray-400 text-gray-400 peer-checked:border-sky-600 peer-checked:text-sky-600"
            >
                {option.name}
            </label>
        </li>
    ))

    return (
        <>
            <h3 className="text-lg my-4 font-semibold text-white">
                음악 장르 중 어떤 걸 선호하십니까?
            </h3>

            <ol>
                {optionLists}
            </ol>
        </>
    )
}