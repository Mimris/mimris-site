type MimrisMarkProps = {
  className?: string;
};

export function MimrisMark({ className }: MimrisMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      focusable="false"
      viewBox="0 0 72 68"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 62V10l28 52" fill="none" stroke="var(--brand-blue)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.5" />
      <path d="M36 62 64 10" fill="none" stroke="var(--green)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.5" />
      <path d="M46.5 44H64" fill="none" stroke="var(--green)" strokeLinecap="round" strokeWidth="6" />
      <path d="M64 10v52" fill="none" stroke="var(--ai-orange)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7.5" />
      <circle cx="8" cy="62" fill="var(--brand-blue)" r="6" />
      <circle cx="8" cy="10" fill="var(--brand-blue)" r="6" />
      <circle cx="36" cy="62" fill="var(--green)" r="6" />
      <circle cx="46.5" cy="44" fill="var(--green)" r="4" />
      <circle cx="64" cy="10" fill="var(--ai-orange)" r="6" />
      <circle cx="64" cy="62" fill="var(--ai-orange)" r="6" />
      <path d="M27 30c0 8 4 12 9 12s9-4 9-12M36 34v-7" fill="none" stroke="var(--green)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" />
      <circle cx="36" cy="23" fill="var(--green)" r="3.5" />
    </svg>
  );
}
