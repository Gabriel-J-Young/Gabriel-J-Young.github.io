import Image from "next/image";

export default function Page() {
    return (
      <div>
      <main className="flex min-h-screen flex-col items-center p-2 ">
        <div className="flex text-4xl justify-center p-2 rounded-lg bg-sazerac">
          <h2>Slave Ship Database</h2>
        </div>
        <div className="flex text-xl justify-center">
          <h2>Winter 2021 - Spring 2023</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>The HCA Index or Slave Ship Database project is a web application for searching and indexing historical records from the parliamentary papers specifically HCA 35 (house of commons volume 35) which detail the fates of slave ships and the captives on them that were captured by the British royal navy.
            <br/><br/>The records themselves are 19th-century ‘copperplate’ – a style of clerical writing – written by trained scribes where the court adjudications took place. As a small note, many of the court adjudications were of mixed commission because the ships were flying under many different national flags but were captured under the legal pretense of treaties that the British signed with European maritime powers. This is an early instance of formalized international maritime law.</p>
        </div>
        <div className="relative">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/slave_ship_database/copperplate_example.png"
            alt="copperplate example"
            width="164"
            height="2000"
            priority
          />
        </div>
        <p className="max-w-prose text-sm">Copperplate example (distribution of parliamentary papers is controlled by the British National Archives so I can’t show them here) src:lawbookexchange.com "PETITION TO THE MAYOR OF ROCHESTER RESPECTING THE SLAVE TRADE, 1814"</p>

        <div className="flex text-2xl justify-center m-4 p-2 rounded-lg bg-sazerac">
          <h2>Background</h2>
        </div>
        <div className="flex flex-row text-md max-w-prose p-4 rounded-lg bg-sazerac">
          <p>
          This web application was made at the behest of Dr. Mathew Hopper at Cal Poly. One of professor Hopper’s main fields of research is the transatlantic slave, and in one of his upper division classes, students first learn about the slave trade from a variety of primary sources (notably the memoir of Olaudah Equiano who experienced the slave trade as a captive). Then, in the second half of the course, students pick one Ship and read through the 19th century copperplate record of the ships capture, captives, and adjudication. Students write a term paper on their chosen ship to cap off the course.
          <br/><br/>
          I took this class in winter of 2021, and chose to write about <i>The Charles</i>, and Dutch ship captured with 264 souls on board. However, picking the ship was an affair that involved sifting through a clumsy excel document with thousands of manual entries. I saw the potential for a proper database system to enable students and Professor Hopper to quantitatively analyze the records, and for students to filter and pick out interesting ships to research.
          <br/><br/>
          You can see my paper on <i>The Charles</i> <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="/all_work/the_charles">Here</a>.
          </p>
        </div>

        <div className="flex text-2xl justify-center m-4 p-2 rounded-lg bg-sazerac">
          <h2>Database Project Timeline</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>Starting in Spring 2022, Ryan Linard and I started working on this project, picking up from an attempt by previous Cal Poly CS student. The previous project was a good starting off point and helped us create a framework for future development but had major performance and architecture issues.
            <br/><br/>
            The main customer of the project would be Professor hopper and his students so we tailored the project to match their use cases. The web application has two main user-facing parts: the search page and the volume browser. The volume browser was added later and build off work I did for the searching functionality to enable students to simply explore the whole database in a manageable way.
          </p>
        </div>
        <div className="relative place-items-center">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/slave_ship_database/volume_browser.png"
            alt="volumn browser "
            width="2773"
            height="1569"
            priority
          />
        </div>
        <p className="max-w-prose text-sm" >splitting up the data into volumes reflects how the data are physically laid out in the primary source material – and splits the data up into manageable chunks.</p>

        <div className="flex text-2xl justify-center m-4 p-2 rounded-lg bg-sazerac">
          <h2>Search Page</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>I spent most of my time building the search page. The previous iteration of this project by the previous student had a single search field that would try to autocomplete on each letter the user typed in – and in the process queried the entire database on each keystroke! This system was not very well suited for the users of this database, who needed a more filter-style search system. Accordingly, I implemented a search system that allows for the user to filter on each of the 20 or so attributes that each ship has (there are many ships with incomplete data, as this data was handwritten in the 19th century.) I also created a results table that showed a subset of relevant attributes, and a detail page for each entire were the entire set of attributes can be viewed.</p>
          </div>
        <div className="relative place-items-center">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/slave_ship_database/search_page_pt1.png"
            alt="search page (1) "
            width="2778"
            height="1547"
            priority
          />
        </div>

        <div className="relative place-items-center">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/slave_ship_database/search_page_pt2.png"
            alt="search page (2) "
            width="2810"
            height="1458"
            priority
          />
        </div>

        <div className="relative place-items-center">
          <Image
            className="w-full max-w-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-lg"
            src="/img/slave_ship_database/charles_detail_page.png"
            alt="detail page "
            width="2877"
            height="1470"
            priority
          />
        </div>
        
        <div className="flex text-2xl justify-center m-4 p-2 rounded-lg bg-sazerac">
          <h2>Results</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>At the conclusion of this project, we were able to deploy and make the web application available for Professor Hopper, and students studying the Transatlantic Slave Trade.</p>
          </div>
       </main>
      </div>
    );
  }