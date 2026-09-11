import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";


export default function MainLayout() {
    return (
        <div className="min-h-screen overflow-x-clip bg-papel text-tinta transition-colors duration-500 ease-[ease]"> 
            <Header />

            <main className="">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}
