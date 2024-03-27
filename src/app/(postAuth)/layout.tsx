'use client'
import LFAppBar from "@/components/common/appBar/appBar";
export default function Layout({ children }: { children: any }) {
    return (
        <section>
            <LFAppBar>
                {children}
            </LFAppBar>
        </section>
    )
}