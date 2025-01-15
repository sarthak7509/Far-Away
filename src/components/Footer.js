export function Footer({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding stuffs for ur future trips</em>
      </p>
    );
  }
  const numItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed).length;
  const percent = Math.round((numOfPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "Wooohoo! u are ready to go"
          : `You have ${numItems} item in the list, you have packed ${numOfPackedItems}
        (${percent}%) items`}
      </em>
    </footer>
  );
}
