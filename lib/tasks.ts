import { useUser } from "@/components/providers/userProvider";
import CustomAxios from "./customAxios";

const Tasks=()=>{
    const {user}=useUser();

    const userToken=user.token;

    if(!userToken) return null;

    const tasks=CustomAxios();

    return tasks;
}

export default Tasks;