export default function listRenderer(items: any[]) {
  return (
    <div className="flex pt-2 flex-wrap justify-center">
      {items.map((item, index) => (
        <div
          className="px-2 pb-2 flex flex-col items-center text-center"
          key={index}
        >
          <div>{item.icon}</div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
