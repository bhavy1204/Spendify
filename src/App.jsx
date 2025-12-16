import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import EntryList from "./components/EntryList/EntryList";
import FloatingAddButton from "./components/FloatingAddButton";
import AddEntryModal from "./components/AddEntryModal";
import PrintButton from "./components/PrintButton";
import { getEntries,saveEntries } from "./services/storage";

export default function App() {
  const [entries, setEntries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setEntries(getEntries());
  }, []);

  const addEntry = (entry) => {
    const updated = [entry, ...entries];
    setEntries(updated);
    saveEntries(updated);
  };

  const balance = entries.reduce((acc, e) => {
    return e.type === "credit" ? acc + e.amount : acc - e.amount;
  }, 0);

  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      <Header balance={balance} />

      <EntryList entries={entries} />

      <FloatingAddButton onClick={() => setIsModalOpen(true)} />

      {isModalOpen && (
        <AddEntryModal
          onClose={() => setIsModalOpen(false)}
          onSave={addEntry}
        />
      )}

      <PrintButton entries={entries} balance={balance} />
    </div>
  );
}
