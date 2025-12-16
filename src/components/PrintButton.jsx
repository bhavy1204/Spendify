import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function PrintButton({ entries, balance }) {
  const handlePrint = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text("Spendify Report", 14, 18);

    // Balance
    doc.setFontSize(14);
    doc.text(`Balance: Rs. ${balance}`, 14, 28);

    // Table
    autoTable(doc, {
      startY: 40,
      head: [["Date", "Type", "Amount", "Category", "Note"]],
      body: entries.map((e) => [
        e.date,
        e.type === "expense" ? "Expense" : "Credit",
        `${e.type === "expense" ? "-" : "+"} Rs. ${e.amount}`,
        e.category || "-",
        e.note || "-",
      ]),
      styles: {
        fontSize: 12,
        cellPadding: 4,
      },
      headStyles: {
        fillColor: [15, 23, 42], // slate-900
        textColor: 255,
        fontSize: 13,
      },
      alternateRowStyles: {
        fillColor: [241, 245, 249], // slate-100
      },
    });

    const today = new Date();

    const longMonthName = today.toLocaleString("default", { month: "long" });

    doc.save(`spendify-report-${longMonthName}.pdf`);
  };

  return (
    <button
      onClick={handlePrint}
      className="fixed bottom-6 left-6 px-4 py-2 rounded-xl bg-slate-200 text-slate-800"
    >
      Print
    </button>
  );
}
