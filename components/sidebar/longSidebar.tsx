"use client"
import BarChart from "@/assets/icons/sidebar/long/barChart";
import { ChevronDown, Circle } from "lucide-react";
import { useContext } from "react";
import { useUser } from "../providers/userProvider";

const LongSidebar = () => {
    const {user} = useUser();

    return (
        <div className="flex flex-col justify-between bg-white p-5">
            <div className="top flex gap-3 flex-col">
                <p id="title">Projeler</p>
                {/* dragable part */}
                <div className="project-accordion">
                    <ul>
                        <li className="">
                            <button className="flex gap-3 justify-between items-center w-full">
                                <span className="text-5xl text-red-500">·</span>
                                <p className="text-sm text-gray-700">Proje İsim 1</p>
                                <span className="text-xl ms-20">
                                    <ChevronDown className="text-gray-500 w-[20px]" />
                                </span>
                            </button>
                        </li>
                        <li className="">
                            <button className="flex gap-3 justify-between items-center w-full">
                                <span className="text-5xl text-green-500">·</span>
                                <p className="text-sm text-gray-700">Proje İsim 2</p>
                                <span className="text-xl ms-20">
                                    <ChevronDown className="text-gray-500 w-[20px]" />
                                </span>
                            </button>
                        </li>
                        <li className="">
                            <div className="flex gap-3 justify-between items-center w-full">
                                <span className="text-5xl text-blue-500">·</span>
                                <p className="text-sm text-gray-700">Proje İsim 3</p>
                                <span className="text-xl ms-20">
                                    <ChevronDown className="text-gray-500 w-[20px]" />
                                </span>
                            </div>
                        </li>
                        <li className="">
                            <button className="flex gap-3 justify-between items-center w-full">
                                <span className="text-5xl text-purple-500">·</span>
                                <p className="text-sm text-gray-700">Proje İsim 4</p>
                                <span className="text-xl ms-20">
                                    <ChevronDown className="text-gray-500 w-[20px]" />
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
                {/* end */}
                <div className="menus">
                    <ul className="flex gap-5 flex-col">
                        <li className="flex justify-between items-center text-xs">
                            <p className="ms-10 text-gray-700">Overview</p>
                            <span className="bg-gray-100 rounded-2xl border border-gray-200 px-1.5 py-0.5">10</span>
                        </li>
                        <li className="flex justify-between items-center text-xs">
                            <p className="ms-10 text-gray-700">Notifications</p>
                            <span className="bg-gray-100 rounded-2xl border border-gray-200 px-1.5 py-0.5">10</span>
                        </li>
                        <li className="flex justify-between items-center text-xs">
                            <p className="ms-10 text-gray-700">Analytics</p>
                            <span className="bg-gray-100 rounded-2xl border border-gray-200 px-1.5 py-0.5">10</span>
                        </li>
                        <li className="flex justify-between items-center text-xs">
                            <p className="ms-10 text-gray-700">Reports</p>
                            <span className="bg-gray-100 rounded-2xl border border-gray-200 px-1.5 py-0.5">10</span>
                        </li>
                    </ul>
                </div>
                <div className="create-new flex gap-3 items-center text-sm text-gray-500 mt-5">
                    <BarChart />
                    <p>Proje Oluştur</p>
                </div>
            </div>
            <div className="bottom flex items-start py-2 gap-3">
                <div className="user-info">
                    <p id="full-name" className="font-semibold text-sm">{user.fullName}</p>
                    <p id="user-mail" className="text-xs text-gray-500">{user.email}</p>
                </div>
                <div className="active-dot">
                    <Circle className="w-[20px]"/>
                </div>
            </div>
        </div>
    )
}

export default LongSidebar;