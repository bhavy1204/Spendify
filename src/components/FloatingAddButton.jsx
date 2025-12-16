export default function FloatingAddButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-slate-900 text-white text-3xl shadow-lg active:scale-95 transition"
    >
      +
    </button>
  );
}
