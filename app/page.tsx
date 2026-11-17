const entries = [
  {
    category: "FIELD GUIDE",
    title: "The infected",
    description:
      "What we know about the changed: how they move, what draws them, and how to stay out of reach.",
    label: "12 notes",
    icon: "01",
  },
  {
    category: "SAFE HAVENS",
    title: "Places worth finding",
    description:
      "Shelters, settlements, and the empty places between them. Conditions change. Travel carefully.",
    label: "08 places",
    icon: "02",
  },
  {
    category: "PEOPLE & GROUPS",
    title: "Who is still out there",
    description:
      "A growing record of the communities we've crossed paths with—and what they believe.",
    label: "06 records",
    icon: "03",
  },
];

const recentNotes = [
  { title: "The long way around", type: "ROUTE LOG", date: "OCT 14" },
  { title: "A light in the water tower", type: "SIGHTING", date: "OCT 11" },
  { title: "First aid, the old way", type: "FIELD GUIDE", date: "OCT 08" },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Fieldnotes home">
          <span className="brand-mark" aria-hidden="true">F</span>
          <span>FIELDNOTES<span className="wordmark-dot">.</span></span>
        </a>
        <nav className="top-nav" aria-label="Main navigation">
          <a className="nav-active" href="#top">The archive</a>
          <a href="#entries">Field guide</a>
          <a href="#recent">Latest notes</a>
        </nav>
        <span className="offline"><span aria-hidden="true" /> OFFLINE ARCHIVE</span>
      </header>

      <div className="page-shell" id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> A SURVIVOR&apos;S FIELD GUIDE</p>
            <h1 id="hero-title">The world<br />didn&apos;t end.<br /><em>It changed.</em></h1>
            <p className="hero-description">
              Notes on what&apos;s left. A living record of the places, people,
              and things we&apos;ve learned to survive.
            </p>
            <a className="text-link" href="#entries">
              EXPLORE THE ARCHIVE <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className="hero-art" role="img" aria-label="A quiet, overgrown road through the woods">
            <div className="art-sun" />
            <div className="art-grid" />
            <span className="art-coordinate">41°24&apos; N&nbsp; / &nbsp;72°55&apos; W</span>
            <span className="art-caption">SOMEWHERE OUTSIDE THE QUARANTINE ZONE</span>
            <span className="art-crosshair" aria-hidden="true">+</span>
          </div>
          <div className="hero-index">ARCHIVE NO. 001 <span>·</span> EST. AFTER</div>
        </section>

        <section className="signal-strip" aria-label="Current field conditions">
          <div className="signal-label"><span className="signal-dot" /> FIELD SIGNAL</div>
          <p>RADIO SILENCE FROM THE NORTH. KEEP TO THE BACK ROADS.</p>
          <span className="signal-date">LAST UPDATED: DAY 184</span>
        </section>

        <section className="entries-section" id="entries" aria-labelledby="entries-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">KNOW WHAT YOU&apos;RE WALKING INTO</p>
              <h2 id="entries-title">The field guide<span>.</span></h2>
            </div>
            <span className="section-count">01 — 03</span>
          </div>
          <div className="entry-grid">
            {entries.map((entry) => (
              <article className="entry-card" key={entry.title}>
                <div className="entry-card-top">
                  <span className="entry-icon">{entry.icon}</span>
                </div>
                <p className="entry-category">{entry.category}</p>
                <h3>{entry.title}</h3>
                <p className="entry-description">{entry.description}</p>
                <span className="entry-label">{entry.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="recent-section" id="recent" aria-labelledby="recent-title">
          <div className="recent-heading">
            <div>
              <p className="eyebrow">FRESH FROM THE NOTEBOOK</p>
              <h2 id="recent-title">Recent entries<span>.</span></h2>
            </div>
            <span className="recent-date">AUTUMN · YEAR UNKNOWN</span>
          </div>
          <div className="note-list">
            {recentNotes.map((note, index) => (
              <article className="note-row" key={note.title}>
                <span className="note-number">0{index + 1}</span>
                <span className="note-title">{note.title}</span>
                <span className="note-type">{note.type}</span>
                <span className="note-date">{note.date}</span>
              </article>
            ))}
          </div>
        </section>

        <footer className="footer">
          <a className="wordmark footer-brand" href="#top">
            <span className="brand-mark" aria-hidden="true">F</span>
            <span>FIELDNOTES<span className="wordmark-dot">.</span></span>
          </a>
          <span>IF YOU FIND THIS, ADD WHAT YOU KNOW.</span>
          <span className="footer-coordinates">STAY QUIET · STAY MOVING</span>
        </footer>
      </div>
    </main>
  );
}
