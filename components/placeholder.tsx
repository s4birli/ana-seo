/** Striped monochrome placeholder media (CSS-only — no image request). */
export function Placeholder({ label }: { label: string }) {
  return (
    <div className="ph">
      <span>{label}</span>
    </div>
  );
}
