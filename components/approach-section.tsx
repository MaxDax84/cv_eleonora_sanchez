"use client"

import { useInView } from "@/hooks/use-in-view"
import { Zap, Users, BarChart2, Globe } from "lucide-react"

const values = [
  {
    icon: BarChart2,
    title: "Data-Driven Mindset",
    description:
      "I approach every challenge with a strong analytical lens — building models that link KPIs to business outcomes and turning complex data into clear, actionable insights.",
  },
  {
    icon: Users,
    title: "People & Team Development",
    description:
      "Leading cross-functional teams is at the heart of my work. I believe great results come from empowered people, clear direction, and a culture of accountability.",
  },
  {
    icon: Globe,
    title: "Multicultural Perspective",
    description:
      "Fluent in Italian, English, and Spanish, with international academic experience across the UK and Spain — I bring a global mindset to every client engagement.",
  },
  {
    icon: Zap,
    title: "Result-Oriented Execution",
    description:
      "From strategy to delivery, I stay focused on impact. Whether it's a +12% NPS increase or a 30% CRM adoption improvement, I drive initiatives that move the needle.",
  },
]

export function ApproachSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-24 md:py-32 relative">
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
              My Approach
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all hover:bg-secondary/70"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
