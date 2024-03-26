'use client'
import ButtonAppBar from "@/components/common/appBar/appBar";
export default function Layout({ children }: { children: any }) {
    return (
        <section>
            <ButtonAppBar></ButtonAppBar>
            <main>{children}</main>
        </section>
    )
}