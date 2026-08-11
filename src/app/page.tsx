import Link from "next/link"
import Image from "next/image"
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpCircle, PlusCircle } from "lucide-react"

import europeFlag from "@/assets/flags/europe.png"
import australiaFlag from "@/assets/flags/australia.png"
import canadaFlag from "@/assets/flags/canada.png"
import unitedKingdomFlag from "@/assets/flags/united-kingdom.png"

/**
 * DESIGNER NOTE: Wise-style dashboard — layout and structure only.
 * Flag assets live in src/assets/flags/ (also copied to public/assets/flags/).
 */

const CURRENCY_ACCOUNTS = [
  { code: "EUR", label: "EUR", accountId: "51568", balance: "1.00", flag: europeFlag, flagAlt: "European Union flag" },
  { code: "AUD", label: "AUD", accountId: "30779", balance: "0.00", flag: australiaFlag, flagAlt: "Australia flag" },
  { code: "CAD", label: "CAD", accountId: "15376", balance: "0.00", flag: canadaFlag, flagAlt: "Canada flag" },
  { code: "GBP", label: "GBP", accountId: "13159", balance: "0.00", flag: unitedKingdomFlag, flagAlt: "United Kingdom flag" },
]

const RECENT_TRANSACTIONS = [
  { id: "1", icon: ArrowUpCircle, name: "Hannah Johnson", subtitle: "Sent - 18 Apr", amount: "49 EUR", isCredit: false },
  { id: "2", icon: PlusCircle, name: "To EUR", subtitle: "Added - 18 Apr", amount: "+ 50 EUR", subAmount: "50.44 EUR", isCredit: true },
  { id: "3", icon: ArrowUpCircle, name: "Brandon Bolt", subtitle: "Sent - 2 Apr", amount: "110 EUR", isCredit: false },
]

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-[976px] flex-1 flex-col gap-[56px] space-y-0 px-6 pb-6 pt-[56px]">
      <section className="flex flex-col gap-[20px]">
        <div className="flex flex-col gap-0">
          <h2 className="text-sm font-medium text-muted-foreground">Total balance</h2>
          <p className="text-3xl font-bold tracking-tight">1.00 EUR</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm">Send money</Button>
          <Button size="sm" variant="secondary">Add money</Button>
          <Button size="sm" variant="secondary">Request money</Button>
        </div>
      </section>

      {/* Currency account cards — fixed 256×206, 12px gap, horizontal scroll */}
      <section className="-mx-6 overflow-x-auto px-6">
        <div className="flex w-max gap-[12px]">
          {CURRENCY_ACCOUNTS.map((account) => (
            <Card
              key={account.code}
              className="h-[206px] w-[256px] shrink-0 justify-between gap-0 overflow-hidden bg-muted/50 p-4"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={account.flag}
                  alt={account.flagAlt}
                  width={48}
                  height={48}
                  className="size-[48px] rounded-full"
                />
                <CardTitle className="text-base font-medium">{account.label}</CardTitle>
              </div>
              <CardContent className="space-y-1 px-0">
                <p className="text-xs text-muted-foreground">Account - {account.accountId}</p>
                <p className="text-2xl font-bold">{account.balance}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Transactions</h2>
          <Link
            href="/"
            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            See all
          </Link>
        </div>
        <ul className="divide-y divide-border rounded-lg">
          {RECENT_TRANSACTIONS.map((tx) => (
            <li key={tx.id} className="flex items-center gap-4 px-4 py-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-card">
                <tx.icon className="size-5 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium">{tx.name}</p>
                <p className="text-sm text-muted-foreground">{tx.subtitle}</p>
                {tx.subAmount && (
                  <p className="text-xs text-muted-foreground">{tx.subAmount}</p>
                )}
              </div>
              <p className={`shrink-0 text-right font-medium ${tx.isCredit ? "text-primary" : ""}`}>
                {tx.amount}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-auto pt-4">
        <p className="text-xs text-muted-foreground">
          Provided by Wise Assets Europe
        </p>
      </footer>
    </div>
  )
}
