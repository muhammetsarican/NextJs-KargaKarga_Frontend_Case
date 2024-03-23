import Avatar from "@/assets/images/sidebar/avatar";
import { Dot } from "lucide-react";

const ActivityCell = () => {
    return (
        <div className="flex gap-3 items-center p-3 text-sm text-gray-500">
            <div id="avatar" className="relative">
                <Avatar />
                <span className="absolute bottom-0 right-0">
                    <p className="w-4 h-4 bg-green-500 rounded-full border "></p>
                </span>
            </div>
            <div id="info" className="min-w-64">
                <div id="name-and-time" className="flex gap-3 items-center">
                    <p id="full-name" className="font-medium text-black">Lana Steiner</p>
                    <p id="time">2 mins ago</p>
                </div>
                <div id="message">Invited <span className="text-indigo-700 font-medium">Alisa Hester</span> to the team</div>
            </div>
            <div id="as-read" className="flex flex-col justify-start">
                <p className="w-3 h-3 bg-green-500 rounded-full"></p>
            </div>
        </div>
    )
}
export default ActivityCell;