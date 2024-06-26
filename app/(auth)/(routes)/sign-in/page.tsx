"use client"

import axios from "axios";
import { useState } from "react"
import { useUser } from "@/components/providers/userProvider";
import { useRouter } from "next/navigation";

const SignIn = () => {
    const router = useRouter();
    const { user, setIsUserLogin, setUser } = useUser();
    if (user) router.push("/projects");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = {
            email,
            password
        };

        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, postData)
            .then(postResponse => {
                const userData = postResponse.data.data;
                setIsUserLogin(true);
                setUser(userData);
                console.log(userData);
                localStorage.setItem("user", JSON.stringify(userData));
                router.push("/projects");
            })
            .catch(error => console.log(error.message));
    }
    return (
        <div className="flex justify-center items-center text-3xl h-dvh">
            <div className="container flex gap-10 flex-col text-center bg-white rounded-3xl w-[25%] p-10 shadow-2xl">
                <h1 className="text-4xl font-bold">Login</h1>
                <form className="flex flex-col gap-5 justify-center items-center" onSubmit={handleSubmit}>
                    <input className="shadow-xl rounded-lg bg-gray-100 text-base px-3 py-1 w-full" type="email" placeholder="Email" onChange={handleEmail} />
                    <input className="shadow-xl rounded-lg bg-gray-100 text-base px-3 py-1 w-full" type="password" placeholder="Password" onChange={handlePassword} />
                    <input className="shadow-xl rounded-lg bg-green-500 text-white text-md px-3 py-1 text-base w-full mt-5" type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}

export default SignIn;