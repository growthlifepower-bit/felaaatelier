import { CommandCenterView } from "@/views/command-center-view";

export const metadata = {
  title: "Command Center | FeLAA Atelier",
  description: "Master operations dashboard — product registry, Faire countdown, JIT fulfillment, and arbitrage tracking.",
  robots: { index: false, follow: false },
};

export default function CommandCenterPage() {
  return <CommandCenterView />;
}
