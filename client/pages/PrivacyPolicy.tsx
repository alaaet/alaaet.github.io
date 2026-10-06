import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card/50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              How this personal site handles information from visitors, collaborators, trainees, and consulting clients.
            </p>
          </motion.div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6 md:p-8 space-y-8 text-foreground/90 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">Overview</h2>
                <p>
                  This website is operated by Alaa Abuiteiwi, a freelance developer, trainer, and consultant. The site is
                  used to share professional information, articles, training material, and ways to get in touch about
                  development, training, and consulting work.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">Information You Provide</h2>
                <p>
                  If you contact the site owner by email, social links, or another channel linked from this site, you may
                  provide details such as your name, email address, organization, project needs, training interests, or
                  consulting request. This information is used only to respond to you and manage the professional
                  relationship you requested.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">Automatically Collected Information</h2>
                <p>
                  Basic technical information may be processed by hosting providers or analytics services, such as IP
                  address, browser type, device information, referring pages, and pages visited. This helps keep the site
                  reliable, secure, and useful.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">How Information Is Used</h2>
                <p>
                  Information is used to respond to inquiries, discuss freelance development or consulting engagements,
                  provide training-related communication, improve site content, and protect the site from misuse.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">Sharing</h2>
                <p>
                  Personal information is not sold. Information may be shared only when needed to provide a requested
                  service, comply with legal obligations, protect rights and security, or use trusted providers that help
                  operate the site and related professional services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">Retention and Choices</h2>
                <p>
                  Contact and project-related information is kept only as long as reasonably needed for communication,
                  professional records, or legal requirements. You may request correction or deletion of your personal
                  information by contacting the site owner through the available contact details.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">Changes</h2>
                <p>
                  This policy may be updated as the site or professional services evolve. Updates will be posted on this
                  page.
                </p>
              </section>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
