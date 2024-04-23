import { CircleEllipsis, Flag, Plus } from "lucide-react";
import TaskBox from "./tasks/taskBox";
import { memo, useEffect, useState } from "react";
import EmptyCard from "@/assets/images/content/card/emptyCard";
import { useData } from "../providers/dataProvider";

const BoardCard = ({ board, focusedBoard, changeFocusedBoard }) => {
    const { flags } = useData();

    const [newTask, setNewTask] = useState({
        name: "",
        description: "",
        boardId: board.id,
        flagId: null,
        startDate: null,
        endDate: null
    });

    const tasks = board.tasks.length ? board.tasks : null;

    // console.log(board, tasks, flags)

    const saveNewTask = () => {
        console.log("saved data: ", newTask);
    }

    return (
        <div className="rounded-2xl bg-white flex gap-1 flex-col max-h-2/4 w-fit m-1 border" onMouseEnter={() => { changeFocusedBoard(board.id) }}>
            <div className="title border-b flex justify-between items-center p-5">
                <div className="left-side flex gap-2 items-center">
                    <p className="uppercase ">{board.name}</p>
                    <span className="flex justify-center items-center text-sm font-semibold bg-blue-100 text-blue-500 rounded-full border border-blue-300 w-5 h-5">3</span>
                </div>
                <div className="right-side flex gap-2 items-center">
                    <Plus className="text-gray-400" />
                    <CircleEllipsis className="text-gray-400" />
                </div>
            </div>
            <div id="card-body" className="overflow-scroll w-full h-full p-1">
                {tasks && tasks.map((task) => {
                    return (
                        <TaskBox task={task} key={task.id} />
                    )
                })}
                {!tasks && (
                    <div className="flex justify-center items-center h-full min-w-[345px]">
                        {board.id == focusedBoard && (
                            <div className="flex gap-5 flex-col justify-center items-center w-full h-full rounded-xl bg-[#F3F6FD] p-3 hover:border hover:border-white hover:shadow-xl">
                                <h6 className="text-xl font-medium font-josefin my-4 rounded-xl w-full text-center uppercase text-gray-500">Add new task</h6>
                                <div id="add-new-task" className="flex gap-3 flex-col rounded-xl">
                                    <input type="text" name="" id="" placeholder="Enter name" value={newTask.name} className="w-full p-2 rounded-lg border-none" onChange={(event) => setNewTask({ ...newTask, name: event.target.value })} />
                                    <input type="text" name="" id="" placeholder="Enter description" value={newTask.description} className="w-full p-2 rounded-lg border-none" onChange={(event) => setNewTask({ ...newTask, description: event.target.value })} />
                                    <label htmlFor="">Select a flag:</label>
                                    <div id="flag-checkboxes" className="flex justify-around w-2/3 py-3">
                                        <div className={`flex justify-center items-center relative bg-gray-100 rounded-lg border border-gray-200 ${newTask.flagId == 1 ? "bg-orange-100" : ""}`}>
                                            <input type="radio" name="flag" id="" value="1" className="appearance-none w-7 h-7 bg-transparent rounded-lg z-10" onClick={(event) => setNewTask({ ...newTask, flagId: event.target.value })} />
                                            <Flag color={flags[0].color} className="absolute inset-x-auto inset-y-auto z-0 w-4 h-4" />
                                        </div>
                                        <div className={`flex justify-center items-center relative bg-gray-100 rounded-lg border border-gray-200 ${newTask.flagId == 2 ? "bg-orange-100" : ""}`}>
                                            <input type="radio" name="flag" id="" value="2" className="appearance-none w-7 h-7 bg-transparent rounded-lg z-10" onClick={(event) => setNewTask({ ...newTask, flagId: event.target.value })} />
                                            <Flag color={flags[1].color} className="absolute inset-x-auto inset-y-auto z-0 w-4 h-4" />
                                        </div>
                                        <div className={`flex justify-center items-center relative bg-gray-100 rounded-lg border border-gray-200 ${newTask.flagId == 3 ? "bg-orange-100" : ""}`}>
                                            <input type="radio" name="flag" id="" value="3" className="appearance-none w-7 h-7 bg-transparent rounded-lg z-10" onClick={(event) => setNewTask({ ...newTask, flagId: event.target.value })} />
                                            <Flag color={flags[2].color} className="absolute inset-x-auto inset-y-auto z-0 w-4 h-4" />
                                        </div>
                                        <div className={`flex justify-center items-center relative bg-gray-100 rounded-lg border border-gray-200 ${newTask.flagId == 4 ? "bg-orange-100" : ""}`}>
                                            <input type="radio" name="flag" id="" value="4" className="appearance-none w-7 h-7 bg-transparent rounded-lg z-10" onClick={(event) => setNewTask({ ...newTask, flagId: event.target.value })} />
                                            <Flag color={flags[3].color} className="absolute inset-x-auto inset-y-auto z-0 w-4 h-4" />
                                        </div>
                                        <div className={`flex justify-center items-center relative bg-gray-100 rounded-lg border border-gray-200 ${newTask.flagId == 5 ? "bg-orange-100" : ""}`}>
                                            <input type="radio" name="flag" id="" value="5" className="appearance-none w-7 h-7 bg-transparent rounded-lg z-10" onClick={(event) => setNewTask({ ...newTask, flagId: event.target.value })} />
                                            <Flag color={flags[4].color} className="absolute inset-x-auto inset-y-auto z-0 w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="flex gap-2 justify-between">
                                        <input type="date" name="" id="date" value={newTask.startDate != null && newTask.startDate} className="w-full p-2 rounded-lg border-none before:content-['Select']]" onChange={(event) => setNewTask({ ...newTask, startDate: event.target.value })} />
                                        <input type="date" name="" id="date" value={newTask.endDate != null && newTask.endDate} placeholder="Select end date" className="w-full p-2 rounded-lg border-none" onChange={(event) => setNewTask({ ...newTask, endDate: event.target.value })} />
                                    </div>
                                    <button className="flex justify-center items-center py-2 w-full bg-green-300 rounded-xl focus:bg-green-500" onClick={saveNewTask}>
                                        <Plus className="text-white " />
                                    </button>
                                </div>
                            </div>
                        )}
                        {board.id != focusedBoard && (
                            <EmptyCard />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default memo(BoardCard);