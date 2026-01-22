import { Mail, MapPin, Phone, Instagram, Facebook, Youtube, Linkedin, Video } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactLinks = {
  email: "beaconsofhopenetwork@gmail.com",
  address: "P.O. Box 995-40200, Kisii",
  phones: ["0729508496", "0716524476", "0113596287"],
  social: [
    { label: "YouTube", href: "https://youtube.com/@beaconsofhopenetwork?si=mzyXKdF-WmZ3ln7r", Icon: Youtube },
    { label: "Facebook", href: "https://www.facebook.com/share/1D3GTudquG/", Icon: Facebook },
    { label: "Instagram", href: "https://www.instagram.com/beaconsofhopenetwork?igsh=MWtvczlwNDE2cDZlaw==", Icon: Instagram },
    { label: "TikTok", href: "https://www.tiktok.com/@beaconsof.hope.ne?_r=1&_t=ZS-93Fq6rSKQi5", Icon: Video },
    { label: "LinkedIn", href: "http://www.linkedin.com/in/beaconsof-hopenetwork-a628913a7", Icon: Linkedin },
  ],
} as const;

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28">
        <header className="section-padding border-b border-border">
          <div className="container-narrow mx-auto px-4 md:px-8">
            <h1 className="heading-display text-4xl md:text-5xl text-foreground">Contact Us</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Have questions? Reach us using the details below and we’ll get back to you.
            </p>
          </div>
        </header>

        <section className="section-padding">
          <div className="container-narrow mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-sm p-6">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <h2 className="font-semibold text-foreground">Email</h2>
                    <a
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                      href={`mailto:${contactLinks.email}`}
                    >
                      {contactLinks.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-sm p-6">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <h2 className="font-semibold text-foreground">Phone</h2>
                    <div className="mt-1 space-y-1">
                      {contactLinks.phones.map((p) => (
                        <a
                          key={p}
                          className="block text-muted-foreground hover:text-primary transition-colors"
                          href={`tel:+254${p.replace(/^0/, "")}`}
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-sm p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <h2 className="font-semibold text-foreground">Postal Address</h2>
                    <p className="text-muted-foreground mt-1">{contactLinks.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <section className="mt-10 bg-card border border-border rounded-sm p-6">
              <h2 className="font-semibold text-foreground">Social Media</h2>
              <p className="text-muted-foreground text-sm mt-1">Find us as “beacons of hopenetwork”.</p>

              <div className="mt-4 flex flex-wrap gap-3">
                {contactLinks.social.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-sm border border-border bg-background text-foreground hover:bg-muted transition-colors"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
