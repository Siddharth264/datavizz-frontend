
import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <header className="flex items-center justify-between bg-[#ffffff] px-4 py-3 border-b border-[#434339] shadow-sm md:px-6">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <span className="text-lg font-semibold">DataVizz</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
          Overview
        </Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
          Analytics
        </Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
          Reporting
        </Link>
        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
          Settings
        </Link>
      </nav>
    </header>
  )
}

function BarChartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}