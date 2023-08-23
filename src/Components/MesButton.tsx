import React from "react";
import { useData } from "../Context/DataContext";

const style: React.CSSProperties = {
  padding: "var(--gap-normal) var(--gap-small)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap-normal)",
  color: "var(--color-6)",
  fontWeight: "600",
  textTransform: "capitalize",
};

function nomeMes(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

const MesButton = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();

  function setMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }

  return (
    <button className="hover-style" style={style} onClick={() => setMes(n)}>
      {nomeMes(n)}
    </button>
  );
};

export default MesButton;
