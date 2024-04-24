"use client"

import BoardCard from "./boardCard"
import { Filter, LoaderCircle } from "lucide-react"
import TaskDetail from "../modals/task/taskDetail"
import { useEffect, useState } from "react"
import { useData } from "../providers/dataProvider"

const Content = () => {
    const { flags, boards } = useData();

    const [focusedBoard, setFocusedBoard] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [boards]);

    const changeFocusedBoard = (boardId) => {
        setFocusedBoard(boardId);
    }

    return (
        <div className="p-5 flex gap-5 flex-col w-full h-full overflow-hidden">
            <div className="title flex justify-between">
                <p className="text-2xl text-content-header font-semibold">Frontend Case</p>
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
            {/* {flags.length != 0 && flags.map((task) => {
                    console.log(task)
                })} */}
            <div id="board" className={`w-full h-full flex overflow-scroll ${loading && "justify-center items-center"}`}>
                {loading && (
                    <div>
                        <LoaderCircle className="w-24 h-24 text-gray-500 animate-spin" />
                    </div>
                )}
                {!loading && boards.length != 0 && boards.map((board) => {
                    return (
                        < BoardCard board={board} key={board.id} focusedBoard={focusedBoard} changeFocusedBoard={changeFocusedBoard} />
                    )
                })}
            </div>
        </div>
    )
}

export default Content;