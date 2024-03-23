import EmptyCard from "@/assets/images/content/cart/emptyCard";
// import Tasks from "@/lib/tasks";
import { CalendarDays, CircleEllipsis, Diamond, Flag, Plus } from "lucide-react";
import { useEffect } from "react";

const BoardCard = () => {
    const taskList=null;
    useEffect(()=>{
        // const taskList = Tasks();
        // console.log("tasklist:", taskList);
    },[])
    return (
        <div className="rounded-2xl bg-white flex gap-1 flex-col h-full w-fit m-5 border">
            <div className="title border-b flex justify-between items-center p-5">
                <div className="left-side flex gap-2 items-center">
                    <p className="uppercase ">open</p>
                    <span className="flex justify-center items-center text-sm font-semibold bg-blue-100 text-blue-500 rounded-full border border-blue-300 w-5 h-5">3</span>
                </div>
                <div className="right-side flex gap-2 items-center">
                    <Plus className="text-gray-400" />
                    <CircleEllipsis className="text-gray-400" />
                </div>
            </div>
            {taskList && (
                <div className="task-body">
                    <div className="rounded-lg border border-gray-300 p-3">
                        <div className="task-info flex gap-3 flex-col font-medium">
                            <p id="title" className="text-orange-500">Operasyon Birimi</p>
                            <p className="description max-w-[350px] text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur voluptates id architecto facere eum dolore quaerat? Quaerat, nesciunt placeat.</p>
                            <div className="date flex gap-1 text-gray-400 ">
                                <CalendarDays />
                                <p>05.02.2024 - 10.02.2024</p>
                            </div>
                            <div className="flag flex gap-1 text-gray-400 ">
                                <Diamond />
                                <p>Milestone Name</p>
                                <Flag />
                            </div>
                        </div>
                        <div className="task-people">

                        </div>
                    </div>
                </div>
            )}
            {!taskList && (
                <div className="flex items-center px-20 empty-card h-full w-full">
                    <EmptyCard />
                </div>
            )}
        </div>
    )
}

export default BoardCard;