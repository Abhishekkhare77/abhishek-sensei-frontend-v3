import { AboutMe } from "@/components/about/AboutMe"
import { HeroAbt } from "@/components/about/HeroAbt"
import { Projects } from "@/components/about/Projects"
import { Skills } from "@/components/about/Skills"
import { WorkExp } from "@/components/about/WorkExp"

export default function Page() {
    return (
        <div className="flex flex-col min-h-[100dvh]">

            <HeroAbt />

            <WorkExp />

            <Skills />

            <Projects />

            <AboutMe />
        </div>
    )
}
