import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  bg?: "white" | "base";
  id?: string;
}

export default function SectionWrapper({
  children,
  className,
  bg = "white",
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 px-4",
        bg === "base" ? "bg-bg-base" : "bg-white",
        className
      )}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
