import Image from "next/image";

export default function Page() {
    return (
      <div>
      <main className="flex min-h-screen flex-col items-center p-2 ">
        <div className="flex text-4xl justify-center p-2 rounded-lg bg-sazerac">
          <h2>Orbiting Islands</h2>
        </div>
        <div className="flex text-xl justify-center">
          <h2>Fall 2021</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>This Project was made for CSC 471 at Cal Poly in fall quarter 2021.<br/>
          For my final project, I created two floating islands, and asteroid in blender, and put them together in a kinematics model to orbit each other. My initial idea was to model something like the three-body problem, with three bodies of roughly equal mass exerting orbital forces on each other. Due to time constraints, it proved impractical to find an initial stable configuration to model. Therefore, I decided to model a more traditional orbital system with one body having a dominant amount of mass. In this project that body is the largest island.<br/>
          For this project I made sure to implement technically challenging features but making a visually appealing and cohesive scene was very important to me, hence the decision to create most of the models.</p>
        </div>
        <div className="relative">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/orbiting_islands/summary.gif"
            alt="overview gif"
            width="1920"
            height="1080"
            priority
          />
        </div>

        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-2 rounded-lg bg-sazerac">
          <p>I implemented:</p>
        </div>
        <div className="flex flex-row text-md max-w-prose p-4 rounded-lg bg-sazerac">
          <ul class="list-disc">
            <li>Collision detection</li>
            <li>Orbital Kinematics model</li>
            <li>Animated particle system</li>
            <li>Blinn-Phong lighting</li>
            <li>Texture mapping</li>
          </ul>
        </div>

        <div className="flex text-2xl justify-center m-4 p-2 rounded-lg bg-sazerac">
          <h2>Collision detection</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>Collisions are implemented as perfectly elastic, using vector math. A collision occurs when the distance between two bodies is less than or equal to the sum of their radii. When a collision occurs, the vector normal of collision is computed. Then the dot product of the difference in velocities and the vector normal of collision is computed to get the relative velocity of the bodies along the vector normal of collision. This relative velocity is subtracted and added to the velocities of the bodies, and then mass weighting is applied.</p>
        </div>
        <div className="relative place-items-center">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/orbiting_islands/collision.gif"
            alt="collision gif"
            width="1920"
            height="1080"
            priority
          />
        </div>
        <p className="max-w-prose text-sm" >After the collision, the asteroid follows a curved path because of gravitational force</p>
        

        <div className="flex text-2xl justify-center m-4 p-2 rounded-lg bg-sazerac">
          <h2>Orbital Kinematics model</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>Each body has a radius, mass, position, velocity, and acceleration. These, along with the gravitational constant, are initially set manually to create a stable system. When the model runs, the acceleration is computed according to Cowell’s method (for Orbit Modeling) and velocity and position are set accordingly. This was implemented such that all the bodies exert gravitational force on each other. In practice however, the motions of the bodies are mostly determined by the largest island as it had the largest mass by far.</p>
          </div>
        <div className="relative place-items-center">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/orbiting_islands/cowells.svg"
            alt="cowells formula"
            width="1920"
            height="1080"
            priority
          />
        </div>
        <p>cowell's method</p>

        <div className="flex text-2xl justify-center m-4 p-2 rounded-lg bg-sazerac">
          <h2>Animated particle system</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>The snow falling from the cloud onto the large island is what constitutes the particle system. Particles are spawned randomly within a disk in the cloud itself and accelerate downward for a given time. The particle positions are also updated according to the position of the large island itself.</p>
          </div>
        <div className="relative place-items-center">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/orbiting_islands/snow.gif"
            alt="snow gif"
            width="1920"
            height="1080"
            priority
          />
        </div>
        <p className="max-w-prose text-sm" >The particles may be a bit hard to see, but if you enlarge the image, you should be able to see the particles accelerating</p>


        <div className="flex text-2xl justify-center m-4 p-2 rounded-lg bg-sazerac">
          <h2>Blinn-Phong lighting</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>I implemented Blinn-Phong lighting for this project with ambient, diffuse, and specular components. There is a light source attached to the large island and a second light source attached to the smaller island.</p>
          </div>
        <div className="relative place-items-center">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/orbiting_islands/light.gif"
            alt="lighting gif"
            width="1920"
            height="1080"
            priority
          />
        </div>
        <p className="max-w-prose text-sm" >Light reflected on the cloud by the light source from the little island</p>

        <div className="flex text-2xl justify-center m-4 p-2 rounded-lg bg-sazerac">
          <h2>Texture mapping</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>I also implemented texture mapping on the trees, lantern, and tank. As a note, the tank turret is animated to rotate side to side and the lantern’s animated to become brighter and dimmer.</p>
          </div>
        <div className="relative place-items-center">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/orbiting_islands/texture.gif"
            alt="texture gif"
            width="1920"
            height="1080"
            priority
          />
        </div>
        <p className="max-w-prose text-sm" >Can you spot the tank? It's very well camouflaged</p>

        <div className="flex text-2xl justify-center m-4 p-2 rounded-lg bg-sazerac">
          <h2>References</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>
              Collisions: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://physics.stackexchange.com/questions/79047/determine-resultant-velocity-of-an-elastic-particle-particle-collision-in-3d-spa">vector-based collisions</a><br/>
              Orbits: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://en.wikipedia.org/wiki/Orbit_modeling#Cowell's_method">Cowell's method</a><br/>
              Blender Stuff: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.youtube.com/watch?v=y7PdiGXbrD0">Low Poly Tree</a>    
                            <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://www.youtube.com/watch?v=0lj643VmTsg">Low Poly Island</a>
          </p>
          </div>

      </main>
      </div>
    );
  }