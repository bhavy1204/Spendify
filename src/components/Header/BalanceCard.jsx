export default function BalanceCard({ balance }) {
  return (
    <div className="mt-4 rounded-2xl bg-gray-200 p-6 text-center shadow-xl">
      <p className="text-sm text-slate-500">Current Balance</p>
      <p className="mt-2 text-3xl font-bold text-slate-900">₹{balance}</p>
    </div>
  );
}
