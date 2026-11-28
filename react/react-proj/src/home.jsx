import './Home.css'

function Data({ obj }) {
  return (
    <section className="college-card">
      <div className="college-icon">SE</div>
      <div>
        <span className="eyebrow">Proudly representing</span>
        <h2>{obj}</h2>
      </div>
    </section>
  )
}

function Players({ data }) {
  return (
    <section className="players-card">
      <div className="section-heading">
        <div>
          <span className="eyebrow">The legends</span>
          <h2>Meet Team India's finest</h2>
        </div>
        <span className="player-count">{data.length} players</span>
      </div>

      <div className="player-grid">
        {data.map((player, index) => (
          <article className="player-card" key={player.name}>
            <div className="player-number">{String(index + 1).padStart(2, '0')}</div>

            <div className="player-details">
              <span className="player-name">{player.name}</span>
              <span className="player-role">{player.role}</span>
              <span className="player-team">
                <i></i> {player.Team}
              </span>
            </div>

            <div className="player-figure" aria-label={`${player.name} portrait`}>
              <div className="figure-shadow"></div>
              <img src={player.image} alt={player.name} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Home() {
  const playersData = [
    { name: 'Virat Kohli', role: 'Top-order batter', Team: 'India', image: '/virat-kohli.jpg' },
    { name: 'Rohit Sharma', role: 'Opening batter', Team: 'India', image: '/rohit-sharma.jpg' },
    { name: 'MS Dhoni', role: 'Wicketkeeper', Team: 'India', image: '/ms-dhoni.jpg' },
  ]

  return (
    <main className="home-page">
      <div className="background-orb orb-one"></div>
      <div className="background-orb orb-two"></div>

      <header className="home-header">
        <span className="hero-badge">Cricket collection</span>
        <h1>Icons of the game</h1>
        <p>Three remarkable cricketers. One unforgettable legacy.</p>
      </header>

      <Data obj="SECE College" />
      <Players data={playersData} />
    </main>
  )
}

export default Home