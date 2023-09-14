import Link from "next/link";

const items = [
  { name: "About Me", href: "/AboutMe" },
  { name: "Projects", href: "/Projects" },
  { name: "Adventures", href: "/Adventures" },
];

export default function NavBar() {
  return (
    <div className="fixed w-screen z-10 p-2 border-b-2 bg-black">
      <div className="flex justify-between">
        <Link href="/" className="pr-20">
          <h1>黄</h1>
        </Link>
        <div className="flex justify-between grow">
          {items.map((item, index) => (
            <div key={index}>
              <Link href={item.href}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
