import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { nav } from "@/content/site";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <DesktopNav items={nav} />
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Wrapper (not `hidden` on the link itself): ButtonLink sets its own display. */}
          <div className="hidden lg:block">
            <ButtonLink href="/#contact" size="sm">
              Start a project
            </ButtonLink>
          </div>
          <MobileNav items={nav} />
        </div>
      </Container>
    </header>
  );
}
