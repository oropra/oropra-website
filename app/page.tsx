"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { CheckCircle2, Zap, Users, Sliders, ArrowRight, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServiceTag from "@/components/ui/ServiceTag";



export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-[140px] pb-[100px] px-4 bg-accent-default overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
        >
          <source src="/images/reflet-metal-gauche.mp4" type="video/mp4" />
          <source src="/images/reflet-metal-gauche.mov" type="video/quicktime" />
        </video>

        <div className="relative max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <motion.div initial="hidden" animate="show" variants={stagger} className="flex flex-col items-center gap-6">
            <motion.p
              variants={fadeUp}
              className="text-[11px] font-semibold text-accent-default uppercase tracking-[1.2px] bg-accent-subtle inline-block px-3.5 pt-1.5 pb-1 rounded-full"
            >
              CRM no-code pour concessions
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2rem,5vw,3.375rem)] font-bold text-white leading-[1.18]"
            >
              L&apos;outil qui épouse enfin les méthodes de vos équipes et plus jamais l&apos;inverse.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-[17px] text-bg-elevated leading-[1.58] max-w-[660px]"
            >
              Une plateforme pensée pour le quotidien : clients, opportunités, stock et
              communications réunis au même endroit. Adaptable en quelques minutes,
              accompagnée pas à pas pendant 14 jours pour une adoption sereine par toute votre équipe
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Button variant="primary-dark" size="lg" href="mailto:bienvenue@oropra.com">
                Demander une démo
              </Button>
              <Button variant="secondary-dark" size="lg" href="/solution">
                Découvrir le produit
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LES ESSENTIELS */}
      <SectionWrapper bg="base">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-emphasis mb-4">
              Une solution créée pour s&apos;adapter à la vie des équipes.
            </h2>
            <p className="text-text-subtle leading-relaxed">
              Nous avons conçu un outil qui se prend en main naturellement, qui s&apos;adapte
              facilement à votre façon de travailler, et qui accompagne toutes les équipes —
              de la direction jusqu&apos;à l&apos;accueil. Un outil qui clarifie, allège, synchronise.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap size={22} className="text-service-blue" />,
                iconBg: "bg-service-blue/10",
                title: "Simple à utiliser",
                desc: "Une interface claire que toute l'équipe adopte rapidement.",
              },
              {
                icon: <Users size={22} className="text-service-green" />,
                iconBg: "bg-service-green/10",
                title: "Proche du terrain",
                desc: "Nous accompagnons chaque utilisateur pendant 14 jours pour une parfaite appropriation",
              },
              {
                icon: <Sliders size={22} className="text-service-orange" />,
                iconBg: "bg-service-orange/10",
                title: "Libre et adaptable",
                desc: "Votre outil évolue avec vous : ajustez-le en quelques minutes.",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="bg-white rounded-[14px] p-7 border border-border-light shadow-[var(--shadow-default)] hover:shadow-[var(--shadow-strong)] transition-shadow duration-300"
              >
                <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
                  {card.icon}
                </div>
                <h3 className="font-bold text-text-emphasis mb-2">{card.title}</h3>
                <p className="text-sm text-text-subtle leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* CE QUE VOUS POUVEZ FAIRE */}
      <SectionWrapper bg="white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-emphasis mb-8">
              Tout votre quotidien, enfin réuni et simplifié.
            </h2>
            <ul className="space-y-4">
              {[
                "Suivre vos clients et historiser leurs échanges",
                "Piloter vos opportunités et vos relances",
                "Visualiser votre stock VO/VN en un coup d'œil",
                "Centraliser appels, WhatsApp, SMS et emails",
                "Harmoniser l'information entre les équipes",
                "Gagner du temps… tous les jours",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-accent-default mt-0.5 shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="primary" size="md" href="/fonctionnalites">
                Voir toutes les fonctionnalités
                <ArrowRight size={15} className="ml-2" />
              </Button>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-3">
            {[
              { label: "Clients & Historique", color: "bg-service-blue" },
              { label: "Opportunités & Relances", color: "bg-service-green" },
              { label: "Stock VO / VN", color: "bg-service-orange" },
              { label: "Communications unifiées", color: "bg-accent-light" },
              { label: "Tableaux de bord", color: "bg-service-green" },
            ].map((mod, i) => (
              <div
                key={mod.label}
                className="bg-white border border-border-default rounded-xl px-5 py-4 flex items-center gap-3 relative overflow-hidden"
              >
                <div className={`w-1.5 h-full absolute left-0 top-0 ${mod.color}`} />
                <span className="font-medium text-text-primary text-sm ml-2">{mod.label}</span>
                <span className="text-xs text-text-faint ml-auto">Module {i + 1}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* MÉTHODE CLAIRE */}
      <SectionWrapper bg="base">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-semibold text-accent-default uppercase tracking-widest mb-3">
              Méthode CLAIRE
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-emphasis mb-4">
              Une approche en 4 étapes pour rendre votre entreprise autonome.
            </h2>
            <p className="text-text-subtle leading-relaxed">
              Ne pas seulement livrer un outil, mais rendre l&apos;entreprise riche de l&apos;exploitation de ses données.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                service: "setup" as const,
                title: "Set up",
                desc: "Création de votre base One-Data branchée sur vos DMS, et paramétrage de l'outil.",
                step: "01",
                topColor: "bg-service-blue",
              },
              {
                service: "design" as const,
                title: "Design",
                desc: "Adaptation en quelques heures de l'outil à vos incontournables métiers.",
                step: "02",
                topColor: "bg-service-green",
              },
              {
                service: "deploiement" as const,
                title: "Déploiement",
                desc: "Embarquement pendant 14 jours de toutes les équipes. Objectif : oublier l'outil devenu naturel.",
                step: "03",
                topColor: "bg-service-orange",
              },
              {
                service: "evolution" as const,
                title: "Evolution",
                desc: "La technologie permet de traiter vos demandes d'évolutions en quelques heures. Fini les services supports débordés.",
                step: "04",
                topColor: "bg-accent-light",
              },
            ].map((step) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                className="bg-white rounded-[14px] p-6 border border-border-light shadow-[var(--shadow-default)] relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${step.topColor}`} />
                <span className="absolute top-4 right-5 text-4xl font-bold text-border-default select-none">
                  {step.step}
                </span>
                <div className="mb-4">
                  <ServiceTag service={step.service} />
                </div>
                <h3 className="font-bold text-text-emphasis mb-2">{step.title}</h3>
                <p className="text-sm text-text-subtle leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* POURQUOI C'EST DIFFÉRENT */}
      <SectionWrapper bg="white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-emphasis">
              Nous croyons que la simplicité change tout.
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Simplicité",
                desc: "Une interface fluide et intuitive. Pas de complexité inutile.",
                borderColor: "border-accent-default",
              },
              {
                title: "Proximité",
                desc: "14 jours de formation quotidienne pour embarquer toute l'équipe.",
                borderColor: "border-service-green",
              },
              {
                title: "Liberté",
                desc: "Vous adaptez l'outil à votre métier, en quelques heures.",
                borderColor: "border-service-orange",
              },
            ].map((col) => (
              <motion.div
                key={col.title}
                variants={fadeUp}
                className={`bg-bg-base rounded-[14px] p-8 border-[3px] ${col.borderColor}`}
              >
                <h3 className="text-xl font-bold text-text-emphasis mb-3">{col.title}</h3>
                <p className="text-text-subtle leading-relaxed">{col.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* TÉMOIGNAGES */}
      <SectionWrapper bg="base">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-emphasis mb-3">
              Des résultats concrets
            </h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "En 14 jours toute mon équipe était autonome. Je n'aurais pas cru ça possible.",
                author: "Christine L.",
                company: "Chef des ventes VO",
                topColor: "bg-service-blue",
              },
              {
                quote: "L'adhésion immédiate des équipes rend cet outil redoutablement puissant. Il a bouleversé le management des équipes commerciales et la qualité de la relation perçue par nos clients. Le cœur de notre métier en somme...",
                author: "Charles R.",
                company: "Directeur de concession",
                topColor: "bg-service-green",
              },
              {
                quote: "J'avoue que je ne me vois pas du tout faire machine arrière depuis qu'on nous a mis en main cet outil. Mention spéciale pour la gestion des ventes qui me permet de voir tout mon pipe commercial en un seul coup d'œil !",
                author: "Maxime B.",
                company: "Vendeur VN",
                topColor: "bg-service-orange",
              },
            ].map((t) => (
              <motion.div
                key={t.quote}
                variants={fadeUp}
                className="bg-white rounded-[14px] p-7 border border-border-light shadow-[var(--shadow-default)] relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 ${t.topColor}`} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-service-orange text-service-orange" />
                  ))}
                </div>
                <p className="text-text-primary font-medium leading-relaxed mb-5">
                  &laquo;&nbsp;{t.quote}&nbsp;&raquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-text-emphasis">{t.author}</p>
                  <p className="text-xs text-text-faint">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* ACCOMPAGNEMENT */}
      <SectionWrapper bg="white">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp}>
            <ServiceTag service="formation" className="mb-5" />
            <h2 className="text-3xl sm:text-4xl font-bold text-text-emphasis mb-5">
              Un accompagnement qui change vraiment la donne.
            </h2>
            <p className="text-text-subtle leading-relaxed mb-8">
              Pendant 14 jours, nous formons chaque membre de votre équipe, une heure par
              jour. Pas à pas, à votre rythme. Tout le monde prend en main l&apos;outil
              sereinement et durablement.
            </p>
            <Button variant="primary" size="md" href="mailto:bienvenue@oropra.com">
              Demander une démo
            </Button>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
            {[
              { label: "Simple et progressif", icon: "📈" },
              { label: "1h / jour / utilisateur", icon: "⏱" },
              { label: "Présence humaine", icon: "🤝" },
              { label: "Adoption garantie", icon: "✅" },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="bg-bg-base rounded-[14px] p-5 border border-border-light text-center"
              >
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <p className="text-sm font-semibold text-text-primary">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* CTA FINAL */}
      <section className="py-24 px-4 bg-text-primary">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-white mb-5"
          >
            Envie de découvrir la solution ?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/70 mb-8 leading-relaxed">
            Échangeons sur vos besoins. Une démonstration, sans engagement.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button
              variant="secondary"
              size="lg"
              href="mailto:bienvenue@oropra.com"
              className="bg-white text-text-primary border-white hover:bg-white/90"
            >
              Demander une démonstration
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
