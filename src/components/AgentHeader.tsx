import { Instagram, Linkedin, Youtube } from "lucide-react";

interface AgentHeaderProps {
  photo: string;
  name: string;
  subtitle: string;
  badge: string;
}

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function AgentHeader({ photo, name, subtitle, badge }: AgentHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <div className="relative">
        <div className="w-40 h-40 p-[2px] rounded-sm gradient-silver">
          <img
            src={photo}
            alt={name}
            className="w-full h-full rounded-sm object-cover object-top"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold gradient-silver-text tracking-tight">{name}</h1>
          <span className="text-[10px] bg-secondary text-primary font-semibold px-2 py-0.5 rounded-sm border border-border whitespace-nowrap">
            {badge}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>

      <div className="flex items-center gap-4 mt-1">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <s.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  );
}
