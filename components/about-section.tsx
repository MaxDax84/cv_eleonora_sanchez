"use client"

import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h2 className="text-sm tracking-[0.3em] uppercase text-primary font-medium">
              Profile
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg md:text-xl text-foreground font-medium text-pretty">
              Business Consulting Manager with 5+ years of experience at Ernst &amp; Young
              and KPMG, specializing in marketing and sales strategy, customer experience,
              and business transformation.
            </p>

            <p className="text-pretty">
              I combine a data-driven mindset with strong problem-solving skills and a
              focus on client satisfaction and team development. Experienced in leading
              cross-functional teams and delivering strategic transformation programs
              across multiple industries — Tech, Energy, Telco, Insurance, and Food &amp; Beverage.
            </p>

            <p className="text-pretty">
              Proven ability to work closely with C-level stakeholders, translating
              complex business challenges into actionable strategies that drive measurable
              results in CX performance, commercial effectiveness, and operational efficiency.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "5+", label: "Years in Consulting" },
              { value: "6+", label: "FTEs Led" },
              { value: "+12%", label: "NPS Increase" },
              { value: "5+", label: "Industries" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-secondary/50 border border-border/50"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
