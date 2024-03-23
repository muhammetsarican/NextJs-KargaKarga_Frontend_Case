import { CalendarDays, ChevronDown, ChevronRight, ChevronUp, Circle, Copy, Diamond, Ellipsis, Flag, Home, Link, ListFilter, Move, Paperclip, Plus, Search, SquareArrowOutUpRight, Star, X } from "lucide-react"
import ActivityCell from "./activityNotificationCell";
import MenuItem from "./menuItem";
import { useState } from "react";

const TaskDetail = () => {
    const  [isOpen, setIsOpen]=useState(true);
    return (
        <div id="task-detail" className={`${isOpen?"absolute":"hidden"} rounded-lg inset-x-96 inset-y-24 bg-red-100 shadow-[0_0_0_500px_rgba(0,0,0,0.7)] overflow-hidden`}>
            <div className="bg-white rounded-lg border h-full">
                <div id="header" className="flex justify-between items-center border-b p-5">
                    <div className="left flex gap-3 items-center">
                        <ChevronUp className="text-gray-700 w-5" />
                        <ChevronDown className="text-gray-700 w-5" />
                        <Home className="text-gray-700 w-5" />
                        <ChevronRight className="text-gray-500 w-5" />
                        <p>25 proje</p>
                        <ChevronRight className="text-gray-500 w-5" />
                        <p>Projects</p>
                        <ChevronRight className="text-gray-500 w-5" />
                        <p className="text-blue-500 font-semibold">Frontend Case</p>
                        <Move className="text-gray-500 w-5" />
                    </div>
                    <div className="right flex gap-3 items-center">
                        <Ellipsis className="text-gray-500 w-5" />
                        <SquareArrowOutUpRight className="text-gray-500 w-5" />
                        <Star className="text-gray-500 w-5" />
                        <X className="text-gray-500 flex items-center justify-center w-7 h-7 p-1 rounded-full hover:bg-red-500 hover:text-white" onClick={()=>setIsOpen(false)} />
                    </div>
                </div>
                <div id="body" className="flex h-full bg-white overflow-hidden">
                    <div id="content" className="flex gap-3 flex-col p-5 h-full">
                        <div id="task-content" className="flex justify-between p-5">
                            <div className="left">
                                <div className="flex gap-3 items-center">
                                    <Circle />
                                    <p className="font-bold text-xl max-w-[350px] text-gray-700">Bu örnek görevdir. Örnek görevin
                                        içerigine dair açiklama detail'da
                                        bulunmaktadır.
                                    </p>
                                </div>
                                <p className="text-gray-500 flex gap-3 p-5" id="id">ID:#435365<span><Copy className="w-4" /></span></p>
                            </div>
                            <div className="right">
                                <div id="date" className="border flex gap-3 p-3 rounded-lg">
                                    <Circle />
                                    <p>05.02.2024 - 10.02.2024</p>
                                </div>
                            </div>
                        </div>
                        <div id="task-info" className="flex gap-10 items-center font-semibold text-gray-700">
                            <div id="task" className="flex gap-3 flex-col p-3 items-start">
                                <p>Task Status</p>
                                <p className="text-black">Open</p>
                            </div>
                            <div id="assignment" className="flex gap-3 flex-col p-3 items-start">
                                <p>Assignment</p>
                                <div className="persons">

                                </div>
                            </div>
                            <div id="priotry" className="flex gap-3 flex-col p-3 items-start">
                                <p>Priotry</p>
                                <Flag />
                            </div>
                        </div>
                        <div id="task-description" className="text-gray-500 flex gap-3 flex-col">
                            <p className="text-lg text-gray-700">Description</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tempore repudiandae et. Aliquam, ducimus? Eaque, fugit? Soluta animi ut maiores facilis praesentium maxime, doloremque illo optio suscipit provident natus consectetur.</p>
                        </div>
                        <div id="task-operations" className="border rounded-lg">
                            <div className="title bg-gray-100">
                                <ul className="flex justify-evenly items-center px-5 border-b text-gray-400">
                                    <li><button className="flex gap-3 items-center py-5">
                                        <Paperclip />
                                        <p>Attachment</p>
                                    </button></li>
                                    <li><button className="flex gap-3 items-center py-5 text-blue-900 font-bold border-b-4 border-blue-900">
                                        <Paperclip />
                                        <p>Sub Task</p>
                                    </button></li>
                                    <li><button className="flex gap-3 items-center py-5">
                                        <Paperclip />
                                        <p>Comment</p>
                                    </button></li>
                                </ul>
                            </div>
                            <div className="body min-h-[200px]">
                                <div id="sub-task" className="flex gap-3 flex-col p-3 border">
                                    <div className="left">
                                        <div className="content flex gap-3">
                                            <div className="content-left flex gap-1 items-center text-gray-700">
                                                <Circle className="w-5" />
                                                <p className="font-medium">Task Content</p>
                                            </div>
                                            <div className="content-right flex gap-1 items-center text-gray-400 text-sm">
                                                <Link className="w-4" />
                                                <p>#2334455</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="date flex gap-3 text-gray-400">
                                            <div className="date-left flex gap-1 items-center">
                                                <CalendarDays className="w-5" />
                                                <p>05.02.2024 - 10.02.2024</p>
                                            </div>
                                            <div className="date-right flex gap-1 items-center text-sm">
                                                <Diamond className="w-4" />
                                                <p>Milestone Name</p>
                                                <Flag className="w-4 text-red-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="activity" className="border h-full">
                        <div id="title" className="flex justify-between items-center p-3 font-semibold text-blue-700 border-b">
                            <div id="left" className="">
                                <p>Activity</p>
                            </div>
                            <div id="right" className="text-gray-500 flex gap-3 items-center">
                                <Search className="w-5" />
                                <ListFilter className="w-5" />
                            </div>
                        </div>
                        <div id="content" className="px-5 py-3 bg-[#F3F6FD] h-full">
                            <ActivityCell />
                            <ActivityCell />
                            <ActivityCell />
                        </div>
                    </div>
                    <div id="right-menu" className="border bg-white h-full">
                        <div className="flex flex-col items-center border-b">
                            <MenuItem props={{
                                title: "Activity",
                                isActive: true
                            }} />
                            <MenuItem props={{
                                title: "Condition",
                                isActive: false
                            }} />
                            <MenuItem props={{
                                title: "QA",
                                isActive: false
                            }} />
                            <MenuItem props={{
                                title: "Meeting",
                                isActive: false
                            }} />
                            <MenuItem props={{
                                title: "Docs",
                                isActive: false
                            }} />
                            <MenuItem props={{
                                title: "",
                                isActive: true
                            }} />
                        </div>
                        <div className="flex justify-center items-center p-3">
                            <Plus className="w-8 h-8 text-gray-500" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskDetail;