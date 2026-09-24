import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Globe2 } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const learnLinks = [
  {
    name: 'Counterparty.io',
    url: 'https://counterparty.io',
    tag: 'protocol',
    desc: 'The project site for the protocol itself — how the token layer sits on top of Bitcoin, what XCP is for, and where its documentation lives.',
  },
  {
    name: 'Robot Love Coffee',
    url: 'https://robotlovecoffee.io',
    tag: 'video walkthroughs',
    desc: 'Screen-recorded, step-by-step videos on the actual mechanics of trading: placing orders, reading the order book, moving assets between wallets.',
  },
  {
    name: 'wiki.pepe.wtf',
    url: 'https://wiki.pepe.wtf/',
    tag: 'history & lore',
    desc: 'The community-maintained record of how the Rare Pepe project started in 2016, its series structure, and the directors who curated submissions.',
  },
]

const wallets = [
  {
    name: 'Freewallet.io',
    url: 'https://freewallet.io',
    platform: 'Desktop',
    note: 'A desktop client built specifically for Counterparty assets — good default if you want a dedicated app rather than a browser tab.',
  },
  {
    name: 'Rare Pepe Wallet',
    url: 'https://rarepepewallet.wtf/',
    platform: 'Desktop',
    note: 'Built around the Rare Pepe card set directly, with artwork and series browsing baked into the wallet itself.',
  },
  {
    name: 'XCP Wallet',
    url: null,
    platform: 'Chrome extension',
    note: 'Lives in the browser toolbar next to whatever you already use — convenient for signing into trading sites without switching windows. Search "XCP Wallet" in the Chrome Web Store and confirm the publisher before installing.',
  },
  {
    name: 'Horizon Wallet',
    url: null,
    platform: 'Chrome extension',
    note: 'Another browser-toolbar option, built by the team behind the Horizon.Market explorer. Search "Horizon Wallet" in the Chrome Web Store and confirm the publisher before installing.',
  },
]

const explorers = [
  {
    name: 'Tokenscan.io',
    url: 'https://tokenscan.io',
    note: 'Look up any Counterparty asset, see its issuance history, and check a wallet address for its full holdings.',
  },
  {
    name: 'RTXCP',
    url: 'https://rtxcp.netlify.app/',
    note: 'A lighter-weight explorer for scanning recent Counterparty transactions and asset activity.',
  },
  {
    name: 'XCP.io',
    url: 'https://xcp.io',
    note: 'Broader Counterparty ecosystem hub — assets, market data, and general network stats in one place.',
  },
  {
    name: 'Horizon.Market',
    url: 'https://horizon.market',
    note: 'Built by the team behind Horizon Wallet — asset lookups and marketplace listings in one place.',
  },
]

type Language = 'en' | 'es' | 'yue'

const copy = {
  en: {
    languageName: 'English',
    languageLabel: 'Language',
    guide: 'Field Guide No. 1',
    nav: ['Start here', 'Wallets', 'Explorers', 'OpenSea'],
    heroTag: "A collector's primer · Counterparty network",
    heroTitle: 'Somewhere on the Bitcoin blockchain, there is a',
    heroEmphasis: 'frog holding a balloon',
    heroTitleEnd: ', and someone owns it.',
    heroBody: 'Rare Pepes are the original meme trading cards — hand-submitted, community-voted, and permanently recorded on Counterparty, a token layer that has ridden on top of Bitcoin since 2014. This page is the short version of what you need before you touch any of it: a wallet, an explorer, and one honest warning that most of the fun is in the hunting.',
    readNotes: 'Read the field notes',
    getWallet: 'Get a wallet',
    whyTag: 'Why collect at all',
    whyTitle: "It's less like buying an asset, more like finishing a shoebox of stickers nobody's made in a decade.",
    whyBody: [
      'In 2016, a small group of artists started drawing Pepe the Frog into absurd, layered, deeply specific scenes and submitting them for approval by a rotating panel of self-appointed "directors." Approved cards were issued as fixed-supply tokens — some with a run of three, some with a run of a thousand — and locked to the Bitcoin ledger through Counterparty, so no one, including the artist, could quietly print more later. That scarcity, plus the sheer weirdness of the art, is what turned it into a genuine collecting scene rather than a joke that faded by the following spring.',
      'Counterparty itself is the plumbing underneath: it lets people create, send, and trade custom tokens using Bitcoin transactions, without needing a separate blockchain. Rare Pepes were its first breakout use case, arriving years before "NFT" was a word anyone used casually. Understanding that distinction matters — the art is the Rare Pepe, Counterparty is the network it lives on, and XCP is the network\'s own currency, spent on small fees for issuing or trading assets.',
      'None of this requires deep technical knowledge to enjoy. It requires a wallet that speaks Counterparty, a way to see what exists, and enough patience to watch a few trades happen before making one yourself.',
    ],
    learnTag: 'Where to actually learn this',
    learnTitle: 'Three sites cover the whole picture between them.',
    learn: [
      ['The project site for the protocol itself — how the token layer sits on top of Bitcoin, what XCP is for, and where its documentation lives.', 'protocol'],
      ['Screen-recorded, step-by-step videos on the actual mechanics of trading: placing orders, reading the order book, moving assets between wallets.', 'video walkthroughs'],
      ['The community-maintained record of how the Rare Pepe project started in 2016, its series structure, and the directors who curated submissions.', 'history & lore'],
    ],
    stepOne: 'Step one',
    walletTitle: 'Pick a wallet that understands Counterparty assets',
    walletIntro: "A regular Bitcoin wallet will hold the coins that pay for transactions, but it won't display or move a Rare Pepe correctly. You need something built for the asset layer. Any of the four below will get you there — the difference is mostly whether you want a dedicated desktop app or a browser extension you already have open.",
    walletNotes: [
      'A desktop client built specifically for Counterparty assets — good default if you want a dedicated app rather than a browser tab.',
      'Built around the Rare Pepe card set directly, with artwork and series browsing baked into the wallet itself.',
      'Lives in the browser toolbar next to whatever you already use — convenient for signing into trading sites without switching windows. Search "XCP Wallet" in the Chrome Web Store and confirm the publisher before installing.',
      'Another browser-toolbar option, built by the team behind the Horizon.Market explorer. Search "Horizon Wallet" in the Chrome Web Store and confirm the publisher before installing.',
    ],
    stepTwo: 'Step two',
    explorerTitle: 'Browse before you buy',
    explorerIntro: "Every Counterparty asset — Rare Pepe or otherwise — is public. Explorers let you look up a card's total supply, see who's holding it, and check a wallet address before you send anything to it. Get comfortable reading these before your first trade.",
    explorerNotes: [
      'Look up any Counterparty asset, see its issuance history, and check a wallet address for its full holdings.',
      'A lighter-weight explorer for scanning recent Counterparty transactions and asset activity.',
      'Broader Counterparty ecosystem hub — assets, market data, and general network stats in one place.',
      'Built by the team behind Horizon Wallet — asset lookups and marketplace listings in one place.',
    ],
    alsoTag: 'Also worth knowing',
    openSeaTitle: 'The same cards, wrapped for Ethereum',
    openSeaIntro: "A curated set of Rare Pepe cards also trades on OpenSea. It isn't a second edition or new artwork — each listing is the original Counterparty-issued token, wrapped in an Ethereum wrapper so it can move through an ETH marketplace. Same Pepe, different network.",
    curated: 'curated collection',
    openSeaCard: 'Browse wrapped Rare Pepe cards trading on Ethereum — useful if you already hold ETH or just want to see how the market prices them outside Counterparty.',
    footerWarning: 'Not affiliated with any wallet, explorer, or exchange listed here. Verify every address twice — transactions on Bitcoin and Counterparty cannot be reversed.',
    footerMark: 'rare pepe field guide · unofficial · no. 001',
  },
  es: {
    languageName: 'Español', languageLabel: 'Idioma', guide: 'Guía de campo n.º 1', nav: ['Empezar', 'Billeteras', 'Exploradores', 'OpenSea'], heroTag: 'Introducción para coleccionistas · red Counterparty', heroTitle: 'En algún lugar de la cadena de bloques de Bitcoin hay una', heroEmphasis: 'rana con un globo', heroTitleEnd: ', y alguien la posee.', heroBody: 'Los Rare Pepes son las tarjetas coleccionables de memes originales: enviados por artistas, votados por la comunidad y registrados permanentemente en Counterparty, una capa de tokens que funciona sobre Bitcoin desde 2014. Esta página resume lo que necesitas antes de empezar: una billetera, un explorador y una advertencia honesta: gran parte de la diversión está en buscar.', readNotes: 'Leer las notas', getWallet: 'Conseguir una billetera', whyTag: 'Por qué coleccionar', whyTitle: 'Se parece menos a comprar un activo y más a terminar una caja de cromos que nadie fabrica desde hace una década.', whyBody: ['En 2016, un pequeño grupo de artistas empezó a dibujar a Pepe la Rana en escenas absurdas, llenas de capas y muy específicas, y a enviarlas para que un grupo rotativo de "directores" auto designados las aprobara. Las tarjetas aprobadas se emitían como tokens de suministro fijo — algunas con tres unidades, otras con mil — y quedaban registradas en Bitcoin mediante Counterparty, de modo que nadie, ni siquiera el artista, podía imprimir más después. Esa escasez, junto con lo extraño del arte, convirtió el proyecto en una escena de coleccionismo genuina.', 'Counterparty es la infraestructura: permite crear, enviar e intercambiar tokens personalizados usando transacciones de Bitcoin, sin otra cadena de bloques. Los Rare Pepes fueron su primer gran caso de uso, años antes de que "NFT" fuera una palabra cotidiana. El arte es el Rare Pepe, Counterparty es la red donde vive y XCP es la moneda de la red, usada para pequeñas comisiones.', 'No hace falta dominar la tecnología para disfrutarlo. Necesitas una billetera compatible con Counterparty, una forma de ver lo que existe y paciencia para observar algunos intercambios antes de hacer uno.'], learnTag: 'Dónde aprender de verdad', learnTitle: 'Entre estos tres sitios encontrarás la visión completa.', learn: [['El sitio del proyecto: la capa de tokens sobre Bitcoin, para qué sirve XCP y dónde está la documentación.', 'protocolo'], ['Vídeos paso a paso sobre la mecánica real del intercambio: órdenes, libro de órdenes y movimiento de activos.', 'vídeos'], ['El registro comunitario de los inicios del proyecto Rare Pepe en 2016, sus series y sus directores.', 'historia y leyendas']], stepOne: 'Paso uno', walletTitle: 'Elige una billetera compatible con activos de Counterparty', walletIntro: 'Una billetera Bitcoin normal guardará las monedas para pagar transacciones, pero no mostrará ni moverá un Rare Pepe correctamente. Necesitas algo creado para la capa de activos. Las cuatro opciones funcionan; la diferencia principal es entre una aplicación de escritorio y una extensión de navegador.', walletNotes: ['Cliente de escritorio creado específicamente para activos de Counterparty, ideal si prefieres una aplicación dedicada.', 'Creada directamente para la colección Rare Pepe, con arte y navegación por series integrados.', 'Vive en la barra del navegador. Busca "XCP Wallet" en Chrome Web Store y confirma el editor antes de instalarla.', 'Otra opción para la barra del navegador, del equipo de Horizon.Market. Busca "Horizon Wallet" y confirma el editor antes de instalarla.'], stepTwo: 'Paso dos', explorerTitle: 'Explora antes de comprar', explorerIntro: 'Todos los activos de Counterparty son públicos. Los exploradores muestran el suministro total, quién posee una tarjeta y si una dirección es correcta antes de enviarle algo. Aprende a leerlos antes de tu primer intercambio.', explorerNotes: ['Consulta cualquier activo de Counterparty, su historial de emisión y las posesiones de una dirección.', 'Un explorador ligero para revisar transacciones y actividad recientes.', 'Centro del ecosistema Counterparty: activos, datos de mercado y estadísticas de red.', 'Búsqueda de activos y anuncios del mercado del equipo de Horizon Wallet.'], alsoTag: 'También conviene saberlo', openSeaTitle: 'Las mismas tarjetas, envueltas para Ethereum', openSeaIntro: 'Una selección de Rare Pepes también se intercambia en OpenSea. No es una segunda edición: cada anuncio es el token original de Counterparty, envuelto para moverse por un mercado de ETH. El mismo Pepe, otra red.', curated: 'colección seleccionada', openSeaCard: 'Explora Rare Pepes envueltos que se intercambian en Ethereum, útil si ya tienes ETH o quieres comparar sus precios fuera de Counterparty.', footerWarning: 'No tenemos afiliación con ninguna billetera, explorador o exchange listado aquí. Verifica cada dirección dos veces: las transacciones de Bitcoin y Counterparty no se pueden revertir.', footerMark: 'guía de Rare Pepe · no oficial · n.º 001',
  },
  yue: {
    languageName: '廣東話', languageLabel: '語言', guide: '收藏指南 No. 1', nav: ['由呢度開始', '錢包', '瀏覽器', 'OpenSea'], heroTag: '收藏家入門 · Counterparty 網絡', heroTitle: 'Bitcoin 區塊鏈某個角落，有一隻', heroEmphasis: '拎住氣球嘅青蛙', heroTitleEnd: '，而佢屬於某一個人。', heroBody: 'Rare Pepes 係最早期嘅迷因收藏卡：由人手提交、社群投票，再永久記錄喺 Counterparty 上。Counterparty 係一層建基於 Bitcoin 之上嘅代幣網絡，自 2014 年運作至今。開始之前，你只需要一個錢包、一個瀏覽器，同埋一個老實提醒：最好玩嘅部分往往係尋寶。', readNotes: '閱讀收藏筆記', getWallet: '取得錢包', whyTag: '點解要收藏', whyTitle: '呢件事唔太似買資產，反而似完成一盒十年冇人再製作嘅貼紙。', whyBody: ['2016 年，一小班藝術家開始將 Pepe the Frog 畫入荒誕、層次豐富又極度特定嘅場景，再交畀一班自稱「導演」嘅人輪流審批。獲批嘅卡會以固定供應量代幣發行，有啲只有三張，有啲有一千張，並透過 Counterparty 鎖定喺 Bitcoin 帳本上。之後冇人可以靜靜地再印，連藝術家都唔得。呢種稀有性加上藝術本身嘅古怪，令佢由玩笑變成真正嘅收藏文化。', 'Counterparty 就係底層嘅管道：用 Bitcoin 交易就可以建立、發送同交易自訂代幣，唔需要另一條區塊鏈。Rare Pepes 係佢第一個大型應用，嗰陣 NFT 呢個字仲未流行。藝術係 Rare Pepe，Counterparty 係佢所屬嘅網絡，而 XCP 就係網絡貨幣，用嚟支付發行或交易資產嘅小額費用。', '你唔需要深厚技術知識先可以享受呢件事。你需要一個支援 Counterparty 嘅錢包、一個睇到現有資產嘅方法，同埋喺第一次交易前先耐心觀察幾次。'], learnTag: '去邊度真正學識', learnTitle: '呢三個網站加埋就涵蓋晒全貌。', learn: [['協議官方網站：代幣層點樣建基於 Bitcoin、XCP 有咩用途，同埋文件喺邊度。', '協議'], ['逐步示範真實交易操作嘅影片：落單、睇訂單簿，同錢包之間轉移資產。', '影片教學'], ['社群維護嘅歷史紀錄：Rare Pepe 由 2016 年開始嘅故事、系列結構同審批作品嘅導演。', '歷史與傳說']], stepOne: '第一步', walletTitle: '揀一個識得處理 Counterparty 資產嘅錢包', walletIntro: '普通 Bitcoin 錢包可以裝住支付交易嘅幣，但未必可以正確顯示或轉移 Rare Pepe。你需要一個為資產層而設嘅工具。下面四個都可以，主要分別係你想用獨立桌面程式，定係瀏覽器擴充功能。', walletNotes: ['專為 Counterparty 資產而設嘅桌面程式，想用獨立應用程式而唔係瀏覽器分頁嘅話，係一個好選擇。', '直接圍繞 Rare Pepe 卡集而建，錢包入面已經有作品同系列瀏覽功能。', '喺瀏覽器工具列入面運作，登入交易網站時唔使切換視窗。請喺 Chrome Web Store 搜尋「XCP Wallet」，安裝前確認發佈者。', '另一個瀏覽器工具列選擇，由 Horizon.Market 團隊建立。請搜尋「Horizon Wallet」並確認發佈者。'], stepTwo: '第二步', explorerTitle: '買之前先睇清楚', explorerIntro: '每一個 Counterparty 資產，無論係 Rare Pepe 定係其他資產，都係公開嘅。瀏覽器可以畀你查卡嘅總供應量、持有人，同埋喺發送之前核對錢包地址。第一次交易前，先習慣睇呢啲資料。', explorerNotes: ['查任何 Counterparty 資產、發行歷史，同錢包地址嘅完整持倉。', '輕量嘅瀏覽器，用嚟睇近期 Counterparty 交易同資產活動。', '較完整嘅 Counterparty 生態中心：資產、市場數據同網絡統計一站式睇晒。', '由 Horizon Wallet 團隊建立，提供資產搜尋同市場掛牌。'], alsoTag: '另外值得知道', openSeaTitle: '同一批卡，包裝成 Ethereum 版本', openSeaIntro: '一批精選 Rare Pepe 卡亦會喺 OpenSea 交易。佢唔係第二版或者新作品，而係原本由 Counterparty 發行嘅代幣，包裝成 Ethereum 代幣後就可以喺 ETH 市場流通。同一隻 Pepe，唔同網絡。', curated: '精選收藏', openSeaCard: '瀏覽喺 Ethereum 上交易嘅包裝版 Rare Pepe。如果你本身有 ETH，或者想比較佢哋喺 Counterparty 以外嘅市場價格，呢度會幾有用。', footerWarning: '本頁同列出嘅錢包、瀏覽器或交易所無關。每個地址都要核對兩次，Bitcoin 同 Counterparty 交易無法撤回。', footerMark: 'Rare Pepe 收藏指南 · 非官方 · No. 001',
  },
} as const

function ExternalArrow() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block ml-1.5 -translate-y-px"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="mono text-[11px] tracking-[0.28em] uppercase" style={{ color: 'var(--swamp-bright)' }}>
      {children}
    </span>
  )
}

function Home() {
  const [language, setLanguage] = useState<Language>('en')
  const content = copy[language]

  useEffect(() => {
    document.documentElement.lang = language === 'yue' ? 'zh-HK' : language
  }, [language])

  return (
    <div className="min-h-screen relative overflow-x-clip">
      <div className="grain" />

      {/* backdrop texture */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 15% -10%, rgba(123,168,82,0.16), transparent 60%), radial-gradient(ellipse 70% 50% at 100% 10%, rgba(228,192,92,0.10), transparent 55%), var(--void)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'linear-gradient(to bottom, black, transparent 85%)',
          }}
        />
      </div>

      {/* nav */}
      <header className="sticky top-0 z-40 backdrop-blur-sm" style={{ background: 'rgba(18,20,15,0.72)', borderBottom: '1px solid var(--line)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="mono text-sm tracking-[0.24em] uppercase font-bold" style={{ color: 'var(--frog)' }}>
            {content.guide}
          </a>
          <nav className="hidden sm:flex gap-7 mono text-[12px] tracking-wide uppercase" style={{ color: 'var(--ink-dim)' }}>
            <a href="#start" className="underline-grow">{content.nav[0]}</a>
            <a href="#wallets" className="underline-grow">{content.nav[1]}</a>
            <a href="#explorers" className="underline-grow">{content.nav[2]}</a>
            <a href="#opensea" className="underline-grow">{content.nav[3]}</a>
          </nav>
          <label className="mono flex items-center gap-2 text-[11px] tracking-wide uppercase" style={{ color: 'var(--ink-dim)' }}>
            <Globe2 size={16} aria-hidden="true" />
            <span className="sr-only">{content.languageLabel}</span>
            <select
              aria-label={content.languageLabel}
              value={language}
              onChange={(event) => setLanguage(event.target.value as Language)}
              className="bg-transparent outline-none cursor-pointer"
              style={{ color: 'var(--ink-dim)' }}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="yue">廣東話</option>
            </select>
          </label>
        </div>
      </header>

      {/* hero */}
      <section id="top" className="relative max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-28 md:pt-28 md:pb-36">
        <img
          src="/PEPEKEEPER.jpg"
          alt=""
          className="float-slow absolute -right-4 top-6 hidden md:block w-40 h-52 rounded-[3px] border object-cover stamp-edge"
          style={{ borderColor: 'var(--line)', transform: 'rotate(9deg)' }}
          aria-hidden="true"
        />
        <img
          src="/RAREPEPE.jpg"
          alt=""
          className="float-slower absolute right-24 top-40 hidden lg:block w-28 h-36 rounded-[3px] border object-cover stamp-edge"
          style={{ borderColor: 'var(--line)', transform: 'rotate(-6deg)' }}
          aria-hidden="true"
        />

        <div className="rise">
          <SectionTag>{content.heroTag}</SectionTag>
        </div>
        <h1
          className="rise mt-5 font-normal max-w-3xl"
          style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1.02, animationDelay: '0.08s', color: 'var(--ink)' }}
        >
          {content.heroTitle}{' '}
          <em style={{ color: 'var(--frog)', fontStyle: 'italic' }}>{content.heroEmphasis}</em>{content.heroTitleEnd}
        </h1>
        <p
          className="rise mt-7 max-w-xl text-lg md:text-xl leading-relaxed"
          style={{ color: 'var(--ink-dim)', animationDelay: '0.16s' }}
        >
          {content.heroBody}
        </p>
        <div className="rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.24s' }}>
          <a
            href="#start"
            className="mono text-[13px] tracking-wide uppercase px-6 py-3.5 rounded-[2px] font-bold transition-transform hover:-translate-y-0.5"
            style={{ background: 'var(--frog)', color: 'var(--void-deep)' }}
          >
            {content.readNotes}
          </a>
          <a
            href="#wallets"
            className="mono text-[13px] tracking-wide uppercase px-6 py-3.5 rounded-[2px] font-bold border transition-colors hover:border-[var(--frog)]"
            style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}
          >
            {content.getWallet}
          </a>
        </div>
      </section>

      {/* why it's fun / what counterparty is */}
      <section id="start" className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-[0.9fr_1.1fr] gap-14 border-t" style={{ borderColor: 'var(--line)' }}>
        <div>
          <SectionTag>{content.whyTag}</SectionTag>
          <h2 className="mt-4 text-3xl md:text-4xl leading-tight" style={{ color: 'var(--ink)' }}>
            {content.whyTitle}
          </h2>
        </div>
        <div className="space-y-6 text-[1.05rem] leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
          {content.whyBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      {/* learn more links */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 border-t" style={{ borderColor: 'var(--line)' }}>
        <SectionTag>{content.learnTag}</SectionTag>
        <h2 className="mt-4 text-3xl md:text-4xl mb-12 max-w-2xl" style={{ color: 'var(--ink)' }}>
          {content.learnTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {learnLinks.map((link, i) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer noopener"
              className="card-tilt group block rounded-[3px] border p-7 rise"
              style={{ borderColor: 'var(--line)', background: 'rgba(244,236,216,0.02)', animationDelay: `${0.06 * i}s` }}
            >
              <span className="mono text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--lily)' }}>
                {content.learn[i][1]}
              </span>
              <h3 className="mt-4 text-xl font-semibold flex items-center" style={{ color: 'var(--ink)' }}>
                {link.name}
                <ExternalArrow />
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
                {content.learn[i][0]}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* wallets */}
      <section id="wallets" className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 border-t" style={{ borderColor: 'var(--line)' }}>
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14 mb-14">
          <div>
            <SectionTag>{content.stepOne}</SectionTag>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight" style={{ color: 'var(--ink)' }}>
              {content.walletTitle}
            </h2>
          </div>
          <p className="text-[1.05rem] leading-relaxed self-end" style={{ color: 'var(--ink-dim)' }}>
            {content.walletIntro}
          </p>
        </div>

        <div className="space-y-4">
          {wallets.map((w, i) => {
            const cardBody = (
              <>
                <span
                  className="mono text-[11px] tracking-[0.2em] uppercase shrink-0 px-2.5 py-1 rounded-sm w-fit"
                  style={{ color: 'var(--void-deep)', background: 'var(--swamp-bright)' }}
                >
                  {w.platform}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold flex items-center" style={{ color: 'var(--ink)' }}>
                    {w.name}
                    {w.url && <ExternalArrow />}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
                    {content.walletNotes[i]}
                  </p>
                </div>
              </>
            )
            const className =
              'card-tilt group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 rounded-[3px] border px-7 py-6 rise'
            const style = { borderColor: 'var(--line)', background: 'rgba(244,236,216,0.02)', animationDelay: `${0.05 * i}s` }

            return w.url ? (
              <a key={w.name} href={w.url} target="_blank" rel="noreferrer noopener" className={className} style={style}>
                {cardBody}
              </a>
            ) : (
              <div key={w.name} className={className} style={style}>
                {cardBody}
              </div>
            )
          })}
        </div>
      </section>

      {/* explorers */}
      <section id="explorers" className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 border-t" style={{ borderColor: 'var(--line)' }}>
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14 mb-14">
          <div>
            <SectionTag>{content.stepTwo}</SectionTag>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight" style={{ color: 'var(--ink)' }}>
              {content.explorerTitle}
            </h2>
          </div>
          <p className="text-[1.05rem] leading-relaxed self-end" style={{ color: 'var(--ink-dim)' }}>
            {content.explorerIntro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {explorers.map((e, i) => (
            <a
              key={e.url}
              href={e.url}
              target="_blank"
              rel="noreferrer noopener"
              className="card-tilt group block rounded-[3px] border p-7 rise"
              style={{ borderColor: 'var(--line)', background: 'rgba(244,236,216,0.02)', animationDelay: `${0.06 * i}s` }}
            >
              <span className="mono text-[28px] leading-none" style={{ color: 'var(--stamp)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-xl font-semibold flex items-center" style={{ color: 'var(--ink)' }}>
                {e.name}
                <ExternalArrow />
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
                {content.explorerNotes[i]}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* opensea bridge */}
      <section id="opensea" className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 border-t" style={{ borderColor: 'var(--line)' }}>
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14 mb-14">
          <div>
            <SectionTag>{content.alsoTag}</SectionTag>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight" style={{ color: 'var(--ink)' }}>
              {content.openSeaTitle}
            </h2>
          </div>
          <p className="text-[1.05rem] leading-relaxed self-end" style={{ color: 'var(--ink-dim)' }}>
            {content.openSeaIntro}
          </p>
        </div>

        <a
          href="https://opensea.io/collection/rare-pepe-curated"
          target="_blank"
          rel="noreferrer noopener"
          className="card-tilt group block rounded-[3px] border p-7 rise max-w-xl"
          style={{ borderColor: 'var(--line)', background: 'rgba(244,236,216,0.02)' }}
        >
          <span className="mono text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--lily)' }}>
            {content.curated}
          </span>
          <h3 className="mt-4 text-xl font-semibold flex items-center" style={{ color: 'var(--ink)' }}>
            Rare Pepe Curated on OpenSea
            <ExternalArrow />
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
            {content.openSeaCard}
          </p>
        </a>
      </section>

      {/* footer */}
      <footer className="relative border-t" style={{ borderColor: 'var(--line)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 flex flex-col sm:flex-row justify-between gap-6">
          <p className="mono text-[12px] tracking-wide max-w-md" style={{ color: 'var(--ink-dim)' }}>
            {content.footerWarning}
          </p>
          <p className="mono text-[12px] tracking-wide" style={{ color: 'var(--swamp-bright)' }}>
            {content.footerMark}
          </p>
        </div>
      </footer>
    </div>
  )
}
