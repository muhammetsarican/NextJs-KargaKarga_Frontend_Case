import EmptyCard from "@/assets/images/content/cart/emptyCard";
import { CalendarDays, CircleEllipsis, Diamond, Flag, Plus } from "lucide-react";
import TaskBox from "./tasks/taskBox";

const BoardCard = ({ board }) => {
    const tasks = board.tasks.length ? board.tasks : null;

    console.log(board, tasks)
    return (
        <div className="rounded-2xl bg-white flex gap-1 flex-col max-h-2/4 w-fit m-1 border">
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
            <div className="overflow-scroll min-w-[400px]">
                {tasks && tasks.map((task) => {
                    return (
                        <TaskBox task={task} key={task.id} />
                    )
                })}
            </div>
            {!tasks && (
                <div className="flex items-center px-20 empty-card h-full w-full">
                    <EmptyCard />
                </div>
            )}
        </div>
    )
}

export default BoardCard;