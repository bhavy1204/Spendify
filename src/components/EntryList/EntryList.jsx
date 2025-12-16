import EntryRow from "./EntryRow";

export default function EntryList({ entries }) {
  return (
    <div className="px-4 mt-6">
      {entries.length === 0 && (
        <p className="text-center text-slate-400 text-sm">No entries yet</p>
      )}

      <div className="divide-y rounded-xl bg-white shadow-sm">
        {entries.map((entry) => (
          <EntryRow key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
