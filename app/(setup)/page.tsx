'use client'

import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../components/providers/userProvider";
import { redirect } from "next/navigation";

const Page = () => {
    const {isUserLogin}=useContext(UserContext);
    if(!isUserLogin) redirect('/sign-in') 
    else redirect('/projects');
    return (
        <h1>Setup Page</h1>
    )
}

export default Page;