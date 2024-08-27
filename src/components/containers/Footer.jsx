"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

/**
 * Footer component that displays the website's logo, slogan, and copyright information.
 * Renders only on pages other than the home page.
 *
 * @return {JSX.Element|null} The rendered Footer component or null if on the home page.
 */
export default function Footer() {
  const pathname = usePathname();

  // Render the footer component only on pages other than the home page
  return pathname !== "/" ? (
    <footer className="border-t">
      {/* Main content of the footer */}
      <div className="flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-5 py-5 justify-between container">
        {/* Logo of the website */}
        <Image src={"/logo.png"} alt="logo" width={55} height={55} />
        {/* Slogan of the website */}
        <h3 className="sm:text-2xl text-xl">
        <span> Organize</span> now,   <br />{" "}  save <span> valuable</span> time later 
          
        </h3>
      </div>
      {/* Copyright information */}
      <div className="bg-accent text-center py-8 text-accent-foreground">
        <p>Copyright © 2023-24 - All Right Reserved</p>
      </div>
    </footer>
  ) : null;
}
