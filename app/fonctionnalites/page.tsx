"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const features = [
  {
    num: "01", label: "Référentiel Client Unique",
    title: "Un client = une fiche.",
    desc: "Informations regroupées, dédupliquées, historiques clairs, accès facile pour tous. Chaque membre de l'équipe retrouve ce dont il a besoin en quelques secondes.",
    points: ["Fiche unifiée par client", "Historique complet des échanges", "Accès rapide pour toutes les équipes"],
  },
  {
    num: "02", label: "Opportunités",
    title: "Un suivi structuré, clair et rassurant.",
    desc: "Étapes visibles, relances organisées… un vrai support pour les vendeurs. Plus jamais une opportunité perdue par manque de suivi.",
    points: ["Tunnel de vente visuel", "Relances organisées et rappels", "Vue d'ensemble pour les responsables"],
  },
  {
    num: "03", label: "Stock",
    title: "Votre stock VO/VN, toujours propre et accessible.",
    desc: "Une vue centralisée, toujours à jour. Chaque véhicule est documenté, localisé et visible par tous. Fini les tableurs éparpillés.",
    points: ["Vue stock centralisée", "Fiches véhicules homogènes", "Mise à jour en temps réel"],
  },
  {
    num: "04", label: "Communications",
    title: "Toutes les interactions au même endroit.",
    desc: "Appels, WhatsApp, SMS, emails : tout est centralisé dans la fiche client. Vos équipes ne perdent plus de temps à chercher.",
    points: ["Appels et SMS centralisés", "WhatsApp et emails intégrés", "Historique de chaque échange"],
  },
  {
    num: "05", label: "Devis & BDC",
    title: "Des documents propres, faciles à suivre et à partager.",
    desc: "Des modèles harmonisés pour toute la concession. Les devis et bons de commande sont cohérents, traçables et faciles à gérer.",
    points: ["Modèles standardisés", "Suivi du statut en temps réel", "Partage facilité"],
  },
  {
    num: "06", label: "Tableaux de bord",
    title: "L'essentiel, présenté simplement.",
    desc: "Pas d'indicateurs noyés dans des chiffres complexes. Juste les informations clés pour piloter sereinement l'activité.",
    points: ["Indicateurs clés visibles", "Vue direction et vue équipe", "Données fiables et à jour"],
  },
  {
    num: "07", label: "Formation",
    title: "Un accompagnement quotidien pendant 14 jours.",
    desc: "Une méthode douce et progressive pour que chaque utilisateur prenne en main l'outil naturellement, à son rythme.",
    points: ["1h par jour par utilisateur", "Adaptée à chaque rôle", "Adoption sereine et durable"],
  },
];

export default function FonctionnalitesPage() {
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
              Fonctionnalités
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]">
              Toutes les fonctionnalités dont vous avez besoin, sans complexité.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-bg-elevated leading-[1.58] max-w-[660px]">
              Nous avons séparé l&apos;essentiel du superflu. Chaque fonctionnalité est pensée pour simplifier le quotidien.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="space-y-6">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              variants={fadeUp}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-[14px] p-8 border border-border-light shadow-[var(--shadow-default)]"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-border-strong">{f.num}</span>
                  <span className="text-xs font-semibold text-text-faint uppercase tracking-wider">{f.label}</span>
                </div>
                <h2 className="text-2xl font-bold text-text-emphasis mb-3">{f.title}</h2>
                <p className="text-text-subtle leading-relaxed">{f.desc}</p>
              </div>
              <div className={`space-y-3 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                {f.points.map((p) => (
                  <div key={p} className="flex items-center gap-3 bg-bg-base rounded-xl px-4 py-3 border border-border-light">
                    <div className="w-2 h-2 rounded-full bg-accent-default shrink-0" />
                    <span className="text-sm text-text-primary">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>

      <section className="py-24 px-4 bg-text-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-5">Prêt à simplifier votre quotidien ?</h2>
          <Button variant="secondary" size="lg" href="mailto:bienvenue@oropra.com" className="bg-white text-text-primary border-white hover:bg-white/90">
            Demander une démo
          </Button>
        </div>
      </section>
    </>
  );
}
