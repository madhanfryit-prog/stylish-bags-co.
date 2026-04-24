interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ badge, title, description, align = "left" }: SectionHeaderProps) => {
  const isCentered = align === "center";

  return (
    <div className={`section-heading ${isCentered ? "mx-auto text-center" : ""}`}>
      <div className={`eyebrow ${isCentered ? "mx-auto" : ""}`}>{badge}</div>
      <div className="space-y-3">
        <h2 className="text-balance font-display text-3xl font-bold tracking-normal text-foreground md:text-5xl">{title}</h2>
        <p className="text-base leading-7 text-muted-foreground md:text-lg">{description}</p>
      </div>
    </div>
  );
};
