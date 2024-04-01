import Image from "next/image";

export default function Home() {
  return (
    <div class='bg-hero-pattern bg-cover bg-center'>
    <main className="flex min-h-screen flex-col items-center p-2 ">
        <div className="flex grow mb-4 text-4xl justify-center p-4 text-white">
          <h2>Gabriel J Young</h2>
        </div>
        

        <div className="relative flex place-items-center">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/portfolio_pic.png"
            alt="portfolio pic"
            width={1276}
            height={831}
            priority
          />
        </div>

        <div className="flex grow mb-4 max-w-prose text-md m-4 p-4 rounded-lg bg-sazerac">
          <p>Hi! I'm Gabriel, a Computer Science student from Cal Poly SLO (San Luis Obispo). My professional interests include robotics and automation, computer vision, graphics, and mapping, and data analytics.<br/>I have worked at Northrop Grumman and General Atomics as a contributor to very large projects, and also completed a small greenfield project for business management.</p>
        </div>

        <div className="box-content flex grow mb-4 text-2xl justify-center p-4 text-white">
          <h3>Selected Projects:</h3>
        </div>

        <div className="mb-32 grid text-center text-white lg:max-w-5xl lg:mb-0 lg:grid-cols-3 lg:text-left">
          <a
            href="/all_work/wmmc"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors 
            border-neutral-700 bg-neutral-800/30 hover:bg-neutral-900/40 hover:border-neutral-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Waseda Micro Mouse Club{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-95`}>
              A little Maze following mouse!
            </p>
          </a>
          <a
            href="/all_work/slave_ship_database"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors 
            border-neutral-700 bg-neutral-800/30 hover:bg-neutral-900/40 hover:border-neutral-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Slave Ship Database{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-95`}>
              Database to assist in research of Slave Ships captured by the British Royal Navy after parliment abolished the slave trade in 1807
            </p>
          </a>
          <a
            href="/all_work/orbiting_islands"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors 
            border-neutral-700 bg-neutral-800/30 hover:bg-neutral-900/40 hover:border-neutral-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Orbiting Islands{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-95`}>
            A computer graphics project with original blender models and a simple physics simulation
            </p>
          </a>
        </div>

        <div className="box-content flex grow mb-4 text-2xl justify-center p-4 text-white">
          <h3>More Projects:</h3>
        </div>

        <div className="mb-32 grid text-center text-white lg:max-w-5xl lg:mb-0 lg:grid-cols-3 lg:text-left">
          <a
            href="/all_work/water_cv"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors 
            border-neutral-700 bg-neutral-800/30 hover:bg-neutral-900/40 hover:border-neutral-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Water CV{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-95`}>
              A winning hackathon project to improve the wastewater treatment process
            </p>
          </a>
          <a
            href="https://gabrieljyoung.com"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors 
            border-neutral-700 bg-neutral-800/30 hover:bg-neutral-900/40 hover:border-neutral-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              WIP{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-95`}>
              WIP
            </p>
          </a>
          <a
            href="https://gabrieljyoung.com"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors 
            border-neutral-700 bg-neutral-800/30 hover:bg-neutral-900/40 hover:border-neutral-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              WIP{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-95`}>
              WIP
            </p>
          </a>
        </div>
    </main>
    </div>
  );
}
