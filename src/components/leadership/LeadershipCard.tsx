import { Leader } from "@/data/leadership";

function LeadershipAvatar({ initials }: { initials?: string }) {
  return (
    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#d8c48a]/60 bg-[linear-gradient(135deg,rgba(212,164,71,0.16),rgba(255,255,255,0.06))] text-lg font-semibold tracking-[0.18em] text-[#f2df9b] shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
      <div className="absolute inset-[1px] rounded-2xl bg-[linear-gradient(180deg,rgba(10,58,52,0.94),rgba(7,36,32,0.96))]" />
      <span className="relative z-10">{initials || "LD"}</span>
    </div>
  );
}

export function LeadershipCard({ leader }: { leader: Leader }) {
  return (
    <article className="group rounded-[26px] border border-[#eee4c8] bg-[linear-gradient(180deg,#ffffff_0%,#fcfaf3_100%)] p-5 shadow-[0_12px_35px_rgba(10,58,52,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(10,58,52,0.12)]">
      <div className="flex items-start gap-4">
        <LeadershipAvatar initials={leader.initials} />

        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b48a2c]">
            {leader.role}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-[#0b2f2a]">
            {leader.name}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-[#3d5a54]">{leader.bio}</p>
    </article>
  );
}