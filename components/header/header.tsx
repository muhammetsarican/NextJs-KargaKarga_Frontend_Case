import Bell from "@/assets/icons/header/bell";
import Quarter from "@/assets/icons/header/quarterofhundred";

const Header = () => {
    return (
        <div className="flex justify-between items-center px-[24px] py-3 bg-white border-b">
            {/* logo */}
            <div className="text-logo font-josefin font-black text-lg">
                <p>kargakarga</p>
            </div>
            {/* right part */}
            <div className="right flex gap-3 items-center">
                    <Bell />
                    <Bell />
                    <Quarter />
            </div>
        </div>
    )
}

export default Header;