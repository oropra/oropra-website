import { cn } from "@/lib/utils";

type Service = "diagnostic" | "setup" | "design" | "deploiement" | "formation" | "evolution";

interface ServiceTagProps {
  service: Service;
  className?: string;
}

const config: Record<Service, { label: string; color: string; bg: string }> = {
  diagnostic: {
    label: "Diagnostic",
    color: "text-service-blue",
    bg: "bg-service-blue/10",
  },
  setup: {
    label: "Set up",
    color: "text-service-blue",
    bg: "bg-service-blue/10",
  },
  design: {
    label: "Design",
    color: "text-service-green",
    bg: "bg-service-green/10",
  },
  deploiement: {
    label: "Déploiement",
    color: "text-service-orange",
    bg: "bg-service-orange/10",
  },
  formation: {
    label: "Formation",
    color: "text-service-purple",
    bg: "bg-service-purple/10",
  },
  evolution: {
    label: "Evolution",
    color: "text-service-purple",
    bg: "bg-service-purple/10",
  },
};

export default function ServiceTag({ service, className }: ServiceTagProps) {
  const { label, color, bg } = config[service];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full",
        bg,
        color,
        className
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full", bg.replace("/10", ""), color.replace("text-", "bg-"))} />
      {label}
    </span>
  );
}
