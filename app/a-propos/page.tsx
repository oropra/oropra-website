"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServiceTag from "@/components/ui/ServiceTag";

export default function AProposPage() {
  return (
    <>
      <section className="relative pt-[140px] pb-[100px] px-4 bg-accent-default overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none">
          <source src="/images/reflet-metal-gauche.mp4" type="video/mp4" />
          <source src="/images/reflet-metal-gauche.mov" type="video/quicktime" />
        </video>
        <div className="relative max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-center gap-6">
            <motion.p variants={fadeUp} className="text-[11px] font-semibold text-accent-default uppercase tracking-[1.2px] bg-accent-subtle inline-block px-3.5 pt-1.5 pb-1 rounded-full">
              À propos
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]">
              Une entreprise qui place les équipes au cœur de tout.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-bg-elevated leading-[1.58] max-w-[660px]">
              Nous avons construit un outil simple, humain et adaptable, car nous croyons que les équipes méritent des solutions qui les soutiennent — pas qui les compliquent.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl font-bold text-text-emphasis mb-5">Un outil né du terrain.</h2>
            <p className="text-text-subtle leading-relaxed mb-4">
              Nous sommes partis d&apos;un constat simple : dans les concessions, les outils existent, mais ils sont souvent complexes, lourds, peu adoptés.
            </p>
            <p className="text-text-subtle leading-relaxed">
              Nous avons voulu créer l&apos;inverse : une solution que les équipes aiment utiliser. Simple à prendre en main, adaptée au terrain, et accompagnée d&apos;un vrai suivi humain.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-white rounded-[14px] p-8 border border-border-light shadow-[var(--shadow-default)]">
            <p className="text-2xl font-bold text-text-emphasis mb-1">Oropra</p>
            <p className="text-text-faint text-sm mb-6">Conseil en architecture de la donnée, CRM no-code & intégration IA</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <a href="mailto:bienvenue@oropra.com" className="text-sm text-accent-default hover:underline">bienvenue@oropra.com</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-emphasis">Nos expertises</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { color: "border-t-service-blue", title: "DATA", points: ["Architecture centralisée", "Intégration données ERP client", "Fiabilisation", "Unification (RCU)"] },
              { color: "border-t-service-orange", title: "IA", points: ["Intégration des modèles dans les processus métiers", "Mémoire et Mesure", "Autonomiser les équipes"] },
              { color: "border-t-service-green", title: "CRM", points: ["Simplifier : No-code", "Connecter les outils", "Adapter au métier"] },
            ].map((exp) => (
              <motion.div key={exp.title} variants={fadeUp} className={`bg-bg-base rounded-[14px] p-7 border-t-2 ${exp.color}`}>
                <h3 className="text-xl font-bold text-text-emphasis mb-5">{exp.title}</h3>
                <ul className="space-y-2.5">
                  {exp.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-border-strong mt-1.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-emphasis">Nos valeurs</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Simplicité", desc: "Des outils clairs, qui vont à l'essentiel." },
              { title: "Proximité", desc: "Un accompagnement humain, quotidien, patient." },
              { title: "Liberté", desc: "Un outil modulable, qui s'adapte à votre métier, rapidement et facilement." },
            ].map((val) => (
              <motion.div key={val.title} variants={fadeUp} className="bg-white rounded-[14px] p-7 border border-border-light shadow-[var(--shadow-default)]">
                <h3 className="text-xl font-bold text-text-emphasis mb-3">{val.title}</h3>
                <p className="text-text-subtle leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-sm font-semibold text-accent-default uppercase tracking-widest mb-3">Méthode CLAIRE</p>
            <h2 className="text-3xl font-bold text-text-emphasis mb-4">Notre manière de travailler.</h2>
            <p className="text-text-subtle max-w-xl mx-auto">
              Avec vous, simplement. Nous avançons étape par étape, à votre rythme, disponibles, proches et transparents.
            </p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { service: "diagnostic" as const, desc: "Cartographie des flux et processus existants." },
              { service: "design" as const, desc: "Définition des usages et outils adaptés." },
              { service: "deploiement" as const, desc: "Mise en place et intégration dans vos processus." },
              { service: "formation" as const, desc: "Montée en compétence et appropriation des outils." },
            ].map((step) => (
              <motion.div key={step.service} variants={fadeUp} className="bg-bg-base rounded-[14px] p-5 border border-border-light">
                <ServiceTag service={step.service} className="mb-3" />
                <p className="text-sm text-text-subtle">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="max-w-2xl mx-auto text-center">
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-text-emphasis mb-4">
            Un outil n&apos;a de valeur que s&apos;il est utilisé.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-subtle leading-relaxed mb-8">
            C&apos;est pourquoi nous investissons tout dans l&apos;accompagnement : formation 14 jours, présence quotidienne, écoute des équipes, adaptation rapide de l&apos;outil.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button variant="primary" size="lg" href="mailto:bienvenue@oropra.com">Nous contacter</Button>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
