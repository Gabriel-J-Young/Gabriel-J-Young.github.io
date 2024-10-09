'use client'
import React, {useEffect, useState} from "react";

export default function Page() {
    return (
      
      <div>
      <main className="flex min-h-screen flex-col items-center p-2 ">
        <div className="flex text-4xl justify-center p-2 rounded-lg bg-sazerac">
          <h2>Hiking Page:</h2>
        </div>
        

        <div className="flex flex-row text-md justify-center max-w-prose m-2 p-4 rounded-lg bg-sazerac">
          <p>WIP!<br/>
          I plan to log some hikes and import some strava data here</p></div>

          {/* <GetUsers></GetUsers> */}

      </main>
      </div>
    );
  }

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function GetUsers() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:8080/api").then(
      response => response.json()
    ).then(
        data => {
          setBackendData(data)
        }
    )
  }, []);

  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading users...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
        )}
    </div>
  );
}