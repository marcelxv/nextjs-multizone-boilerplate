"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/user-nav";
import {
  Button,
  Sheet,
  SheetContent,
  SheetTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components";
import { cn } from "@workspace/ui/lib/utils";
// import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // This is just for demo purposes - in a real app, you'd check auth state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Toggle login state (for demo purposes)
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="flex flex-1 justify-center sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl md:text-2xl">
              {/* <Image
                src="/images/logo.png"
                width={80}
                height={80}
                alt="Picture of the author"
              /> */}
              Ssd Inc.
            </span>
          </Link>

          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {categories.map((category) => (
                        <li key={category.title} className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href={category.href}
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                {category.title}
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                {category.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ModeToggle />

          {isMounted && (
            <>
              {isLoggedIn ? (
                <UserNav />
              ) : (
                <div className="hidden md:flex gap-2">
                  <Button variant="outline" onClick={toggleLogin}>
                    Login
                  </Button>
                  <Button onClick={toggleLogin}>Sign Up</Button>
                </div>
              )}
            </>
          )}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link
                  href="/"
                  className={cn(
                    "text-lg font-medium",
                    pathname === "/" && "text-primary"
                  )}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className={cn(
                    "text-lg font-medium",
                    pathname === "/services" && "text-primary"
                  )}
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    "text-lg font-medium",
                    pathname === "/about" && "text-primary"
                  )}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "text-lg font-medium",
                    pathname === "/contact" && "text-primary"
                  )}
                >
                  Contact
                </Link>

                <div className="flex flex-col gap-2 mt-4">
                  {isMounted && !isLoggedIn && (
                    <>
                      <Button variant="outline" onClick={toggleLogin}>
                        Login
                      </Button>
                      <Button onClick={toggleLogin}>Sign Up</Button>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const categories = [
  {
    title: "Menu 1",
    description: "Menu 1 description",
    href: "/services/service1",
  },
  {
    title: "Menu 2",
    description: "Menu2 description",
    href: "/services/service2",
  },
];
