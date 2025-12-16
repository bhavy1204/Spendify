import { useState } from "react";

export default function AddEntryModal({ onClose, onSave }) {
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSave = () => {
    if (!amount) return;

    onSave({
      id: crypto.randomUUID(),
      type,
      amount: Number(amount),
      note,
      category,
      date,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-end z-20">
      <div className="bg-white w-full rounded-t-3xl p-6 space-y-4">
        <div className="flex bg-slate-100 rounded-xl p-1">
          {["expense", "credit"].map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`flex-1 py-2 rounded-lg capitalize ${
                type === t
                  ? t === "expense"
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                  : "text-slate-600"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full text-2xl border rounded-xl px-4 py-3"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        />

        <input
          type="text"
          placeholder="Category (optional)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        />

        <input
          type="text"
          placeholder="Note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        />

        <div className="flex gap-3 pt-2">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl bg-slate-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-3 rounded-xl bg-slate-900 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
