import axios from "axios";

const GetBoards = async (token) => {
    if (!token) return null;

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const boards = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/boards`, config)
        .then(response => response.data)
        .then(boards => boards.data)

    return boards;
}

export default GetBoards;