import axios from "axios"

const CreateNewTask = async (data, token) => {
    if (!token) return null;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/tasks`, data, config)
        .then(response => console.log(response));
}

export default CreateNewTask;