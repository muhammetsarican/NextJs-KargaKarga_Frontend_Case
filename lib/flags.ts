import axios from "axios";

const Flags = async (token) => {
    console.log("Flags running...");

    if (!token) return null;

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const flags = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/commons/flags`, config)
        .then(response => response.data)
        .then(flags => flags.data)

    return flags;
}

export default Flags;