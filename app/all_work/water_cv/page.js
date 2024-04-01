import Image from "next/image";

export default function Page() {
    return (
      <div>
      <main className="flex min-h-screen flex-col items-center p-2 ">
        <div className="flex text-4xl justify-center p-2 rounded-lg bg-sazerac">
          <h2>WaterCV</h2>
        </div>
        <div className="flex text-xl justify-center">
          <h2>Winter 2019</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>This project was made for the 'SLO hacks go' hackathon in November 2019. <br/>During this project, I worked with three other team members to create a program to help quantitatively analyze wastewater during the wastewater treatment process. Specifically, the goal of this program was to measure the “mixed liquor quality” with computer vison.
          <br/>“Mixed liquor quality” refers to how much solid biomass still mixed in with the wastewater in an aeration tank. The wastewater plant we were dealing with used the “active sludge” method for filtering wastewater, which consists of an aeration tank, at which point air is injected into the wastewater, and a settling tank, where the water “settles” and the biomass physically separates from the wastewater, with only clear, treated water remaining.</p>
        </div>


        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-2 rounded-lg bg-sazerac">
          <p>Going to the treatment plant</p>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>At the start of the project, we drove over the SLO wastewater treatment plant to learn more about the wastewater treatment process from the workers at the plant, and to collect data in the form of videos of the water in the aeration tank.</p>
          </div>
          <div className="relative place-items-center">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/water_cv/wastewater_plant.jpg"
            alt="wastewater_plant"
            width="1920"
            height="1080"
            priority
          />
        </div>
        <p className="max-w-prose text-sm" >An aeration tank at the SLO wastewater treatment plant.</p>

        <div className="flex text-2xl justify-center m-4 p-2 rounded-lg bg-sazerac">
          <h2>Writing the Computer Vision Program</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>The computer vision program first converted the input video into the HSV color space, to improve image segmentation and make the system more robust against varying light levels. The program then used a simple threshold to segment the bubbles from the water and calculated the percent of the frame that was covered by water.  Then, the average color of the water was computed. I attempted to implement a way to calculate the size of the individual bubbles by matching the bubbles with textures through key points, but was not able to due to time constraints.
            </p></div>
        <div className="relative place-items-center">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/water_cv/wastewater_close.jpg"
            alt="waste waster cv image"
            width="1920"
            height="1080"
            priority
          />
        </div>
        <p className="max-w-prose text-sm">An example frame of what the computer vision program would run on</p>
        

        <div className="flex text-2xl justify-center m-4 p-2 rounded-lg bg-sazerac">
          <h2>Final Product</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>We displayed our project as a combination of raw video of the wastewater, a visualization of the program’s segmentation, and a website to display the computed data.
            </p></div>
        <div className="relative place-items-center">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/water_cv/final_product.PNG"
            alt="Final product visualization"
            width="1920"
            height="1080"
            priority
          />
        </div>
        <p className="max-w-prose text-sm" >Final product visualization</p>

        <div className="flex text-2xl justify-center m-4 p-2 rounded-lg bg-sazerac">
          <h2>Team Members</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>I worked on this project with Jasmine D, Linnea Holmen, and John Yee.<br/>
          I worked with OpenCV in C++ to process video and get relevant quantitative information from video footage of wastewater in a tank where it is treated. Jasmine D was the industry expert that helped identify the problem and provided access to the information we used in our demo. Linnea Holmen worked on the ideation process, the final presentation, and finding ways to simply explain the complicated process of wastewater treatment. John Yee created the web page which read the data and displayed it in an easy-to-read table.
            </p></div>
        <div className="relative place-items-center">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/water_cv/team_pic.jpg"
            alt="team pic"
            width="1920"
            height="1080"
            priority
          />
        </div>
        <p className="max-w-prose text-sm" > Team members, Nov 2019</p>

      </main>
      </div>
    );
  }