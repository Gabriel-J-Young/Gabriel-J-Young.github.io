export default function Page() {
    return (
      <div>
      <main className="flex flex-grow min-h-screen flex-col items-center p-2 ">
        <div className="flex text-4xl justify-center p-2 rounded-lg bg-sazerac">
          <h2><i>JPNS work</i></h2>
        </div>

        <div className="flex justify-center w-5/6 m-2 p-4 rounded-lg bg-sazerac">
            <h2>JPNS 2IP Describing Memories through Photographs and Words (C1 ART 1.5 units)</h2>
        </div>
        <div className="flex flex-grow justify-center w-5/6 h-full m-2 p-4 rounded-lg bg-sazerac">
          <iframe className="w-full aspect-video" src='/pdfs/三分半.pdf'/>
        </div>

        <div className="flex justify-center w-5/6 m-2 p-4 rounded-lg bg-sazerac">
            <h2>JPNS 2IP Study Abroad (Reading at Your Own Pace and Style) (C2 LIT, 1.5 units)</h2>
        </div>
        <div className="flex flex-grow justify-center w-5/6 h-full m-2 p-4 rounded-lg bg-sazerac">
          <iframe className="w-full aspect-video" src='/pdfs/art.pdf'/>
        </div>

      </main>
      </div>
      
    );
  }