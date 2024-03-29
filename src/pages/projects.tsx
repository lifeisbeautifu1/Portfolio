import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Alexey's portfolio | Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-0 flex-grow cursor-text overflow-y-scroll whitespace-nowrap bg-[#151515] py-1 font-mono font-medium">
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['1']">
          <span className="text-[#74985D]">{"/*"}</span>
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['2']">
          <span className="pl-6 text-[#74985D]">
            I have a bunch of projects you can check them out in my github
            profile.
          </span>
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['3']">
          <span className="pl-6 text-[#74985D]">
            This discord clone is the most recent and advanced one.
          </span>
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['']">
          <span className="pl-6 text-[#74985D]">
            You can check the progress in readme file.
          </span>
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['4']">
          <span className="text-[#74985D]">{"*/"}</span>
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['5']"></div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['6']">
          <span className="text-[#679AD1]">const </span>
          <span className="text-[#6EBDF7]">projects </span>=
          <span className="text-[#F7D648]"> {"["}</span>
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['7']">
          <span className="pl-6 text-[#CA75CF]">{"{"}</span>
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['8']">
          <span className="pl-12 text-[#AADAFA]">name:</span>
          <span className="text-[#C5947C]"> "Discord"</span>,
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['9']">
          <span className="pl-12 text-[#AADAFA]">description:</span>
          <span className="text-[#C5947C]">
            {" "}
            "Discord clone build with React & Nest.js"
          </span>
          ,
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['10']">
          <span className="pl-12 text-[#AADAFA]">repository: </span>
          <span className="text-[#C5947C]">"</span>
          <Link
            target="_blank"
            href="https://github.com/lifeisbeautifu1/Discord"
            className="text-[#C5947C] hover:underline"
          >
            https://github.com/lifeisbeautifu1/Discord
          </Link>
          <span className="text-[#C5947C]">"</span>,
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['11']">
          <span className="pl-12 text-[#AADAFA]">link:</span>
          <span className="text-[#C5947C]"> "coming soon"</span>,
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['12']">
          <span className="pl-12 text-[#AADAFA]">stack:</span>
          <span className="text-[#4997EF]">{" {"}</span>
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['13']">
          <span className="pl-[4rem] text-[#AADAFA]">frontend:</span>
          <span className="text-[#F7D648]"> {"["}</span>
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['14']">
          <span className="pl-[5rem] text-[#C5947C]">"React"</span>,
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['15']">
          <span className="pl-[5rem] text-[#C5947C]">"TypeScript"</span>,
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['16']">
          <span className="pl-[5rem] text-[#C5947C]">"TailwindCSS"</span>,
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['17']">
          <span className="pl-[5rem] text-[#C5947C]">"HeadlessUI"</span>,
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['18']">
          <span className="pl-[5rem] text-[#C5947C]">"Framer Motion"</span>,
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['19']">
          <span className="pl-[5rem] text-[#C5947C]">"Redux Toolkit"</span>,
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['20']">
          <span className="pl-[4rem] text-[#F7D648]">{"]"}</span>,
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['21']">
          <span className="pl-[4rem] text-[#AADAFA]">backend:</span>
          <span className="text-[#F7D648]"> {"["}</span>
          <span className="text-[#C5947C]">"Nest.js"</span>,
          <span className="text-[#C5947C]"> "PostgreSQL"</span>,
          <span className="text-[#C5947C]"> "Redis"</span>,
          <span className="text-[#C5947C]"> "Prisma"</span>,
          <span className="text-[#C5947C]"> "WebSockets"</span>
          <span className="text-[#F7D648]">{"]"}</span>,
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['22']">
          <span className="pl-[4rem] text-[#AADAFA]">devOps:</span>
          <span className="text-[#F7D648]"> {"["}</span>
          <span className="text-[#C5947C]">"Docker"</span>
          <span className="text-[#F7D648]">{"]"}</span>,
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['23']">
          <span className="pl-12 text-[#4997EF]">{"}"}</span>,
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['24']">
          <span className="pl-12 text-[#AADAFA]">features:</span>
          <span className="text-[#4997EF]">{" ["}</span>
        </div>
        <div className="pl-10 text-lg text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['25']">
          <span className="pl-[4rem] text-[#C5947C]">
            "Sign Up / Sign In / Sign Out / Reset Password / Confirm Email"
          </span>
          ,
        </div>
        <div className="pl-10 text-lg text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['26']">
          <span className="pl-[4rem] text-[#C5947C]">
            "Search For Friends / Add Them / Delete Them"
          </span>
          ,
        </div>
        <div className="pl-10 text-lg text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['27']">
          <span className="pl-[4rem] text-[#C5947C]">
            "Create Conversations With Users / Create Group Conversations"
          </span>
          ,
        </div>
        <div className="pl-10 text-lg text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['28']">
          <span className="pl-[4rem] text-[#C5947C]">
            "Send Messages To Other Users"
          </span>
          ,
        </div>
        <div className="pl-10 text-lg text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['29']">
          <span className="pl-[4rem] text-[#C5947C]">"Call Other Users"</span>,
        </div>
        <div className="pl-10 text-lg text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['30']">
          <span className="pl-[4rem] text-[#C5947C]">
            "See Incoming Messages / Friends Requests / Calls Live"
          </span>
          ,
        </div>
        <div className="pl-10 text-lg text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['31']">
          <span className="pl-[4rem] text-[#C5947C]">
            "See Online Users Live"
          </span>
          ,
        </div>
        <div className="pl-10 text-lg text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['32']">
          <span className="pl-[4rem] text-[#C5947C]">
            "See Typing Indicator"
          </span>
          ,
        </div>
        <div className="pl-10 text-lg text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['33']">
          <span className="pl-[4rem] text-[#C5947C]">
            "Maintain Privacy (Can't Read Others Chats/Msgs)"
          </span>
          ,
        </div>

        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['34']">
          <span className="pl-12 text-[#4997EF]">{"]"}</span>,
        </div>

        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['35']">
          <span className="pl-6 text-[#CA75CF]">{"}"}</span>,
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['36']">
          <span className="text-[#F7D648]">{"]"}</span>;
        </div>
        <div className="pl-10 text-lg  text-white before:inline-block before:w-[60px] before:pr-10 before:text-right before:text-gray-300/80 before:content-['37']"></div>
      </div>
    </>
  );
}
