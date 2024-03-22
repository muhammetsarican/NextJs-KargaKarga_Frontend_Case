'use client'

import { useContext } from "react";
import { UserContext } from "../../components/providers/userProvider";
import { redirect } from "next/navigation";

const Page = () => {
    const {isUserLogin}=useContext(UserContext);
    if(!isUserLogin) redirect('/sign-in') 
    else redirect('/projects');
}

export default Page;