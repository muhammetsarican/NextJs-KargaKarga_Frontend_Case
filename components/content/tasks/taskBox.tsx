import { useData } from "@/components/providers/dataProvider";
import { CalendarDays, Diamond, Flag } from "lucide-react";

const TaskBox = ({task}) => {
    const {flags}=useData();

    const textColors=['#F38744', '#6941C6', '#067647'];

    return (
        <div id="task">
            <div className="rounded-lg border border-gray-300 p-3">
                <div className="task-info flex gap-3 flex-col font-medium">
                    <p id="title" className={`text-[${textColors[task.code-1].toString()}]`}>{task.name}</p>
                    <p className="description max-w-[350px] text-gray-700">{task.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consectetur voluptates id architecto facere eum dolore quaerat? Quaerat, nesciunt placeat."}</p>
                    <div className="date flex gap-1 text-gray-400 ">
                        <CalendarDays />
                        <p>{task.startDate || "null"} - {task.endDate || "null" }</p>
                    </div>
                    <div className="flag flex gap-1 text-gray-400 ">
                        <Diamond />
                        <p>Milestone Name</p>
                        <Flag color={flags[task.flagId].color} />
                    </div>
                </div>
                <div className="task-people">

                </div>
            </div>
        </div>
    )
}

export default TaskBox;