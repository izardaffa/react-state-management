function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <span>Belum ada tugas!</span>
      </footer>
    );
  }

  const totalItems = items.length;
  const doneItems = items.filter((item) => item.done).length;
  const percentage = Math.round((doneItems / totalItems) * 100);

  return (
    <footer className="stats">
      <span>
        {percentage === 100
          ? "Tugas Tuntas!"
          : `Total Tugas: ${totalItems} | Done: ${doneItems} (${percentage}%)`}
      </span>
    </footer>
  );
}

export default Stats;
