import About from "../components/About";
import ChapterIndex from "../components/ChapterIndex";
import ContactLetter from "../components/ContactLetter";
import Hero from "../components/Hero";
import NextQrNotice from "../components/NextQrNotice";
import Reader from "../components/Reader";


export default function NovelPage() {
    return (
        <div className="flex flex-col"> 
            <Hero />
            <ChapterIndex />
            <Reader />
            <NextQrNotice />
            <About />
            <ContactLetter />
        </div>
    )
}
