import Image from 'next/image'
import profile from 'public/profile.png'
import SocialIcons from '@/components/SocialIcons'
import Tagline from '@/components/Tagline'
import SectionTitle from '@/components/SectionTitle'
import ProjectCard from '@/components/ProjectCard'
import StackCrad from '@/components/StackCard'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="mt-28">
        <Image src={profile} alt="Nico Andrade" width={90} height={90} />
        <div>
          <Tagline />
          <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-16 leading-tight cursor-default">
            Suraj Gupta
          </h1>
        </div>
        <SocialIcons />
      </div>

      <div className="mt-36">
        <SectionTitle title="Projects" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-7 lg:gap-9">
          <ProjectCard
            title="Intellidocs"
            description="SEO optimized and fully responsive blogging website."
            background="#000000"
            icon="/svg/projects/intellidocs.svg"
            href="https://intellidocs.vercel.app"
          />
          <ProjectCard
            title="SecureLink"
            description="Securely Share Your Links with
            Custom Access Controls."
            background="#000000"
            icon="/svg/projects/securelink.svg"
            href="https://securelink.vercel.app"
          />
          <ProjectCard
            title="ImageAlt"
            description="Generate Alt Text for any Image."
            background="#070A52"
            icon="/svg/projects/imagealt.svg"
            href="https://imagealt.vercel.app"
          />
          <ProjectCard
            title="TweetsGPT"
            description="Turns your nonsense into hilarious tweets with the power of GPT-3."
            background="#6A01DA"
            icon="/svg/projects/twitter.svg"
            href="https://tweetsgpt.vercel.app"
          />
          <ProjectCard
            title="Snake Game"
            description="Single player full screen snake game"
            background="#ffffff"
            icon="/svg/projects/snake.svg"
            href="https://sujjeee.github.io/snake-game/"
          />
        </div>
      </div>
      <div className="mt-36">
        <SectionTitle title="Tech Stack I Use" />

        {/* Hack to generate custom classes */}
        <span className="hidden hover:bg-[#000000] hover:bg-[#38BDF8] hover:bg-[#0065A9]  hover:bg-[#6A01DA] hover:bg-[#1D1D1D]  hover:bg-[#22BC66] hover:bg-[#4354C7]  hover:bg-[#090E24] hover:bg-[#363B45] hover:bg-[#4E26E0]" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 mb-10 ">
          <StackCrad
            title="React"
            background="#1D1D1D"
            icon="/svg/stacks/react.svg"
            href="https://react.dev/"
          />
          <StackCrad
            title="Next.js"
            background="#000000"
            icon="/svg/stacks/nextjs.svg"
            href="https://nextjs.org/"
          />
          <StackCrad
            title="Tailwind CSS"
            background="#38BDF8"
            icon="/svg/stacks/tailwindcss.svg"
            href="https://tailwindcss.com/"
          />
          <StackCrad
            title="VS Code"
            background="#0065A9"
            icon="/svg/stacks/vscode.svg"
            href="https://code.visualstudio.com/"
          />
          <StackCrad
            title="Github"
            background="#363B45"
            icon="/svg/stacks/github.svg"
            href="https://github.com/"
          />
          <StackCrad
            title="Vercel"
            background="#000000"
            icon="/svg/stacks/vercel.svg"
            href="https://vercel.com/"
          />
          <StackCrad
            title="Firebase"
            background="#6A01DA"
            icon="/svg/stacks/firebase.svg"
            href="https://firebase.google.com/"
          />
          <StackCrad
            title="Hygraph"
            background="#090E24"
            icon="/svg/stacks/hygraph.svg"
            href="https://hygraph.com/"
          />
          <StackCrad
            title="Strapi"
            background="#4E26E0"
            icon="/svg/stacks/strapi.svg"
            href="https://strapi.io/"
          />

          <StackCrad
            title="Framer Motion"
            background="#1D1D1D"
            icon="/svg/stacks/framer-motion.svg"
            href="https://www.framer.com/motion/"
          />
          <StackCrad
            title="Open AI"
            background="#22BC66"
            icon="/svg/stacks/openai.svg"
            href="https://openai.com/"
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
