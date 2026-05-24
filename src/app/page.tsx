import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { ShieldCheck, Server, Terminal, GraduationCap, Briefcase, Award, Mail, Phone, ExternalLink } from "lucide-react";

const BLUR_FADE_DELAY = 0.03;

function TerminalWidget() {
  return (
    <div className="w-full rounded-2xl bg-zinc-950/95 text-emerald-400 font-mono text-[11px] sm:text-xs border border-emerald-500/10 dark:border-emerald-500/20 shadow-[0_15px_40px_-15px_rgba(16,185,129,0.15)] dark:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.6)] p-4 sm:p-5 overflow-hidden relative backdrop-blur-md">
      <div className="flex items-center gap-1.5 pb-3 border-b border-white/5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="text-[10px] text-zinc-500 ml-2 select-none">rupi014@portfolio:~</span>
      </div>
      <div className="space-y-2 leading-relaxed">
        <p className="text-zinc-500 font-normal select-none">&#47;&#47; rubens-profile.sh</p>

        <p className="flex items-center gap-1.5">
          <span className="text-zinc-500">rupi014@portfolio:~$</span>
          <span className="text-white">whoami</span>
        </p>
        <p className="text-emerald-400 font-bold pl-3">➔ Rubens Ballester Lillo</p>

        <p className="flex items-center gap-1.5 mt-3">
          <span className="text-zinc-500">rupi014@portfolio:~$</span>
          <span className="text-white">get --details</span>
        </p>
        <div className="pl-3 text-zinc-300 space-y-1 break-words">
          <p><span className="text-emerald-500 font-bold">[PERFIL]</span> Jr. Cybersecurity & Full Stack</p>
          <p><span className="text-emerald-500 font-bold">[NODO]</span> Portugalete, Vizcaya (ESP)</p>
          <p><span className="text-emerald-500 font-bold">[FOCO]</span> Pentesting Web & Malware</p>
          <p><span className="text-emerald-500 font-bold">[SHELL]</span> Bash / Python / React</p>
        </div>

        <p className="flex items-center gap-1.5 mt-3">
          <span className="text-zinc-500">rupi014@portfolio:~$</span>
          <span className="text-white">check-shields</span>
        </p>
        <p className="pl-3 text-emerald-400 flex items-center gap-2 select-none font-bold">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse shadow-[0_0_8px_#10b981]" />
          <span>[SYSTEM ACTIVE & SECURED]</span>
        </p>

        <p className="flex items-center gap-1.5 mt-3">
          <span className="text-zinc-500">rupi014@portfolio:~$</span>
          <span className="text-white">load --top-creds</span>
        </p>

        <p className="pl-3 text-emerald-400 font-bold items-center gap-1.5">➔ eWPT | eJPTv2 | ICCA | CEHPC</p>

        <p className="flex items-center gap-1.5 mt-3">
          <span className="text-zinc-500">rupi014@portfolio:~$</span>
          <span className="text-white">_</span>
          <span className="terminal-cursor" />
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  // Grouping skills for the Bento Grid section
  const skillsCategories = [
    {
      title: "⚔️ RED TEAM / PENTESTING",
      skills: ["Kali Linux", "Metasploit", "BurpSuite", "Wireshark"]
    },
    {
      title: "🛡️ BLUE TEAM / FORENSICS",
      skills: ["PE Studio", "ILSpy", "Ghidra"]
    },
    {
      title: "💻 FULL-STACK DEVELOPMENT",
      skills: ["React", "JavaScript", "Node.js", "Express", "Python", "FastAPI", "Flask", "HTML", "SCSS/SASS"]
    },
    {
      title: "🗄️ DATABASES & DEV TOOLS",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Mongoose", "Git"]
    }
  ];

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16 sm:space-y-24 pb-20">

      {/* HERO SECTION — 3-column: portrait left | text center | terminal right */}
      <section id="hero" className="w-full pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_340px] gap-6 xl:gap-8 items-center">

          {/* Col 1: Profile Portrait */}
          <BlurFade delay={BLUR_FADE_DELAY} className="flex justify-center lg:justify-start order-1">
            <div className="relative group">
              {/* Outer ambient glow */}
              <div className="absolute -inset-5 rounded-full blur-2xl group-hover:opacity-80 transition-all duration-700 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.35) 0%, transparent 70%)" }} />
              {/* Rotating dashed ring */}
              <div
                className="absolute -inset-2 rounded-full border border-dashed border-emerald-500/30"
                style={{ animation: "spin 22s linear infinite" }}
              />
              {/* Static ring */}
              <div className="absolute inset-0 rounded-full border border-emerald-500/20" />
              {/* Portrait */}
              <div className="relative size-44 sm:size-52 lg:size-[210px] rounded-full overflow-hidden border-2 border-emerald-500/40 shadow-[0_0_45px_rgba(16,185,129,0.22)] group-hover:shadow-[0_0_65px_rgba(16,185,129,0.38)] transition-all duration-500">
                <Avatar className="size-full rounded-full">
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="object-cover object-top w-full h-full scale-105"
                  />
                  <AvatarFallback className="bg-zinc-800 text-white text-4xl font-bold size-full flex items-center justify-center">
                    {DATA.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/25 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-zinc-900/90 border border-emerald-500/25 text-emerald-400 text-[10px] font-mono font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-lg whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                DISPONIBLE
              </div>
            </div>
          </BlurFade>

          {/* Col 2: Text Content */}
          <div className="space-y-4 order-2 text-center lg:text-left">
            <div className="space-y-2">
              <BlurFade delay={BLUR_FADE_DELAY * 1.2}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-mono tracking-widest select-none uppercase animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>NODO PRINCIPAL ACTIVO</span>
                </div>
              </BlurFade>
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 1.5}
                className="text-3xl font-extrabold tracking-tighter sm:text-4xl xl:text-5xl text-white leading-tight"
                yOffset={8}
                text={`Hola, soy ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="text-base sm:text-lg font-bold tracking-tight text-emerald-400 font-mono"
                delay={BLUR_FADE_DELAY * 2}
                text="Técnico en Ciberseguridad"
              />
            </div>

            <BlurFade delay={BLUR_FADE_DELAY * 2.5}>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {DATA.description}
              </p>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY * 3} className="flex flex-col gap-2 pt-1">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="size-3.5 text-emerald-500 flex-none" />
                <span className="text-xs font-mono text-neutral-300 font-semibold tracking-wide">eWPT · eJPTv2 · ICCA · CEHPC</span>
              </div>
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 hover:underline transition-colors w-fit mx-auto lg:mx-0"
              >
                <Mail className="size-3.5" /> rubens.bali@gmail.com
              </Link>
            </BlurFade>
          </div>

          {/* Col 3: Compact Terminal */}
          <BlurFade delay={BLUR_FADE_DELAY * 3.5} className="order-3 h-full">
            <TerminalWidget />
          </BlurFade>

        </div>
      </section>

      {/* DASHBOARD: BENTO GRID SECTION (ABOUT & SKILLS) */}
      <section id="bento-dashboard" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

          {/* Bento Box 1: Sobre mí (3/5 width) */}
          <div className="md:col-span-3">
            <BlurFade delay={BLUR_FADE_DELAY * 4} className="h-full">
              <div className="cyber-glow-card rounded-3xl p-6 sm:p-8 flex flex-col h-full border border-black/[0.04] dark:border-white/[0.05] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 text-[9px] font-mono text-neutral-400 dark:text-neutral-600 font-bold tracking-widest pointer-events-none select-none uppercase">
                  &#47;&#47; RESUMEN_LOG_01
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/5 text-emerald-500 border border-emerald-500/10">
                    <Terminal className="size-4" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground dark:text-white">
                    Sobre mí
                  </h3>
                </div>
                <div className="prose max-w-full text-pretty font-sans text-xs sm:text-sm text-muted-foreground dark:text-neutral-300 leading-relaxed dark:prose-invert flex-grow">
                  {DATA.summary}
                </div>
                <div className="mt-6 pt-4 border-t border-black/[0.03] dark:border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-500 select-none">
                  <span>SEC_PROFILE: COMPLIANT</span>
                  <span>INIT_VER: 0.1.0</span>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Bento Box 2: Habilidades Categorizadas (2/5 width) */}
          <div className="md:col-span-2">
            <BlurFade delay={BLUR_FADE_DELAY * 5} className="h-full">
              <div className="cyber-glow-card rounded-3xl p-6 sm:p-8 flex flex-col h-full border border-black/[0.04] dark:border-white/[0.05] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 text-[9px] font-mono text-neutral-400 dark:text-neutral-600 font-bold tracking-widest pointer-events-none select-none uppercase">
                  &#47;&#47; DEPLOYED_TECH_02
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 rounded-lg bg-emerald-500/5 text-emerald-500 border border-emerald-500/10">
                    <Server className="size-4" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground dark:text-white">
                    Habilidades
                  </h3>
                </div>

                {/* Categorized Skills Stack */}
                <div className="space-y-4 flex-grow">
                  {skillsCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <span className="text-[10px] font-mono font-bold text-emerald-500/80 dark:text-emerald-400/80 tracking-wide block uppercase">
                        {cat.title}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {cat.skills.map((skill) => (
                          <Badge
                            key={skill}
                            className="px-1.5 py-0 text-[10px] font-sans bg-black/[0.02] dark:bg-white/[0.02] text-muted-foreground dark:text-neutral-300 border border-black/5 dark:border-white/5 hover:bg-emerald-500/5 dark:hover:bg-emerald-500/5 hover:border-emerald-500/20 transition-all duration-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="w-full">
        <div className="space-y-8 w-full py-2">
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 px-3.5 py-1 text-xs font-mono tracking-widest uppercase">
                PORTAFOLIO_TRABAJOS
              </div>
              <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl text-foreground dark:text-white">
                Mira mis últimos proyectos
              </h2>
              <p className="text-muted-foreground dark:text-neutral-400 text-sm sm:text-base max-w-[650px] leading-relaxed">
                He trabajado en diversos proyectos especializados, desde auditorías de ciberseguridad, análisis forense de malware e ingeniería inversa, hasta el desarrollo de aplicaciones web completas.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto pt-4">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 7 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS (HOLOGRAPHIC CREDENTIALS GRID) */}
      <section id="certifications" className="w-full">
        <div className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 px-3.5 py-1 text-xs font-mono tracking-widest uppercase">
                CREDENCY_DEPLOYS
              </div>
              <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl text-foreground dark:text-white">
                Certificaciones Oficiales
              </h2>
              <p className="text-muted-foreground dark:text-neutral-400 text-sm sm:text-base max-w-[650px] leading-relaxed">
                Credenciales validadas internacionalmente que certifican competencias avanzadas en pentesting, análisis de seguridad y gestión en la nube.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto pt-4">
            {DATA.certifications.map((certification, id) => (
              <BlurFade
                key={certification.title}
                delay={BLUR_FADE_DELAY * 9 + id * 0.05}
              >
                <Link
                  href={certification.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="cyber-glow-card rounded-2xl p-4 flex items-center justify-between border border-black/[0.04] dark:border-white/[0.05] hover:border-emerald-500/20 dark:hover:shadow-[0_0_20px_rgba(16,185,129,0.04)] transition-all duration-300 h-full">
                    <div className="flex items-center gap-4">
                      <Avatar className="size-12 border border-black/5 dark:border-white/10 rounded-xl bg-white dark:bg-zinc-900 p-1 flex-none shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <AvatarImage
                          src={certification.logoUrl}
                          alt={certification.issuer}
                          className="object-contain"
                        />
                        <AvatarFallback className="font-mono text-sm font-bold bg-muted">{certification.issuer[0]}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold tracking-tight text-foreground dark:text-white group-hover:text-emerald-400 transition-colors leading-tight">
                          {certification.title}
                        </h4>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                          {certification.issuer}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between gap-y-2 pl-2 flex-none">
                      <span className="text-[10px] font-mono text-muted-foreground px-2 py-0.5 rounded bg-black/5 dark:bg-white/5">
                        {certification.date}
                      </span>
                      <span className="text-[10px] text-emerald-500 font-mono tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1 font-bold">
                        VER <ExternalLink className="size-2.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINES: WORK & EDUCATION (SIDE BY SIDE ON DESKTOP) */}
      <section id="experience-education" className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">

          {/* Work Experience */}
          <div className="space-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <div className="flex items-center gap-2 pb-2 border-b border-black/[0.05] dark:border-white/[0.05]">
                <div className="p-2 rounded-xl bg-emerald-500/5 text-emerald-500 border border-emerald-500/10">
                  <Briefcase className="size-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground dark:text-white">
                  Experiencia Laboral
                </h2>
              </div>
            </BlurFade>

            <div className="flex flex-col gap-y-4">
              {DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 11 + id * 0.05}
                >
                  <ResumeCard
                    key={work.company}
                    logoUrl={work.logoUrl}
                    altText={work.company}
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.start} - ${work.end ?? "Actualidad"}`}
                    description={work.description}
                  />
                </BlurFade>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <div className="flex items-center gap-2 pb-2 border-b border-black/[0.05] dark:border-white/[0.05]">
                <div className="p-2 rounded-xl bg-emerald-500/5 text-emerald-500 border border-emerald-500/10">
                  <GraduationCap className="size-4" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground dark:text-white">
                  Educación
                </h2>
              </div>
            </BlurFade>

            <div className="flex flex-col gap-y-4">
              {DATA.education.map((education, id) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 13 + id * 0.05}
                >
                  <ResumeCard
                    key={education.school}
                    href={undefined}
                    logoUrl={education.logoUrl}
                    altText={education.school}
                    title={education.school}
                    subtitle={education.degree}
                    period={`${education.start} - ${education.end}`}
                    description={education.description}
                  />
                </BlurFade>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION (PREMIUM CALL TO ACTION CARD) */}
      <section id="contact" className="w-full">
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <div className="cyber-glow-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-black/[0.04] dark:border-white/[0.05] dark:border-emerald-500/10 max-w-4xl mx-auto shadow-xl group">
            <div className="absolute top-0 right-0 p-4 text-[9px] font-mono text-neutral-400 dark:text-neutral-600 font-bold tracking-widest pointer-events-none select-none uppercase">
              &#47;&#47; COMM_LINK_INIT
            </div>

            {/* Ambient inner glow for contact */}
            <div className="absolute -inset-10 bg-emerald-500/5 filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-[-1]" />

            <div className="space-y-4 relative z-10">
              <div className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 px-3.5 py-1 text-xs font-mono tracking-widest uppercase">
                CONTACTO_NODO
              </div>
              <h2 className="text-3xl font-extrabold tracking-tighter sm:text-5xl text-foreground dark:text-white">
                Ponerse en contacto
              </h2>
              <p className="mx-auto max-w-[550px] text-muted-foreground dark:text-neutral-400 text-sm sm:text-base leading-relaxed pt-1">
                ¿Tienes alguna brecha de seguridad que deba auditarse o un desarrollo web innovador que quieras poner en marcha? Envíame un correo electrónico o un mensaje directo y me pondré en contacto lo antes posible.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 max-w-md mx-auto">
                <Button asChild className="w-full sm:w-auto px-6 py-5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/95 transition-all shadow-md font-mono text-xs tracking-wider flex items-center justify-center gap-2">
                  <Link href={`mailto:${DATA.contact.email}`} target="_blank">
                    <Mail className="size-4" /> ENVIAR CORREO
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto px-6 py-5 rounded-xl border border-black/10 dark:border-emerald-500/20 bg-transparent text-foreground dark:text-emerald-400 hover:bg-emerald-500/5 transition-all font-mono text-xs tracking-wider flex items-center justify-center gap-2">
                  <Link href="https://linkedin.com/in/rubensbl" target="_blank">
                    <ExternalLink className="size-4" /> LINKEDIN
                  </Link>
                </Button>
              </div>

              <div className="pt-4 flex justify-center items-center gap-2 sm:gap-4 flex-wrap text-xs font-mono text-muted-foreground select-none">
                <span>TLF: +34 679 88 83 69</span>
                <span className="hidden sm:inline">•</span>
                <span>PORTUGALETE, ESP</span>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

    </main>
  );
}
