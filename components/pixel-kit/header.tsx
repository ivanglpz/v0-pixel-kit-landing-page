"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">PK</span>
          </div>
          <span className="text-xl font-bold text-foreground">Pixel Kit</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground" asChild>
            <a href="/changelog">Changelog</a>
          </Button>
          <Button variant="outline" className="border-border text-foreground hover:bg-secondary bg-transparent">
            Login
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Sign Up
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col gap-2 px-4 py-4">
            <Button variant="ghost" className="justify-start text-muted-foreground" asChild>
              <a href="/changelog">Changelog</a>
            </Button>
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="outline" className="border-border text-foreground bg-transparent">
                Login
              </Button>
              <Button className="bg-primary text-primary-foreground">
                Sign Up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
