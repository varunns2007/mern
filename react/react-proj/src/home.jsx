import './Home.css'
import React from 'react';

function Data({ obj }) {
  return (
    <section className="college-card">
      <h2>College Name</h2>
      <p>{obj}</p>
    </section>
  )
}

function Players({ data }) {
  return (
    <section className="players-card">
      <h2>List of Players</h2>
      <div className="player-grid">
        {data.map((player) => (
          <article className="player-card" key={player.name}>
            <span className="player-name">{player.name}</span>
            <span className="player-team">Team: {player.Team}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

function Home() {
  const playersData = [
    { name: 'kohli', Team: 'india' },
    { name: 'rohit', Team: 'india' },
    { name: 'dhoni', Team: 'india' },
  ]

  return (
    <main className="home-page">
      <header className="home-header">
        <h1>This is App component</h1>
        <h2>JavaScript file</h2>
      </header>

      <Data obj="SECE College" />
      <Players data={playersData} />
    </main>
  )
}

export default Home