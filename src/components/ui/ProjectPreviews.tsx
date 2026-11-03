import { Apple, BadgeCheck, CheckCheck, Coins, CupSoda, Gavel, Hand, ImageIcon, Keyboard, MapPin, Mic, PawPrint, Plus, Recycle, Search, Send, ShoppingBasket, Sandwich, Trophy, Upload } from 'lucide-react';
import type { ReactNode } from 'react';

/*
  Illustrated previews of what each project does, drawn with the site's own
  tokens so they adapt to light and dark themes. `tone` follows the colour of
  the chapter the preview sits in (set with .tone-primary). Decorative only: the card
  text carries the real information, so these are hidden from screen readers.
*/

const BrowserFrame = ({ url, children }: { url: string; children: ReactNode }) => (
  <div className="w-full max-w-[420px] overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_60px_-28px_rgba(0,0,0,0.5)]">
    <div className="flex items-center gap-2 border-b border-line px-3.5 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
      <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
      <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
      <span className="ml-2 flex-1 truncate rounded-md bg-ink/[0.05] px-2.5 py-1 font-mono text-[10.5px] text-muted">{url}</span>
    </div>
    {children}
  </div>
);

const TelegramPreview = () => (
  <div className="w-full max-w-[400px] overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_60px_-28px_rgba(0,0,0,0.5)]">
    <div className="flex items-center gap-3 border-b border-line px-4 py-3">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-tone text-onprimary">
        <Send size={16} />
      </span>
      <div className="leading-tight">
        <p className="text-sm font-semibold text-ink">Pigeon Feed</p>
        <p className="text-[11px] text-muted">bot</p>
      </div>
    </div>
    <div className="space-y-3 bg-canvas/60 p-4">
      <div className="w-[92%] rounded-2xl rounded-tl-md border border-line bg-surface p-3.5">
        <p className="text-[12px] font-semibold text-ink">Today’s job digest</p>
        <ul className="mt-2 space-y-1.5 text-[11.5px] text-soft">
          {[
            ['MERN Developer', 'Remote'],
            ['React Native Engineer', 'Hyderabad'],
            ['Full Stack Developer', 'Bengaluru'],
          ].map(([role, place]) => (
            <li key={role} className="flex items-center justify-between gap-3">
              <span className="truncate">{role}</span>
              <span className="shrink-0 rounded-full bg-tone/10 px-2 py-0.5 text-[10px] text-tone">{place}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[70%] rounded-2xl rounded-tl-md border border-line bg-surface p-3.5">
        <p className="text-[12px] font-semibold text-ink">Tech news</p>
        <p className="mt-1 text-[11.5px] text-soft">5 new stories picked for you</p>
        <p className="mt-2 flex items-center justify-end gap-1 text-[10px] text-muted">
          sent within 30 min <CheckCheck size={12} className="text-tone" />
        </p>
      </div>
    </div>
  </div>
);

const PhonePreview = () => (
  <div className="w-[220px] rounded-[2.2rem] border border-line bg-surface p-2.5 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.5)]">
    <div className="rounded-[1.7rem] border border-line bg-canvas px-4 pb-5 pt-3">
      <div className="mx-auto h-1.5 w-14 rounded-full bg-ink/15" />
      <p className="mt-5 text-[11px] text-muted">Lifeease</p>
      <p className="mt-0.5 text-[15px] font-semibold leading-snug text-ink">How would you like to communicate?</p>
      <div className="mt-4 space-y-2">
        {[
          { icon: Mic, label: 'Voice', active: true },
          { icon: Hand, label: 'Gesture', active: false },
          { icon: Keyboard, label: 'Text', active: false },
        ].map(({ icon: Icon, label, active }) => (
          <div
            key={label}
            className={`flex items-center gap-3 rounded-2xl border px-3 py-2.5 text-[12.5px] ${
              active ? 'border-tone/50 bg-tone/10 text-ink' : 'border-line bg-surface text-soft'
            }`}
          >
            <span className={`grid h-7 w-7 place-items-center rounded-xl ${active ? 'bg-tone text-onprimary' : 'bg-ink/[0.06]'}`}>
              <Icon size={14} />
            </span>
            {label}
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-6 items-end justify-center gap-[3px]">
        {[30, 60, 90, 50, 100, 70, 40, 80, 55, 30, 65, 45].map((h, i) => (
          <span key={i} className="w-[3px] rounded-full bg-tone/70" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  </div>
);

const AuctionPreview = () => (
  <BrowserFrame url="online-auction.app/lot/128">
    <div className="grid grid-cols-[1fr_1.1fr] gap-3 p-3.5">
      <div className="grid aspect-square place-items-center rounded-xl bg-tone/10 text-tone">
        <Gavel size={34} strokeWidth={1.6} />
      </div>
      <div className="flex flex-col">
        <p className="text-[11px] text-muted">Lot 128</p>
        <p className="text-[13px] font-semibold text-ink">Vintage film camera</p>
        <p className="mt-2.5 text-[10.5px] text-muted">Current bid</p>
        <p className="text-xl font-semibold tracking-tight text-ink">₹12,450</p>
        <span className="mt-auto rounded-lg bg-tone py-1.5 text-center text-[11px] font-medium text-onprimary">Place bid</span>
      </div>
    </div>
    <ul className="space-y-1.5 border-t border-line px-3.5 py-3 text-[11px]">
      {[
        ['Bidder 41', '₹12,450', 'now'],
        ['Bidder 17', '₹12,200', '12s'],
        ['Bidder 41', '₹11,900', '40s'],
      ].map(([who, amount, when], i) => (
        <li key={i} className="flex items-center gap-2 text-soft">
          <span className={`h-1.5 w-1.5 rounded-full ${i === 0 ? 'bg-tone' : 'bg-ink/20'}`} />
          <span className="flex-1">{who}</span>
          <span className="font-medium text-ink">{amount}</span>
          <span className="w-7 text-right text-muted">{when}</span>
        </li>
      ))}
    </ul>
  </BrowserFrame>
);

const ClassifierPreview = () => (
  <BrowserFrame url="waste-analyzer.streamlit.app">
    <div className="p-4">
      <p className="text-[13px] font-semibold text-ink">Waste classifier</p>
      <div className="mt-3 flex items-center gap-3 rounded-xl border border-dashed border-line px-3 py-2.5 text-[11px] text-muted">
        <Upload size={14} />
        bottle.jpg
        <ImageIcon size={14} className="ml-auto" />
      </div>
      <div className="mt-3 flex items-center gap-3 rounded-xl bg-tone/10 px-3 py-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-tone text-onprimary">
          <Recycle size={16} />
        </span>
        <div className="leading-tight">
          <p className="text-[10.5px] text-muted">Prediction</p>
          <p className="text-[13px] font-semibold text-ink">Recyclable</p>
        </div>
      </div>
      <div className="mt-3 space-y-2 text-[11px]">
        {[
          ['Recyclable', 90, 'bg-tone'],
          ['Organic', 10, 'bg-ink/25'],
        ].map(([label, value, bar]) => (
          <div key={label as string}>
            <div className="flex justify-between text-soft">
              <span>{label}</span>
              <span className="font-mono">{value}%</span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-ink/[0.07]">
              <div className={`h-full rounded-full ${bar}`} style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </BrowserFrame>
);


const StarterPreview = () => {
  const tag = 'text-primary';
  const attr = 'text-primary';
  const lines: [string, string][][] = [
    [['<!DOCTYPE html>', 'text-muted']],
    [['<html', tag], [' lang', attr], ['="en"', 'text-soft'], ['>', tag]],
    [['  <body>', tag]],
    [['    <h1>', tag], ['Hello, web!', 'text-ink'], ['</h1>', tag]],
    [['    <form ', tag], ['id', attr], ['="signup"', 'text-soft'], ['>', tag]],
    [['      <input ', tag], ['type', attr], ['="email"', 'text-soft'], [' />', tag]],
    [['    </form>', tag]],
    [['    <script ', tag], ['src', attr], ['="app.js"', 'text-soft'], ['></script>', tag]],
    [['  </body>', tag]],
    [['</html>', tag]],
  ];
  return (
    <div className="w-full max-w-[400px] overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_24px_60px_-28px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2 border-b border-line px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="ml-2 rounded-md bg-ink/[0.05] px-2.5 py-1 font-mono text-[10.5px] text-ink">index.html</span>
        <span className="px-1 font-mono text-[10.5px] text-muted">style.css</span>
        <span className="px-1 font-mono text-[10.5px] text-muted">app.js</span>
      </div>
      <pre className="overflow-hidden px-4 py-4 font-mono text-[11.5px] leading-[1.85]">
        {lines.map((line, i) => (
          <span key={i} className="block whitespace-pre">
            <span className="mr-4 inline-block w-4 select-none text-right text-muted/50">{i + 1}</span>
            {line.map(([t, cls], j) => (
              <span key={j} className={cls}>
                {t}
              </span>
            ))}
          </span>
        ))}
      </pre>
    </div>
  );
};

const AnimalPreview = () => (
  <BrowserFrame url="animal-classifier.streamlit.app">
    <div className="grid grid-cols-[0.9fr_1.1fr] gap-4 p-4">
      <div className="grid aspect-square place-items-center rounded-xl bg-tone/10 text-tone">
        <PawPrint size={38} strokeWidth={1.6} />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[10.5px] text-muted">Top prediction</p>
        <p className="text-[15px] font-semibold text-ink">Tiger</p>
        <div className="mt-3 space-y-2 text-[10.5px]">
          {[
            ['Tiger', 89, 'bg-tone'],
            ['Leopard', 7, 'bg-ink/25'],
            ['Lion', 4, 'bg-ink/25'],
          ].map(([label, value, bar]) => (
            <div key={label as string}>
              <div className="flex justify-between text-soft">
                <span>{label}</span>
                <span className="font-mono">{value}%</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-ink/[0.07]">
                <div className={`h-full rounded-full ${bar}`} style={{ width: `${value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </BrowserFrame>
);

const JobQuestPreview = () => (
  <BrowserFrame url="gamified-job-portal.vercel.app">
    <div className="p-4">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-semibold text-ink">Job Quest</p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-tone/10 px-2.5 py-1 text-[11px] font-medium text-tone">
          <Coins size={12} /> 1,250
        </span>
      </div>
      <div className="mt-3 rounded-xl border border-line p-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[12.5px] font-semibold text-ink">Frontend Developer Intern</p>
            <p className="mt-0.5 text-[10.5px] text-muted">Remote · 2 days left</p>
          </div>
          <BadgeCheck size={16} className="shrink-0 text-tone" />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[10.5px] text-soft">Signed in with Google</span>
          <span className="whitespace-nowrap rounded-lg bg-tone px-2.5 py-1 text-[10.5px] font-medium text-onprimary">Apply · +50 coins</span>
        </div>
      </div>
      <div className="mt-3 rounded-xl bg-ink/[0.04] p-3">
        <p className="flex items-center gap-1.5 text-[11px] font-medium text-ink">
          <Trophy size={12} className="text-tone" /> This week’s leaders
        </p>
        <ul className="mt-2 space-y-1 text-[10.5px] text-soft">
          {[
            ['1', 'Candidate 204', '2,980'],
            ['2', 'Candidate 87', '2,410'],
            ['3', 'You', '1,250'],
          ].map(([rank, who, pts]) => (
            <li key={rank} className="flex items-center gap-2">
              <span className="w-3 font-mono text-muted">{rank}</span>
              <span className={`flex-1 ${who === 'You' ? 'font-medium text-ink' : ''}`}>{who}</span>
              <span className="font-mono">{pts}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </BrowserFrame>
);

const HaulBasketPreview = () => (
  <BrowserFrame url="haulbasket.com">
    <div className="p-4">
      <div className="flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-tone text-onprimary">
          <ShoppingBasket size={14} />
        </span>
        <p className="text-[13px] font-semibold text-ink">HaulBasket</p>
        <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-line px-2 py-0.5 text-[10px] text-soft">
          <MapPin size={10} className="text-tone" /> SW1A 1AA
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-line px-2.5 py-1.5 text-[10.5px] text-muted">
        <Search size={12} /> Search groceries, drinks, snacks
      </div>
      <div className="mt-3 flex gap-1.5 text-[10px]">
        {['Fruit & veg', 'Drinks', 'Snacks', 'Household'].map((c, i) => (
          <span key={c} className={`rounded-full px-2 py-0.5 ${i === 0 ? 'bg-tone/10 text-tone' : 'bg-ink/[0.05] text-soft'}`}>
            {c}
          </span>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[
          { icon: Apple, name: 'Apples, 6 pack', price: '£1.95' },
          { icon: CupSoda, name: 'Sparkling water', price: '£0.85' },
          { icon: Sandwich, name: 'Sourdough loaf', price: '£2.40' },
        ].map(({ icon: Icon, name, price }) => (
          <div key={name} className="rounded-xl border border-line p-2">
            <div className="grid aspect-[4/3] place-items-center rounded-lg bg-tone/10 text-tone">
              <Icon size={18} strokeWidth={1.7} />
            </div>
            <p className="mt-1.5 truncate text-[10px] text-ink">{name}</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="text-[10.5px] font-semibold text-ink">{price}</span>
              <span className="grid h-4 w-4 place-items-center rounded-md bg-tone text-onprimary">
                <Plus size={10} />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-xl bg-ink/[0.05] px-3 py-2 text-[11px]">
        <span className="text-soft">Basket, 4 items</span>
        <span className="font-semibold text-ink">£7.15</span>
      </div>
    </div>
  </BrowserFrame>
);

const previews: Record<string, () => JSX.Element> = {
  haulbasket: HaulBasketPreview,
  start: StarterPreview,
  animal: AnimalPreview,
  'job-quest': JobQuestPreview,
  'pigeon-feed': TelegramPreview,
  lifeease: PhonePreview,
  auction: AuctionPreview,
  waste: ClassifierPreview,
};

const ProjectPreview = ({ id }: { id: string }) => {
  const Preview = previews[id];
  return Preview ? <Preview /> : null;
};

export default ProjectPreview;
