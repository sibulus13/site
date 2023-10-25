import MotionButton from "../motion/MotionButton";
import * as Main from "@/style/main";

const items = [
  { name: "About Me", href: "/AboutMe" },
  { name: "Projects", href: "/Projects" },
  { name: "Adventures", href: "/Adventures" },
];

export default function NavBar() {
  return (
    <div
      className={
        Main.subp + "fixed w-screen z-10 p-2 border-b-2 bg-black pr-6 md:px-24"
      }
    >
      <div className="flex justify-between">
        <MotionButton href="/" className="pr-14 md:pr-60 lg:pr-96">
          <h1>黄</h1>
        </MotionButton>
        <div className="flex justify-between grow lg:pl-42 gap-2">
          {items.map((item, index) => (
            <MotionButton key={index} href={item.href}>
              <h1>{item.name}</h1>
            </MotionButton>
          ))}
        </div>
      </div>
    </div>
  );
}
