// import { useUser } from '@/components/providers/userProvider'
import axios from 'axios'

// const {user}=useUser();
// console.log(user);

const CustomAxios= ()=>{
    const token=localStorage.getItem("user");
    console.log(token);

    return axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL+'commons/flags',
        headers: {
          Authorization: `Bearer ${token}`
        },
        method:"get"
      })
}

export default CustomAxios;