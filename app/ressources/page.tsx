"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const articles = [
  { title: "Comment simplifier l'organisation commerciale ?", tag: "Conseil", readTime: "4 min" },
  { title: "Les bonnes habitudes pour un suivi client serein", tag: "Méthode", readTime: "5 min" },
  { title: "Structurer ses relances sans stress", tag: "Conseil", readTime: "3 min" },
  { title: "Harmoniser les informations entre équipes", tag: "Organisation", readTime: "4 min" },
];

const guides = [
  "Harmoniser vos données clients sans complexité",
  "Comment embarquer une équipe sur un nouvel outil ?",
  "Construire un process commercial fluide",
];

export default function RessourcesPage() {
  return (
    <>
      <section className="relative pt-[140px] pb-[100px] px-4 bg-[#32AFA4] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none">
          <source src="/images/reflet-metal-gauche.mp4" type="video/mp4" />
          <source src="/images/reflet-metal-gauche.mov" type="video/quicktime" />
        </video>
        <div className="relative max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-center gap-6">
            <motion.p variants={fadeUp} className="text-[11px] font-semibold text-accent-default uppercase tracking-[1.2px] bg-accent-subtle inline-block px-3.5 py-1.5 rounded-full">
              Ressources
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]">
              Ressources pour accompagner vos équipes.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-bg-elevated leading-[1.58] max-w-[660px]">
              Des contenus simples, utiles, concrets : idées, méthodes, exemples… De quoi améliorer l&apos;organisation et accompagner les évolutions du métier.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="mb-10">
            <h2 className="text-2xl font-bold text-text-emphasis mb-2">Des conseils pratiques pour le quotidien en concession.</h2>
            <p className="text-sm text-text-faint">Blog</p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {articles.map((a) => (
              <motion.div
                key={a.title}
                variants={fadeUp}
                className="bg-white rounded-[14px] p-6 border border-border-light shadow-[var(--shadow-default)] hover:shadow-[var(--shadow-strong)] transition-shadow cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-accent-default bg-accent-subtle px-2.5 py-1 rounded-full">{a.tag}</span>
                  <span className="text-xs text-text-faint">{a.readTime} de lecture</span>
                </div>
                <h3 className="font-semibold text-text-emphasis leading-snug group-hover:text-accent-default transition-colors">{a.title}</h3>
                <div className="flex items-center gap-1 mt-4 text-xs text-accent-default font-semibold">
                  Lire <ArrowRight size={12} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-text-emphasis mb-10">Des guides simples et concrets.</motion.h2>
          <motion.div variants={stagger} className="space-y-4">
            {guides.map((g) => (
              <motion.div
                key={g}
                variants={fadeUp}
                className="flex items-center justify-between bg-bg-base rounded-[14px] px-6 py-5 border border-border-light hover:border-border-strong transition-colors cursor-pointer group"
              >
                <span className="font-medium text-text-primary">{g}</span>
                <ArrowRight size={16} className="text-text-faint group-hover:text-accent-default transition-colors shrink-0" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="text-center max-w-2xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-text-emphasis mb-4">Des histoires vécues, racontées par les équipes.</motion.h2>
          <motion.p variants={fadeUp} className="text-text-subtle leading-relaxed mb-8">
            Découvrez comment des concessions ont simplifié leur quotidien, amélioré leur coordination et gagné en sérénité.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button variant="primary" size="lg" href="mailto:bienvenue@oropra.com">Voir toutes les ressources</Button>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
