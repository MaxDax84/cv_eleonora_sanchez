"use client"

import { useInView } from "@/hooks/use-in-view"
import {
  Users,
  Target,
  BarChart2,
  Layers,
  Heart,
  TrendingUp,
} from "lucide-react"

const tools = [
  { name: "Power BI", category: "Analytics" },
  { name: "MS Office Suite", category: "Productivity" },
  { name: "Qualtrics", category: "CX Research" },
  { name: "Medallia", category: "CX Platform" },
  { name: "Sandsiv", category: "CX Platform" },
  { name: "Figma", category: "Design" },
  { name: "Miro / Mural", category: "Collaboration" },
  { name: "App2Check", category: "Accessibility" },
]

const focusAreas = [
  { icon: Target, label: "Marketing & Sales Strategy" },
  { icon: Heart, label: "Customer Experience (CX)" },
  { icon: BarChart2, label: "Data Analysis & KPI Management" },
  { icon: Users, label: "Team Leadership & Development" },
  { icon: TrendingUp, label: "Business Development" },
  { icon: Layers, label: "Business Transformation" },
]

const coreCompetencies = [
  "Business Development",
  "Marketing Strategy & Planning",
  "Customer Experience Strategy",
  "CX Measurement & Governance",
  "Account Management",
  "Project Management",
  "Team Management",
  "Data Analysis & Market Research",
  "B2B and B2C Sales Improvement",
  "Loyalty Programs Design",
  "Business KPIs Improvement",
  "Pricing Strategy",
  "Commercial Operating Model",
  "Cross-Functional Leadership",
]

export function SkillsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30 relative">
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
              Skills & Expertise
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Core Competencies */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-3">
              {coreCompetencies.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Two-column grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Tools */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Tools & Platforms
              </h3>
              <div className="space-y-3">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-all"
                  >
                    <span className="font-medium text-foreground">{tool.name}</span>
                    <span className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus Areas */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Professional Focus Areas
              </h3>
              <div className="space-y-3">
                {focusAreas.map((area, index) => {
                  const Icon = area.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{area.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
