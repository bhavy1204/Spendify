import BalanceCard from "./BalanceCard";

export default function Header({ balance }) {
  return (
    <header className="sticky top-0 bg-slate-50 z-10">
      <div className="px-4 pt-6">
        <h1 className="text-xl font-semibold text-slate-800">Spendify</h1>
        <BalanceCard balance={balance} />
      </div>
    </header>
  );
}
