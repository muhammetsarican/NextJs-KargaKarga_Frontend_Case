"use client"

import BoardCard from "./boardCard"
import { Filter, LoaderCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { useData } from "../providers/dataProvider"

const Content = () => {
    const { flags, boards, setBoards } = useData();

    const [focusedBoard, setFocusedBoard] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, [boards]);

    const changeFocusedBoard = (boardId) => {
        setFocusedBoard(boardId);
    }

    const updateBoards = (oldTaskCode, updatedTask) => {
        const afterUpdateTheBoards = boards.map((board) => {
            // INFO: First we filter our task array which data we want to drop
            let tasks = board.tasks.filter((task) => task.code !== oldTaskCode);

            // INFO: After, we add updated data to our array
            if (board.id === updatedTask.boardId) {
                tasks = [...board.tasks, updatedTask];
            };
            return { ...board, tasks: tasks };
        });
        setBoards(afterUpdateTheBoards);
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
                    const props = {
                        board,
                        focusedBoard,
                        changeFocusedBoard,
                        updateBoards
                    }
                    return (
                        < BoardCard props={props} key={board.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default Content;