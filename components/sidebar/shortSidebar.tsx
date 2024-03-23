import Bell from "@/assets/icons/header/bell";
import Avatar from "@/assets/images/sidebar/avatar";

const ShortSidebar=()=>{
    return (
        <div className="flex flex-col justify-between short-sidebar bg-short-sidebar w-fit text-white px-1 py-5">
            <div className="flex gap-3 flex-col">
                <span className="rounded-lg hover:bg-gray-400 p-3">
                    <Bell />
                </span>
                <span className="rounded-lg hover:bg-gray-400 p-3">
                    <Bell />
                </span>
                <span className="rounded-lg hover:bg-gray-400 p-3">
                    <Bell />
                </span>
                <span className="rounded-lg hover:bg-gray-400 p-3">
                    <Bell />
                </span>
            </div>
            <div className="flex gap-3 flex-col">
                <span className="rounded-lg hover:bg-gray-400 p-3">
                    <Bell />
                </span>
                <span className="rounded-lg hover:bg-gray-400 p-3">
                    <Bell />
                </span>
                <span className="rounded-lg hover:bg-gray-400 p-3">
                    <Bell />
                </span>
                <span className="rounded-lg hover:bg-gray-400 p-3">
                    <Bell />
                </span>
                <span className="avatar rounded-full">
                    <Avatar />
                </span>
            </div>
        </div>
    )
}

export default ShortSidebar;