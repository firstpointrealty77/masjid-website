import Link from "next/link";

type DonateButtonProps = {
  href?: string;
  label?: string;
  className?: string;
};

export function DonateButton({
  href = "/donate",
  label = "Donate",
  className = "",
}: DonateButtonProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        rounded-md
        bg-[#ffde59]
        px-6 py-3
        text-sm font-semibold
        text-emerald-950
        hover:opacity-90
        transition
        ${className}
      `}
    >
      {label}
    </Link>
  );
}
