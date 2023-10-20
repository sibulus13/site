import Skills from "./Skills";
import * as Main from "@/style/main";

export default function Introduction() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center pt-20">
        <h1 className={Main.h1}>About Me | 我</h1>
        <br></br>
        <div>
          <h1 className="text-2xl">Hi, I am Michael</h1>
          <p>
            As a Full Stack Software Engineer with 3 years of tech-related work
            experience, I have gained domain knowledge in a variety of
            industries including: Agri-Tech, Robotics, Clean Energy, and
            Education utilizing a larger variety of technologies.
          </p>
        </div>
      </div>
      <div className="h-14"></div>
      <Skills></Skills>
    </div>
  );
}
