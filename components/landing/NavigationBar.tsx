"use client";

import NextLink from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
  Link,
} from "@heroui/react";
import { useState } from "react";

interface NavigationBarProps {
  variant?: "light" | "dark";
  showWhyLink?: boolean;
}

export function NavigationBar({ variant = "dark", showWhyLink = true }: NavigationBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use dark text for light backgrounds, white text for dark backgrounds
  const textColorClass = variant === "light" ? "text-foreground" : "text-white";
  const textColorHoverClass = variant === "light" ? "hover:text-foreground" : "hover:text-white";
  const textColorOpacityClass = variant === "light" ? "text-foreground/80" : "text-white/80";

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      position="static"
      classNames={{
        base: "bg-transparent py-4",
        wrapper: "max-w-7xl",
      }}
    >
      {/* Left: Logo */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`sm:hidden ${textColorClass}`}
        />
        <NavbarBrand>
          <Link as={NextLink} href="/" className={`font-bold text-xl ${textColorClass}`}>
            PCA
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Right: Why link */}
      <NavbarContent justify="end">
        {showWhyLink && (
          <NavbarItem>
            <Link
              as={NextLink}
              href="/why"
              className={`${textColorOpacityClass} border p-2 rounded-full ${textColorHoverClass} transition-colors text-xs font-medium`}
            >
              Why This
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-white/95 backdrop-blur-lg pt-6">
        <NavbarMenuItem>
          <Link
            as={NextLink}
            href="/why"
            className="w-full text-lg py-2 text-foreground-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Why
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
