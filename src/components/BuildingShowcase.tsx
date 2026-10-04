import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useRef } from 'react';
import { Bot, CheckCircle2, ShoppingBag, Timer } from 'lucide-react';

const projectInfo = [
  {
    number: '01 / 04',
    title: 'AI SALES ASSISTANT',
    description: 'AI-powered sales assistant for a digital game store.',
    tools: 'LangFlow · Google AI Studio · Astra DB',
  },
  {
    number: '02 / 04',
    title: 'DISCORD STORE BOT',
    description: 'Discord automation system for a digital game store.',
    tools: 'Discord.js · Automation · Store Workflow',
  },
  {
    number: '03 / 04',
    title: 'SMART PLANT WATERING',
    description: 'Arduino-based automatic plant watering system.',
    tools: 'Arduino · DHT11 · Soil Moisture Sensor',
  },
  {
    number: '04 / 04',
    title: 'PERSONAL PRODUCTIVITY',
    description: 'Personal productivity web app.',
    tools: 'HTML · CSS · JavaScript · Local Storage',
  },
];

function AiSalesScreen() {
  return <div className="h-full bg-[#0d0f14] p-3 sm:p-5 text-[9px] sm:text-[11px] text-slate-300">
    <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-4">
      <div className="flex items-center gap-2 text-white/90">
        <Bot size={14} className="text-violet-400" />
        <span className="font-semibold tracking-tight">AI Sales Assistant</span>
      </div>
      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-[8px] text-emerald-400 uppercase font-bold tracking-wider">Online</span>
      </div>
    </div>
    <div className="grid grid-cols-[1fr_2fr] gap-4 h-[calc(100%-45px)]">
      <div className="space-y-3">
        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
          <p className="text-[8px] uppercase text-white/40 font-bold mb-2 tracking-widest">Agent Logic</p>
          <div className="space-y-1.5">
            <div className="h-1 w-full bg-violet-500/20 rounded" />
            <div className="h-1 w-3/4 bg-violet-500/20 rounded" />
            <div className="h-1 w-1/2 bg-violet-500/20 rounded" />
          </div>
        </div>
        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
          <p className="text-[8px] uppercase text-white/40 font-bold mb-2 tracking-widest">Knowledge Base</p>
          <div className="flex flex-wrap gap-1">
            <span className="px-1.5 py-0.5 rounded bg-violet-500/10 text-violet-300 text-[8px] border border-violet-500/20">Astra DB</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="self-end max-w-[90%] p-2 rounded-xl bg-violet-600/20 text-violet-100 border border-violet-600/30">
          "Do you have an Immortal Valorant account under budget?"
        </div>
        <div className="self-start max-w-[90%] p-2 rounded-xl bg-white/[0.04] text-slate-200 border border-white/5 leading-snug">
          "Yes. I found 2 matching accounts."
        </div>
        <div className="mt-1 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex gap-3">
          <div className="w-10 h-10 rounded bg-gradient-to-br from-violet-500/40 to-fuchsia-600/40" />
          <div className="flex-1 space-y-1">
            <p className="text-white font-medium text-[10px]">Rank: Immortal</p>
            <p className="text-slate-400 text-[9px]">Level: 183 · Available</p>
          </div>
        </div>
        <div className="mt-auto flex gap-2 pt-2 border-t border-white/5">
          <span className="text-[8px] text-white/30 uppercase tracking-widest">LangFlow · Google AI Studio</span>
        </div>
      </div>
    </div>
  </div>;
}

function DiscordStoreScreen() {
  return <div className="h-full bg-[#1e1f22] p-3 sm:p-4 text-[9px] sm:text-[11px] text-[#dbdee1]">
    <div className="flex h-full gap-3">
      <aside className="w-24 shrink-0 bg-[#111214] rounded-lg p-2 flex flex-col gap-1.5">
        <div className="px-2 py-1 mb-1 text-white/90 font-bold text-[8px] uppercase tracking-tighter">Marketplace</div>
        <div className="px-2 py-1 rounded bg-white/5 text-white/90"># marketplace</div>
        <div className="px-2 py-1 text-white/40"># checkout</div>
        <div className="px-2 py-1 text-white/40"># private-ticket</div>
      </aside>
      <main className="flex-1 flex flex-col">
        <div className="flex items-center gap-2 border-b border-white/5 pb-2 mb-3">
          <ShoppingBag size={12} className="text-indigo-400" />
          <span className="font-semibold text-white/90"># marketplace</span>
        </div>
        <div className="rounded-xl bg-[#2b2d31] border border-white/5 overflow-hidden">
          <div className="aspect-[2/1] bg-gradient-to-br from-indigo-600/40 via-violet-600/40 to-fuchsia-600/40 flex items-center justify-center">
            <span className="text-white/80 font-black text-xs tracking-tighter">VALORANT ACCOUNTS</span>
          </div>
          <div className="p-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-white text-[10px]">Valorant Account</h4>
                <p className="text-white/50 text-[9px] mt-0.5">Rank: Immortal · Level: 183 · Skins: 42</p>
              </div>
              <div className="text-emerald-400 font-bold text-[10px]">Rp ...</div>
            </div>
            <button className="w-full mt-3 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-[9px] transition-colors uppercase tracking-wider">Buy Now</button>
          </div>
        </div>
      </main>
    </div>
  </div>;
}

function PlantScreen() {
  return <div className="h-full bg-[#0a0c0b] p-4 sm:p-6 text-slate-300">
    <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-5">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
        <span className="font-bold tracking-widest text-[10px] uppercase text-white/90">Smart Plant System</span>
      </div>
      <span className="text-[8px] font-mono text-emerald-500/70">v1.0.4 - ACTIVE</span>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <p className="text-[8px] text-white/40 uppercase font-bold tracking-widest mb-1">Soil</p>
          <p className="text-lg font-black text-emerald-400 tracking-tight">68%</p>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <p className="text-[8px] text-white/40 uppercase font-bold tracking-widest mb-1">Temp</p>
          <p className="text-lg font-black text-cyan-400 tracking-tight">24°C</p>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <p className="text-[8px] text-white/40 uppercase font-bold tracking-widest mb-1">Humidity</p>
          <p className="text-lg font-black text-blue-400 tracking-tight">61%</p>
        </div>
        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
          <p className="text-[8px] text-white/40 uppercase font-bold tracking-widest mb-1">Pump</p>
          <p className="text-[10px] font-black text-emerald-500 tracking-wider uppercase mt-1">Standby</p>
        </div>
      </div>
      <div className="p-4 rounded-xl bg-[#000] border border-white/5 font-mono text-[9px] leading-relaxed flex flex-col justify-between">
        <div className="space-y-1">
          <p className="text-white/20">// Hardware Status</p>
          <p className="text-emerald-500/80">&gt; Arduino Uno ... OK</p>
          <p className="text-emerald-500/80">&gt; DHT11 Sensor ... OK</p>
          <p className="text-emerald-500/80">&gt; Soil Moisture ... 68%</p>
          <p className="text-emerald-500/80">&gt; LCD I2C Display ... OK</p>
        </div>
        <p className="text-white/10 text-[7px] text-right uppercase tracking-[.3em]">C++ / Arduino</p>
      </div>
    </div>
  </div>;
}

function ProductivityScreen() {
  return <div className="h-full bg-[#f6f7fb] p-3 sm:p-5 text-[8px] sm:text-[10px] text-slate-700"><div className="flex items-center justify-between border-b border-slate-200 pb-2"><span className="font-bold">Daily Focus</span><span className="rounded bg-slate-200 px-1.5 py-0.5">Light mode</span></div><div className="grid grid-cols-[1.2fr_.8fr] gap-3 mt-3"><div><p className="font-medium mb-1.5">To-Do List</p><div className="space-y-1.5"><Task text="Review AI agent flow" done/><Task text="Refine portfolio UI"/><Task text="Water the plant"/></div><p className="font-medium mt-3 mb-1.5">Quick Links</p><div className="flex gap-1"><span className="rounded bg-white border border-slate-200 px-1.5 py-1">GitHub</span><span className="rounded bg-white border border-slate-200 px-1.5 py-1">Notes</span></div></div><div className="rounded-xl bg-violet-100 p-3 text-center"><Timer size={13} className="mx-auto text-violet-600"/><p className="mt-2 text-violet-600">Pomodoro</p><strong className="block text-lg text-violet-900">24:36</strong><span className="text-violet-600">Focus mode</span><p className="mt-4 text-[7px] text-violet-500">Saved with Local Storage</p></div></div></div>;
}

function Task({ text, done = false }: { text: string; done?: boolean }) { return <div className="flex gap-1.5 items-center rounded bg-white border border-slate-200 p-1.5"><CheckCircle2 size={9} className={done ? 'text-emerald-500' : 'text-slate-300'} /><span className={done ? 'line-through text-slate-400' : ''}>{text}</span></div>; }

const screens = [AiSalesScreen, DiscordStoreScreen, PlantScreen, ProductivityScreen];

export default function BuildingShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), { stiffness: 140, damping: 28 });
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), { stiffness: 140, damping: 28 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });
  const laptopY = useTransform(progress, [0, 0.15, 0.85, 1], [60, 0, 0, -30]);
  const laptopScale = useTransform(progress, [0, 0.15, 0.85, 1], [0.97, 1, 1, 0.98]);
  const laptopOpacity = useTransform(progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => { if (reducedMotion || window.innerWidth < 1024) return; const rect = event.currentTarget.getBoundingClientRect(); mouseX.set((event.clientX - rect.left) / rect.width - 0.5); mouseY.set((event.clientY - rect.top) / rect.height - 0.5); };
  const resetPointer = () => { mouseX.set(0); mouseY.set(0); };

  return <section ref={ref} className="relative h-[250vh]" aria-label="Building with Software project showcase"><div className="sticky top-0 flex min-h-screen items-center overflow-hidden px-6 py-16"><div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(124,58,237,.09),transparent_35%)] pointer-events-none"/><div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[.75fr_1.25fr]"><ProjectInfo progress={progress} reduceMotion={reducedMotion ?? false}/><div onPointerMove={handlePointerMove} onPointerLeave={resetPointer} className="relative flex min-h-[300px] items-center justify-center [perspective:1000px]"><motion.div style={{ y: reducedMotion ? 0 : laptopY, scale: reducedMotion ? 1 : laptopScale, opacity: reducedMotion ? 1 : laptopOpacity, rotateX: reducedMotion ? 0 : tiltX, rotateY: reducedMotion ? 0 : tiltY, transformStyle: 'preserve-3d' }} className="w-full max-w-[570px] will-change-transform"><div className="rounded-t-2xl border border-slate-600/60 bg-gradient-to-br from-slate-700 via-slate-900 to-slate-700 p-2.5 shadow-2xl"><div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-black"><ProjectScreens progress={progress} reduceMotion={reducedMotion ?? false}/><div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.035] to-transparent"/></div></div><div className="mx-auto h-3 w-[108%] -ml-[4%] rounded-b-xl border-t border-slate-500/40 bg-gradient-to-b from-slate-500 to-slate-800"><div className="mx-auto h-1 w-1/5 rounded-b bg-slate-400/50"/></div></motion.div></div></div></div></section>;
}

function ProjectInfo({ progress, reduceMotion }: { progress: MotionValue<number>; reduceMotion: boolean }) { return <div><p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-[#aa3bff] dark:text-[#c084fc]">Building with Software</p><h2 className="mb-6 text-4xl font-bold text-[#08060d] dark:text-[#f3f4f6]">From ideas to experiments.</h2><div className="relative min-h-44">{projectInfo.map((project, index) => <ProjectCopy key={project.number} project={project} index={index} progress={progress} reduceMotion={reduceMotion}/>)}</div></div>; }
function ProjectCopy({ project, index, progress, reduceMotion }: { project: typeof projectInfo[number]; index: number; progress: MotionValue<number>; reduceMotion: boolean }) { const ranges = [[.2,.34],[.34,.48],[.48,.62],[.62,.76]][index]; const opacity = useTransform(progress, [ranges[0]-.04,ranges[0],ranges[1]-.03,ranges[1]+.03], [0,1,1,0]); const y = useTransform(progress, [ranges[0]-.04,ranges[0],ranges[1],ranges[1]+.03], [8,0,0,-8]); const scale = useTransform(progress, [ranges[0]-.04,ranges[0],ranges[1],ranges[1]+.03], [1.015,1,1,.985]); return <motion.div style={{ opacity: reduceMotion ? (index === 0 ? 1 : 0) : opacity, y: reduceMotion ? 0 : y, scale: reduceMotion ? 1 : scale }} className="absolute inset-0"><p className="font-mono text-sm text-[#aa3bff] dark:text-[#c084fc]">{project.number}</p><h3 className="mt-2 text-2xl font-semibold text-[#08060d] dark:text-[#f3f4f6]">{project.title}</h3><p className="mt-3 text-sm leading-relaxed text-[#6b6375] dark:text-[#9ca3af]">{project.description}</p><p className="mt-3 text-xs font-medium text-[#08060d] dark:text-[#f3f4f6]">{project.tools}</p></motion.div>; }
function ProjectScreens({ progress, reduceMotion }: { progress: MotionValue<number>; reduceMotion: boolean }) { return <>{screens.map((Screen, index) => <ScreenLayer key={index} index={index} progress={progress} reduceMotion={reduceMotion}><Screen/></ScreenLayer>)}</>; }
function ScreenLayer({ index, progress, reduceMotion, children }: { index: number; progress: MotionValue<number>; reduceMotion: boolean; children: React.ReactNode }) { const ranges = [[.2,.34],[.34,.48],[.48,.62],[.62,.76]][index]; const opacity = useTransform(progress, [ranges[0]-.025,ranges[0]+.015,ranges[1]-.015,ranges[1]+.025], [0,1,1,0]); const x = useTransform(progress, [ranges[0]-.025,ranges[0]+.015,ranges[1]-.015,ranges[1]+.025], [8,0,0,-8]); const scale = useTransform(progress, [ranges[0]-.025,ranges[0]+.015,ranges[1]-.015,ranges[1]+.025], [1.015,1,1,.985]); return <motion.div style={{ opacity: reduceMotion ? (index === 0 ? 1 : 0) : opacity, x: reduceMotion ? 0 : x, scale: reduceMotion ? 1 : scale }} className="absolute inset-0 will-change-transform">{children}</motion.div>; }
