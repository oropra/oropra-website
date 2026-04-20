import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Produit",
    links: [
      { label: "La Solution", href: "/solution" },
      { label: "Fonctionnalités", href: "/fonctionnalites" },
      { label: "Pour l'équipe", href: "/equipe" },
      { label: "Prix", href: "/prix" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Blog & Guides", href: "/ressources" },
      { label: "Support", href: "/support" },
      { label: "À propos", href: "/a-propos" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Demander une démo", href: "mailto:bienvenue@oropra.com" },
      { label: "bienvenue@oropra.com", href: "mailto:bienvenue@oropra.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-base border-t border-border-light">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo-oropra.svg"
                alt="Oropra"
                width={110}
                height={33}
              />
            </Link>
            <p className="mt-4 text-sm text-text-subtle leading-relaxed">
              Conseil en architecture de la donnée, CRM no-code & intégration IA.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-faint mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-primary hover:text-text-emphasis transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-faint">
            © {new Date().getFullYear()} Oropra. Tous droits réservés.
          </p>
          <p className="text-xs text-text-faint">
            Oro = Vision · Pra = Pragmatique
          </p>
        </div>
      </div>
    </footer>
  );
}
