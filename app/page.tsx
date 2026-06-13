import { ArrowUpRight, ArrowDownRight, ArrowDownLeft } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] font-sans overflow-x-hidden selection:bg-[#FF0000] selection:text-white">
      
      {/* HEADER */}
      <header className="absolute top-0 w-full p-6 md:p-10 flex justify-between items-start z-20 max-w-[1920px] left-1/2 -translate-x-1/2">
        <div className="text-2xl md:text-3xl font-black tracking-tighter text-[#0A0A0A]">
          Vertex
        </div>
        <div className="bg-[#111] text-white flex items-center justify-between gap-6 md:gap-12 py-2 pl-6 md:pl-10 pr-2 pointer-events-auto">
          <nav className="hidden md:flex gap-6 text-xs md:text-sm font-bold tracking-widest uppercase">
            <a href="#" className="hover:text-[#FF0000] transition-colors">Home</a>
            <a href="#" className="hover:text-[#FF0000] transition-colors">Services</a>
            <a href="#" className="hover:text-[#FF0000] transition-colors">Vision</a>
          </nav>
          <button className="bg-white text-black px-4 md:px-6 py-2 text-xs md:text-sm font-black tracking-wider uppercase hover:bg-gray-200 transition-colors">
            JOIN US
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center pt-36 md:pt-48 w-full max-w-[1920px] mx-auto px-4 overflow-hidden relative z-10">
        <h1 className="text-[14vw] md:text-[12.5vw] font-black leading-[0.8] tracking-[-0.07em] w-full text-center whitespace-nowrap text-[#0f0f0f]">
          VERTEX MEDIA HOUSE
        </h1>
        <p className="mt-8 md:mt-10 max-w-4xl mx-auto text-lg md:text-[1.7rem] font-semibold tracking-tight text-center leading-snug text-[#1A1A1A]">
          Build Viral Content. Grow Your Skills.Be part of Something Real
        </p>
        <button className="mt-8 md:mt-10 bg-[#FF0000] text-[#0A0A0A] font-black px-8 py-3 text-lg md:text-xl tracking-wide hover:bg-red-700 transition-colors pointer-events-auto">
          JOIN US
        </button>
        
        {/* PORTFOLIO MASONRY / STAGGERED ROW */}
        <div className="w-full max-w-[1400px] mx-auto mt-16 md:mt-24 mb-32 flex items-center justify-center gap-2 md:gap-4 h-[300px] md:h-[650px] px-2 md:px-6">
          <div className="relative w-[18%] h-[200px] md:h-[400px] translate-y-6 md:translate-y-12">
             <Image fill src="https://picsum.photos/seed/vert1/600/1000" alt="Gospel Media" className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative w-[21%] h-[250px] md:h-[500px] -translate-y-4 md:-translate-y-8">
             <Image fill src="https://picsum.photos/seed/vert2/600/1000" alt="Youtube Content" className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative w-[24%] h-[320px] md:h-[650px] z-10 shadow-2xl">
             <Image fill src="https://picsum.photos/seed/vert3/600/1200" alt="Mint Marble" className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative w-[21%] h-[240px] md:h-[550px] translate-y-4 md:translate-y-8">
             <Image fill src="https://picsum.photos/seed/vert4/600/1000" alt="AI Storytelling" className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="relative w-[18%] h-[180px] md:h-[350px] -translate-y-6 md:-translate-y-12">
             <Image fill src="https://picsum.photos/seed/vert5/600/1000" alt="Inspirational Media" className="object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* DARK SECTION WRAPPER */}
      <div className="bg-[#0e0e0e] text-[#ededed] w-full flex flex-col items-center pt-24 md:pt-36">
        <div className="max-w-[1400px] w-full px-6 md:px-12 flex flex-col gap-32 md:gap-48 pb-12">
          
          {/* ROLES */}
          <div className="flex flex-col w-full">
            <div className="flex gap-1 md:gap-2 items-end mb-10 md:mb-16">
              <h2 className="text-6xl md:text-[9rem] font-black tracking-[-0.05em] leading-[0.8]">Roles</h2>
              <ArrowUpRight className="text-[#FF0000] w-12 h-12 md:w-20 md:h-20 stroke-[1.5] mb-2" />
            </div>
            <div className="flex flex-col md:flex-row w-full gap-12 md:gap-24">
              <div className="flex-1 flex flex-col">
                <div className="relative w-full aspect-square md:aspect-[4/5] max-w-[500px]">
                   <Image src="https://picsum.photos/seed/roles/800/1000" alt="Roles" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
                <p className="mt-8 md:mt-12 text-xl md:text-2xl font-medium tracking-tight max-w-[440px] leading-snug">
                  we are looking for a well specialised team of hard-working individuals intentions to scale.
                </p>
                <button className="mt-8 md:mt-12 self-start bg-[#FF0000] text-[#0A0A0A] font-black px-8 py-3 text-lg md:text-xl md:px-10 md:py-4 tracking-wide hover:bg-red-700 transition-colors">
                  JOIN US
                </button>
              </div>
              <div className="flex-[1.2] flex flex-col justify-center gap-6 md:gap-10 mt-12 md:mt-0">
                <div className="text-[2.5rem] md:text-7xl font-black tracking-tighter leading-none hover:text-[#FF0000] transition-colors cursor-default">Video Editor</div>
                <div className="text-[2.5rem] md:text-7xl font-black tracking-tighter leading-none hover:text-[#FF0000] transition-colors cursor-default">Script Writer</div>
                <div className="text-[2.5rem] md:text-7xl font-black tracking-tighter leading-none hover:text-[#FF0000] transition-colors cursor-default">AI Creators</div>
                <div className="text-[2.5rem] md:text-7xl font-black tracking-tighter leading-none hover:text-[#FF0000] transition-colors cursor-default">Thumbnail Designer</div>
                <div className="text-[2.5rem] md:text-7xl font-black tracking-tighter leading-none hover:text-[#FF0000] transition-colors cursor-default">Social Media Assitants</div>
              </div>
            </div>
          </div>

          {/* REQUIREMENTS */}
          <div className="flex flex-col w-full">
            <div className="flex gap-1 md:gap-2 items-end mb-10 md:mb-16">
              <h2 className="text-6xl md:text-[9rem] font-black tracking-[-0.05em] leading-[0.8] uppercase">Requirements</h2>
              <ArrowDownRight className="text-[#FF0000] w-12 h-12 md:w-20 md:h-20 stroke-[1.5] mb-2" />
            </div>
            <div className="flex flex-col-reverse md:flex-row w-full gap-12 md:gap-24">
              <div className="flex-[1]">
                <div className="relative w-full aspect-square md:max-w-[600px]">
                  <Image src="https://picsum.photos/seed/robohand/800/800" alt="Requirements" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="flex-[1.2] flex flex-col justify-center gap-8 md:gap-14">
                <div className="text-[2.5rem] md:text-7xl font-black tracking-tighter leading-none">Consistency</div>
                <div className="text-[2.5rem] md:text-7xl font-black tracking-tighter leading-none">willingness to Learn</div>
                <div className="text-[2.5rem] md:text-7xl font-black tracking-tighter leading-none">Ability to Execute</div>
              </div>
            </div>
          </div>

          {/* GAINS */}
          <div className="flex flex-col w-full mt-10 md:mt-20">
            <div className="flex justify-end gap-1 md:gap-4 items-end mb-10 md:mb-16 w-full">
              <ArrowDownLeft className="text-[#FF0000] w-12 h-12 md:w-20 md:h-20 stroke-[1.5] mb-2" />
              <h2 className="text-6xl md:text-[9rem] font-black tracking-[-0.05em] leading-[0.8] uppercase">Gains</h2>
            </div>
            <div className="flex flex-col-reverse md:flex-row w-full gap-12 md:gap-24">
              <div className="flex-[1.3] flex flex-col justify-center gap-8 md:gap-14">
                <div className="text-[2.5rem] md:text-7xl font-black tracking-tighter leading-[0.9]">Future Monetization</div>
                <div className="text-[2.5rem] md:text-7xl font-black tracking-tighter leading-[0.9]">Real Projects</div>
                <div className="text-[2.5rem] md:text-7xl font-black tracking-tighter leading-[0.9]">Growth</div>
              </div>
              <div className="flex-[1]">
                <div className="relative w-full aspect-[4/3] md:max-w-[700px] md:ml-auto">
                  <Image src="https://picsum.photos/seed/handshake/900/600" alt="Gains" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <footer className="w-full flex flex-col items-center mt-32 md:mt-48 pt-10 md:pt-20 overflow-hidden relative">
          <button className="bg-[#FF0000] text-[#0A0A0A] font-black px-12 py-4 md:px-16 md:py-6 text-xl md:text-3xl tracking-tight hover:bg-red-700 transition-colors z-10">
            Join us
          </button>
          
          <div className="mt-16 md:mt-24 w-full overflow-hidden flex justify-center -mb-[5%] md:-mb-[7%] pointer-events-none select-none">
            <span className="text-[35vw] font-black text-[#FF0000] leading-[0.65] tracking-[-0.06em] uppercase">
              VERTEX
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
