import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfService() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Terms for using this personal website and the materials shared by the site owner.
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
                  This website is operated by Alaa Abuiteiwi, a freelance developer, trainer, and consultant. By using
                  this site, you agree to these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">Website Content</h2>
                <p>
                  Articles, portfolio information, examples, training descriptions, and other materials are provided for
                  general informational and educational purposes. They do not create a client, consulting, training, or
                  advisory relationship unless a separate written agreement is made.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">Professional Services</h2>
                <p>
                  Freelance development, training, and consulting services are subject to separate project scopes,
                  proposals, contracts, schedules, and fees. Nothing on this site guarantees availability, pricing,
                  specific results, or acceptance of an engagement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">Acceptable Use</h2>
                <p>
                  You agree not to misuse the site, interfere with its operation, attempt unauthorized access, scrape
                  content in a disruptive way, or use the site or its materials for unlawful purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">Intellectual Property</h2>
                <p>
                  Unless otherwise noted, the content on this site belongs to the site owner or respective rights holders.
                  You may reference or share links to public pages, but you may not copy, republish, or commercialize
                  substantial portions of the content without permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">Third-Party Links</h2>
                <p>
                  This site may link to external websites, platforms, repositories, or training providers. Those services
                  are controlled by third parties and are governed by their own terms and policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">Disclaimer</h2>
                <p>
                  The site is provided as is, without warranties of any kind. To the fullest extent allowed by law, the
                  site owner is not liable for damages arising from use of the site or reliance on its content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3 text-foreground">Changes</h2>
                <p>
                  These terms may be updated from time to time. Continued use of the site after updates means you accept
                  the revised terms.
                </p>
              </section>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
