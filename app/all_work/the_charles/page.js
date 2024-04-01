export default function Page() {
    return (
      <div>
      <main className="flex flex-grow min-h-screen flex-col items-center p-2 ">
        <div className="flex text-4xl justify-center p-2 rounded-lg bg-sazerac">
          <h2><i>The Charles</i></h2>
        </div>

        <div className="flex flex-grow justify-center w-full h-full m-2 p-4 rounded-lg bg-sazerac">
          <iframe className="w-full" src='/pdfs/The_Charles_research_paper.pdf'/></div>

      </main>
      </div>
      
    );
  }