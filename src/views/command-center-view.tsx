"use client";

import { useState, useMemo } from "react";
import { clsx } from "clsx";
import {
  LayoutDashboard,
  Package,
  Clock,
  RefreshCw,
  Layers,
  Truck,
  AlertTriangle,
  TrendingUp,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const products = [
  { id: "FEL-001", brand: "FeLAA Atelier", name: "Stencilled Patterned Fabric Drop", type: "Made", cog: 12, price: 65, mode: "Fixed Drop" },
  { id: "FEL-002", brand: "FeLAA Atelier", name: "Machine Knitted Top — Merino", type: "Made", cog: 18, price: 95, mode: "Fixed Drop" },
  { id: "FEL-003", brand: "FeLAA Atelier", name: "Paper Lace Wall Art — A2", type: "Made", cog: 8, price: 75, mode: "1-of-1" },
  { id: "FEL-004", brand: "FeLAA Atelier", name: "Machine Knitted Cardigan", type: "Made", cog: 24, price: 145, mode: "Fixed Drop" },
  { id: "JIT-301", brand: "FeLAA Atelier", name: "Ceramic Tea Vessels (Faire)", type: "JIT", cog: 14, price: 49, mode: "JIT Buffer" },
  { id: "JIT-302", brand: "FeLAA Atelier", name: "Multimedia Art Paper (Amazon)", type: "JIT", cog: 9, price: 24, mode: "JIT On-Demand" },
  { id: "REV-101", brand: "Relove Soul Finds", name: "Vintage Leather Jacket", type: "Curated", cog: 22, price: 95, mode: "1-of-1" },
  { id: "REV-102", brand: "Relove Soul Finds", name: "90s Denim Oversized Blazer", type: "Curated", cog: 14, price: 68, mode: "1-of-1" },
  { id: "REV-103", brand: "Relove Soul Finds", name: "Rattan Wall Baskets — Set", type: "JIT", cog: 19, price: 55, mode: "JIT Buffer" },
  { id: "DIG-201", brand: "Growth Life Power", name: "The Creative Grounding Journal", type: "Digital", cog: 0, price: 22, mode: "Infinite" },
  { id: "DIG-202", brand: "Growth Life Power", name: "Pockets of Peace — Communal Ticket", type: "Digital", cog: 0, price: 18, mode: "Infinite" },
  { id: "DIG-203", brand: "Growth Life Power", name: "Growth Life Power Workbook", type: "Digital", cog: 0, price: 29, mode: "Infinite" },
  { id: "AFR-001", brand: "AfroLegal", name: "Know Your Rights — Digital Pack", type: "Digital", cog: 0, price: 35, mode: "Infinite" },
  { id: "AFR-002", brand: "AfroLegal", name: "AfroLegal Community Access", type: "Digital", cog: 0, price: 15, mode: "Infinite" },
];

const faireItems = [
  { name: "Ceramic Tea Vessels", brand: "FeLAA Atelier", orderedDaysAgo: 53, sales: 0 },
  { name: "Rattan Wall Baskets", brand: "Relove Soul Finds", orderedDaysAgo: 41, sales: 1 },
  { name: "Incense Holder Set", brand: "FeLAA Atelier", orderedDaysAgo: 31, sales: 2 },
  { name: "Woven Cotton Throw", brand: "FeLAA Atelier", orderedDaysAgo: 25, sales: 1 },
  { name: "Bamboo Tray — Large", brand: "Relove Soul Finds", orderedDaysAgo: 17, sales: 3 },
  { name: "Linen Cushion Covers", brand: "FeLAA Atelier", orderedDaysAgo: 13, sales: 4 },
];

const arbItems = [
  { name: "Multimedia Art Paper A3 Pack", sourcePrice: 8.99, stripePrice: 24, ship: "2–3 days", alert: false },
  { name: "Lino Print Carving Tools Set", sourcePrice: 12.49, stripePrice: 38, ship: "1 day Prime", alert: false },
  { name: "Natural Dye Starter Kit", sourcePrice: 21.0, stripePrice: 55, ship: "3–5 days", alert: false },
  { name: "A2 Heavyweight Cartridge Paper", sourcePrice: 17.8, stripePrice: 42, ship: "2 days Prime", alert: true },
];

const brands = [
  { id: "felaa", name: "FeLAA Atelier", tagline: "Gallery drops, textiles & art objects", skus: 6, mode: "Made drops + JIT wholesale", color: "#712B13" },
  { id: "relove", name: "Relove Soul Finds", tagline: "Upcycled vintage & curated finds", skus: 3, mode: "1-of-1 vintage + JIT", color: "#3C3489" },
  { id: "glp", name: "Growth Life Power", tagline: "Digital products & events", skus: 3, mode: "Digital infinite stock", color: "#27500A" },
  { id: "afro", name: "AfroLegal", tagline: "Legal empowerment resources", skus: 2, mode: "Digital infinite stock", color: "#633806" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function faireStatus(days: number) {
  if (days >= 50) return { label: "Trigger Return", color: "text-red-600 bg-red-50 border-red-200" };
  if (days >= 45) return { label: "Review Now", color: "text-amber-700 bg-amber-50 border-amber-200" };
  return { label: "Active Testing", color: "text-emerald-700 bg-emerald-50 border-emerald-200" };
}

function margin(sourcePrice: number, stripePrice: number) {
  return Math.round(((stripePrice - sourcePrice) / stripePrice) * 100);
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function MetricCard({ label, value, sub, subColor = "text-stone-400" }: { label: string; value: string | number; sub?: string; subColor?: string }) {
  return (
    <div className="rounded border border-stone-100 bg-stone-50 px-4 py-3">
      <div className="text-xs text-stone-400 mb-1">{label}</div>
      <div className="text-2xl font-light text-stone-800">{value}</div>
      {sub && <div className={clsx("text-xs mt-0.5", subColor)}>{sub}</div>}
    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={clsx("inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium", className)}>
      {children}
    </span>
  );
}

// ─── Sections ────────────────────────────────────────────────────────────────

function OverviewSection() {
  const alerts = faireItems.filter((f) => f.orderedDaysAgo >= 45);
  const arbAlerts = arbItems.filter((a) => a.alert);
  const totalRevPotential = products.reduce((s, p) => s + p.price, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <MetricCard label="Total SKUs" value={products.length} />
        <MetricCard label="Revenue Potential" value={`£${totalRevPotential.toLocaleString()}`} sub="across all lines" />
        <MetricCard label="Faire Alerts" value={alerts.length} sub={alerts.length > 0 ? "action required" : "all clear"} subColor={alerts.length > 0 ? "text-red-500" : "text-emerald-600"} />
        <MetricCard label="Price Drift Alerts" value={arbAlerts.length} sub={arbAlerts.length > 0 ? "check before selling" : "margins healthy"} subColor={arbAlerts.length > 0 ? "text-amber-600" : "text-emerald-600"} />
      </div>

      {/* Brand summary */}
      <div>
        <div className="text-xs font-medium uppercase tracking-widest text-stone-400 mb-3">Brands</div>
        <div className="grid gap-3 sm:grid-cols-2">
          {brands.map((b) => (
            <div key={b.id} className="flex items-start gap-3 rounded border border-stone-100 bg-stone-50 p-4">
              <div className="mt-0.5 h-2 w-2 rounded-full flex-shrink-0" style={{ backgroundColor: b.color }} />
              <div className="min-w-0">
                <div className="text-sm font-medium text-stone-800">{b.name}</div>
                <div className="text-xs text-stone-400 mt-0.5">{b.tagline}</div>
                <div className="text-xs text-stone-500 mt-1">{b.skus} SKUs · {b.mode}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active alerts */}
      {(alerts.length > 0 || arbAlerts.length > 0) && (
        <div>
          <div className="text-xs font-medium uppercase tracking-widest text-stone-400 mb-3 flex items-center gap-1.5">
            <AlertTriangle size={12} className="text-amber-500" /> Actions needed
          </div>
          <div className="space-y-2">
            {alerts.map((f) => {
              const s = faireStatus(f.orderedDaysAgo);
              return (
                <div key={f.name} className="flex items-center justify-between rounded border border-stone-100 bg-white px-4 py-3">
                  <div>
                    <div className="text-sm text-stone-700">{f.name}</div>
                    <div className="text-xs text-stone-400">{f.brand} · Day {f.orderedDaysAgo} · {f.sales} sale{f.sales !== 1 ? "s" : ""}</div>
                  </div>
                  <Badge className={s.color}>{s.label}</Badge>
                </div>
              );
            })}
            {arbAlerts.map((a) => (
              <div key={a.name} className="flex items-center justify-between rounded border border-stone-100 bg-white px-4 py-3">
                <div>
                  <div className="text-sm text-stone-700">{a.name}</div>
                  <div className="text-xs text-stone-400">Amazon · Was £{a.sourcePrice} · Sell £{a.stripePrice}</div>
                </div>
                <Badge className="text-amber-700 bg-amber-50 border-amber-200">Check price</Badge>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function ProductsSection() {
  const [brandFilter, setBrandFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (!brandFilter || p.brand === brandFilter) &&
          (!typeFilter || p.type === typeFilter)
      ),
    [brandFilter, typeFilter]
  );

  const typeColors: Record<string, string> = {
    Made: "text-violet-700 bg-violet-50 border-violet-200",
    Curated: "text-blue-700 bg-blue-50 border-blue-200",
    JIT: "text-amber-700 bg-amber-50 border-amber-200",
    Digital: "text-emerald-700 bg-emerald-50 border-emerald-200",
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <select
          value={brandFilter}
          onChange={(e) => setBrandFilter(e.target.value)}
          className="rounded border border-stone-200 bg-white px-3 py-1.5 text-xs text-stone-700 focus:outline-none focus:ring-1 focus:ring-stone-300"
        >
          <option value="">All brands</option>
          {brands.map((b) => <option key={b.id} value={b.name}>{b.name}</option>)}
        </select>
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="rounded border border-stone-200 bg-white px-3 py-1.5 text-xs text-stone-700 focus:outline-none focus:ring-1 focus:ring-stone-300"
        >
          <option value="">All types</option>
          {["Made", "Curated", "JIT", "Digital"].map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>

      <div className="overflow-x-auto rounded border border-stone-100">
        <table className="w-full text-xs">
          <thead className="bg-stone-50 text-stone-400 uppercase tracking-wider">
            <tr>
              <th className="px-3 py-2.5 text-left font-medium">ID</th>
              <th className="px-3 py-2.5 text-left font-medium">Brand</th>
              <th className="px-3 py-2.5 text-left font-medium">Product</th>
              <th className="px-3 py-2.5 text-left font-medium">Type</th>
              <th className="px-3 py-2.5 text-right font-medium">COG</th>
              <th className="px-3 py-2.5 text-right font-medium">Price</th>
              <th className="px-3 py-2.5 text-left font-medium hidden sm:table-cell">Mode</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-50 bg-white">
            {filtered.map((p) => (
              <tr key={p.id} className="hover:bg-stone-50/50 transition-colors">
                <td className="px-3 py-2.5 font-mono text-stone-400">{p.id}</td>
                <td className="px-3 py-2.5 text-stone-600 whitespace-nowrap">{p.brand.replace("Growth Life Power", "GLP").replace("FeLAA Atelier", "FeLAA").replace("Relove Soul Finds", "Relove")}</td>
                <td className="px-3 py-2.5 text-stone-700 max-w-[200px] truncate">{p.name}</td>
                <td className="px-3 py-2.5">
                  <Badge className={typeColors[p.type] ?? ""}>{p.type}</Badge>
                </td>
                <td className="px-3 py-2.5 text-right text-stone-500">{p.cog > 0 ? `£${p.cog}` : "—"}</td>
                <td className="px-3 py-2.5 text-right font-medium text-stone-800">£{p.price}</td>
                <td className="px-3 py-2.5 text-stone-400 hidden sm:table-cell">{p.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-xs text-stone-400">{filtered.length} of {products.length} products shown</div>
    </div>
  );
}

function FaireSection() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <MetricCard label="Total Lines" value={faireItems.length} />
        <MetricCard label="Safe window" value={faireItems.filter((f) => f.orderedDaysAgo < 45).length} sub="Day 1–44" subColor="text-emerald-600" />
        <MetricCard label="Action needed" value={faireItems.filter((f) => f.orderedDaysAgo >= 45).length} sub="Return or confirm" subColor="text-red-500" />
      </div>

      <div className="space-y-3">
        {faireItems.map((f) => {
          const s = faireStatus(f.orderedDaysAgo);
          const pct = Math.min(Math.round((f.orderedDaysAgo / 60) * 100), 100);
          const barColor = f.orderedDaysAgo >= 50 ? "bg-red-400" : f.orderedDaysAgo >= 45 ? "bg-amber-400" : "bg-emerald-400";
          return (
            <div key={f.name} className="rounded border border-stone-100 bg-white p-4 space-y-2.5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-sm font-medium text-stone-700">{f.name}</div>
                  <div className="text-xs text-stone-400">{f.brand} · Day {f.orderedDaysAgo} of 60 · {f.sales} sale{f.sales !== 1 ? "s" : ""}</div>
                </div>
                <Badge className={s.color}>{s.label}</Badge>
              </div>
              <div className="relative h-1.5 w-full rounded-full bg-stone-100">
                <div className={clsx("absolute left-0 top-0 h-full rounded-full transition-all", barColor)} style={{ width: `${pct}%` }} />
                {/* Buffer markers */}
                <div className="absolute top-0 h-full border-l border-dashed border-amber-400" style={{ left: "75%" }} />
                <div className="absolute top-0 h-full border-l border-dashed border-red-400" style={{ left: "91.7%" }} />
              </div>
              <div className="flex justify-between text-xs text-stone-300">
                <span>Day 0</span><span className="text-amber-400">D45</span><span className="text-red-400">D55</span><span>D60</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded border border-stone-100 bg-stone-50 p-4 space-y-3">
        <div className="text-xs font-medium uppercase tracking-widest text-stone-400">Return decision guide</div>
        {[
          { day: "Day 45", action: "Review — if no sales, drop stock to zero on site and start Faire return chat." },
          { day: "Day 50", action: "Trigger Return — initiate Faire return on app." },
          { day: "Day 55", action: "Buffer — physical return must be dispatched before Day 60 deadline." },
        ].map((step) => (
          <div key={step.day} className="flex gap-3">
            <div className="text-xs font-mono text-amber-600 w-14 flex-shrink-0 pt-0.5">{step.day}</div>
            <div className="text-xs text-stone-500">{step.action}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArbitrageSection() {
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {arbItems.map((a) => {
          const m = margin(a.sourcePrice, a.stripePrice);
          const profit = a.stripePrice - a.sourcePrice;
          return (
            <div key={a.name} className={clsx("rounded border bg-white p-4", a.alert ? "border-amber-200" : "border-stone-100")}>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <div className="text-sm font-medium text-stone-700">{a.name}</div>
                  <div className="text-xs text-stone-400 mt-0.5">Amazon · Ships {a.ship}</div>
                </div>
                {a.alert && <Badge className="text-amber-700 bg-amber-50 border-amber-200 flex-shrink-0">Price drift</Badge>}
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div>
                  <div className="text-stone-400 mb-0.5">Source cost</div>
                  <div className="font-medium text-stone-700">£{a.sourcePrice}</div>
                </div>
                <div>
                  <div className="text-stone-400 mb-0.5">Stripe price</div>
                  <div className="font-medium text-stone-700">£{a.stripePrice}</div>
                </div>
                <div>
                  <div className="text-stone-400 mb-0.5">Margin</div>
                  <div className={clsx("font-medium", m >= 60 ? "text-emerald-600" : m >= 50 ? "text-amber-600" : "text-red-500")}>
                    {m}% · £{profit.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded border border-stone-100 bg-stone-50 p-4">
        <div className="text-xs font-medium uppercase tracking-widest text-stone-400 mb-3">Margin health rule</div>
        <div className="space-y-1.5 text-xs text-stone-500">
          <div className="flex gap-2"><span className="text-emerald-600 w-12">≥ 60%</span> Healthy — proceed</div>
          <div className="flex gap-2"><span className="text-amber-600 w-12">50–59%</span> Monitor — check source price before next sale</div>
          <div className="flex gap-2"><span className="text-red-500 w-12">&lt; 50%</span> Pause — reprice or remove from listing</div>
        </div>
      </div>
    </div>
  );
}

function JITSection() {
  const steps = [
    { n: "①", title: "Order received", desc: "Customer pays via Stripe link on your vibe-coded site." },
    { n: "②", title: "Source on demand", desc: "Place order with Faire supplier or Amazon based on product type. No pre-stock needed." },
    { n: "③", title: "Receive & pack", desc: "Item arrives to you. Check quality, pack with FeLAA tissue and card insert." },
    { n: "④", title: "Ship to customer", desc: "Post via Royal Mail Tracked 48. Update tracking note to customer." },
    { n: "⑤", title: "Log in Command Center", desc: "Mark fulfilled. Update Faire day count if applicable." },
  ];

  return (
    <div className="space-y-4">
      <div className="rounded border border-stone-100 bg-stone-50 p-4">
        <div className="text-xs font-medium uppercase tracking-widest text-stone-400 mb-4">JIT fulfillment SOP</div>
        <div className="space-y-4">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-3">
              <div className="text-base text-stone-300 w-7 flex-shrink-0">{s.n}</div>
              <div>
                <div className="text-sm font-medium text-stone-700">{s.title}</div>
                <div className="text-xs text-stone-400 mt-0.5">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded border border-stone-100 bg-white p-4 space-y-3">
        <div className="text-xs font-medium uppercase tracking-widest text-stone-400">Ecosystem architecture</div>
        {[
          { label: "Front door", desc: "Vibe-coded site (Cloudflare Pages) — brand presence + shop page" },
          { label: "Funnels", desc: "Systeme.io — LP flyers for drops, journals, Pockets of Peace events" },
          { label: "Payments", desc: "Stripe links embedded as buttons — no checkout platform needed" },
          { label: "Supply", desc: "Faire wholesale (JIT 60-day) + Amazon retail arbitrage (on-demand)" },
          { label: "Engine room", desc: "This Command Center — registry, Faire countdown, arbitrage, SOP" },
        ].map((row) => (
          <div key={row.label} className="flex gap-3 text-xs">
            <div className="text-stone-400 w-20 flex-shrink-0 pt-0.5 font-medium">{row.label}</div>
            <div className="text-stone-500">{row.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main View ───────────────────────────────────────────────────────────────

type TabId = "overview" | "products" | "faire" | "arbitrage" | "jit";

const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: "overview", label: "Overview", icon: <LayoutDashboard size={13} /> },
  { id: "products", label: "Products", icon: <Package size={13} /> },
  { id: "faire", label: "Faire 60-Day", icon: <Clock size={13} /> },
  { id: "arbitrage", label: "Arbitrage", icon: <RefreshCw size={13} /> },
  { id: "jit", label: "JIT Flow", icon: <Truck size={13} /> },
];

export function CommandCenterView() {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  return (
    <div className="mx-auto max-w-3xl px-5 py-10 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="text-xs font-medium uppercase tracking-widest text-stone-400 mb-2">Internal · Not indexed</div>
        <h1 className="text-2xl font-light text-stone-800 tracking-tight">Master Command Center</h1>
        <p className="text-sm text-stone-400 mt-1">Lean sovereign ecosystem · 4 brands · JIT fulfillment</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-1.5 mb-8 border-b border-stone-100 pb-4">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={clsx(
              "flex items-center gap-1.5 rounded px-3 py-1.5 text-xs transition-colors",
              activeTab === t.id
                ? "bg-stone-800 text-white"
                : "text-stone-500 hover:bg-stone-100 hover:text-stone-700"
            )}
          >
            {t.icon}
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "overview" && <OverviewSection />}
      {activeTab === "products" && <ProductsSection />}
      {activeTab === "faire" && <FaireSection />}
      {activeTab === "arbitrage" && <ArbitrageSection />}
      {activeTab === "jit" && <JITSection />}
    </div>
  );
}
