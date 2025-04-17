import Link from "next/link";
import React from "react";

type ButtonProps = {
    title: string;
    icon?: React.ReactNode;    
    variant: string;
    href?: string;
}

const Links = ({ title, icon, variant, href}: ButtonProps) => {
  return (
    <Link
        aria-label="link"
        className={`flex items-center justify-center gap-1 rounded-full ${variant}`}
        href={href || '/'}
    >
        {icon}
        {title}
    </Link>
    
  )
}

export default Links