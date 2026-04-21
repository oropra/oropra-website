"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServiceTag from "@/components/ui/ServiceTag";

const modules = [
  { title: "Clients", desc: "Une fiche claire, un historique complet.", icon: "👤", topColor: "bg-service-blue" },
  { title: "Opportunités", desc: "Un suivi qui rassure et structure le quotidien.", icon: "🎯", topColor: "bg-service-green" },
  { title: "Stock VO/VN", desc: "Une vue centralisée, toujours à jour.", icon: "🚗", topColor: "bg-service-orange" },
  { title: "Communications", desc: "Appels, WhatsApp, SMS, emails, tout au même endroit.", icon: "💬", topColor: "bg-accent-light" },
  { title: "Devis & BDC", desc: "Des documents harmonisés, faciles à suivre.", icon: "📄", topColor: "bg-service-green" },
  { title: "Tableaux de bord", desc: "Une vision simple de l'activité de votre concession.", icon: "📊", topColor: "bg-service-blue" },
];

export default function SolutionPage() {
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
              La Solution
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]">
              Tout ce dont une concession a besoin, dans un outil simple.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-bg-elevated leading-[1.58] max-w-[660px]">
              Clients, opportunités, stock, communications : tout est réuni dans une interface
              lisible et agréable. Chaque équipe retrouve instantanément ce dont elle a besoin.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="primary-dark" size="lg" href="mailto:bienvenue@oropra.com">
                Demander une démo
              </Button>
              <Button variant="secondary-dark" size="lg" href="/fonctionnalites">
                Voir les fonctionnalités <ArrowRight size={16} className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-text-emphasis mb-3">
              Les fonctionnalités essentielles, simplement présentées.
            </h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m) => (
              <motion.div
                key={m.title}
                variants={fadeUp}
                className="bg-white rounded-[14px] p-7 border border-border-light shadow-[var(--shadow-default)] hover:shadow-[var(--shadow-strong)] transition-shadow relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${m.topColor}`} />
                <span className="text-3xl mb-4 block">{m.icon}</span>
                <h3 className="font-bold text-text-emphasis mb-2">{m.title}</h3>
                <p className="text-sm text-text-subtle leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp}>
            <ServiceTag service="deploiement" className="mb-5" />
            <h2 className="text-3xl sm:text-4xl font-bold text-text-emphasis mb-5">
              Votre outil s&apos;adapte à votre métier.
            </h2>
            <p className="text-text-subtle leading-relaxed mb-8">
              Chaque concession a ses process. C&apos;est pourquoi vous pouvez ajuster
              l&apos;interface : champs, formulaires, écrans… Tout se fait en quelques minutes.
            </p>
            <ul className="space-y-3">
              {["Aucune limite technique à vos demandes d'adaptation", "Ajustements quasi immédiats", "Plus besoin d'ouvrir un ticket dans l'espoir qu'il reste de la place dans la roadmap de l'éditeur"].map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-accent-default shrink-0" />
                  <span className="text-text-secondary">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={fadeUp} className="bg-bg-base rounded-[14px] p-8 border border-border-default">
            <p className="text-sm text-text-faint uppercase tracking-widest mb-5 font-semibold">No-code</p>
            <div className="space-y-3">
              {["Champs personnalisables", "Formulaires adaptables", "Écrans modifiables", "Sans développeur"].map((f) => (
                <div key={f} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-border-light">
                  <div className="w-2 h-2 rounded-full bg-service-green shrink-0" />
                  <span className="text-sm text-text-primary">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="base">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <ServiceTag service="formation" className="mb-5" />
            <h2 className="text-3xl font-bold text-text-emphasis mb-4">
              Nous restons avec vous dès le premier jour.
            </h2>
            <p className="text-text-subtle leading-relaxed">
              Notre méthode embarque toute votre équipe : 1h par jour, pendant 14 jours.
              Une approche humaine, progressive, qui assure une adoption naturelle.
            </p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Dès le premier jour", desc: "On commence l'accompagnement dès la mise en place." },
              { title: "1h par jour", desc: "Un rythme soutenable pour chaque utilisateur." },
              { title: "Toute l'équipe", desc: "Du directeur jusqu'à l'accueil, personne n'est laissé de côté." },
              { title: "Adoption garantie", desc: "L'outil devient naturellement un réflexe." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-white rounded-[14px] p-6 border border-border-light">
                <h3 className="font-bold text-text-emphasis mb-2">{item.title}</h3>
                <p className="text-sm text-text-subtle">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-text-emphasis mb-5">
            L&apos;outil devient un réflexe, pas une contrainte.
          </h2>
          <p className="text-text-subtle leading-relaxed mb-8">
            Quand un outil est simple, adapté et bien expliqué, il devient naturellement
            utilisé. Les équipes gagnent en fluidité, en coordination et en confort de travail.
          </p>
          <Button variant="primary" size="lg" href="mailto:bienvenue@oropra.com">
            Demander une démo
          </Button>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
