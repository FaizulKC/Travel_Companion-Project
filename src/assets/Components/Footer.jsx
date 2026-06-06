export default function Footer({ items }) {
  if (!items.length)
    return (
      <p className="state">Start adding some items to your packing list 🚀</p>
    );
  const len = items.length;
  const packedNum = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedNum / len) * 100);
  return (
    <>
      <footer className="state">
        {percentage === 100 ? (
          <p>You got everything! Ready to go ✈️</p>
        ) : (
          <p>{`💼 You have ${len} items on your list and you already packed ${packedNum} (${percentage}%)`}</p>
        )}
      </footer>
    </>
  );
}
