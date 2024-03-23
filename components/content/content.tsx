"use client"

import ScrollableFeed from "react-scrollable-feed"
import BoardCard from "./card"
import { Filter } from "lucide-react"
import TaskDetail from "../modals/task/taskDetail"

const Content = () => {
    return (
        <div className="p-5 flex gap-5 flex-col w-full">
            <div className="title flex justify-between">
                <p className="text-2xl text-[#145389] font-semibold">Frontend Case</p>
                <Filter />
            </div>
            <div id="categories">
                <ul className="bg-white flex gap-3 divide-x-2 rounded-lg border-2 border-gray-300 w-fit">
                    <li className="text-sm px-3 py-2"><button>Boards</button></li>
                    <li className="text-sm px-3 py-2"><button>List</button></li>
                    <li className="text-sm px-3 py-2"><button>Other</button></li>
                    <li className="text-sm px-3 py-2"><button>Other</button></li>
                    <li className="text-sm px-3 py-2"><button>Other</button></li>
                    <li className="text-sm px-3 py-2"><button>Other</button></li>
                    <li className="text-sm px-3 py-2"><button>Other</button></li>
                </ul>
            </div>
            <div id="board" className="h-full flex">
                <BoardCard />
                <TaskDetail />
            </div>
        </div>
    )
}

export default Content;