"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function Page() {
  const authContext = useAuthContext();
  const {replace} = useRouter();

  useEffect(() => {
    if (authContext) {
        replace("/admin/dashboard")
    } else {
        replace("/signin")
    }
  }, []);

  return <></>;
}
