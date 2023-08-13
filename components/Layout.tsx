import { Metadata } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  title: string;
}

export const metadata: Metadata = {
  title: "Home",
};

export default function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center justify-between px-4 shadow-md">
            <Link href="/" className="text-lg font-bold">
              XOXO
            </Link>
            <div className="flex gap-2">
              <Link href="/cart">Cart</Link>
              <Link href="/login">Login</Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p className="text-sm">Copyright © 2023 XOXO - Designed and developed by <a href="https://kaveenhyacinth.com">Kaveen Hyacinth</a></p>
        </footer>
      </div>
    </>
  );
}
