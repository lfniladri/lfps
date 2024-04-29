'use client'
import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";

function Page() {
    const auth = useContext(AuthContext);
    console.log("Auth context ", auth);
    return (
        <div>Dashboard apge landed</div>
    );
}

export default Page;