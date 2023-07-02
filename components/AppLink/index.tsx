import React from 'react'
import Link from 'next/link'
type Props = {
    to: string,
    children?: React.ReactNode,
    className?: string 
}
export default function AppLink({ to, children, className }:Props) {
  return (
    <li className={className}>
        <Link legacyBehavior href={to}>
            <a href={to}>
                {children}
            </a>
        </Link>
    </li>
  )
}
