import axios from "axios";

const UpdateTask = async (taskCode, updatedTask, token) => {
    if (!token) return null;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    return await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/tasks/${taskCode}`, updatedTask, config)
        .then(response => response)
}

export default UpdateTask;