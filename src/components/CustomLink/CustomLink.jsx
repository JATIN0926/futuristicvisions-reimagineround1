"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const CustomLink = ({ children, href, ...props }) => {
  const router = useRouter();
  const currentPath = usePathname();
  const handleTransition = async (e) => {
    if (currentPath == href) {
      return;
    }
    e.preventDefault();
    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(500);
    router.push(href);
    await sleep(500);

    body?.classList.remove("page-transition");
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};
