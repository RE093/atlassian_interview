function Bar({ barItem, length, highest }) {
  return (
    <div
      title={`${barItem.name} (${barItem.ticketCount})`}
      className="bar"
      style={{
        backgroundColor: barItem.color,
        width: `${100 / length}%`,
        height: `${(barItem.ticketCount / highest) * 100}%`,
      }}
    ></div>
  );
}

export default Bar;
