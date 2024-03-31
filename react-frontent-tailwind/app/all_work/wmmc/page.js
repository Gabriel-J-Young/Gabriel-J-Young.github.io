import Image from "next/image";

export default function Page() {
    return (
      <div>
      <main className="flex min-h-screen flex-col items-center p-2 ">
        <div className="flex text-4xl justify-center p-2 rounded-lg bg-sazerac">
          <h2>Waseda Micro Mouse</h2>
        </div>
        <div className="flex text-xl justify-center">
          <h2>Fall 2023-Present</h2>
        </div>
        <div className=" text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>I'm currently working on a maze-following robot as part of Waseda's micro mouse club. This robot is fully soldered together by me. The code to run it is a C++ codebase with Japanese comments. <br/><br/>So far I've been able to:</p>
          <ul class="list-disc list-inside">
            <li>Build the robot ~3 weeks</li>
            <li>Set up the dev environment ~2 weeks</li>
            <li>Deploy modified code on to the robot</li>
            <li>Properly calibrate IR sensors with the help of a command-line utility</li>
          </ul>
          <p><br/>Now i'm working on: </p>
          <ul class="list-disc list-inside">
            <li>Refactoring the code to modern standards</li>
            <li>Getting the robot through a complete maze</li>
          </ul>
        </div>
        <div className="relative">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/wmmc/bottom_rat.jpg"
            alt="bottom view of robot"
            width="600"
            height="376"
            priority
          />
        </div>
        <p className="max-w-prose text-sm" >Front view</p>
        <div className="relative">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/wmmc/scuffed_ir_demo_square.gif"
            alt="Ir demo"
            width="336"
            height="336"
            priority
          />
        </div>
        <p className="max-w-prose text-sm" >IR Demo</p>
      </main>
      </div>
    );
  }