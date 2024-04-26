import TaskDetail from "@/components/modals/task/taskDetail";
import { useData } from "@/components/providers/dataProvider";
import { CalendarDays, Diamond, Flag } from "lucide-react";
import { useEffect, useState } from "react";
import { Draggable } from "react-drag-and-drop";

const TaskBox = ({ task }) => {
    const { flags } = useData();
    const textColors = ['#F38744', '#6941C6', '#067647'];

    const [isTaskDetailOpen, setIsTaskDetailOpen] = useState(false);
    const openDetails = () => {
        setIsTaskDetailOpen(true);
    }

    const closeDetail = () => {
        setIsTaskDetailOpen(false);
    }

    const props = {
        closeDetail,
        task,
        flags
    }

    return (
        <Draggable type="task" data={JSON.stringify(task)}>
            <div id="task" className="p-1 rounded-lg" onClick={() => openDetails()}>
                <div className="rounded-lg border border-gray-200 p-3 hover:bg-gray-100">
                    <div className="task-info flex gap-4 flex-col font-medium">
                        <p id="title" className={`text-[${task.code < 4 && textColors[task.code - 1].toString()}]`}>{task.name}</p>
                        <p className="description w-[320px] text-gray-700">{task.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur voluptates id architecto facere eum dolore quaerat? Quaerat, nesciunt placeat."}</p>
                        <div className="date flex gap-1 text-gray-400 text-sm items-center">
                            <CalendarDays className="w-4 h-4" />
                            <p>{task.startDate || "null"} - {task.endDate || "null"}</p>
                        </div>
                        <div className="flag flex gap-1 text-gray-400 text-sm items-center">
                            <Diamond className="w-4 h-4" />
                            <p>Milestone Name</p>
                            <Flag color={flags[task.flagId].color} className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="task-people">

                    </div>
                </div>
                {isTaskDetailOpen && (
                    <TaskDetail props={props} />
                )}
            </div>
        </Draggable>
    )
}

export default TaskBox;