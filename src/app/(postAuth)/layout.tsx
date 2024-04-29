"use client";
import LFAppBar from "@/components/common/appBar/appBar";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: any }) {
  const authContext = useAuthContext();
  const { replace } = useRouter();

  if (authContext == null) {
    return replace("/signin");
  }

  return (
    <section>
      <LFAppBar>{children}</LFAppBar>
    </section>
  );
}
