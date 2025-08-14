"use client"
import Link from 'next/link'
import { Menu, Mountain } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#teaching', label: 'Teaching' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="#home" className="mr-6 flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Nikesh Raj</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {NAV_LINKS.map(link => (
              <Link key={link.href} href={link.href} className="font-medium text-foreground/70 transition-colors hover:text-foreground">{link.label}</Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="#home" className="mr-6 flex items-center space-x-2" onClick={() => setIsSheetOpen(false)}>
                <Mountain className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline text-lg">Nikesh Raj</span>
              </Link>
              <div className="my-4 h-[1px] w-full shrink-0 bg-border" />
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map(link => (
                  <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/70 transition-colors hover:text-foreground" onClick={() => setIsSheetOpen(false)}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
