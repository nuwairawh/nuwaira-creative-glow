import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight, Code2, Film, Palette, PenTool, Send, Github,
  Instagram, Linkedin, Twitter, Mail, Sparkles, ArrowUpRight,
} from "lucide-react";
import coffeeImg from "@/assets/project-coffee.jpg";
import threeDImg from "@/assets/project-3d.jpg";
import videoImg from "@/assets/project-video.jpg";
import brandImg from "@/assets/project-brand.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const PROJECTS = [
  { title: "Coffee Shop Website", tag: "Web Design", desc: "Warm, minimal landing page for a neighborhood café with online menu.", img: coffeeImg, href: "https://brew-to-web-magic.lovable.app/" },
  { title: "3D Animated Landing", tag: "Concept", desc: "Futuristic landing concept with floating gradient orbs and motion.", img: threeDImg, href: "#contact" },
  { title: "Video Editing Reel", tag: "Video", desc: "Short-form edit sample with color grade and rhythmic cuts.", img: videoImg, href: "#contact" },
  { title: "Neon Brand Identity", tag: "Creative", desc: "A glowing identity exploration for a digital-first studio.", img: brandImg, href: "#contact" },
];

const SKILLS = [
  { icon: Code2, name: "Website Creation", level: 75 },
  { icon: Film, name: "Video Editing", level: 65 },
  { icon: PenTool, name: "Basic Animation", level: 55 },
  { icon: Palette, name: "Content Creation", level: 70 },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">
        <a href="#home" className="flex items-center gap-2 font-display text-sm font-bold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--gradient-neon)] text-primary-foreground">N</span>
          <span className="hidden sm:inline">nuwaira.</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden rounded-xl border border-[var(--glass-border)] bg-primary/10 px-4 py-2 text-xs font-medium text-foreground transition-all hover:bg-primary/20 hover:shadow-[var(--shadow-neon)] md:inline-block">
          Hire me
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-foreground transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>
      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative grid min-h-screen place-items-center px-4 pt-24">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.25 295 / 0.5), transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Available for freelance projects
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl font-bold leading-[1.05] sm:text-7xl md:text-8xl"
        >
          Creative <br />
          <span className="neon-text">Digital Creator</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          I build modern websites and edit engaging digital content. Crafted by Nuwaira Mukhnun Ahmed.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-neon)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-neon)] transition-transform hover:scale-105">
            View My Work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }} className="mb-14 text-center"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold sm:text-5xl">{title}</h2>
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="relative px-4 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="About" title="Beginner energy. Pro mindset." />
        <div className="grid gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }} className="glass relative overflow-hidden rounded-3xl p-8 md:col-span-2"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative">
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gradient-neon)] text-primary-foreground">
                <Sparkles className="h-6 w-6" />
              </div>
              <p className="font-display text-2xl font-semibold">Hi, I'm Nuwaira</p>
              <p className="mt-2 text-sm text-muted-foreground">A passionate freelance creator turning ideas into clean, modern digital experiences.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }} className="glass rounded-3xl p-8 md:col-span-3"
          >
            <p className="text-base leading-relaxed text-muted-foreground">
              I'm a beginner-to-intermediate freelancer focused on <span className="text-foreground">website building</span>,
              <span className="text-foreground"> basic video editing</span>, and
              <span className="text-foreground"> creative design thinking</span>. I love working with small brands and
              fellow creators to bring fresh, modern ideas to life — fast, clean, and made with care.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              {[
                { n: "10+", l: "Projects" },
                { n: "2yrs", l: "Learning" },
                { n: "100%", l: "Passion" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-[var(--glass-border)] bg-background/30 p-4">
                  <div className="neon-text font-display text-2xl font-bold">{s.n}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Selected Work" title="Projects & experiments" />
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.title} href={p.href}
              target={p.href.startsWith('http') ? '_blank' : undefined}
              rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass relative overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img} alt={p.title} loading="lazy" width={1024} height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-[var(--glass-border)] bg-background/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-primary backdrop-blur">
                  {p.tag}
                </div>
                <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-[var(--gradient-neon)] opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative px-4 py-32">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="Toolkit" title="What I work with" />
        <div className="grid gap-4 sm:grid-cols-2">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass group rounded-2xl p-6 transition-all hover:border-primary/50 hover:shadow-[var(--shadow-neon)]"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--gradient-neon)] text-primary-foreground transition-transform group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-display font-semibold">{s.name}</p>
                    <span className="text-xs text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                      className="h-full rounded-full bg-[var(--gradient-neon)]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative px-4 py-32">
      <div className="mx-auto max-w-3xl">
        <SectionTitle eyebrow="Contact" title="Let's build something great" />
        <motion.form
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10"
        >
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" placeholder="Your name" required />
              <Field label="Email" type="email" placeholder="you@email.com" required />
            </div>
            <div>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                required rows={5} placeholder="Tell me about your project…"
                className="w-full rounded-xl border border-[var(--glass-border)] bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--gradient-neon)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-neon)] transition-transform hover:scale-[1.02] sm:w-auto"
            >
              {sent ? "Sent ✓" : "Send message"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--glass-border)] pt-5">
              <a href="mailto:nuwairaahmd4@gmail.com" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <Mail className="h-4 w-4" /> nuwairaahmd4@gmail.com
              </a>
              <div className="flex items-center gap-2">
                {[Github, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-lg border border-[var(--glass-border)] bg-background/40 text-muted-foreground transition-all hover:border-primary/60 hover:text-primary hover:shadow-[var(--shadow-neon)]">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        {...rest}
        className="w-full rounded-xl border border-[var(--glass-border)] bg-background/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Nuwaira Mukhnun Ahmed. All rights reserved.</p>
        <p>Designed & built with care.</p>
      </div>
    </footer>
  );
}
