// 로고
// 홈
// 구독
// 라이브러리

export default function SideBar({active, setActive}) {
    return(
        <>
            {/* nav */}
            <nav 
                className="fixed top-0 -left-60 w-60 h-screen px-4 z-20 transition-all bg-black text-white" 
                style={{ left:active && "0px" }}
            >
                <div className="my-4 flex items-center">
                    <svg
                        className="w-8 fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                     >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                    </svg>
                    <h1 className="ml-1 text-white font-semibold">
                        MyTube
                    </h1>
                </div>

                <ul>
                    <li className="py-2">홈</li>
                    <li className="py-2">구독</li>
                    <li className="py-2">라이브러리</li>
                </ul>
            </nav>

            {/* 오버레이 */}
            <div
                className="fixed inset-0 bg-black/[0.4] hidden"
                style={{ display:active && "block" }}
                onClick={() => setActive(false)}
            >
            </div>
        </>
    )
}