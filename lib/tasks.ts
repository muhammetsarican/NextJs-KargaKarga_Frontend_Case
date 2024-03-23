import { useUser } from "@/components/providers/userProvider";
import axios from "axios";
import { useState } from "react";

const Tasks = () => {
    const { user } = useUser();
    const [tasks, setTasks]=useState(null);

    if (!user) return null;

    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };

    axios.get(`${process.env.NEXT_PUBLIC_API_URL}commons/flags`,config)
    .then(getResponse=>{
        console.log(getResponse);
        setTasks(getResponse.data);
    })

    return tasks;
}

export default Tasks;