import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Terminal,
  Zap,
  User,
  CircleDot,
  BookOpen,
  Archive,
  Puzzle,
  Users,
  Cable,
  Frown,
  Smile,
  MessageSquare,
  Code,
  Database,
  Globe,
  BarChart,
  Skull,
  Moon,
  Flame,
  HelpCircle,
  ArrowDown,
  CornerDownRight,
  CornerDownLeft,
  Sun
} from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference on mount
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
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f8] dark:bg-stone-950 text-stone-900 dark:text-stone-100 transition-colors duration-300">
      {/* TopAppBar */}
      <nav className="sticky top-0 z-50 bg-[#fcf9f8]/80 dark:bg-stone-950/80 backdrop-blur-md border-b border-outline-variant/20 transition-colors duration-300">
        <div className="flex justify-between items-center w-full px-4 md:px-8 py-4 max-w-7xl mx-auto">
          <div className="text-xl md:text-2xl font-black text-[#c00008] dark:text-red-500 tracking-tighter font-headline flex items-center gap-2">
            <Terminal className="w-6 h-6 md:w-8 md:h-8" />
            Claude Code
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <a className="text-[#c00008] dark:text-red-500 font-extrabold border-b-2 border-[#c00008] pb-1 font-headline tracking-tight" href="#party">パーティメンバー</a>
            <a className="text-stone-600 dark:text-stone-400 font-medium font-headline tracking-tight hover:text-[#c00008] transition-colors" href="#ch1">スリムなピカチュウ</a>
            <a className="text-stone-600 dark:text-stone-400 font-medium font-headline tracking-tight hover:text-[#c00008] transition-colors" href="#ch2">旅の仲間</a>
            <a className="text-stone-600 dark:text-stone-400 font-medium font-headline tracking-tight hover:text-[#c00008] transition-colors" href="#status">状態異常</a>
            <a className="text-stone-600 dark:text-stone-400 font-medium font-headline tracking-tight hover:text-[#c00008] transition-colors" href="#flow">判断フロー</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-stone-600" />}
            </button>
            <button className="hidden md:block bg-[#c00008] dark:bg-red-600 text-white px-6 py-2 rounded-full font-headline font-bold hover:shadow-lg hover:bg-red-700 active:scale-95 transition-all">
              冒険を始める
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-6 overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 flex flex-col items-center text-center">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-40 -right-20 w-80 h-80 bg-yellow-500/10 dark:bg-yellow-500/20 rounded-full blur-3xl -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 px-4 py-1 rounded-full font-label text-sm uppercase tracking-widest mb-6 shadow-md"
          >
            <Zap className="w-4 h-4 fill-current text-yellow-400 dark:text-yellow-600" />
            Lv.100 マスターガイド
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-stone-900 dark:text-white mb-6 leading-[1.1] md:leading-[0.9] break-keep"
          >
            Claude Code を<br/>
            <span className="text-[#c00008] dark:text-red-500">ポケモンで完全理解する</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-lg md:text-2xl text-stone-600 dark:text-stone-300 max-w-3xl mb-12"
          >
            肥大化した <code className="bg-stone-200 dark:bg-stone-800 px-2 py-0.5 rounded text-sm md:text-base">CLAUDE.md</code> はもう卒業。
            AIエージェントをチャンピオンのパーティのように構築し、最高の開発効率を手に入れましょう。
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-stone-800 group"
          >
            <img 
              alt="Cinematic 3D render of stylized red and white pokeballs floating amidst vibrant yellow lightning bolts and glowing digital data streams" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuATe7TwWBo3ijDjoW8NN5xH2BapRx7ybAaDikJwNQE4uHBRNVm4vYXxGRlNURtNyJJAmYPmfKZ8-9DyhhqFv_1rkG_z6l5RD_U7zpGc5poNj9tMoBT-220M9Xo4xJFwuC7Xe0bzgLBR9lFPVdpKtDOBDI9WVSIdodV76Ma7Aw70-xiHnRXlA1vDmMc_3iMHaspXrDLDPyD0AG1tV5WBUYOm7KMA4IhOemDvCHXj7hI9cviM0ucHdzzvFZI3FEMe2ssLghV-vCgH9kvo"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-12">
              <div className="text-left">
                <span className="font-label text-white/90 uppercase text-xs tracking-widest bg-[#c00008] px-3 py-1 mb-3 inline-block rounded-sm">フィールドレポート</span>
                <h3 className="font-headline text-2xl md:text-4xl text-white font-bold italic tracking-tight drop-shadow-lg">Kanto Codex: The AI Trainer's Bible</h3>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 1: The Party Members */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-20" 
          id="party"
        >
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-2">第1章：パーティメンバーを知ろう</h2>
              <p className="text-stone-600 dark:text-stone-400 text-lg">君のエコシステムは6スロットのパーティだ。詰め込みすぎに注意しよう。</p>
            </div>
            <div className="h-1.5 w-32 bg-[#c00008] dark:bg-red-500 rounded-full"></div>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Cards */}
            {[
              { icon: User, color: "text-[#c00008]", border: "border-[#c00008]", title: "サトシ (Claude Code 本体)", desc: "中核。ターミナルを握り、ハイレベルな意思決定を行うトレーナーそのもの。" },
              { icon: Zap, color: "text-yellow-500", border: "border-yellow-400", title: "ピカチュウ (CLAUDE.md)", desc: "常にボールの外にいる相棒。君の主要なコンテキストの橋渡し役。", fill: true },
              { icon: CircleDot, color: "text-red-500", border: "border-red-500", title: "モンスターボール (Skills)", desc: "スキル。バトル開始時（プロジェクト読み込み時）のみ呼び出すプロジェクト固有の能力。" },
              { icon: BookOpen, color: "text-blue-500", border: "border-blue-500", title: "ポケモン図鑑 (Rules)", desc: "ルール。コーディング標準やリンターなどの自動参照ガイド。必要時に開く。" },
              { icon: Archive, color: "text-orange-500", border: "border-orange-400", title: "持ち物 (Hooks)", desc: "フック。gitやファイルの変更によってトリガーされる自動化スクリプト。" },
              { icon: Puzzle, color: "text-purple-500", border: "border-purple-500", title: "技マシン (Plugins)", desc: "プラグイン。Claudeに新しい「わざ」を教える外部ツールキット。再利用可能。" },
              { icon: Users, color: "text-emerald-500", border: "border-emerald-500", title: "タケシ・カスミ (Sub-agents)", desc: "サブエージェント。メインのHP（コンテキスト）を節約するための並列ヘルパー。" },
              { icon: Cable, color: "text-stone-700 dark:text-stone-300", border: "border-stone-500", title: "通信ケーブル (MCP)", desc: "MCP。プロジェクトを外部サーバーの広い世界（Slack, DB, API）へと接続する。" }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className={`bg-white dark:bg-stone-900 p-6 rounded-xl border-l-4 ${item.border} group hover:bg-stone-50 dark:hover:bg-stone-800 transition-all hover:-translate-y-1 shadow-sm border border-stone-100 dark:border-stone-800`}>
                <div className={`mb-4 ${item.color}`}><item.icon className={`w-10 h-10 ${item.fill ? 'fill-current' : ''}`} /></div>
                <h4 className="font-headline text-xl mb-2 font-bold">{item.title}</h4>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Pikachu's Move Set */}
          <motion.div variants={fadeInUp} className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-6 md:p-8 mb-16 border border-yellow-200 dark:border-yellow-900/50" id="ch1">
            <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-2 text-stone-900 dark:text-stone-100">
              <Zap className="text-yellow-500 w-8 h-8 fill-current" />
              ピカチュウ（CLAUDE.md）の「技スロット4つ」
            </h3>
            <p className="mb-6 text-stone-700 dark:text-stone-300">ポケモンが技を4つしか持てないように、CLAUDE.mdも要素を絞り込む必要があります。</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left bg-white dark:bg-stone-900 rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-yellow-500 dark:bg-yellow-600 text-white font-label uppercase text-xs tracking-widest">
                    <th className="p-4 whitespace-nowrap">スロット</th>
                    <th className="p-4 whitespace-nowrap">わざ名</th>
                    <th className="p-4">具体的な内容（CLAUDE.mdでの記述）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                  {[
                    { slot: "01", name: "10まんボルト", desc: "中心ミッション：「今このスプリントで何を作っているか？」の核心。" },
                    { slot: "02", name: "アイアンテール", desc: "技術スタック：Next.js, Tailwind, Prisma 等の必須フレームワーク。" },
                    { slot: "03", name: "でんこうせっか", desc: "命名規則：camelCase or snake_case? ファイル構造の基本ルール。" },
                    { slot: "04", name: "あまごい", desc: "禁じ手：直接CSSは書かない、特定のライブラリは避ける等の制約。" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors">
                      <td className="p-4 font-bold text-yellow-600 dark:text-yellow-500">{row.slot}</td>
                      <td className="p-4 font-bold italic text-stone-800 dark:text-stone-200">{row.name}</td>
                      <td className="p-4 text-sm text-stone-600 dark:text-stone-400">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Before/After Code Comparison */}
          <motion.div variants={fadeInUp} className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              <h4 className="font-headline font-bold text-red-600 dark:text-red-400 flex items-center gap-2">
                <Frown className="w-6 h-6" />
                ダメな例：「秘伝マシン奴隷」ピカチュウ
              </h4>
              <div className="bg-stone-900 rounded-xl p-4 overflow-x-auto text-sm text-stone-300 font-mono h-80 relative shadow-inner border border-stone-800">
                <div className="absolute top-3 right-3 text-[10px] bg-red-500 text-white px-2 py-1 rounded font-bold tracking-wider">800行の混沌</div>
                <pre><code>{`# CLAUDE.md (Bad Example)
- インデントは4スペース
- Reactのコンポーネントは ...
- APIのエラーハンドリングは ...
- ... (中略) ...
- 254. 変数名は英語で ...
- 255. コメントは日本語で ...
- [ここでプロジェクトの全仕様書をコピペ]
- [さらに全APIの定義をコピペ]
- [おまけにDBのスキーマも全部載せる]
...
# Claudeは毎ターンこの800行を読み込み、
# 重要な指示を見失い、トークン代を浪費する。`}</code></pre>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-headline font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                <Smile className="w-6 h-6" />
                理想的なピカチュウ
              </h4>
              <div className="bg-stone-900 rounded-xl p-4 overflow-x-auto text-sm text-stone-300 font-mono h-80 relative shadow-inner border-2 border-emerald-500/50">
                <div className="absolute top-3 right-3 text-[10px] bg-emerald-500 text-white px-2 py-1 rounded font-bold tracking-wider">50行の洗練</div>
                <pre><code>{`# CLAUDE.md (Good Example)
## Identity
- Expert Fullstack Engineer
- Concise, high-quality TypeScript/Next.js code

## Current Mission
- Refactoring the auth module to use Auth.js v5

## Core Rules
- Use Server Components by default
- Follow architecture in \`docs/ARCH.md\`
- See \`docs/RULES.md\` for linting details

## Key Commands
- Test: \`npm test\`
- Build: \`npm run build\``}</code></pre>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Section 2: Journey Companions */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-20 bg-white dark:bg-stone-900 rounded-3xl px-6 md:px-12 shadow-sm border border-stone-100 dark:border-stone-800 my-20" 
          id="ch2"
        >
          <div className="max-w-4xl mx-auto">
            <motion.span variants={fadeInUp} className="font-label text-emerald-600 dark:text-emerald-500 font-bold tracking-widest uppercase mb-4 block text-center">第2章</motion.span>
            <motion.h2 variants={fadeInUp} className="font-headline text-3xl md:text-4xl font-extrabold text-center mb-12">旅の仲間と冒険の仕組み</motion.h2>
            
            {/* Conversation Theater */}
            <motion.div variants={fadeInUp} className="bg-stone-50 dark:bg-stone-950 p-6 md:p-8 rounded-2xl shadow-inner mb-16 space-y-6 italic text-base md:text-lg leading-relaxed border-l-8 border-emerald-500">
              <div className="flex gap-4">
                <span className="font-bold text-emerald-600 dark:text-emerald-500 shrink-0">サトシ:</span>
                <p className="text-stone-700 dark:text-stone-300">「このコードのテストを全部書いてくれ！」</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-stone-500 dark:text-stone-400 shrink-0">タケシ:</span>
                <p className="text-stone-700 dark:text-stone-300">「サトシ、落ち着け。君が一人ですべてのファイルを読み込んでテストを書くと、すぐに疲れて（コンテキストがパンパンになって）何も覚えられなくなるぞ。」</p>
              </div>
              <div className="flex gap-4">
                <span className="font-bold text-blue-500 dark:text-blue-400 shrink-0">カスミ:</span>
                <p className="text-stone-700 dark:text-stone-300">「そうよ！テスト作成は私たちがサブエージェントとして引き受けるわ。サトシは全体の戦略（メインプロセス）に集中して！」</p>
              </div>
            </motion.div>

            {/* Context HP Management */}
            <motion.h3 variants={fadeInUp} className="font-headline text-2xl font-bold mb-8 text-center">なぜサトシ（メイン）が全部やらないのか？</motion.h3>
            <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-6 mb-12">
              <motion.div variants={fadeInUp} className="space-y-4">
                <p className="font-bold text-stone-800 dark:text-stone-200">1. 直列処理 (サトシのみ) - HP激減</p>
                <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-900/50">
                  <div className="flex justify-between mb-2"><span className="text-xs uppercase font-bold text-stone-600 dark:text-stone-400">Satoshi HP</span><span className="text-red-600 dark:text-red-400 font-bold italic">Critical!</span></div>
                  <div className="h-4 w-full bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden mb-4"><div className="h-full bg-red-500 w-[15%]"></div></div>
                  <p className="text-sm text-stone-600 dark:text-stone-400">ファイルを10個開き、テストを30個書き、ドキュメントを更新... サトシの頭はパンク寸前！</p>
                </div>
              </motion.div>
              <motion.div variants={fadeInUp} className="space-y-4">
                <p className="font-bold text-stone-800 dark:text-stone-200">2. 並列処理 (サブエージェント活用) - 効率最大</p>
                <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-900/50">
                  <div className="flex justify-between mb-2"><span className="text-xs uppercase font-bold text-stone-600 dark:text-stone-400">Satoshi HP</span><span className="text-emerald-600 dark:text-emerald-400 font-bold italic">Healthy</span></div>
                  <div className="h-4 w-full bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden mb-4"><div className="h-full bg-emerald-500 w-[90%]"></div></div>
                  <p className="text-sm text-stone-600 dark:text-stone-400">タケシがテストを書き、カスミがドキュメントをまとめ、サトシは結果を確認するだけ。</p>
                </div>
              </motion.div>
            </motion.div>

            {/* MCP Section */}
            <motion.div variants={fadeInUp} className="bg-stone-900 dark:bg-black text-white rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xl">
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <Cable className="w-48 h-48" />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-6 flex items-center gap-2">
                <Cable className="w-8 h-8 text-blue-400" />
                通信ケーブル (MCP) の拡張性
              </h3>
              <p className="mb-8 text-stone-300">サトシを「外の世界」と繋げます。プロジェクトの境界を超えた冒険が可能になります。</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                {[
                  { icon: MessageSquare, label: "Slack" },
                  { icon: Code, label: "GitHub" },
                  { icon: Database, label: "PostgreSQL" },
                  { icon: Globe, label: "Public API" }
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

        {/* Section 4: Trainer Tips */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-20" 
          id="status"
        >
          <motion.h2 variants={fadeInUp} className="font-headline text-3xl md:text-4xl font-bold text-center mb-16">第4章：よくある失敗と処方箋</motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Skull, color: "purple", title: "無限ループ", status: "どく", desc: "失敗するコマンドを延々と試し続けてしまい、コストだけを浪費する。", cure: "どくけし", cureDesc: "CLAUDE.md で「エラーが起きたら一度止まって人間に聞くこと」と明示的に禁止する。" },
              { icon: Zap, color: "yellow", title: "フリーズ", status: "まひ", desc: "安全確認のプロンプトを求めなくなり、内部プロセスが固まったような応答の遅さを見せる。", cure: "まひなおし", cureDesc: "--compact フラグを付けてターミナルを再起動し、溜まった履歴を一度パージする。" },
              { icon: Moon, color: "blue", title: "ルール無視", status: "ねむり", desc: "指定したコーディングスタイルを無視し、雑なボイラープレートを吐き出し始める。", cure: "ポケモンのふえ", cureDesc: "「CLAUDE.md の Core Rules を読み直し、現在の実装との矛盾を指摘せよ」と指示する。" },
              { icon: Flame, color: "red", title: "トークン熱暴走", status: "やけど", desc: "巨大な dist や node_modules を誤って読み込み、一度の応答で数ドルのコストを消費する。", cure: "やけどなおし", cureDesc: ".claudeignore を適切に設定し、ビルド成果物をClaudeの視界から完全に遮断する。" },
              { icon: HelpCircle, color: "stone", title: "迷子", status: "こんらん", desc: "文脈を失い、「次に何をすべきですか？」と何度も聞いてくる。誤った修正をし始める。", cure: "キーのみ", cureDesc: "現在の「進捗の要約」をさせ、現在のゴールを一文で再提示してあげる。" }
            ].map((item, i) => {
              const colorMap: Record<string, string> = {
                purple: "bg-purple-50 dark:bg-purple-900/20 border-purple-500 text-purple-600 dark:text-purple-400",
                yellow: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500 text-yellow-600 dark:text-yellow-400",
                blue: "bg-blue-50 dark:bg-blue-900/20 border-blue-500 text-blue-600 dark:text-blue-400",
                red: "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-600 dark:text-red-400",
                stone: "bg-stone-50 dark:bg-stone-800/50 border-stone-500 text-stone-600 dark:text-stone-400"
              };
              const colors = colorMap[item.color];
              
              return (
                <motion.div key={i} variants={fadeInUp} className={`p-6 rounded-xl border-t-4 flex flex-col h-full shadow-sm ${colors.split(' ')[0]} ${colors.split(' ')[1]} ${colors.split(' ')[2]}`}>
                  <div className={`mb-4 flex items-center gap-2 ${colors.split(' ')[3]} ${colors.split(' ')[4]}`}>
                    <item.icon className="w-6 h-6" />
                    <span className="font-label font-bold text-xs uppercase">{item.status}</span>
                  </div>
                  <h4 className="font-headline font-bold mb-2 text-stone-900 dark:text-stone-100">{item.title}</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mb-4 flex-grow leading-relaxed">症状: {item.desc}</p>
                  <div className={`mt-auto pt-4 border-t border-current/20`}>
                    <p className={`text-[10px] font-bold uppercase mb-1 ${colors.split(' ')[3]} ${colors.split(' ')[4]}`}>処方箋: {item.cure}</p>
                    <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">{item.cureDesc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Section 5: Decision Flow */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-20 flex flex-col items-center" 
          id="flow"
        >
          <motion.h2 variants={fadeInUp} className="font-headline text-3xl font-bold mb-12 text-center">第5章：判断フローチャート (CLAUDE.mdに書くべき？)</motion.h2>
          <motion.div variants={staggerContainer} className="w-full max-w-2xl space-y-6">
            <motion.div variants={fadeInUp} className="p-6 bg-stone-100 dark:bg-stone-800 rounded-xl text-center font-bold shadow-sm border border-stone-200 dark:border-stone-700">
              スタート: 新しい指示またはルールが発生した
            </motion.div>
            <motion.div variants={fadeInUp} className="flex justify-center"><ArrowDown className="w-10 h-10 text-stone-400 animate-bounce" /></motion.div>
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white dark:bg-stone-900 border-2 border-[#c00008] dark:border-red-500 rounded-2xl text-center shadow-sm relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c00008] dark:bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">Q1</div>
                <p className="text-xs font-label uppercase mb-2">プロジェクト全体に<br/>常に関わる？</p>
                <p className="font-bold text-[#c00008] dark:text-red-500">はい</p>
              </div>
              <div className="p-6 bg-stone-50 dark:bg-stone-800/50 rounded-2xl text-center opacity-70 border border-stone-200 dark:border-stone-700">
                <p className="text-xs font-label uppercase mb-2">今回1回限りの<br/>作業指示？</p>
                <p className="font-bold">はい</p>
                <p className="text-[10px] mt-2 italic">→ プロンプトで直接命令</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex justify-center"><ArrowDown className="w-10 h-10 text-stone-400" /></motion.div>
            <motion.div variants={fadeInUp} className="p-8 bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100 rounded-2xl text-center border-2 border-dashed border-blue-400 dark:border-blue-500 shadow-lg">
              <p className="font-headline text-xl font-bold mb-2">CLAUDE.md に追加を検討する</p>
              <p className="text-sm">※ただし簡潔に。1ルールにつき2行以内に。 </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex justify-between px-10">
              <CornerDownRight className="w-10 h-10 text-stone-400" />
              <CornerDownLeft className="w-10 h-10 text-stone-400" />
            </motion.div>
            <motion.div variants={fadeInUp} className="p-6 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-2xl text-center shadow-md border-2 border-stone-300 dark:border-stone-600">
              <p className="font-headline font-bold mb-2 italic">もし5行（または100文字）を超える詳細ルールなら</p>
              <p className="text-sm font-medium"><code>/docs/</code> 配下の専門MDファイル、または <code>.claude/rules/</code> に移動して、そこへの参照リンクを貼る。</p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Closing Message */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-20 mt-20 text-center bg-[#c00008] dark:bg-red-700 text-white rounded-[2rem] md:rounded-[3rem] relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent"></div>
          <div className="relative z-10 px-6 md:px-12">
            <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter uppercase leading-tight drop-shadow-md">
              フィールドは<br className="md:hidden"/>君のものだ！
            </h2>
            <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl text-white/90 mb-12 leading-relaxed">
              <p>
                これで君は、Claude Code という強力なポケモンを操るトップトレーナーへの第一歩を踏み出した。
                肥大化したドキュメントという名の「ひでん要員」を卒業し、洗練されたパーティを構築しよう。
              </p>
              <p className="font-bold text-white">
                散らかったコードベースを殿堂入りパーティに変える準備はいいか？<br/>今日から Claude Code を極めよう。
              </p>
            </div>
            <button className="bg-white text-[#c00008] dark:text-red-700 px-8 md:px-12 py-4 md:py-5 rounded-full font-headline font-black text-xl md:text-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-4 mx-auto shadow-xl hover:shadow-2xl">
              冒険に出る！
              <Zap className="w-6 h-6 md:w-8 md:h-8 fill-current" />
            </button>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 dark:bg-stone-900 mt-20 border-t border-stone-200 dark:border-stone-800 transition-colors duration-300">
        <div className="w-full py-16 px-6 md:px-8 flex flex-col items-center gap-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-xl md:text-2xl font-black text-stone-900 dark:text-stone-100 font-headline italic tracking-tight">
            <BookOpen className="w-8 h-8 text-[#c00008] dark:text-red-500" />
            THE EDITORIAL EXPLORER
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 gap-y-4">
            {['公式ドキュメント', 'クレジット', 'バッグ', 'トレーナーマニュアル'].map((link, i) => (
              <a key={i} className="text-stone-500 dark:text-stone-400 hover:text-[#c00008] dark:hover:text-red-500 transition-colors font-label text-xs md:text-sm uppercase tracking-widest font-bold" href="#">
                {link}
              </a>
            ))}
          </div>
          <div className="h-px w-24 bg-stone-300 dark:bg-stone-700"></div>
          <div className="text-stone-500 dark:text-stone-500 font-label text-xs tracking-wider text-center max-w-lg leading-relaxed">
            © 2024 The Editorial Explorer. <br className="md:hidden"/>
            このドキュメントはデジタル・アーティファクトとしてキュレートされています。
          </div>
        </div>
      </footer>
    </div>
  );
}
