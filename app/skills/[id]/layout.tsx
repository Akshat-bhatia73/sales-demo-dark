"use client";

export default function SkillLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-neutral-900 flex h-screen text-slate-100">
      {children}
    </div>
  );
}