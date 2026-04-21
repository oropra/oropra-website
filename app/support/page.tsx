"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServiceTag from "@/components/ui/ServiceTag";

export default function SupportPage() {
  return (
    <>
      <section className="relative pt-[140px] pb-[100px] px-4 bg-[#3a6bbb] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none">
          <source src="/images/reflet-metal-gauche.mp4" type="video/mp4" />
          <source src="/images/reflet-metal-gauche.mov" type="video/quicktime" />
        </video>
        <div className="relative max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-center gap-6">
            <motion.p variants={fadeUp} className="text-[11px] font-semibold text-accent-default uppercase tracking-[1.2px] bg-accent-subtle inline-block px-3.5 pt-1.5 pb-1 rounded-full">
              Support
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]">
              Un support humain. Un accompagnement quotidien. Une adoption garantie.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-bg-elevated leading-[1.58] max-w-[660px]">
              Nous restons à vos côtés avant, pendant et après l&apos;installation. Parce que la réussite d&apos;un outil dépend d&apos;abord des équipes qui l&apos;utilisent.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp}>
            <ServiceTag service="formation" className="mb-5" />
            <h2 className="text-3xl font-bold text-text-emphasis mb-5">Une méthode simple, progressive et efficace.</h2>
            <p className="text-text-subtle leading-relaxed">
              Chaque utilisateur est accompagné pendant 14 jours, une heure par jour. On avance doucement, on répond aux questions, on prend le temps d&apos;installer des habitudes.
            </p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
            {[
              { label: "1h par jour", sub: "par utilisateur" },
              { label: "Progression", sub: "naturelle" },
              { label: "Adaptée", sub: "à chaque rôle" },
              { label: "Adoption", sub: "sereine" },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="bg-white rounded-[14px] p-5 border border-border-light text-center shadow-[var(--shadow-default)]">
                <p className="font-bold text-text-emphasis">{item.label}</p>
                <p className="text-xs text-text-faint mt-1">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-emphasis mb-4">Nous restons proches de vous.</h2>
            <p className="text-text-subtle leading-relaxed">
              Notre support est réactif, humain et attentif. Nous vous connaissons, nous connaissons vos équipes. Vous n&apos;êtes jamais seuls.
            </p>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: "💬", title: "Réactif", desc: "Une réponse rapide à chaque question." },
              { icon: "🤝", title: "Humain", desc: "On se connaît, on parle le même langage." },
              { icon: "👁", title: "Attentif", desc: "On suit vos besoins et on s'adapte." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-bg-base rounded-[14px] p-6 border border-border-light text-center">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-text-emphasis mb-2">{item.title}</h3>
                <p className="text-sm text-text-subtle">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="max-w-2xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-text-emphasis mb-3">Des contenus simples et accessibles.</h2>
          </motion.div>
          <motion.div variants={stagger} className="space-y-3">
            {[
              { icon: "🎬", label: "Vidéos d'usage courtes" },
              { icon: "📋", label: "Guides étape par étape" },
              { icon: "📚", label: "Articles pour aller plus loin" },
            ].map((item) => (
              <motion.div key={item.label} variants={fadeUp} className="bg-white rounded-xl px-5 py-4 border border-border-light flex items-center gap-4">
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium text-text-primary">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 text-center">
            <Button variant="primary" size="lg" href="mailto:bienvenue@oropra.com">Contacter le support</Button>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
