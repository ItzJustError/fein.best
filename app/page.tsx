import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">fein.best</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">Welcome to fein.best</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A simple, clean space on the web. Sometimes the best things are the most straightforward.
          </p>
        </section>

        {/* About Me Section */}
        <section className="mb-20">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-semibold mb-6">About Me</h3>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Hello! I'm the person behind fein.best. This is my little corner of the internet where I keep things
                  simple and focused.
                </p>
                <p>
                  I believe in clean design, thoughtful experiences, and the power of keeping things uncomplicated.
                  Sometimes less really is more.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h3 className="text-3xl font-semibold mb-6">Get In Touch</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Have something to say? I'd love to hear from you.
          </p>
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <a href="mailto:me@fein.best" className="inline-flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-muted-foreground">
          <p>&copy; 2025 fein.best. Keep it simple.</p>
        </div>
      </footer>
    </div>
  )
}
