"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";

const plans = [
  {
    name: "Essentiel",
    desc: "L'essentiel pour simplifier le quotidien de vos équipes et structurer vos process.",
    features: ["Référentiel clients unique", "Opportunités", "Stock VO/VN", "Devis & BDC", "Tableaux de bord", "Formation 14 jours incluse"],
    cta: "Demander un devis", topColor: "bg-service-blue",
  },
  {
    name: "Management",
    desc: "Tous les outils pour décupler le management des équipes commerciales",
    features: ["Toutes les fonctionnalités Essentiel", "Appels téléphoniques (enregistrements audio, résumés, transcriptions)", "SMS, WhatsApp, Emails", "Interface espace client website", "Bilatérales Chef des ventes - vendeur"],
    cta: "Demander un devis", topColor: "bg-service-green",
  },
  {
    name: "Anticipation",
    desc: "Gagnez en ROI avec des fonctionnalités décisives",
    features: ["Toutes les fonctionnalités Management", "Feuille de gestion vendeur", "Suivi leads", "Marketing prédictif", "Marketing automatisé"],
    cta: "Nous contacter", topColor: "bg-service-orange",
  },
];

export default function PrixPage() {
  return (
    <>
      <section className="relative pt-[140px] pb-[100px] px-4 bg-[#3a6bbb] overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none">
          <source src="/images/reflet-metal-gauche.mp4" type="video/mp4" />
          <source src="/images/reflet-metal-gauche.mov" type="video/quicktime" />
        </video>
        <div className="relative max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-center gap-6">
            <motion.p variants={fadeUp} className="text-[11px] font-semibold text-accent-default uppercase tracking-[1.2px] bg-accent-subtle inline-block px-3.5 py-1.5 rounded-full">
              Tarifs
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]">
              Des formules simples et adaptées à votre organisation.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[17px] text-bg-elevated leading-[1.58] max-w-[660px]">
              Pas de complexité, pas de surprise. Des plans clairs et transparents, adaptés à la taille de votre concession ou de votre groupe.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-text-emphasis text-center mb-10">
            Choisissez la formule qui vous convient.
          </motion.h2>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                className="rounded-[14px] p-7 border border-border-light bg-white shadow-[var(--shadow-default)] flex flex-col relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${plan.topColor}`} />
                <h3 className="text-xl font-bold mb-4 text-text-emphasis">{plan.name}</h3>
                <p className="text-sm leading-relaxed mb-6 text-text-subtle">{plan.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-default" />
                      <span className="text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="primary"
                  size="md"
                  href="mailto:bienvenue@oropra.com"
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="white">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="max-w-2xl mx-auto">
          <motion.div variants={fadeUp} className="text-center mb-10">
            <h2 className="text-2xl font-bold text-text-emphasis mb-3">Complétez votre solution selon vos besoins.</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Connecteurs externes", "Reporting avancé et personnalisé", "Connecteurs métiers"].map((opt) => (
              <motion.div key={opt} variants={fadeUp} className="bg-bg-base rounded-xl px-5 py-4 border border-border-light flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-light shrink-0" />
                <span className="text-sm text-text-primary">{opt}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper bg="base">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-emphasis mb-4">Pas de surprise. Pas de coûts cachés.</h2>
          <p className="text-text-subtle leading-relaxed mb-8">
            Chaque plan inclut la formation, le support, et toutes les fonctionnalités essentielles. Vous payez pour ce que vous utilisez, rien de plus.
          </p>
          <Button variant="primary" size="lg" href="mailto:bienvenue@oropra.com">Demander une offre</Button>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
