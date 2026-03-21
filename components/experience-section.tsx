"use client"

import { useInView } from "@/hooks/use-in-view"
import { ChevronRight } from "lucide-react"

const experiences = [
  {
    company: "Ernst & Young — Milan, Italy",
    role: "Manager – Marketing and Sales Strategy & Customer Experience",
    period: "Mar 2022 — Present",
    description:
      "Lead cross-functional teams (6+ FTE) and drive transformation programs across multiple industries (Tech, Energy, Telco, Insurance, Food & Beverage), working closely with C-level stakeholders on customer, marketing and commercial strategies.",
    highlights: [
      "Business development: delivered 10–15 strategic proposals/year, supporting business development and account growth",
      "Commercial team portfolio: defined and executed the commercial re-portfolio strategy for 70+ sales reps, improving client–sales alignment and coverage effectiveness",
      "Financial–performance correlation: developed a data-driven correlation model linking financial KPIs with operational and CX performance",
      "CX measurement & governance: designed the CX measurement framework (journeys, listening model, dashboards), contributing to a +12% NPS increase",
      "Pricing excellence: developed and implemented the new pricing operating model, reducing operational effort by 10%",
      "Loyalty program: re-designed the loyalty strategy, increasing customer retention by 8%",
    ],
  },
  {
    company: "KPMG Advisory S.p.A. — Milan, Italy",
    role: "Senior Consultant – Customer Experience & Marketing Strategy",
    period: "Mar 2019 — Mar 2022",
    description:
      "Managed multifunctional projects across multiple industries (Energy, Telco, Entertainment & Media, Food & Beverage, Fashion), delivering end-to-end transformation programs.",
    highlights: [
      "Marketing & sales strategy: contributed to redesigning the commercial operating model and improved CRM adoption by 30%, strengthening alignment between marketing and sales",
      "CX & performance improvement: analyzed customer and business KPIs to identify 10 priority transformation areas, focusing efforts on the 5 initiatives with the highest impact on CX and commercial performance",
    ],
  },
  {
    company: "Bournemouth University — Bournemouth, UK",
    role: "Research Assistant",
    period: "Mar 2018 — Sep 2018",
    description:
      "Supported academic research activities within the marketing department during the MSc program.",
    highlights: [
      "Assisted in data collection, analysis, and reporting for marketing research projects",
      "Contributed to the development of research frameworks and literature reviews",
    ],
  },
  {
    company: "Artsana S.p.A. (Pikdare dept) — Como, Italy",
    role: "Assistant of Marketing Director",
    period: "Jan 2017 — Jul 2017",
    description:
      "Supported the Marketing Director in day-to-day operations and strategic marketing initiatives within the Pikdare division.",
    highlights: [
      "Assisted in the planning and execution of marketing campaigns and product launches",
      "Coordinated cross-functional activities between marketing, sales, and product teams",
    ],
  },
]

export function ExperienceSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h2 className="text-sm tracking-[0.3em] uppercase text-primary font-medium">
              Experience
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
