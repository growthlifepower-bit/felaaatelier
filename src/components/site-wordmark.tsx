import Image from "next/image";
import { clsx } from "clsx";

type SiteWordmarkProps = {
  className?: string;
};

export function SiteWordmark({ className }: SiteWordmarkProps) {
  return (
    <Image
      src="/branding/logo-horizontal.svg"
      alt={"F\u1EB9LA\u00C1 Atelier"}
      width={560}
      height={116}
      className={clsx("h-auto w-[240px]", className)}
      priority
    />
  );
}
