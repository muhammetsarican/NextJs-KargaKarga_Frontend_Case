'use client'

import { redirect } from "next/navigation";
import { useUser } from "@/components/providers/userProvider";

const Page = () => {
    const {isUserLogin}=useUser();
    if(!isUserLogin) redirect('/sign-in') 
    else redirect('/projects');
}

export default Page;