import type { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

type LayoutProps = PropsWithChildren

export default function Layout(props: LayoutProps) {
    const { children } = props

    return (
        <>
            <header>
                <Header 
                    headerImage={{
                    image: "assets/blue.png", 
                    imageAltText: "pixelated-ish shades of blue in a cloud like pattern"
                }}
                    title="Farming Arc"
                />
                <Nav />
            </header>
            
            <main className="container">{children}</main>
            <Footer />
        </>
    )
}