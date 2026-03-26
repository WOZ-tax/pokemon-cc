import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Terminal, Zap, User, CircleDot, BookOpen, Archive, Puzzle, Users, Cable,
  Frown, Smile, MessageSquare, Code, Database, Globe, Skull, Moon, Flame,
  HelpCircle, ArrowDown, Sun, Map, Sparkles, Heart, Box, Trash2,
  CheckCircle, XCircle, ChevronDown
} from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const terminalText = [
    "$ claude",
    "\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e",
    "\u2502  Claude Code              \u2502",
    "\u2502  Your AI coding agent     \u2502",
    "\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f",
    "",
    "> \u3053\u306e\u95a2\u6570\u306b\u30c6\u30b9\u30c8\u3092\u66f8\u3044\u3066",
    "",
    "\u2713 \u30c6\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3057\u305f",
    "\u2713 5\u4ef6\u306e\u30c6\u30b9\u30c8\u30b1\u30fc\u30b9\u3092\u8ffd\u52a0",
    "\u2713 \u5168\u30c6\u30b9\u30c8\u901a\u904e"
  ].join("\n");

  const badExample = [
    "# CLAUDE.md (800\u884c)",
    "",
    "## \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u6982\u8981 ... (50\u884c)",
    "## \u57fa\u672c\u30eb\u30fc\u30eb ... (30\u884c)",
    "## API\u4ed5\u69d8\u66f8 ... (200\u884c)",
    "   \u2190 \u6bce\u56de\u8981\u308b\uff1f",
    "## DB\u8a2d\u8a08\u66f8 ... (150\u884c)",
    "   \u2190 Skill \u306b\u66f8\u3051",
    "## \u30c7\u30d7\u30ed\u30a4\u624b\u9806 ... (100\u884c)",
    "   \u2190 Skill \u306b\u66f8\u3051",
    "## \u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u898f\u7d04 ... (80\u884c)",
    "   \u2190 Rules \u306b\u66f8\u3051",
    "## \u30a8\u30e9\u30fc\u5bfe\u51e6\u6cd5 ... (90\u884c)",
    "   \u2190 Rules \u306b\u66f8\u3051",
    "",
    "# \u6bce\u30bb\u30c3\u30b7\u30e7\u30f3800\u884c\u3092\u8aad\u307f\u8fbc\u307f\u3001",
    "# \u91cd\u8981\u306a\u6307\u793a\u3092\u898b\u5931\u3046\u3002"
  ].join("\n");

  const goodExample = [
    "# CLAUDE.md",
    "",
    "## \u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u4f55\u304b",
    "EC\u30b5\u30a4\u30c8\u306e\u30d0\u30c3\u30af\u30a8\u30f3\u30c9API\u3002",
    "Go + PostgreSQL\u3002",
    "",
    "## \u7d76\u5bfe\u30eb\u30fc\u30eb",
    "1. main\u306b\u76f4\u63a5push\u3057\u306a\u3044",
    "2. \u30c6\u30b9\u30c8\u306a\u3057\u3067\u30de\u30fc\u30b8\u3057\u306a\u3044",
    "",
    "## \u30ef\u30fc\u30af\u30d5\u30ed\u30fc",
    "- \u65b0\u6a5f\u80fd \u2192 /feature-flow",
    "- \u30d0\u30b0\u4fee\u6b63 \u2192 /bugfix-flow",
    "- \u30c7\u30d7\u30ed\u30a4 \u2192 /deploy",
    "",
    "## \u9023\u643a",
    "- DB\u64cd\u4f5c: /db-migrate",
    "- API\u4ed5\u69d8: /api-spec",
    "- \u898f\u7d04: .claude/rules/ \u53c2\u7167"
  ].join("\n");

  return (
    <div className="min-h-screen bg-[#fcf9f8] dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-300">
      {/* TopAppBar */}
      <nav className="sticky top-0 z-50 bg-[#fcf9f8]/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-outline-variant/20 transition-colors duration-300">
        <div className="flex justify-between items-center w-full px-4 md:px-8 py-4 max-w-7xl mx-auto">
          <div className="text-xl md:text-2xl font-black text-[#c00008] dark:text-red-500 tracking-tighter font-headline flex items-center gap-2">
            <Terminal className="w-6 h-6 md:w-8 md:h-8" />
            Claude Code
          </div>
          <div className="hidden lg:flex items-center gap-6">
            {[
              { href: "#prologue", label: "\u5e8f\u7ae0" },
              { href: "#party", label: "\u7b2c1\u7ae0" },
              { href: "#ch2", label: "\u7b2c2\u7ae0" },
              { href: "#ch3", label: "\u7b2c3\u7ae0" },
              { href: "#status", label: "\u7b2c4\u7ae0" },
              { href: "#flow", label: "\u7b2c5\u7ae0" },
            ].map((link, i) => (
              <a key={i} className="text-stone-600 dark:text-stone-400 font-medium font-headline tracking-tight hover:text-[#c00008] dark:hover:text-red-500 transition-colors" href={link.href}>{link.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors" aria-label="Toggle Dark Mode">
              {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-stone-600" />}
            </button>
            <a href="#prologue" className="hidden md:block bg-[#c00008] dark:bg-red-600 text-white px-6 py-2 rounded-full font-headline font-bold hover:shadow-lg hover:bg-red-700 active:scale-95 transition-all">{"\u5192\u967a\u3092\u59cb\u3081\u308b"}</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-6 overflow-hidden">
        {/* ===== Hero ===== */}
        <section className="relative py-20 md:py-32 flex flex-col items-center text-center">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-40 -right-20 w-80 h-80 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-full blur-3xl -z-10"></div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 px-4 py-1 rounded-full font-label text-sm uppercase tracking-widest mb-6 shadow-md">
            <Zap className="w-4 h-4 fill-current text-yellow-400 dark:text-yellow-600" /> Lv.100 {"\u30de\u30b9\u30bf\u30fc\u30ac\u30a4\u30c9"}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-stone-900 dark:text-white mb-6 leading-[1.1] md:leading-[0.9] break-keep">
            Claude Code {"\u3092"}<br/><span className="text-[#c00008] dark:text-red-500">{"\u30dd\u30b1\u30e2\u30f3\u3067\u5b8c\u5168\u7406\u89e3\u3059\u308b"}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-body text-lg md:text-2xl text-stone-600 dark:text-stone-300 max-w-3xl mb-12">
            {"\u80a5\u5927\u5316\u3057\u305f"} <code className="bg-stone-200 dark:bg-stone-800 px-2 py-0.5 rounded text-sm md:text-base">CLAUDE.md</code> {"\u306f\u3082\u3046\u5352\u696d\u3002AI\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3092\u30c1\u30e3\u30f3\u30d4\u30aa\u30f3\u306e\u30d1\u30fc\u30c6\u30a3\u306e\u3088\u3046\u306b\u69cb\u7bc9\u3057\u3001\u6700\u9ad8\u306e\u958b\u767a\u52b9\u7387\u3092\u624b\u306b\u5165\u308c\u307e\u3057\u3087\u3046\u3002"}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-stone-800 group">
            <img alt="Pokeballs floating amidst lightning and data" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATe7TwWBo3ijDjoW8NN5xH2BapRx7ybAaDikJwNQE4uHBRNVm4vYXxGRlNURtNyJJAmYPmfKZ8-9DyhhqFv_1rkG_z6l5RD_U7zpGc5poNj9tMoBT-220M9Xo4xJFwuC7Xe0bzgLBR9lFPVdpKtDOBDI9WVSIdodV76Ma7Aw70-xiHnRXlA1vDmMc_3iMHaspXrDLDPyD0AG1tV5WBUYOm7KMA4IhOemDvCHXj7hI9cviM0ucHdzzvFZI3FEMe2ssLghV-vCgH9kvo" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-12">
              <div className="text-left">
                <span className="font-label text-white/90 uppercase text-xs tracking-widest bg-[#c00008] px-3 py-1 mb-3 inline-block rounded-sm">{"\u30d5\u30a3\u30fc\u30eb\u30c9\u30ec\u30dd\u30fc\u30c8"}</span>
                <h3 className="font-headline text-2xl md:text-4xl text-white font-bold italic tracking-tight drop-shadow-lg">Kanto Codex: The AI Trainer&apos;s Bible</h3>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ===== 序章: 冒険の始まり ===== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="py-20 bg-white dark:bg-stone-900 rounded-3xl px-6 md:px-12 shadow-sm border border-stone-100 dark:border-stone-800 my-10" id="prologue">
          <div className="max-w-4xl mx-auto">
            <motion.span variants={fadeInUp} className="font-label text-[#c00008] dark:text-red-500 font-bold tracking-widest uppercase mb-4 block text-center">{"\u5e8f\u7ae0"}</motion.span>
            <motion.h2 variants={fadeInUp} className="font-headline text-3xl md:text-5xl font-extrabold text-center mb-4 tracking-tight">{"\u5192\u967a\u306e\u59cb\u307e\u308a"}</motion.h2>
            <motion.p variants={fadeInUp} className="text-center text-stone-500 dark:text-stone-400 mb-16 text-lg">{"\u65c5\u306b\u51fa\u308b\u524d\u306b\u3001\u57fa\u672c\u306e\u88c5\u5099\u3092\u78ba\u8a8d\u3057\u3088\u3046\u3002"}</motion.p>

            {/* What is Claude Code? */}
            <motion.div variants={fadeInUp} className="mb-16">
              <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3"><Terminal className="w-8 h-8 text-[#c00008] dark:text-red-500" /> Claude Code {"\u3068\u306f\uff1f"}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-stone-50 dark:bg-stone-950 p-6 rounded-xl border border-stone-200 dark:border-stone-800">
                  <p className="text-stone-700 dark:text-stone-300 leading-relaxed"><strong>Claude Code</strong> {"\u306f\u3001\u30bf\u30fc\u30df\u30ca\u30eb\u4e0a\u3067\u52d5\u304fAI\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u3067\u3059\u3002\u3042\u306a\u305f\u306e\u6307\u793a\u306b\u5f93\u3063\u3066\u3001\u30b3\u30fc\u30c9\u3092\u8aad\u307f\u3001\u66f8\u304d\u3001\u5b9f\u884c\u3057\u3001\u30c7\u30d0\u30c3\u30b0\u3057\u307e\u3059\u3002"}</p>
                  <p className="text-stone-700 dark:text-stone-300 leading-relaxed mt-4">{"\u30dd\u30b1\u30e2\u30f3\u306b\u4f8b\u3048\u308b\u306a\u3089\u3001"}<strong>{"\u30b5\u30c8\u30b7\uff08\u30c8\u30ec\u30fc\u30ca\u30fc\uff09\u305d\u306e\u3082\u306e"}</strong>{"\u3002\u30dd\u30b1\u30e2\u30f3\uff08\u30c4\u30fc\u30eb\u7fa4\uff09\u3092\u4f7f\u3044\u3053\u306a\u3057\u3066\u5192\u967a\uff08\u30bf\u30b9\u30af\uff09\u306b\u6311\u3080\u5b58\u5728\u3067\u3059\u3002"}</p>
                  <p className="text-stone-700 dark:text-stone-300 leading-relaxed mt-4">{"\u30b5\u30c8\u30b7\u304c\u5f37\u3044\u306e\u306f\u3001\u30d4\u30ab\u30c1\u30e5\u30a6\u304c\u5f37\u3044\u304b\u3089\u3060\u3051\u3058\u3083\u306a\u3044\u3002"}<strong>{"\u9069\u5207\u306a\u30dd\u30b1\u30e2\u30f3\u3092\u3001\u9069\u5207\u306a\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u3001\u9069\u5207\u306b\u51fa\u305b\u308b"}</strong>{"\u304b\u3089\u5f37\u3044\u306e\u3067\u3059\u3002"}</p>
                </div>
                <div className="bg-stone-900 dark:bg-black rounded-xl p-6 text-sm font-mono text-stone-300 shadow-inner border border-stone-800">
                  <div className="flex items-center gap-2 mb-4 text-stone-500">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs ml-2">Terminal</span>
                  </div>
                  <pre className="whitespace-pre-wrap"><code>{terminalText}</code></pre>
                </div>
              </div>
            </motion.div>

            {/* What is CLAUDE.md? */}
            <motion.div variants={fadeInUp} className="mb-16">
              <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3"><Zap className="w-8 h-8 text-yellow-500 fill-current" /> CLAUDE.md {"\u3068\u306f\uff1f"}</h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 md:p-8 rounded-xl border border-yellow-200 dark:border-yellow-900/50">
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">{"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30eb\u30fc\u30c8\u306b\u7f6e\u304f"} <code className="bg-yellow-200 dark:bg-yellow-800 px-2 py-0.5 rounded text-sm">CLAUDE.md</code> {"\u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u3002Claude Code\u306f"}<strong>{"\u30bb\u30c3\u30b7\u30e7\u30f3\u958b\u59cb\u6642\u306b\u5fc5\u305a\u3053\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059"}</strong>{"."}</p>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-4">{"\u3064\u307e\u308a\u3001\u3053\u3053\u306b\u66f8\u3044\u305f\u5185\u5bb9\u306f"}<strong>{"\u6bce\u56de\u3001\u6700\u521d\u304b\u3089\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u8f09\u308b"}</strong>{"\u3002\u30dd\u30b1\u30e2\u30f3\u3067\u8a00\u3048\u3070\u3001"}<strong>{"\u5e38\u306b\u30dc\u30fc\u30eb\u306e\u5916\u306b\u3044\u308b\u30d4\u30ab\u30c1\u30e5\u30a6"}</strong>{"\u3002\u30b5\u30c8\u30b7\u306e\u80a9\u306b\u4e57\u3063\u3066\u3001\u3069\u3053\u306b\u3067\u3082\u3064\u3044\u3066\u304f\u308b\u552f\u4e00\u306e\u5b58\u5728\u3067\u3059\u3002"}</p>
                <p className="text-stone-600 dark:text-stone-400 text-sm italic">{"\u203b \u30d4\u30ab\u30c1\u30e5\u30a6\u304c\u30dc\u30fc\u30eb\u306b\u5165\u3089\u306a\u3044\u306e\u3068\u540c\u3058\u3088\u3046\u306b\u3001CLAUDE.md \u306f\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u304b\u3089\u5916\u308c\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u305b\u3093\u3002"}</p>
              </div>
            </motion.div>

            {/* Why party composition? */}
            <motion.div variants={fadeInUp} className="mb-16">
              <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3"><Heart className="w-8 h-8 text-red-500" /> {"\u306a\u305c\u300c\u30d1\u30fc\u30c6\u30a3\u69cb\u6210\u300d\u304c\u5fc5\u8981\u306a\u306e\uff1f"}</h3>
              <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">Claude Code{"\u306b\u306f"}<strong>{"\u300c\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30a6\u30a3\u30f3\u30c9\u30a6\u300d"}</strong>{"\u3068\u3044\u3046\u5236\u9650\u304c\u3042\u308a\u307e\u3059\u3002\u4e00\u5ea6\u306b\u899a\u3048\u3066\u3044\u3089\u308c\u308b\u60c5\u5831\u91cf\u306b\u4e0a\u9650\u304c\u3042\u308b\u3002\u3053\u308c\u306f\u30dd\u30b1\u30e2\u30f3\u306e"}<strong>HP{"\u30d0\u30fc"}</strong>{"\u3068\u540c\u3058\u3067\u3059\u3002"}</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-900/50">
                  <p className="font-bold text-red-600 dark:text-red-400 flex items-center gap-2 mb-4"><XCircle className="w-5 h-5" /> CLAUDE.md{"\u306b\u5168\u90e8\u66f8\u304f\u3068\u2026"}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm"><span>CLAUDE.md (800{"\u884c"})</span><span className="text-red-500 font-bold">HP -60%</span></div>
                    <div className="h-3 w-full bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden"><div className="h-full bg-red-500 w-[60%]"></div></div>
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-400">{"\u30d0\u30c8\u30eb\u958b\u59cb\u524d\u306bHP\u306e60%\u304c\u524a\u3089\u308c\u3066\u3044\u308b\u3002\u4f1a\u8a71\u304c\u9577\u304f\u306a\u308b\u3068\u78ba\u5b9f\u306bHP\u4e0d\u8db3\u3067\u5012\u308c\u308b\u3002"}</p>
                </div>
                <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-900/50">
                  <p className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2 mb-4"><CheckCircle className="w-5 h-5" /> {"\u30d1\u30fc\u30c6\u30a3\u3092\u7d44\u3080\u3068\u2026"}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm"><span>CLAUDE.md (50{"\u884c"})</span><span className="text-emerald-500 font-bold">HP -10%</span></div>
                    <div className="h-3 w-full bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden"><div className="h-full bg-emerald-500 w-[10%]"></div></div>
                  </div>
                  <p className="text-sm text-stone-600 dark:text-stone-400">{"\u6b8b\u308a90%\u3092\u4f1a\u8a71\u3068\u30c4\u30fc\u30eb\u5b9f\u884c\u306b\u4f7f\u3048\u308b\u3002\u9577\u3044\u5192\u967a\u3067\u3082\u30b9\u30bf\u30df\u30ca\u5207\u308c\u3057\u306a\u3044\u3002"}</p>
                </div>
              </div>
            </motion.div>

            {/* Roadmap */}
            <motion.div variants={fadeInUp}>
              <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3"><Map className="w-8 h-8 text-blue-500" /> {"\u3053\u306e\u5192\u967a\u3067\u5b66\u3076\u3053\u3068"}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { ch: "\u7b2c1\u7ae0", title: "\u30d1\u30fc\u30c6\u30a3\u30e1\u30f3\u30d0\u30fc", desc: "7\u3064\u306e\u4ef2\u9593\u306e\u5f79\u5272\u3092\u77e5\u308b", color: "border-[#c00008]" },
                  { ch: "\u7b2c2\u7ae0", title: "\u65c5\u306e\u4ef2\u9593", desc: "\u30bf\u30b1\u30b7\u30fb\u30ab\u30b9\u30df\u306e\u4f7f\u3044\u65b9", color: "border-emerald-500" },
                  { ch: "\u7b2c3\u7ae0", title: "\u5192\u967a\u306e\u4ed5\u7d44\u307f", desc: "HP\u30d0\u30fc\u3068\u30dd\u30b1\u30e2\u30f3\u30dc\u30c3\u30af\u30b9", color: "border-blue-500" },
                  { ch: "\u7b2c4\u7ae0", title: "\u72b6\u614b\u7570\u5e38", desc: "\u3088\u304f\u3042\u308b\u5931\u6557\u3068\u51e6\u65b9\u7b8b", color: "border-purple-500" },
                  { ch: "\u7b2c5\u7ae0", title: "\u5224\u65ad\u30d5\u30ed\u30fc", desc: "\u3069\u3053\u306b\u66f8\u304f\u304b\u8ff7\u3063\u305f\u6642\u306b", color: "border-yellow-500" },
                  { ch: "\u6700\u7d42\u7ae0", title: "\u5192\u967a\u306b\u51fa\u3088\u3046", desc: "\u30dd\u30b1\u30e2\u30f3\u30de\u30b9\u30bf\u30fc\u3078\u306e\u9053", color: "border-stone-500" },
                ].map((item, i) => (
                  <div key={i} className={`p-4 bg-stone-50 dark:bg-stone-950 rounded-xl border-l-4 ${item.color}`}>
                    <span className="text-xs font-label uppercase tracking-widest text-stone-500">{item.ch}</span>
                    <h4 className="font-headline font-bold mt-1">{item.title}</h4>
                    <p className="text-sm text-stone-500 dark:text-stone-400 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ===== 第1章: パーティメンバー ===== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="py-20" id="party">
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="font-label text-[#c00008] dark:text-red-500 font-bold tracking-widest uppercase mb-2 block">{"\u7b2c1\u7ae0"}</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-2">{"\u30d1\u30fc\u30c6\u30a3\u30e1\u30f3\u30d0\u30fc\u3092\u77e5\u308d\u3046"}</h2>
              <p className="text-stone-600 dark:text-stone-400 text-lg">{"\u305d\u308c\u305e\u308c\u306e\u5f79\u5272\u3092\u7406\u89e3\u3057\u3088\u3046\u3002\u8a70\u3081\u8fbc\u307f\u3059\u304e\u306b\u6ce8\u610f\u3002"}</p>
            </div>
            <div className="h-1.5 w-32 bg-[#c00008] dark:bg-red-500 rounded-full"></div>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Zap, color: "text-yellow-500", border: "border-yellow-400", title: "\u30d4\u30ab\u30c1\u30e5\u30a6", subtitle: "CLAUDE.md", desc: "\u5e38\u306b\u30dc\u30fc\u30eb\u306e\u5916\u306b\u3044\u308b\u76f8\u68d2\u3002\u30bb\u30c3\u30b7\u30e7\u30f3\u958b\u59cb\u6642\u306b\u5fc5\u305a\u8aad\u307f\u8fbc\u307e\u308c\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u57fa\u672c\u8a2d\u5b9a\u3002", fill: true },
              { icon: CircleDot, color: "text-red-500", border: "border-red-500", title: "\u30e2\u30f3\u30b9\u30bf\u30fc\u30dc\u30fc\u30eb", subtitle: "Skills (/command)", desc: "\u300c\u3044\u3051\u3063\uff01\u300d\u3067\u53ec\u559a\u3002.claude/commands/ \u306emd\u304c\u547c\u3093\u3060\u6642\u3060\u3051\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u8f09\u308b\u3002" },
              { icon: BookOpen, color: "text-blue-500", border: "border-blue-500", title: "\u30dd\u30b1\u30e2\u30f3\u56f3\u9451", subtitle: "Rules (.claude/rules/)", desc: "\u72b6\u6cc1\u306b\u5fdc\u3058\u3066\u81ea\u52d5\u3067\u958b\u304f\u53c2\u8003\u66f8\u3002\u95a2\u9023\u304c\u3042\u308a\u305d\u3046\u306a\u6642\u306b\u52dd\u624b\u306b\u53c2\u7167\u3002" },
              { icon: Archive, color: "text-orange-500", border: "border-orange-400", title: "\u6301\u3061\u7269", subtitle: "Hooks", desc: "\u304d\u3042\u3044\u306e\u30cf\u30c1\u30de\u30ad\u306e\u3088\u3046\u306b\u88c5\u5099\u3059\u308b\u3060\u3051\u3002\u6761\u4ef6\u3092\u6e80\u305f\u3059\u3068\u81ea\u52d5\u767a\u52d5\u3002" },
              { icon: Puzzle, color: "text-purple-500", border: "border-purple-500", title: "\u6280\u30de\u30b7\u30f3", subtitle: "Plugins", desc: "\u5916\u304b\u3089\u6301\u3063\u3066\u304d\u3066\u88c5\u7740\u3059\u308b\u8ffd\u52a0\u80fd\u529b\u30d1\u30c3\u30b1\u30fc\u30b8\u3002\u8907\u6570\u306eSkill\u3068\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u30bb\u30c3\u30c8\u3002" },
              { icon: Users, color: "text-emerald-500", border: "border-emerald-500", title: "\u30bf\u30b1\u30b7\u30fb\u30ab\u30b9\u30df", subtitle: "Sub-agents", desc: "\u65c5\u306e\u4ef2\u9593\u3002\u72ec\u81ea\u306eHP\u3067\u4e26\u5217\u4f5c\u696d\u3057\u3001\u8981\u7d04\u3060\u3051\u5831\u544a\u3057\u3066\u304f\u308c\u308b\u3002" },
              { icon: Cable, color: "text-stone-700 dark:text-stone-300", border: "border-stone-500", title: "\u901a\u4fe1\u30b1\u30fc\u30d6\u30eb", subtitle: "MCP", desc: "Slack\u3001GitHub\u3001DB\u3001\u5916\u90e8API\u306a\u3069\u5916\u306e\u4e16\u754c\u3068\u7e4b\u304c\u308b\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3002" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className={`bg-white dark:bg-stone-900 p-6 rounded-xl border-l-4 ${item.border} group hover:bg-stone-50 dark:hover:bg-stone-800 transition-all hover:-translate-y-1 shadow-sm border border-stone-100 dark:border-stone-800`}>
                <div className={`mb-4 ${item.color}`}><item.icon className={`w-10 h-10 ${item.fill ? 'fill-current' : ''}`} /></div>
                <h4 className="font-headline text-lg mb-0.5 font-bold">{item.title}</h4>
                <p className="text-xs font-label text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2">{item.subtitle}</p>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Pikachu Move Set */}
          <motion.div variants={fadeInUp} className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-6 md:p-8 mb-16 border border-yellow-200 dark:border-yellow-900/50">
            <h3 className="font-headline text-2xl font-bold mb-4 flex items-center gap-2"><Zap className="text-yellow-500 w-8 h-8 fill-current" /> {"\u30d4\u30ab\u30c1\u30e5\u30a6\u306e\u6280\u30b9\u30ed\u30c3\u30c84\u3064"}</h3>
            <p className="mb-6 text-stone-700 dark:text-stone-300">{"\u30dd\u30b1\u30e2\u30f3\u304c\u6280\u30924\u3064\u3057\u304b\u6301\u3066\u306a\u3044\u3088\u3046\u306b\u3001CLAUDE.md\u3082\u5fc5\u8981\u6700\u5c0f\u9650\u306b\u3002"}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left bg-white dark:bg-stone-900 rounded-lg overflow-hidden shadow-sm">
                <thead><tr className="bg-yellow-500 dark:bg-yellow-600 text-white font-label uppercase text-xs tracking-widest">
                  <th className="p-4">{"\u30b9\u30ed\u30c3\u30c8"}</th><th className="p-4">{"\u308f\u3056\u540d"}</th><th className="p-4">CLAUDE.md {"\u306b\u66f8\u304f\u5185\u5bb9"}</th>
                </tr></thead>
                <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                  {[
                    { slot: "01", name: "10\u307e\u3093\u30dc\u30eb\u30c8", desc: "\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u6b63\u4f53\u3002\u300c\u3053\u308c\u306f\u4f55\u3067\u3001\u4f55\u3092\u76ee\u6307\u3057\u3066\u3044\u308b\u304b\u300d\u30923\u884c\u3067\u3002" },
                    { slot: "02", name: "\u30a2\u30a4\u30a2\u30f3\u30c6\u30fc\u30eb", desc: "\u7d76\u5bfe\u30eb\u30fc\u30eb\u3002\u7834\u3063\u305f\u3089\u5373\u6b7b\u30ec\u30d9\u30eb\u306e\u7981\u6b62\u4e8b\u9805\u3060\u3051\u3002" },
                    { slot: "03", name: "\u3067\u3093\u3053\u3046\u305b\u3063\u304b", desc: "\u57fa\u672c\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3002\u5206\u5c90\u8868\u3060\u3051\u66f8\u304d\u3001\u8a73\u7d30\u306fSkill\u306b\u4efb\u305b\u308b\u3002" },
                    { slot: "04", name: "\u30a8\u30ec\u30ad\u30cd\u30c3\u30c8", desc: "\u4ef2\u9593\u306e\u547c\u3073\u65b9\u3002Skill\u3084MCP\u306e\u4e00\u89a7\u3078\u306e\u30dd\u30a4\u30f3\u30bf\u3002" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                      <td className="p-4 font-bold text-yellow-600 dark:text-yellow-500">{row.slot}</td>
                      <td className="p-4 font-bold italic text-stone-800 dark:text-stone-200 whitespace-nowrap">{row.name}</td>
                      <td className="p-4 text-sm text-stone-600 dark:text-stone-400">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Before/After */}
          <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <h4 className="font-headline font-bold text-red-600 dark:text-red-400 flex items-center gap-2"><Frown className="w-6 h-6" /> {"\u79d8\u4f1d\u30de\u30b7\u30f3\u5974\u96b7\u30d4\u30ab\u30c1\u30e5\u30a6"}</h4>
              <p className="text-sm text-stone-600 dark:text-stone-400">{"\u306a\u307f\u306e\u308a\u30fb\u305d\u3089\u3092\u3068\u3076\u30fb\u304b\u3044\u308a\u304d\u30fb\u30d5\u30e9\u30c3\u30b7\u30e5\u3092\u5168\u90e8\u899a\u3048\u3055\u305b\u3066\u6226\u95d8\u3067\u4f7f\u3048\u306a\u304f\u306a\u308b\u30a2\u30ec\u3002"}</p>
              <div className="bg-stone-900 rounded-xl p-4 overflow-x-auto text-sm text-stone-300 font-mono h-72 relative shadow-inner border border-stone-800">
                <div className="absolute top-3 right-3 text-[10px] bg-red-500 text-white px-2 py-1 rounded font-bold">800{"\u884c"}</div>
                <pre className="whitespace-pre-wrap"><code>{badExample}</code></pre>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2"><Smile className="w-6 h-6" /> {"\u7406\u60f3\u306e\u30d4\u30ab\u30c1\u30e5\u30a6"}</h4>
              <p className="text-sm text-stone-600 dark:text-stone-400">{"\u8eab\u8efd\u306b\u3002\u6280\uff14\u3064\u300250\u884c\u4ee5\u5185\u3002\u6b8b\u308a\u306f\u4ef2\u9593\u304c\u6301\u3064\u3002"}</p>
              <div className="bg-stone-900 rounded-xl p-4 overflow-x-auto text-sm text-stone-300 font-mono h-72 relative shadow-inner border-2 border-emerald-500/50">
                <div className="absolute top-3 right-3 text-[10px] bg-emerald-500 text-white px-2 py-1 rounded font-bold">50{"\u884c"}</div>
                <pre className="whitespace-pre-wrap"><code>{goodExample}</code></pre>
              </div>
            </div>
          </motion.div>

          {/* Cut-out example */}
          <motion.div variants={fadeInUp} className="bg-stone-50 dark:bg-stone-950 p-6 md:p-8 rounded-2xl border border-stone-200 dark:border-stone-800">
            <h3 className="font-headline text-xl font-bold mb-4 flex items-center gap-2"><Sparkles className="w-6 h-6 text-[#c00008]" /> {"\u5207\u308a\u51fa\u3057\u306e\u5b9f\u4f8b\uff1a80\u884c\u304c1\u884c\u306b\u306a\u308b"}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-label uppercase tracking-widest text-red-500 font-bold mb-2">Before: CLAUDE.md{"\u5185\uff0880\u884c\uff09"}</p>
                <div className="bg-stone-900 rounded-lg p-4 text-sm text-stone-400 font-mono">
                  <code>## {"\u30c7\u30d7\u30ed\u30a4\u624b\u9806"}<br/>1. {"\u30c6\u30b9\u30c8\u3092\u5168\u90e8\u901a\u3059"}<br/>2. staging{"\u74b0\u5883\u3067\u78ba\u8a8d"}<br/>3. PR{"\u3092\u4f5c\u6210\u3057\u3066"}...<br/>{"(\u4ee5\u4e0b70\u884c)"}</code>
                </div>
              </div>
              <div>
                <p className="text-xs font-label uppercase tracking-widest text-emerald-500 font-bold mb-2">After: {"\u5206\u96e2\u5f8c"}</p>
                <div className="bg-stone-900 rounded-lg p-4 text-sm font-mono space-y-2">
                  <div className="text-emerald-400"><code>CLAUDE.md {"\u2192"} {"\u300c\u30c7\u30d7\u30ed\u30a4: /deploy\u300d"}</code></div>
                  <div className="text-stone-500"><code>.claude/commands/deploy.md {"\u2192"} 80{"\u884c"}</code></div>
                </div>
                <p className="text-sm text-stone-500 mt-3">{"\u30d4\u30ab\u30c1\u30e5\u30a6\u304c80\u884c\u8efd\u304f\u306a\u3063\u305f\u3002\u6a5f\u80fd\u306f\u4f55\u3082\u5931\u3063\u3066\u306a\u3044\u3002"}</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* ===== 第2章: 旅の仲間 ===== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="py-20 bg-white dark:bg-stone-900 rounded-3xl px-6 md:px-12 shadow-sm border border-stone-100 dark:border-stone-800 my-20" id="ch2">
          <div className="max-w-4xl mx-auto">
            <motion.span variants={fadeInUp} className="font-label text-emerald-600 dark:text-emerald-500 font-bold tracking-widest uppercase mb-4 block text-center">{"\u7b2c2\u7ae0"}</motion.span>
            <motion.h2 variants={fadeInUp} className="font-headline text-3xl md:text-4xl font-extrabold text-center mb-12">{"\u65c5\u306e\u4ef2\u9593\u3068\u5192\u967a\u306e\u4ed5\u7d44\u307f"}</motion.h2>

            <motion.div variants={fadeInUp} className="bg-stone-50 dark:bg-stone-950 p-6 md:p-8 rounded-2xl shadow-inner mb-16 space-y-6 italic text-base md:text-lg leading-relaxed border-l-8 border-emerald-500">
              <div className="flex gap-4"><span className="font-bold text-emerald-600 dark:text-emerald-500 shrink-0">{"\u30b5\u30c8\u30b7"}:</span><p className="text-stone-700 dark:text-stone-300">{"\u300c\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30d5\u30a1\u30a4\u30eb\u5168\u90e8\u8aad\u3093\u3067\u69cb\u9020\u3092\u628a\u63e1\u3057\u3066\uff01\u300d"}</p></div>
              <div className="flex gap-4"><span className="font-bold text-stone-500 dark:text-stone-400 shrink-0">{"\u30bf\u30b1\u30b7"}:</span><p className="text-stone-700 dark:text-stone-300">{"\u300c\u30b5\u30c8\u30b7\u3001\u843d\u3061\u7740\u3051\u3002\u541b\u304c\u4e00\u4eba\u3067\u5168\u30d5\u30a1\u30a4\u30eb\u8aad\u3080\u3068\u3001\u3059\u3050\u306bHP\uff08\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\uff09\u304c\u30d1\u30f3\u30d1\u30f3\u306b\u306a\u3063\u3066\u4f55\u3082\u899a\u3048\u3089\u308c\u306a\u304f\u306a\u308b\u305e\u3002\u300d"}</p></div>
              <div className="flex gap-4"><span className="font-bold text-blue-500 dark:text-blue-400 shrink-0">{"\u30ab\u30b9\u30df"}:</span><p className="text-stone-700 dark:text-stone-300">{"\u300c\u305d\u3046\u3088\uff01\u5075\u5bdf\u306f\u79c1\u305f\u3061\u30b5\u30d6\u30a8\u30fc\u30b8\u30a7\u30f3\u30c8\u304c\u5f15\u304d\u53d7\u3051\u308b\u308f\u3002\u30b5\u30c8\u30b7\u306f\u5168\u4f53\u306e\u6226\u7565\u306b\u96c6\u4e2d\u3057\u3066\uff01\u8981\u7d04\u3060\u3051\u5831\u544a\u3059\u308b\u304b\u3089\uff01\u300d"}</p></div>
            </motion.div>

            <motion.h3 variants={fadeInUp} className="font-headline text-2xl font-bold mb-8 text-center">{"\u306a\u305c\u30b5\u30c8\u30b7\u304c\u5168\u90e8\u3084\u3089\u306a\u3044\u306e\u304b\uff1f"}</motion.h3>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6 mb-12">
              <motion.div variants={fadeInUp} className="space-y-4">
                <p className="font-bold text-stone-800 dark:text-stone-200">{"\u76f4\u5217\u51e6\u7406 (\u30b5\u30c8\u30b7\u306e\u307f) \u2014 HP\u6fc0\u6e1b"}</p>
                <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-900/50">
                  <div className="flex justify-between mb-2"><span className="text-xs uppercase font-bold text-stone-600 dark:text-stone-400">Satoshi HP</span><span className="text-red-600 dark:text-red-400 font-bold italic">Critical!</span></div>
                  <div className="h-4 w-full bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden mb-4"><div className="h-full bg-red-500 w-[15%]"></div></div>
                  <p className="text-sm text-stone-600 dark:text-stone-400">100{"\u30d5\u30a1\u30a4\u30eb\u8aad\u307f\u8fbc\u307f \u2192 \u5168\u90e8\u30e1\u30a4\u30f3\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u8f09\u308b \u2192 HP\u6eb6\u3051\u308b"}</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="space-y-4">
                <p className="font-bold text-stone-800 dark:text-stone-200">{"\u4e26\u5217\u51e6\u7406 (\u4ef2\u9593\u3042\u308a) \u2014 HP\u6e29\u5b58"}</p>
                <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-900/50">
                  <div className="flex justify-between mb-2"><span className="text-xs uppercase font-bold text-stone-600 dark:text-stone-400">Satoshi HP</span><span className="text-emerald-600 dark:text-emerald-400 font-bold italic">Healthy</span></div>
                  <div className="h-4 w-full bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden mb-4"><div className="h-full bg-emerald-500 w-[90%]"></div></div>
                  <p className="text-sm text-stone-600 dark:text-stone-400">{"\u30bf\u30b1\u30b7\u304c100\u4ef6\u8abf\u3079\u3066\u8981\u7d043\u884c\u3060\u3051\u5831\u544a \u2192 \u30e1\u30a4\u30f3HP\u307b\u307c\u7121\u50b7"}</p>
                </div>
              </motion.div>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-center text-stone-500 dark:text-stone-400 mb-12 italic">{"\u30bf\u30b1\u30b7\u306f\u4efb\u52d9\u5b8c\u4e86\u5f8c\u306b\u65c5\u304b\u3089\u96e2\u8131\uff08Sub-agent\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306f\u7834\u68c4\uff09\u3002\u30bf\u30b1\u30b7\u306eHP\u6d88\u8cbb\u306f\u30b5\u30c8\u30b7\u306b\u5f71\u97ff\u3057\u306a\u3044\u3002"}</motion.p>

            <motion.div variants={fadeInUp} className="bg-stone-900 dark:bg-black text-white rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xl">
              <div className="absolute -bottom-10 -right-10 opacity-10"><Cable className="w-48 h-48" /></div>
              <h3 className="font-headline text-2xl font-bold mb-4 flex items-center gap-2"><Cable className="w-8 h-8 text-blue-400" /> {"\u901a\u4fe1\u30b1\u30fc\u30d6\u30eb (MCP)"}</h3>
              <p className="mb-4 text-stone-300">{"\u5916\u306e\u4e16\u754c\u3068\u7e4b\u304c\u308b\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3002\u81ea\u5206\u306eROM\u3060\u3051\u3067\u306f\u624b\u306b\u5165\u3089\u306a\u3044\u30c7\u30fc\u30bf\u304c\u624b\u306b\u5165\u308b\u3002"}</p>
              <p className="mb-8 text-stone-400 text-sm italic">{"\u91cd\u8981\uff1a\u30b1\u30fc\u30d6\u30eb\u306e\u4e2d\u8eab\uff08\u30c8\u30fc\u30af\u30f3\u3084\u30d1\u30b9\u30ef\u30fc\u30c9\uff09\u306f\u898b\u3048\u306a\u304f\u3066\u3044\u3044\u3002MCP\u30b5\u30fc\u30d0\u30fc\u304c\u5168\u90e8\u3084\u3063\u3066\u304f\u308c\u308b\u3002"}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                {[
                  { icon: MessageSquare, label: "Slack" },
                  { icon: Code, label: "GitHub" },
                  { icon: Database, label: "PostgreSQL" },
                  { icon: Globe, label: "\u5916\u90e8 API" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-white/5 hover:bg-white/10 transition-colors rounded-xl border border-white/10 backdrop-blur-sm">
                    <item.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                    <p className="text-xs font-bold uppercase tracking-wider">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ===== 第3章: 冒険の仕組み (NEW) ===== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="py-20" id="ch3">
          <motion.span variants={fadeInUp} className="font-label text-blue-600 dark:text-blue-500 font-bold tracking-widest uppercase mb-4 block text-center">{"\u7b2c3\u7ae0"}</motion.span>
          <motion.h2 variants={fadeInUp} className="font-headline text-3xl md:text-4xl font-extrabold text-center mb-4 tracking-tight">{"\u5192\u967a\u306e\u4ed5\u7d44\u307f"}</motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-stone-500 dark:text-stone-400 mb-16 text-lg">HP{"\u30d0\u30fc\u306e\u7bc0\u7d04\u8853\u3068\u3001\u30dd\u30b1\u30e2\u30f3\u30dc\u30c3\u30af\u30b9\u306e\u6b63\u4f53\u3002"}</motion.p>

          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto mb-16">
            <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3"><Heart className="w-8 h-8 text-red-500" /> {"\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30a6\u30a3\u30f3\u30c9\u30a6 = HP\u30d0\u30fc"}</h3>
            <div className="space-y-8">
              <div className="bg-white dark:bg-stone-900 p-6 rounded-xl shadow-sm border border-stone-100 dark:border-stone-800">
                <p className="font-bold text-stone-800 dark:text-stone-200 mb-4">{"\u30b9\u30ea\u30e0\u306a\u30d4\u30ab\u30c1\u30e5\u30a6\uff0850\u884c\uff09\u306e\u5834\u5408"}</p>
                <div className="space-y-3">
                  {[
                    { label: "\u26a1 \u30d4\u30ab\u30c1\u30e5\u30a6 (CLAUDE.md)", w: "w-[10%]", color: "bg-yellow-500", val: "10%" },
                    { label: "\ud83d\udcd6 \u56f3\u9451 (Rules)", w: "w-[5%]", color: "bg-blue-500", val: "5%" },
                    { label: "\ud83d\udcac \u4f1a\u8a71\u5c65\u6b74", w: "w-[30%]", color: "bg-stone-500", val: "30%" },
                    { label: "\ud83d\udee0\ufe0f \u30c4\u30fc\u30eb\u7d50\u679c", w: "w-[15%]", color: "bg-stone-400", val: "15%" },
                    { label: "\ud83d\udce6 \u7a7a\u304d\u5bb9\u91cf", w: "w-[40%]", color: "bg-emerald-500", val: "40%" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1"><span className="text-stone-600 dark:text-stone-400">{item.label}</span><span className="font-bold">{item.val}</span></div>
                      <div className="h-3 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden"><div className={`h-full ${item.color} ${item.w} rounded-full`}></div></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-stone-900 p-6 rounded-xl shadow-sm border-2 border-red-300 dark:border-red-900">
                <p className="font-bold text-red-600 dark:text-red-400 mb-4">{"\u592a\u3063\u305f\u30d4\u30ab\u30c1\u30e5\u30a6\uff08800\u884c\uff09\u306e\u5834\u5408"}</p>
                <div className="space-y-3">
                  {[
                    { label: "\u26a1 \u592a\u3063\u305f\u30d4\u30ab\u30c1\u30e5\u30a6 (800\u884c)", w: "w-[30%]", color: "bg-red-500", val: "30%" },
                    { label: "\ud83d\udcd6 \u56f3\u9451 (Rules)", w: "w-[5%]", color: "bg-blue-500", val: "5%" },
                    { label: "\ud83d\udcac \u4f1a\u8a71\u5c65\u6b74", w: "w-[30%]", color: "bg-stone-500", val: "30%" },
                    { label: "\ud83d\udee0\ufe0f \u30c4\u30fc\u30eb\u7d50\u679c", w: "w-[15%]", color: "bg-stone-400", val: "15%" },
                    { label: "\ud83d\udce6 \u7a7a\u304d\u5bb9\u91cf", w: "w-[20%]", color: "bg-red-300", val: "20% \u26a0\ufe0f" },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1"><span className="text-stone-600 dark:text-stone-400">{item.label}</span><span className="font-bold">{item.val}</span></div>
                      <div className="h-3 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden"><div className={`h-full ${item.color} ${item.w} rounded-full`}></div></div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-red-500 mt-4 font-bold">{"\u7a7a\u304d\u5bb9\u91cf\u304c\u534a\u6e1b\u3002\u9577\u3044\u4f1a\u8a71\u3067\u78ba\u5b9f\u306b\u30b9\u30bf\u30df\u30ca\u5207\u308c\u3002"}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto bg-blue-50 dark:bg-blue-900/20 p-6 md:p-8 rounded-2xl border border-blue-200 dark:border-blue-900/50">
            <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3"><Box className="w-8 h-8 text-blue-500" /> {"\u30dd\u30b1\u30e2\u30f3\u30dc\u30c3\u30af\u30b9 = \u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u5727\u7e2e"}</h3>
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed mb-6">{"\u624b\u6301\u3061\u306f6\u5339\u307e\u3067\u30027\u5339\u76ee\u3092\u6355\u307e\u3048\u305f\u30891\u5339\u304c\u30dc\u30c3\u30af\u30b9\u306b\u9001\u3089\u308c\u308b\u3002\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u3082\u540c\u3058\u3002\u9650\u754c\u306b\u8fd1\u3065\u304f\u3068\u53e4\u3044\u4f1a\u8a71\u304c\u5727\u7e2e\u3055\u308c\u3066\u30b5\u30de\u30ea\u30fc\u3060\u3051\u6b8b\u308a\u307e\u3059\u3002"}</p>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex items-center gap-3 text-stone-400"><Box className="w-4 h-4 shrink-0" /> <span>[30{"\u5206\u524d\u306e\u4f1a\u8a71"}] {"\u2192"} {"\ud83d\udce6 \u30dc\u30c3\u30af\u30b9\u3078\uff08\u30b5\u30de\u30ea\u30fc\u5316\uff09"}</span></div>
              <div className="flex items-center gap-3 text-stone-400"><Box className="w-4 h-4 shrink-0" /> <span>[15{"\u5206\u524d\u306e\u4f1a\u8a71"}] {"\u2192"} {"\ud83d\udce6 \u30dc\u30c3\u30af\u30b9\u3078\uff08\u30b5\u30de\u30ea\u30fc\u5316\uff09"}</span></div>
              <div className="flex items-center gap-3 text-stone-700 dark:text-stone-200 font-bold"><CheckCircle className="w-4 h-4 shrink-0 text-emerald-500" /> <span>[{"\u6700\u8fd1\u306e\u4f1a\u8a71"}] {"\u2192"} {"\u624b\u6301\u3061\u306b\u6b8b\u308b"}</span></div>
              <div className="flex items-center gap-3 text-yellow-600 dark:text-yellow-400 font-bold"><Zap className="w-4 h-4 shrink-0 fill-current" /> <span>[CLAUDE.md] {"\u2192"} {"\u26a1 \u7d76\u5bfe\u306b\u30dc\u30c3\u30af\u30b9\u306b\u9001\u3089\u308c\u306a\u3044"}</span></div>
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-6 italic">{"\u30d4\u30ab\u30c1\u30e5\u30a6\u304c\u30b9\u30ea\u30e0\u306a\u3089\u624b\u6301\u3061\u679a\u306b\u4f59\u88d5 \u2192 \u9577\u3044\u4f1a\u8a71\u3067\u3082\u8a18\u61b6\u304c\u4fdd\u305f\u308c\u308b\u3002\u592a\u3044\u3068\u4ed6\u306e\u8a18\u61b6\u304c\u3069\u3093\u3069\u3093\u30dc\u30c3\u30af\u30b9\u9001\u308a\u306b\u3002"}</p>
          </motion.div>
        </motion.section>

        {/* ===== 第4章: 状態異常 ===== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="py-20" id="status">
          <motion.span variants={fadeInUp} className="font-label text-purple-600 dark:text-purple-500 font-bold tracking-widest uppercase mb-4 block text-center">{"\u7b2c4\u7ae0"}</motion.span>
          <motion.h2 variants={fadeInUp} className="font-headline text-3xl md:text-4xl font-bold text-center mb-4">{"\u3088\u304f\u3042\u308b\u5931\u6557\u3068\u51e6\u65b9\u7b8b"}</motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-stone-500 dark:text-stone-400 mb-16 text-lg">{"\u5192\u967a\u4e2d\u306b\u304b\u304b\u308a\u3084\u3059\u3044\u72b6\u614b\u7570\u5e38\u3068\u3001\u305d\u306e\u6cbb\u3057\u65b9\u3002"}</motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Skull, color: "purple", title: "\u79d8\u4f1d\u5974\u96b7", status: "\u3069\u304f", desc: "CLAUDE.md\u304c800\u884c\u8d85\u3048\u3002\u6bce\u30bb\u30c3\u30b7\u30e7\u30f3\u5927\u91cf\u306eHP\u3092\u6d88\u8cbb\u3057\u7d9a\u3051\u3001\u5f8c\u534a\u3067\u7015\u6b7b\u306b\u3002", cure: "\u3069\u304f\u3051\u3057", cureDesc: "CLAUDE.md\u306f100\u884c\u4ee5\u5185\u306b\u3002\u8a73\u7d30\u306fSkills\u30fbRules\u30fbPlugins\u306b\u5206\u6563\u3002" },
              { icon: Zap, color: "yellow", title: "\u5168\u54e1\u30d4\u30ab\u30c1\u30e5\u30a6", status: "\u307e\u3072", desc: "Skill\u3092\u4f5c\u3089\u305a\u5168\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3092CLAUDE.md\u306b\u76f4\u66f8\u304d\u3002\u7279\u5316\u51e6\u7406\u304c\u3067\u304d\u306a\u3044\u3002", cure: "\u307e\u3072\u306a\u304a\u3057", cureDesc: "\u7e70\u308a\u8fd4\u3059\u624b\u9806\u306f /command \u5316\u30021\u30b3\u30de\u30f3\u30c9 = 1\u30d5\u30a1\u30a4\u30eb\u3002" },
              { icon: Moon, color: "blue", title: "\u56f3\u9451\u306a\u3057", status: "\u306d\u3080\u308a", desc: "Rules\u30d5\u30a9\u30eb\u30c0\u304c\u7a7a\u3002\u30eb\u30fc\u30eb\u7cfb\u304c\u5168\u90e8CLAUDE.md\u306b\u5165\u3063\u3066\u3044\u3066\u5e38\u306bHP\u6d88\u8cbb\u3002", cure: "\u30dd\u30b1\u30e2\u30f3\u306e\u3075\u3048", cureDesc: "\u300c\u6642\u3005\u5fc5\u8981\u3060\u304c\u6b63\u78ba\u3055\u304c\u547d\u300d\u306a\u60c5\u5831\u306fRules\u306b\u79fb\u3059\u3002" },
              { icon: Flame, color: "red", title: "\u6301\u3061\u7269\u306a\u3057", status: "\u3084\u3051\u3069", desc: "Hooks\u3092\u8a2d\u5b9a\u305b\u305a\u7981\u6b62\u30b3\u30de\u30f3\u30c9\u304c\u7d20\u901a\u3057\u3002CLAUDE.md\u306e\u300c\u7981\u6b62\u300d\u306f\u304a\u9858\u3044\u3067\u3057\u304b\u306a\u3044\u3002", cure: "\u3084\u3051\u3069\u306a\u304a\u3057", cureDesc: "Hook\u3067\u7269\u7406\u7684\u306b\u6b62\u3081\u308b\u3002\u304a\u9858\u3044\u3068\u88c5\u5099\u306f\u9055\u3046\u3002" },
              { icon: HelpCircle, color: "stone", title: "\u30bd\u30ed\u5192\u967a", status: "\u3053\u3093\u3089\u3093", desc: "\u5927\u91cf\u306e\u8abf\u67fb\u3092\u30e1\u30a4\u30f3\u3067\u51e6\u7406\u3002\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u304c\u751f\u30c7\u30fc\u30bf\u3067\u57cb\u307e\u308aHP\u6eb6\u3051\u308b\u3002", cure: "\u30ad\u30fc\u306e\u307f", cureDesc: "\u5075\u5bdf\u306f\u30bf\u30b1\u30b7\uff08Sub-agent\uff09\u306b\u3002\u8981\u7d04\u3060\u3051\u53d7\u3051\u53d6\u308b\u3002" }
            ].map((item, i) => {
              const colorMap: Record<string, string> = {
                purple: "bg-purple-50 dark:bg-purple-900/20 border-purple-500 text-purple-600 dark:text-purple-400",
                yellow: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500 text-yellow-600 dark:text-yellow-400",
                blue: "bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-600 dark:text-blue-400",
                red: "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-600 dark:text-red-400",
                stone: "bg-stone-50 dark:bg-stone-800/50 border-stone-500 text-stone-600 dark:text-stone-400"
              };
              const c = colorMap[item.color].split(' ');
              return (
                <motion.div key={i} variants={fadeInUp} className={`p-6 rounded-xl border-t-4 flex flex-col h-full shadow-sm ${c[0]} ${c[1]} ${c[2]}`}>
                  <div className={`mb-4 flex items-center gap-2 ${c[3]} ${c[4]}`}><item.icon className="w-6 h-6" /><span className="font-label font-bold text-xs uppercase">{item.status}</span></div>
                  <h4 className="font-headline font-bold mb-2 text-stone-900 dark:text-stone-100">{item.title}</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mb-4 flex-grow leading-relaxed">{"\u75c7\u72b6"}: {item.desc}</p>
                  <div className="mt-auto pt-4 border-t border-current/20">
                    <p className={`text-[10px] font-bold uppercase mb-1 ${c[3]} ${c[4]}`}>{"\u51e6\u65b9\u7b8b"}: {item.cure}</p>
                    <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{item.cureDesc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ===== 第5章: 判断フロー (EXPANDED) ===== */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="py-20 flex flex-col items-center" id="flow">
          <motion.span variants={fadeInUp} className="font-label text-yellow-600 dark:text-yellow-500 font-bold tracking-widest uppercase mb-4 block text-center">{"\u7b2c5\u7ae0"}</motion.span>
          <motion.h2 variants={fadeInUp} className="font-headline text-3xl md:text-4xl font-bold mb-4 text-center">{"\u5224\u65ad\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8"}</motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-stone-500 dark:text-stone-400 mb-12 text-lg">CLAUDE.md{"\u306b\u66f8\u3053\u3046\u3068\u3057\u305f\u6642\u3001\u3053\u306e\u9806\u756a\u3067\u8003\u3048\u308b\u3002"}</motion.p>

          <motion.div variants={staggerContainer} className="w-full max-w-2xl space-y-4">
            <motion.div variants={fadeInUp} className="p-5 bg-stone-100 dark:bg-stone-800 rounded-xl text-center font-bold shadow-sm border border-stone-200 dark:border-stone-700">
              {"\u300c\u3053\u308cCLAUDE.md\u306b\u66f8\u304f\u3079\u304d\uff1f\u300d"}
            </motion.div>

            {[
              { q: "\u6bce\u30bb\u30c3\u30b7\u30e7\u30f3\u3001\u6bce\u56de\u3001\u7d76\u5bfe\u306b\u5fc5\u8981\uff1f", yes: "\u26a1 \u30d4\u30ab\u30c1\u30e5\u30a6\u306b\u899a\u3048\u3055\u305b\u308d", target: "CLAUDE.md", color: "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20", textColor: "text-yellow-600 dark:text-yellow-400" },
              { q: "/\u30b3\u30de\u30f3\u30c9\u540d \u3067\u547c\u3073\u51fa\u3059\u7279\u5b9a\u306e\u624b\u9806\uff1f", yes: "\ud83d\udd34 \u30dc\u30fc\u30eb\u306b\u5165\u308c\u308d", target: "Skills (.claude/commands/)", color: "border-red-500 bg-red-50 dark:bg-red-900/20", textColor: "text-red-600 dark:text-red-400" },
              { q: "\u72b6\u6cc1\u306b\u5fdc\u3058\u3066\u81ea\u52d5\u53c2\u7167\u3055\u308c\u308c\u3070\u3044\u3044\uff1f", yes: "\ud83d\udcd6 \u56f3\u9451\u306b\u8f09\u305b\u308d", target: "Rules (.claude/rules/)", color: "border-blue-500 bg-blue-50 dark:bg-blue-900/20", textColor: "text-blue-600 dark:text-blue-400" },
              { q: "\u7279\u5b9a\u30a4\u30d9\u30f3\u30c8\u3067\u81ea\u52d5\u767a\u52d5\u3059\u308c\u3070\u3044\u3044\uff1f", yes: "\ud83c\udf92 \u6301\u3061\u7269\u306b\u3057\u308d", target: "Hooks", color: "border-orange-500 bg-orange-50 dark:bg-orange-900/20", textColor: "text-orange-600 dark:text-orange-400" },
              { q: "\u5c02\u9580\u9818\u57df\u306e\u77e5\u8b58\u30d1\u30c3\u30b1\u30fc\u30b8\uff1f", yes: "\ud83d\udcbf \u6280\u30de\u30b7\u30f3\u306b\u3057\u308d", target: "Plugins", color: "border-purple-500 bg-purple-50 dark:bg-purple-900/20", textColor: "text-purple-600 dark:text-purple-400" },
            ].map((item, i) => (
              <React.Fragment key={i}>
                <motion.div variants={fadeInUp} className="flex justify-center"><ChevronDown className="w-8 h-8 text-stone-300 dark:text-stone-600" /></motion.div>
                <motion.div variants={fadeInUp} className={`p-5 rounded-xl border-l-4 ${item.color} flex flex-col md:flex-row md:items-center md:justify-between gap-3`}>
                  <div>
                    <p className="text-sm font-bold text-stone-800 dark:text-stone-200 mb-1">{item.q}</p>
                    <p className="text-xs text-stone-500">YES {"\u306e\u5834\u5408"} {"\u2192"}</p>
                  </div>
                  <div className="text-right md:text-left shrink-0">
                    <p className={`font-bold ${item.textColor}`}>{item.yes}</p>
                    <p className="text-xs text-stone-500">{item.target}</p>
                  </div>
                </motion.div>
              </React.Fragment>
            ))}

            <motion.div variants={fadeInUp} className="flex justify-center"><ChevronDown className="w-8 h-8 text-stone-300 dark:text-stone-600" /></motion.div>
            <motion.div variants={fadeInUp} className="p-5 bg-stone-200 dark:bg-stone-800 rounded-xl text-center border-2 border-dashed border-stone-400 dark:border-stone-600">
              <p className="flex items-center justify-center gap-2 font-bold text-stone-600 dark:text-stone-400"><Trash2 className="w-5 h-5" /> {"\u305d\u3082\u305d\u3082\u66f8\u304b\u306a\u304f\u3066\u3088\u304f\u306a\u3044\uff1f"}</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ===== Closing ===== */}
        <motion.section initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="py-20 mt-20 text-center bg-[#c00008] dark:bg-red-700 text-white rounded-[2rem] md:rounded-[3rem] relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent"></div>
          <div className="relative z-10 px-6 md:px-12">
            <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter leading-tight drop-shadow-md">{"\u3055\u3042\u3001\u5192\u967a\u306b\u51fa\u3088\u3046\u3002"}</h2>
            <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
              <p>{"\u30dd\u30b1\u30e2\u30f3\u30de\u30b9\u30bf\u30fc\u306f\u3001\u6700\u5f37\u306e1\u5339\u3092\u80b2\u3066\u305f\u4eba\u9593\u3058\u3083\u306a\u3044\u3002"}<br/><strong className="text-white">{"\u624b\u6301\u3061\u306e\u30d1\u30fc\u30c6\u30a3\u3092\u3001\u5834\u9762\u306b\u5fdc\u3058\u3066\u4f7f\u3044\u5206\u3051\u3089\u308c\u308b\u4eba\u9593\u3060\u3002"}</strong></p>
              <p>{"\u30d4\u30ab\u30c1\u30e5\u30a6\u3092\u4fe1\u3058\u308d\u3002\u3067\u3082\u3001\u5168\u90e8\u80cc\u8ca0\u308f\u305b\u308b\u306a\u3002"}<br/>{"\u4ef2\u9593\u3092\u547c\u3079\u3002\u3067\u3082\u3001\u30b3\u30e9\u30c3\u30bf\u306b\u30bf\u30b1\u30b7\u306f\u8981\u3089\u306a\u3044\u3002"}<br/>{"\u56f3\u9451\u3092\u4f7f\u3048\u3002\u3067\u3082\u3001\u5168\u30da\u30fc\u30b8\u6697\u8a18\u3059\u308b\u306a\u3002"}</p>
            </div>
            <a href="#prologue" className="inline-flex items-center gap-4 bg-white text-[#c00008] dark:text-red-700 px-8 md:px-12 py-4 md:py-5 rounded-full font-headline font-black text-xl md:text-2xl hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-2xl">
              {"\u3082\u3046\u4e00\u5ea6\u6700\u521d\u304b\u3089"} <Zap className="w-6 h-6 md:w-8 md:h-8 fill-current" />
            </a>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 dark:bg-stone-900 mt-20 border-t border-stone-200 dark:border-stone-800 transition-colors duration-300">
        <div className="w-full py-16 px-6 md:px-8 flex flex-col items-center gap-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-xl md:text-2xl font-black text-stone-900 dark:text-stone-100 font-headline italic tracking-tight">
            <BookOpen className="w-8 h-8 text-[#c00008] dark:text-red-500" />
            Claude Code {"\u00d7"} {"\u30dd\u30b1\u30e2\u30f3"} Guide
          </div>
          <div className="h-px w-24 bg-stone-300 dark:bg-stone-700"></div>
          <div className="text-stone-500 dark:text-stone-500 font-label text-xs tracking-wider text-center max-w-lg leading-relaxed">
            {"\u3053\u306e\u30ac\u30a4\u30c9\u306f Claude Code \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u7fa4\uff08CLAUDE.md, Skills, Rules, Hooks, Plugins, Sub-agents, MCP\uff09\u3092"}<br className="hidden md:inline"/>{"\u30dd\u30b1\u30e2\u30f3\u306e\u6bd4\u55a9\u3067\u89e3\u8aac\u3057\u305f\u3082\u306e\u3067\u3059\u3002"}
          </div>
        </div>
      </footer>
    </div>
  );
}
