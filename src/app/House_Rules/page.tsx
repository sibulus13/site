import { Metadata } from "next";
import * as Main from "@/style/main";

const rules = [
  "No shoes in the house",
  "Indoor sandals for downstair wood floors only",
  "Help yourself to the snacks and drinks",
  "No smoking in the house",
  "Respectful volume after 1030pm",
  "1/2 shot or 1/4 toke per non-DD guest upon entry",
  "Clean up after yourself",
  "Plenty of places to crash, just let me know ahead of time",
];

const layout = [
  "bathrooms on both floors",
  "smoking area in the backyard",
  "If a room is closed, it's off limits",
  "Plenty of street parking if the driveway is full",
];

export default async function House_Rules_Page() {
  return (
    <div className={Main.fullPage}>
      <h1 className={Main.h1}>Welcome</h1>
      <div>
        <h2 className={Main.h2}>Layout</h2>
        <ul>
          {layout.map((rule, index) => {
            return (
              <li key={index} className={Main.p}>
                {rule}
              </li>
            );
          })}
        </ul>
        <h2 className={Main.h2}>Rules</h2>
        <ul>
          {rules.map((rule, index) => {
            return (
              <li key={index} className={Main.p}>
                {rule}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Michael's House Rules",
  description: "",
};
