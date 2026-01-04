import Image from "next/image";
import BanhBaoActions, { YummyButton, OrderButton } from "@/components/InteractiveComponents";

export default function Home() {
  return (
    <main className="min-h-screen pb-20 selection:bg-primary-light selection:text-primary-dark">
      <BanhBaoActions />
      
      {/* Navbar */}
      <nav className="container mx-auto px-5 md:px-12 py-8 flex justify-between items-center bg-transparent">
        <div className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg ring-2 ring-primary-light group-hover:scale-110 transition-transform duration-300">
             <Image 
                src="/banh-bao-hero.png" 
                alt="Logo" 
                width={48} 
                height={48} 
                className="object-cover" 
             />
          </div>
          <span className="text-2xl font-black text-primary-dark tracking-tighter group-hover:tracking-widest transition-all duration-300">banhbao.day</span>
        </div>
        <YummyButton />
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-5 md:px-12 py-12 md:py-24 text-center relative">
        {/* Decorative Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-primary-light to-secondary opacity-30 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse"></div>

        <div className="animate-float mb-8 relative z-0 inline-block pointer-events-none">
          <Image 
            src="/banh-bao-hero.png" 
            alt="Cute Bánh Bao Character" 
            width={400} 
            height={400} 
            priority
            className="relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight text-foreground leading-[1.1]">
          Super <span className="text-primary-dark">Soft.</span><br/>
          Super <span className="text-secondary">Yummy.</span>
        </h1>
        <p className="text-lg md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-12 font-medium">
          Celebrating the fluffiest comfort food in Vietnam.<br/>
          Warm, savory, and impossibly cute.
        </p>
        <div className="flex gap-4 justify-center">
          <OrderButton />
        </div>
      </section>

      {/* Content Grid */}
      <section className="container mx-auto px-8 mb-32">
        <div className="text-center mb-16">
          <span className="bg-white/60 border border-primary-light text-primary-dark px-6 py-2 rounded-full text-sm font-bold shadow-sm backdrop-blur-sm uppercase tracking-wide">
            Bánh Bao Vibes Only 🎧
          </span>
        </div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          
          {/* Column 1: Music */}
          <div className="flex flex-col gap-8">
             <div className="bg-white/60 backdrop-blur-xl border border-white/50 p-6 md:p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-foreground">The Anthem 🎵</h3>
                    <span className="text-xs font-black bg-primary text-white px-2 py-1 rounded shadow-sm">HOT</span>
                </div>
                {/* Phone Frame */}
                <div className="relative mx-auto w-full max-w-[280px] aspect-[9/16] bg-black rounded-[2rem] overflow-hidden shadow-inner ring-4 ring-white/50">
                   <iframe 
                     className="absolute inset-0 w-full h-full"
                     src="https://www.youtube.com/embed/M8JAhHD8-6M?autoplay=1&mute=0&loop=1&playlist=M8JAhHD8-6M" 
                     title="Banh Bao Day Song"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen>
                   </iframe>
                </div>
                <div className="mt-8 flex items-center justify-between text-sm">
                   <span className="font-bold text-foreground/60">Music by</span>
                   <a href="https://www.youtube.com/@DiveaksshSchae/shorts" target="_blank" className="font-bold text-primary-dark hover:underline">
                      DiveaksshSchae
                   </a>
                </div>
             </div>
          </div>

          {/* Column 2: The Legend (Highlighted) */}
          <div className="flex flex-col gap-8 md:mt-12"> 
             <div className="relative group perspective-1000">
                {/* Label */}
                <div className="absolute -top-4 -right-4 z-20 bg-secondary text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-300">
                    Real Life Spotting 🛵
                </div>
                
                {/* Video Card */}
                <div className="relative mx-auto w-full max-w-[300px] aspect-[9/16] bg-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl ring-8 ring-white transform transition-transform duration-500 group-hover:-translate-y-2">
                    <iframe 
                        className="absolute inset-0 w-full h-full object-cover"
                        src="https://www.youtube.com/embed/FCiPYQFtinE?autoplay=1&mute=1&loop=1&playlist=FCiPYQFtinE" 
                        title="Real Banh Bao Motorbike"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                    
                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white pt-24">
                        <h3 className="text-2xl font-bold">The Legend</h3>
                        <p className="opacity-90 text-sm mt-1">Saigon's finest on wheels.</p>
                    </div>
                </div>
             </div>
          </div>

          {/* Column 3: Info */}
          <div className="flex flex-col gap-8">
             {/* Info Card */}
             <div className="bg-gradient-to-br from-white to-white/40 backdrop-blur-md p-8 rounded-[2.5rem] border border-white shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-foreground">Inside the Bun 🥟</h3>
                <ul className="space-y-5">
                    {[
                        { icon: "☁️", text: "Steamed fluffy dough" },
                        { icon: "🍖", text: "Seasoned pork filling" },
                        { icon: "🍄", text: "Wood ear mushrooms" },
                        { icon: "🥚", text: "Quail egg (The Prize)" }
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-foreground/80 font-medium text-lg md:text-base">
                            <span className="text-2xl w-8 text-center">{item.icon}</span>
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
             </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center opacity-80">
        <p className="font-bold text-foreground mb-2">© {new Date().getFullYear()} Bánh Bao Day</p>
        <p className="text-sm text-foreground/70 mb-4">Made with 🥟 love</p>
        <a 
          href="https://dante.company/" 
          target="_blank" 
          className="inline-flex items-center gap-2 text-xs font-bold bg-white/50 px-3 py-1.5 rounded-full hover:bg-white hover:shadow-md transition-all text-foreground/50 hover:text-foreground"
        >
          <span>🌱 Made by</span>
          <span className="text-foreground">Dante Company</span>
        </a>
      </footer>
    </main>
  );
}
