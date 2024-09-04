export default function Page() {
    return (
      <div>
      <main className="flex min-h-screen flex-col items-center p-2 ">
        <div className="flex text-4xl justify-center p-2 rounded-lg bg-sazerac">
          <h2>Reading List:</h2>
        </div>
        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <ul>
            <p>
            Some articles I've enjoyed reading. Try <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href="https://12ft.io/">https://12ft.io/</a> if you get paywalled.
            </p><br></br>
            <li><i>The Atlantic</i><br></br><a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
            href="https://www.theatlantic.com/ideas/archive/2024/05/happiness-knowledge-edgar-allan-poe/678530/">
                Why It's Nice to Know You</a> <br></br> Like <i>How to Win Friends and Influence People</i> but a bit less cynical.</li>
                <br></br>

            <li><i>The Atlantic</i><br></br><a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
            href="https://www.theatlantic.com/magazine/archive/2023/04/equity-language-guides-sierra-club-banned-words/673085/">
                The Moral Case Against Equity Language</a><br></br> Hope for the future of written english.</li>
                <br></br>
            <li><i>The New Yorker</i><br></br><a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
            href="https://www.newyorker.com/magazine/2023/10/09/among-the-cabin-fanatics-of-mississippis-giant-houseparty">
                Mississippi Cabin Fairs</a><br></br> Fun self-contained rabbit hole into southern culture.</li>
                <br></br>
            <li><i>The Atlantic</i><br></br><a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
            href="https://www.theatlantic.com/magazine/archive/2005/01/lost-in-the-meritocracy/303672/">
               Lost in the Meritocracy</a> <br></br> Very good writing, autobiographical, but the author really knows how to tell a story. This got turned into a book! This guy also wrote "Up in the Air"</li>
               <br></br>
            <li><i>The New Yorker</i><br></br><a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
            href="https://www.newyorker.com/magazine/2003/08/18/the-marriage-cure">
               The Marriage Cure</a> <br></br> Age of George W. Bush, very clear-headed and human piece, worth the length.</li>
               <br></br>
            <li><i>The Atlantic</i><br></br><a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
            href="https://www.theatlantic.com/magazine/archive/2024/05/royal-caribbean-cruise-ship-icon-of-seas/677838/">
               Cruise Ship</a> <br></br> Humorious, about a very jewish man on a cruise.</li>
               <br></br>
            <li><i>The Economist</i><br></br><a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
            href="https://www.economist.com/interactive/united-states/2024/07/30/the-demise-of-an-iconic-american-highway">
               Big Sur</a><br></br> Photos of one of the most beautiful places in the world.</li>
               <br></br>
               
            </ul></div>

      </main>
      </div>
    );
  }