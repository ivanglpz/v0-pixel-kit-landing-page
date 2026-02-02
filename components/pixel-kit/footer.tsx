import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">PK</span>
              </div>
              <span className="text-xl font-bold text-foreground">Pixel Kit</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground text-center sm:text-left">
              A personal project by me. Free to use.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-12">
            <div className="flex flex-col items-center sm:items-start gap-3">
              <a
                href="/changelog"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Changelog
              </a>
              <a
                href="#features"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Features
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pixel Kit. Built with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
