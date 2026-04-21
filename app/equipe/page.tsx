"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const roles = [
  {
    icon: "🌟", title: "Pour la Direction",
    desc: "Vous accédez enfin à une vision claire de l'activité. Pas d'indicateurs complexes. Pas de tableaux illisibles. Juste l'essentiel pour piloter sereinement votre concession ou votre groupe.",
    points: ["Une vision simple et unifiée", "Une équipe alignée autour d'un seul outil", "Des données fiables", "Un suivi naturel du business"],
  },
  {
    icon: "🚗", title: "Pour les Responsables VO/VN",
    desc: "Plus rien ne vous échappe, votre management gagne en efficacité. Votre stock est propre, organisé, centralisé. Vous gagnez en clarté, en efficacité et en qualité de décision.",
    points: ["Un stock toujours à jour", "Des fiches véhicules homogènes", "Un suivi complet de l'activité des vendeurs et de leurs échanges avec leurs clients."],
  },
  {
    icon: "🤝", title: "Pour les Vendeurs",
    desc: "Un outil simple, agréable à utiliser. Des informations claires. Des relances organisées. Un vrai soutien dans votre quotidien — pas une contrainte.",
    points: ["Une interface claire", "Historique complet du client", "Relances faciles à gérer", "Moins de temps perdu, plus de ventes"],
  },
  {
    icon: "📣", title: "Pour le Marketing",
    desc: "Vous disposez de données propres et harmonisées. Vous pouvez construire vos segments et vos actions en toute confiance, et sans dépendre d'outils complexes.",
    points: ["Informations fiables", "Segments faciles à créer", "Communication cohérente", "Vision globale des interactions"],
  },
  {
    icon: "🗂", title: "Pour l'Accueil et les Secrétaires Commerciales",
    desc: "Enfin un outil simple, lisible, qui rend le quotidien plus fluide. Vous retrouvez tout rapidement, sans manipulation complexe, sans double saisie.",
    points: ["Accès rapide à l'information", "Interfaces adaptées au besoin", "Moins d'erreurs et de répétitions", "Un travail plus serein"],
  },
  {
    icon: "🖥", title: "Pour le service Informatique",
    desc: "Un outil stable, simple à maintenir, sans dépendance lourde. Et surtout : un front modifiable en quelques minutes pour que l'outil s'adapte à votre métier et non l'inverse.",
    points: ["Peu de maintenance", "Autonomie des équipes métier", "Un outil stable et léger"],
  },
];

export default function EquipePage() {
  return (
    <>
      <section className="relative pt-[140px] pb-[100px] px-4 bg-[#32AFA4] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none">
          <source src="/images/reflet-metal-gauche.mp4" type="video/mp4" />
          <source src="/images/reflet-metal-gauche.mov" type="video/quicktime" />
        </video>
        <div className="relative max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-center gap-6">
            <motion.p variants={fadeUp} className="text-[11px] font-semibold text-accent-default uppercase tracking-[1.2px] bg-accent-subtle inline-block px-3.5 pt-1.5 pb-1 rounded-full">
              Pour l&apos;équipe
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]">
              Une solution qui aide chaque membre de votre équipe.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-bg-elevated leading-[1.58] max-w-[660px]">
              Chaque rôle en concession a ses besoins, son rythme, ses priorités. Notre solution
              apporte à chacun un outil simple, lisible et utile au quotidien. Parce que quand
              tout le monde travaille avec le même outil, tout devient plus fluide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-5">
          {roles.map((role) => (
            <motion.div
              key={role.title}
              variants={fadeUp}
              className="bg-white rounded-[14px] p-7 border border-border-light shadow-[var(--shadow-default)] grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
            >
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{role.icon}</span>
                  <h2 className="text-xl font-bold text-text-emphasis">{role.title}</h2>
                </div>
                <p className="text-text-subtle leading-relaxed">{role.desc}</p>
              </div>
              <ul className="space-y-2">
                {role.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-default shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      <section className="py-24 px-4 bg-text-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-5">Une solution qui réunit vos équipes.</h2>
          <Button variant="secondary" size="lg" href="mailto:bienvenue@oropra.com" className="bg-white text-text-primary border-white hover:bg-white/90">
            Demander une démo
          </Button>
        </div>
      </section>
    </>
  );
}
