export default function EntryRow({ entry }) {
  return (
    <div className="flex justify-between items-center px-4 py-3">
      <div>
        <p className="text-md font-medium text-slate-800">
          {entry.category || "—"}
        </p>
        <p className="text-sm font-medium text-slate-600">
          {entry.note || "—"}
        </p>
        <p className="text-xs text-slate-500">{entry.date}</p>
      </div>

      <p
        className={`font-semibold ${
          entry.type === "expense" ? "text-red-500" : "text-green-600"
        }`}
      >
        {entry.type === "expense" ? "-" : "+"}₹{entry.amount}
      </p>
    </div>
  );
}
