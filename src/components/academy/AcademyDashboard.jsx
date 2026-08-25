import { useState } from "react";
import {
  Activity,
  Bell,
  CalendarDays,
  ChevronDown,
  Download,
  FileCheck2,
  GraduationCap,
  Home,
  LockKeyhole,
  MailWarning,
  Menu,
  Network,
  Settings,
  Shield,
  Sparkles,
  UserRound,
  Users,
  X,
} from "lucide-react";

const navigation = [
  { label: "Overview", icon: Home },
  { label: "Workforce", icon: Users },
  { label: "Training", icon: GraduationCap },
  { label: "AI Readiness", icon: Sparkles },
  { label: "Cyber Risk", icon: Shield },
  { label: "Phishing", icon: MailWarning },
  { label: "Policies", icon: FileCheck2 },
  { label: "Privacy", icon: LockKeyhole },
  { label: "Reports", icon: Activity },
  { label: "Settings", icon: Settings },
];

const metrics = [
  {
    title: "Employees",
    value: "1,247",
    subtitle: "Total Workforce",
    change: "5.2%",
    icon: Users,
    color: "blue",
    points:
      "0,40 15,35 30,38 45,30 60,34 75,20 90,25 105,18 120,24 135,13 150,18 165,10 180,17 200,12",
  },
  {
    title: "Training Completion",
    value: "91%",
    subtitle: "Completion Rate",
    change: "7.1%",
    icon: GraduationCap,
    color: "green",
    points:
      "0,42 15,36 30,38 45,29 60,34 75,24 90,30 105,18 120,23 135,12 150,17 165,10 180,14 200,8",
  },
  {
    title: "AI Readiness",
    value: "78%",
    subtitle: "Workforce Ready",
    change: "6.3%",
    icon: Sparkles,
    color: "purple",
    points:
      "0,40 15,34 30,37 45,28 60,31 75,21 90,28 105,18 120,25 135,14 150,23 165,12 180,18 200,10",
  },
  {
    title: "Cyber Readiness",
    value: "73%",
    subtitle: "Overall Readiness",
    change: "4.8%",
    icon: Shield,
    color: "cyan",
    points:
      "0,40 15,30 30,35 45,24 60,28 75,21 90,27 105,18 120,23 135,15 150,22 165,13 180,18 200,11",
  },
  {
    title: "Phishing Risk",
    value: "11%",
    subtitle: "Click Rate",
    change: "2.4%",
    icon: MailWarning,
    color: "amber",
    points:
      "0,35 15,27 30,32 45,27 60,36 75,25 90,30 105,19 120,29 135,21 150,28 165,20 180,25 200,18",
  },
  {
    title: "High Risk Employees",
    value: "47",
    subtitle: "Requiring Attention",
    change: "8.1%",
    icon: UserRound,
    color: "red",
    bars: true,
  },
  {
    title: "AI Policy Acceptance",
    value: "94%",
    subtitle: "Acceptance Rate",
    change: "3.6%",
    icon: FileCheck2,
    color: "green",
    points:
      "0,40 15,35 30,38 45,29 60,33 75,25 90,30 105,19 120,27 135,17 150,25 165,15 180,20 200,12",
  },
  {
    title: "Privacy Training",
    value: "89%",
    subtitle: "Completion Rate",
    change: "5.0%",
    icon: LockKeyhole,
    color: "cyan",
    points:
      "0,30 15,25 30,30 45,21 60,27 75,35 90,28 105,31 120,20 135,27 150,19 165,25 180,16 200,12",
  },
];

const colorMap = {
  blue: {
    text: "text-signal-blue-bright",
    bg: "bg-signal-blue-bright/10",
    border: "border-signal-blue-bright/30",
    line: "#4b83ff",
  },
  cyan: {
    text: "text-signal-blue",
    bg: "bg-signal-blue/10",
    border: "border-signal-blue/30",
    line: "#42cef4",
  },
  green: {
    text: "text-success-green",
    bg: "bg-success-green/10",
    border: "border-success-green/30",
    line: "#2fd67a",
  },
  purple: {
    text: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/30",
    line: "#c084fc",
  },
  amber: {
    text: "text-alert-amber",
    bg: "bg-alert-amber/10",
    border: "border-alert-amber/30",
    line: "#ffb020",
  },
  red: {
    text: "text-red-400",
    bg: "bg-red-400/10",
    border: "border-red-400/30",
    line: "#f87171",
  },
};

function MiniChart({ points, color }) {
  const config = colorMap[color];

  return (
    <div className="mt-5 h-12 w-full">
      <svg
        viewBox="0 0 200 50"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={config.line} stopOpacity="0.22" />
            <stop offset="100%" stopColor={config.line} stopOpacity="0" />
          </linearGradient>
        </defs>

        <polygon
          points={`0,50 ${points} 200,50`}
          fill={`url(#gradient-${color})`}
        />

        <polyline
          points={points}
          fill="none"
          stroke={config.line}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function BarChart({ color }) {
  const config = colorMap[color];

  const bars = [
    25, 42, 30, 50, 34, 55, 28, 45, 31, 51, 36, 58, 33, 48, 39, 55, 30, 46, 37,
    53, 29, 44, 35, 57, 40, 51, 32, 47, 38, 54,
  ];

  return (
    <div className="mt-5 flex h-12 items-end gap-[3px]">
      {bars.map((height, index) => (
        <div
          key={index}
          className="w-full rounded-t-sm"
          style={{
            height: `${height}%`,
            backgroundColor: config.line,
            opacity: 0.45 + (index % 4) * 0.1,
          }}
        />
      ))}
    </div>
  );
}

function MetricCard({ metric }) {
  const Icon = metric.icon;
  const config = colorMap[metric.color];

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-perimeter bg-deep-steel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal-blue/40 hover:shadow-glow">
      {/* Hover glow */}
      <div
        className={`absolute -right-16 -top-16 h-36 w-36 rounded-full ${config.bg} opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100`}
      />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] text-paper-faint">
            {metric.title}
          </p>

          <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-paper">
            {metric.value}
          </h3>

          <p className="mt-1 text-sm text-paper-dim">{metric.subtitle}</p>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl border ${config.border} ${config.bg} ${config.text}`}
        >
          <Icon size={20} />
        </div>
      </div>

      {metric.bars ? (
        <BarChart color={metric.color} />
      ) : (
        <MiniChart points={metric.points} color={metric.color} />
      )}

      <div className="mt-2 flex items-center gap-1 text-xs">
        <span className="font-medium text-success-green">
          ↗ {metric.change}
        </span>

        <span className="text-paper-faint">vs last 30 days</span>
      </div>
    </div>
  );
}

function RiskChart() {
  const points =
    "0,30 25,22 50,27 75,19 100,25 125,18 150,28 175,24 200,34 225,29 250,38 275,34 300,42 325,37 350,45 375,41 400,48 425,43 450,50 475,45 500,49 525,42 550,46 575,39 600,42 625,35 650,39 675,31 690,35";

  return (
    <div className="relative h-60">
      <div className="absolute inset-0 flex flex-col justify-between">
        <div className="border-t border-dashed border-red-500/30" />
        <div className="border-t border-dashed border-alert-amber/30" />
        <div className="border-t border-dashed border-success-green/30" />
        <div className="border-t border-perimeter" />
      </div>

      <div className="absolute left-0 top-0 flex h-full flex-col justify-between text-[10px]">
        <span className="text-red-400">High</span>
        <span className="text-alert-amber">Medium</span>
        <span className="text-success-green">Low</span>
      </div>

      <div className="ml-12 h-full pb-7">
        <svg
          viewBox="0 0 690 60"
          preserveAspectRatio="none"
          className="h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient id="riskArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffb020" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#ffb020" stopOpacity="0" />
            </linearGradient>
          </defs>

          <polygon points={`0,60 ${points} 690,60`} fill="url(#riskArea)" />

          <polyline
            points={points}
            fill="none"
            stroke="#ffb020"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx="690" cy="35" r="4" fill="#ffb020" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-12 right-0 flex justify-between text-[10px] text-paper-faint">
        <span>Mar 24</span>
        <span>Mar 31</span>
        <span>Apr 7</span>
        <span>Apr 14</span>
        <span>Apr 21</span>
        <span>Apr 28</span>
        <span>May 5</span>
        <span>May 12</span>
      </div>
    </div>
  );
}

function RiskDistribution() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-7 sm:flex-row">
      <div
        className="relative h-40 w-40 rounded-full"
        style={{
          background:
            "conic-gradient(#2fd67a 0deg 137deg, #ffb020 137deg 299deg, #ef4444 299deg 360deg)",
        }}
      >
        <div className="absolute inset-3 flex flex-col items-center justify-center rounded-full bg-deep-steel">
          <span className="font-display text-2xl font-bold text-paper">
            1,247
          </span>

          <span className="text-xs text-paper-faint">Employees</span>
        </div>
      </div>

      <div className="w-full max-w-[210px] space-y-5">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm text-paper-dim">
            <span className="h-2.5 w-2.5 rounded-full bg-success-green" />
            Low Risk
          </span>

          <span className="font-semibold text-paper">38%</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm text-paper-dim">
            <span className="h-2.5 w-2.5 rounded-full bg-alert-amber" />
            Medium Risk
          </span>

          <span className="font-semibold text-paper">45%</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm text-paper-dim">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            High Risk
          </span>

          <span className="font-semibold text-paper">17%</span>
        </div>
      </div>
    </div>
  );
}

export default function AcademyDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Overview");

  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-content bg-void-navy text-paper">
        <div className="px-5 py-8 md:px-8 lg:py-10">
          {/* Hero */}
          <section className="mb-8">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulsedot rounded-full bg-success-green" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-success-green">
                    Live intelligence
                  </span>
                </div>

                <h1 className="font-display text-3xl font-bold tracking-tight text-paper md:text-4xl lg:text-[42px]">
                  From Training Activity to{" "}
                  <span className="bg-gradient-to-r from-signal-blue to-signal-blue-bright bg-clip-text text-transparent">
                    Executive Visibility.
                  </span>
                </h1>

                <p className="mt-3 max-w-2xl text-sm text-paper-dim md:text-base">
                  Real-time insights. Smarter decisions. Stronger workforce.
                </p>
              </div>
            </div>
          </section>

          {/* KPI cards */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.title} metric={metric} />
            ))}
          </section>

          {/* Analytics */}
          <section className="mt-5 grid gap-5 xl:grid-cols-[1.6fr_1fr]">
            {/* Overall Risk */}
            <div className="rounded-2xl border border-perimeter bg-deep-steel p-5 md:p-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <p className="font-display font-semibold text-paper">
                    Overall Workforce Risk
                  </p>

                  <p className="mt-1 text-xs text-paper-faint">
                    Risk trend across your organization
                  </p>
                </div>

                <button className="flex items-center gap-2 self-start rounded-lg border border-perimeter bg-void-navy px-3 py-2 text-xs text-paper-dim hover:text-paper">
                  Last 8 Weeks
                  <ChevronDown size={14} />
                </button>
              </div>

              <div className="mt-8 grid gap-8 md:grid-cols-[175px_1fr]">
                {/* Risk status */}
                <div className="flex flex-col items-center justify-center border-b border-perimeter-soft pb-6 md:border-b-0 md:border-r md:pb-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-alert-amber/30 bg-alert-amber/10 text-alert-amber">
                    <Shield size={32} />
                  </div>

                  <p className="mt-4 text-[10px] uppercase tracking-[0.15em] text-paper-faint">
                    Current Risk
                  </p>

                  <h3 className="mt-1 font-display text-2xl font-bold text-alert-amber">
                    MEDIUM
                  </h3>

                  <p className="mt-3 max-w-[145px] text-center text-xs leading-5 text-paper-faint">
                    Your organization has a moderate risk level.
                  </p>
                </div>

                {/* Chart */}
                <div>
                  <RiskChart />
                </div>
              </div>
            </div>

            {/* Distribution */}
            <div className="rounded-2xl border border-perimeter bg-deep-steel p-5 md:p-6">
              <div>
                <p className="font-display font-semibold text-paper">
                  Risk Distribution
                </p>

                <p className="mt-1 text-xs text-paper-faint">
                  Workforce security exposure
                </p>
              </div>

              <RiskDistribution />

              <button className="flex w-full items-center justify-end gap-2 border-t border-perimeter-soft pt-4 text-sm font-medium text-signal-blue transition hover:text-signal-blue-bright">
                View full risk analysis
                <span>→</span>
              </button>
            </div>
          </section>

          {/* Actions */}
          <section className="mt-5 grid gap-4 md:grid-cols-3">
            <button className="group flex items-center gap-4 rounded-2xl bg-signal-gradient px-6 py-5 text-left text-white shadow-lg shadow-signal-blue-bright/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-signal-blue-bright/30">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <Download size={21} />
              </div>

              <div>
                <p className="font-semibold">Download Executive Report</p>

                <p className="mt-1 text-xs text-white/60">
                  PDF summary of key insights
                </p>
              </div>
            </button>

            <button className="flex items-center gap-4 rounded-2xl border border-perimeter bg-deep-steel px-6 py-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-signal-blue/30 hover:bg-deep-steel-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-deep-steel-2 text-paper-dim">
                <Network size={21} />
              </div>

              <div>
                <p className="font-semibold text-paper">View Department Risk</p>

                <p className="mt-1 text-xs text-paper-faint">
                  Compare risk across teams
                </p>
              </div>
            </button>

            <button className="flex items-center gap-4 rounded-2xl border border-perimeter bg-deep-steel px-6 py-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-signal-blue/30 hover:bg-deep-steel-2">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-deep-steel-2 text-paper-dim">
                <FileCheck2 size={21} />
              </div>

              <div>
                <p className="font-semibold text-paper">Compliance Evidence</p>

                <p className="mt-1 text-xs text-paper-faint">
                  Access audit-ready reports
                </p>
              </div>
            </button>
          </section>
        </div>
      </div>
    </section>
  );
}
