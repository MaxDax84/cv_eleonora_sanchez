import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Eleonora Sanchez",
  description: "Privacy Policy for eleonorasanchez.it — information on data processing under GDPR.",
  robots: { index: false, follow: false },
}

export default function PrivacyPolicy() {
  const lastUpdated = "26 June 2025"

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to site
        </Link>

        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <h1 className="text-sm tracking-[0.3em] uppercase text-primary font-medium">
            Privacy Policy
          </h1>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <p className="text-xs text-muted-foreground mb-12 text-center">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">1. Data Controller</h2>
            <p>
              The data controller for this website (<strong className="text-foreground">eleonorasanchez.it</strong>) is{" "}
              <strong className="text-foreground">Eleonora Sanchez</strong>, based in Milan, Italy.
              For any enquiry regarding the processing of your personal data, you may contact her
              via the email address available on this site.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">2. What Data Is Collected and Why</h2>
            <p className="mb-4">
              This is a personal CV website. It does not contain forms, user accounts, or direct
              data-collection mechanisms. However, the following technical services are in use:
            </p>

            <div className="space-y-6 pl-4 border-l border-border/50">
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">Vercel Analytics</h3>
                <p className="text-sm">
                  This site uses <strong className="text-foreground">Vercel Web Analytics</strong>, a
                  privacy-first analytics service provided by Vercel Inc. (340 Pine Street, Suite 701,
                  San Francisco, CA 94104, USA). It collects anonymised, aggregate data about page
                  visits — including the page URL, referrer, device type, operating system, and browser.
                  It does <strong className="text-foreground">not</strong> use cookies, does not store IP
                  addresses, and does not track individual users across sessions or sites.
                  Legal basis: legitimate interest (Art. 6(1)(f) GDPR) in understanding how the site is
                  used in order to improve it.
                  Further information:{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline underline-offset-4"
                  >
                    vercel.com/legal/privacy-policy
                  </a>.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">Fonts (Geist)</h3>
                <p className="text-sm">
                  Fonts used on this site are <strong className="text-foreground">self-hosted</strong>.
                  They are downloaded at build time via Next.js Font Optimisation and served directly
                  from eleonorasanchez.it. No requests are made to Google&apos;s servers or any other
                  third-party font CDN when you visit this site.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">LinkedIn (external link)</h3>
                <p className="text-sm">
                  This site contains a link to an external LinkedIn profile. Clicking this link will
                  take you to LinkedIn&apos;s website, which operates under its own privacy policy. No
                  data about you is shared with LinkedIn simply by visiting this site.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">Hosting (Vercel)</h3>
                <p className="text-sm">
                  The site is hosted on Vercel&apos;s infrastructure. Standard server logs (IP address,
                  user-agent, timestamp) may be retained briefly by Vercel as part of normal hosting
                  operations, in accordance with their data processing agreement with the controller.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">3. Cookies</h2>
            <p>
              This site does <strong className="text-foreground">not</strong> use cookies for tracking or
              profiling purposes. Vercel Analytics operates without cookies. No consent banner is
              displayed because no cookies that require consent are set.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">4. Data Transfers Outside the EU</h2>
            <p>
              Vercel Inc. is a US-based company. Data processed through Vercel Analytics and Vercel
              hosting may be transferred to servers located in the United States. Vercel participates
              in the EU–US Data Privacy Framework and provides appropriate safeguards for such
              transfers in accordance with Art. 46 GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">5. Your Rights</h2>
            <p className="mb-3">
              Under the GDPR (Regulation EU 2016/679) and applicable Italian data protection law
              (D.Lgs. 196/2003, as amended), you have the right to:
            </p>
            <ul className="space-y-1 text-sm pl-4 list-disc list-outside">
              <li>Access your personal data (Art. 15);</li>
              <li>Rectification of inaccurate data (Art. 16);</li>
              <li>Erasure ("right to be forgotten") (Art. 17);</li>
              <li>Restriction of processing (Art. 18);</li>
              <li>Data portability (Art. 20);</li>
              <li>Object to processing based on legitimate interest (Art. 21).</li>
            </ul>
            <p className="mt-3 text-sm">
              To exercise any of these rights, contact the data controller via the email address
              shown on this site. You also have the right to lodge a complaint with the Italian
              supervisory authority:{" "}
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-4"
              >
                Garante per la protezione dei dati personali
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground mb-3">6. Changes to This Policy</h2>
            <p>
              This policy may be updated to reflect changes in the services used or applicable law.
              The date at the top of the page indicates when it was last revised.
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
