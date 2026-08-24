import { createFileRoute } from '@tanstack/react-router'

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
            Field Guide № 1
          </a>
          <nav className="hidden sm:flex gap-7 mono text-[12px] tracking-wide uppercase" style={{ color: 'var(--ink-dim)' }}>
            <a href="#start" className="underline-grow">Start here</a>
            <a href="#wallets" className="underline-grow">Wallets</a>
            <a href="#explorers" className="underline-grow">Explorers</a>
            <a href="#opensea" className="underline-grow">OpenSea</a>
          </nav>
        </div>
      </header>

      {/* hero */}
      <section id="top" className="relative max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-28 md:pt-28 md:pb-36">
        <div
          className="float-slow absolute -right-4 top-6 hidden md:block w-40 h-52 rounded-[3px] border stamp-edge"
          style={{ borderColor: 'var(--line)', background: 'linear-gradient(160deg, rgba(159,216,87,0.10), rgba(228,192,92,0.05))', transform: 'rotate(9deg)' }}
          aria-hidden="true"
        />
        <div
          className="float-slower absolute right-24 top-40 hidden lg:block w-28 h-36 rounded-[3px] border stamp-edge"
          style={{ borderColor: 'var(--line)', background: 'linear-gradient(160deg, rgba(201,106,74,0.12), rgba(159,216,87,0.05))', transform: 'rotate(-6deg)' }}
          aria-hidden="true"
        />

        <div className="rise">
          <SectionTag>A collector's primer &middot; Counterparty network</SectionTag>
        </div>
        <h1
          className="rise mt-5 font-normal max-w-3xl"
          style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)', lineHeight: 1.02, animationDelay: '0.08s', color: 'var(--ink)' }}
        >
          Somewhere on the Bitcoin blockchain, there is a{' '}
          <em style={{ color: 'var(--frog)', fontStyle: 'italic' }}>frog holding a balloon</em>, and someone owns it.
        </h1>
        <p
          className="rise mt-7 max-w-xl text-lg md:text-xl leading-relaxed"
          style={{ color: 'var(--ink-dim)', animationDelay: '0.16s' }}
        >
          Rare Pepes are the original meme trading cards — hand-submitted, community-voted, and permanently
          recorded on Counterparty, a token layer that has ridden on top of Bitcoin since 2014. This page is
          the short version of what you need before you touch any of it: a wallet, an explorer, and one honest
          warning that most of the fun is in the hunting.
        </p>
        <div className="rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.24s' }}>
          <a
            href="#start"
            className="mono text-[13px] tracking-wide uppercase px-6 py-3.5 rounded-[2px] font-bold transition-transform hover:-translate-y-0.5"
            style={{ background: 'var(--frog)', color: 'var(--void-deep)' }}
          >
            Read the field notes
          </a>
          <a
            href="#wallets"
            className="mono text-[13px] tracking-wide uppercase px-6 py-3.5 rounded-[2px] font-bold border transition-colors hover:border-[var(--frog)]"
            style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}
          >
            Get a wallet
          </a>
        </div>
      </section>

      {/* why it's fun / what counterparty is */}
      <section id="start" className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-[0.9fr_1.1fr] gap-14 border-t" style={{ borderColor: 'var(--line)' }}>
        <div>
          <SectionTag>Why collect at all</SectionTag>
          <h2 className="mt-4 text-3xl md:text-4xl leading-tight" style={{ color: 'var(--ink)' }}>
            It's less like buying an asset, more like finishing a shoebox of stickers nobody's made in a decade.
          </h2>
        </div>
        <div className="space-y-6 text-[1.05rem] leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
          <p>
            In 2016, a small group of artists started drawing Pepe the Frog into absurd, layered, deeply
            specific scenes and submitting them for approval by a rotating panel of self-appointed "directors."
            Approved cards were issued as fixed-supply tokens — some with a run of three, some with a run of a
            thousand — and locked to the Bitcoin ledger through Counterparty, so no one, including the artist,
            could quietly print more later. That scarcity, plus the sheer weirdness of the art, is what turned
            it into a genuine collecting scene rather than a joke that faded by the following spring.
          </p>
          <p>
            Counterparty itself is the plumbing underneath: it lets people create, send, and trade custom
            tokens using Bitcoin transactions, without needing a separate blockchain. Rare Pepes were its first
            breakout use case, arriving years before "NFT" was a word anyone used casually. Understanding that
            distinction matters — the art is the Rare Pepe, Counterparty is the network it lives on, and XCP is
            the network's own currency, spent on small fees for issuing or trading assets.
          </p>
          <p>
            None of this requires deep technical knowledge to enjoy. It requires a wallet that speaks
            Counterparty, a way to see what exists, and enough patience to watch a few trades happen before
            making one yourself.
          </p>
        </div>
      </section>

      {/* learn more links */}
      <section className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 border-t" style={{ borderColor: 'var(--line)' }}>
        <SectionTag>Where to actually learn this</SectionTag>
        <h2 className="mt-4 text-3xl md:text-4xl mb-12 max-w-2xl" style={{ color: 'var(--ink)' }}>
          Three sites cover the whole picture between them.
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
                {link.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold flex items-center" style={{ color: 'var(--ink)' }}>
                {link.name}
                <ExternalArrow />
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
                {link.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* wallets */}
      <section id="wallets" className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 border-t" style={{ borderColor: 'var(--line)' }}>
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14 mb-14">
          <div>
            <SectionTag>Step one</SectionTag>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight" style={{ color: 'var(--ink)' }}>
              Pick a wallet that understands Counterparty assets
            </h2>
          </div>
          <p className="text-[1.05rem] leading-relaxed self-end" style={{ color: 'var(--ink-dim)' }}>
            A regular Bitcoin wallet will hold the coins that pay for transactions, but it won't display or
            move a Rare Pepe correctly. You need something built for the asset layer. Any of the four below
            will get you there — the difference is mostly whether you want a dedicated desktop app or a
            browser extension you already have open.
          </p>
        </div>

        <div className="space-y-4">
          {wallets.map((w, i) => {
            const content = (
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
                    {w.note}
                  </p>
                </div>
              </>
            )
            const className =
              'card-tilt group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 rounded-[3px] border px-7 py-6 rise'
            const style = { borderColor: 'var(--line)', background: 'rgba(244,236,216,0.02)', animationDelay: `${0.05 * i}s` }

            return w.url ? (
              <a key={w.name} href={w.url} target="_blank" rel="noreferrer noopener" className={className} style={style}>
                {content}
              </a>
            ) : (
              <div key={w.name} className={className} style={style}>
                {content}
              </div>
            )
          })}
        </div>
      </section>

      {/* explorers */}
      <section id="explorers" className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 border-t" style={{ borderColor: 'var(--line)' }}>
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14 mb-14">
          <div>
            <SectionTag>Step two</SectionTag>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight" style={{ color: 'var(--ink)' }}>
              Browse before you buy
            </h2>
          </div>
          <p className="text-[1.05rem] leading-relaxed self-end" style={{ color: 'var(--ink-dim)' }}>
            Every Counterparty asset — Rare Pepe or otherwise — is public. Explorers let you look up a card's
            total supply, see who's holding it, and check a wallet address before you send anything to it.
            Get comfortable reading these before your first trade.
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
                {e.note}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* opensea bridge */}
      <section id="opensea" className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 border-t" style={{ borderColor: 'var(--line)' }}>
        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-14 mb-14">
          <div>
            <SectionTag>Also worth knowing</SectionTag>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight" style={{ color: 'var(--ink)' }}>
              The same cards, wrapped for Ethereum
            </h2>
          </div>
          <p className="text-[1.05rem] leading-relaxed self-end" style={{ color: 'var(--ink-dim)' }}>
            A curated set of Rare Pepe cards also trades on OpenSea. It isn't a second edition or new
            artwork — each listing is the original Counterparty-issued token, wrapped in an Ethereum wrapper so
            it can move through an ETH marketplace. Same Pepe, different network.
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
            curated collection
          </span>
          <h3 className="mt-4 text-xl font-semibold flex items-center" style={{ color: 'var(--ink)' }}>
            Rare Pepe Curated on OpenSea
            <ExternalArrow />
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed" style={{ color: 'var(--ink-dim)' }}>
            Browse wrapped Rare Pepe cards trading on Ethereum — useful if you already hold ETH or just want
            to see how the market prices them outside Counterparty.
          </p>
        </a>
      </section>

      {/* footer */}
      <footer className="relative border-t" style={{ borderColor: 'var(--line)' }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 flex flex-col sm:flex-row justify-between gap-6">
          <p className="mono text-[12px] tracking-wide max-w-md" style={{ color: 'var(--ink-dim)' }}>
            Not affiliated with any wallet, explorer, or exchange listed here. Verify every address twice —
            transactions on Bitcoin and Counterparty cannot be reversed.
          </p>
          <p className="mono text-[12px] tracking-wide" style={{ color: 'var(--swamp-bright)' }}>
            rare pepe field guide &middot; unofficial &middot; no. 001
          </p>
        </div>
      </footer>
    </div>
  )
}
