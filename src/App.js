import { useState } from "react";
import Search from './components/Search';
import SideBar from './components/SideBar';
import Survey from './components/Survey';

// 비디오 썸네일 데이터
const VIDEOS = [
  { id: "v0", name: "Playlist | 좋은 일은 모두 꿈에서 시작한단다, 웡카 Timothée Chalamet Wonka Playlist", src: "/images/v0-bg.jpeg", category: "music" },
  { id: "v1", name: "| Vacance Mixtape | 미뤄둔 책을 읽으며", src: "/images/v1-bg.jpeg", category: "music" },
  { id: "v2", name: "#3 음악 없는 2시간 베이킹 영상 모음.zip : 2 hours No Music Baking Video | Relaxation Cooking Sounds| Cooking tree", src: "/images/v2-bg.jpeg", category: "cook" },
  { id: "v3", name: "Playlist X ASMR 부드러운 재즈가 흐르는 숲속의 비둘기 둥지 카페 | 이런 카페 현실엔 없나요? 6th 모동숲 편", src: "/images/v3-bg.jpeg", category: "asmr" },
]

// 필터맵 : 필터 조건 그룹 
const FILTER_MAP = {
  전체: () => true,
  음악: ({ category }) => category === "music",
  요리: ({ category }) => category === "cook",
  asmr: ({ category }) => category === "asmr",
}

// 필터 이름 -> 전체, 음악, 요리, asmr
const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function App() {
  const [filter, setFilter] = useState("전체"); // 현재 필터
  const [sideBarActive, setSideBarActive] = useState(false);  // 사이드바 관리 (보이지 않게 설정)
  const [searchActive, setSearchActive] = useState(false);  // 검색창 관리 (보이지 않게 설정)

  // 필터 버튼
  const filterButtons = FILTER_NAMES.map(name => (
    <button
      key={name}
      className="px-4 py-1 bg-zinc-800 text-white disabled:bg-white disabled:text-black rounded-lg"
      onClick={() => setFilter(name)}
      disabled={name === filter}
    >
      {name}
    </button>
  ))

  // 썸네일 리스트
  const videoList = VIDEOS.filter(FILTER_MAP[filter]).map(video => (
    <li key={video.id} className="mb-8">
      <img
        className="w-full"
        src={video.src}
      />
      <h3 className="text-white font-semibold my-2">
        {video.name}
      </h3>
    </li>
  ))


  return (
    <>
    <header className="fixed w-full top-0 box-content bg-black">
      <div className="flex justify-between h-12">
        {/* 메뉴 로고 */}
        <div className="flex items-center">
          {/* 사이드바 메뉴 버튼 */}
          <button
            className="px-4 h-full"
            onClick={() => setSideBarActive(true)}
          >
            <svg
              className="w-4 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          {/* 유튜브 로고 */}
          <div className="flex items-center">
            <svg
              className="w-8 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
            </svg>
            <h1 className="ml-1 text-white font-semibold">MyTube</h1>
          </div>
        </div>
        {/* 검색 버튼 */}
        <button
          className="px-4 flex items-center"
          onClick={() => setSearchActive(true)}
        >
          <svg 
            className="w-4 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </div>

      {/* 필터리스트 버튼 */}
      <div className="flex gap-2 py-2 px-4">{filterButtons}</div>
    </header>

    <main className="mt-32 px-4 pb-8">
      <ul>
        {videoList}
      </ul>
      <Survey />
    </main>

    <Search
      active={searchActive}
      setActive={setSearchActive}
    />

    <SideBar
      active={sideBarActive}
      setActive={setSideBarActive}
    />

    </>
  )
}