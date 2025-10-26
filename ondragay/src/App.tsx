import { useState } from 'react'
import './App.css'

function App() {
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number}>>([])

  const addSparkle = (e: React.MouseEvent) => {
    const newSparkle = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY
    }
    setSparkles([...sparkles, newSparkle])
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== newSparkle.id))
    }, 1000)
  }

  return (
    <div className="app" onClick={addSparkle}>
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{left: sparkle.x, top: sparkle.y}}
        >
          🏳️‍🌈
        </div>
      ))}

      {/* Hero Section */}
      <header className="hero">
        <div className="rainbow-flag">🏳️‍🌈</div>
        <h1 className="main-title">
          <span className="glitter">✨</span> JUDr. Ondra Urban <span className="glitter">✨</span>
        </h1>
        <h2 className="subtitle">
         "Právník, který ti to udělá... po právu!" 🌈
        </h2>
        <div className="intro-text">
          <p>🌈 Honey, potřebuješ právníka, který tě bude REPREZENTOVAT? 🌈</p>
          <p>Jsem tady, abych ti pomohl roztáhnout... křídla k úspěchu! S 10 lety zkušeností v oboru vím, jak na to vzít zezadu... tedy ze správné právní stránky! 💪</p>
        </div>
        <div className="pride-hearts">
          ❤️ 🧡 💛 💚 💙 💜
        </div>
      </header>

      {/* Services Section */}
      <section className="services">
        <h2 className="section-title">
          <span className="rainbow-text">Naše Fabulózní Služby</span> 💎
        </h2>

        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">⚖️🌈</div>
            <h3>Občanské Právo</h3>
            <p>Máš spor se sousedem? Dědictví po tátovi? Pomůžu ti to vyřešit tak hladce, že budeš klouzat jako na lubrikantu... tedy jako po másle! Občanské právo je moje parketa a já na ní tančím! 💃</p>
          </div>

          <div className="service-card">
            <div className="service-icon">💼✨</div>
            <h3>Obchodní Právo</h3>
            <p>Zakládáš firmu? Potřebuješ smlouvu? Jsem expert na penetraci trhu... tedy na proniknutí na trh! S.r.o., a.s., nebo OSVČ - zvládnu to všechno a ještě ti u toho udělám radost! 📊</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🏠💕</div>
            <h3>Nemovitosti & Smlouvy</h3>
            <p>✨ Koupíš byt? Prodáváš loft? Zajistím, aby tvoje smlouva byla těsnější než skinny jeans na pride! Vždy jdu do hloubky... dokumentace! 📜</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🏳️‍⚧️⚖️</div>
            <h3>LGBTQ+ Práva</h3>
            <p>Jsme tady pro tebe, queen! Registrované partnerství, změna jména, diskriminace - bojujeme za tvoje práva s plnou vervou!</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🏢🌟</div>
            <h3>Pracovní Právo</h3>
            <p>Šéf tě šuká? Ne doslova, ale v práci? Pomůžu ti s výpovědí, diskriminací nebo obtěžováním! Tvoje práva jsou jako tvoje hole - musíš je umět správně používat! 💪</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🎭💅</div>
            <h3>Autorské Právo</h3>
            <p>Tvořiš obsah? Píšeš? Fotíš? Tvoje dílo si zaslouží ochranu jako tvoje zadek v těsných kalhotách! Autorská práva, licence, ochranné známky - all covered, honey! 🎨</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2 className="section-title">
          <span className="rainbow-text">Proč Zrovna My?</span> 👑
        </h2>
        <div className="about-content">
          <div className="about-card">
            <h3>🌈 Autentičnost</h3>
            <p>Jsme tady pro VŠECHNY! Bez předsudků, bez judgementu, jen čistá právní excellence zabalená v duhovém papíře.</p>
          </div>
          <div className="about-card">
            <h3>💎 Profesionalita</h3>
            <p>Můžeme být extra, ale naše právní služby jsou EXTRA profesionální! JUDr. titul není jen pro parádu (i když vypadá skvěle).</p>
          </div>
          <div className="about-card">
            <h3>✨ Empatie</h3>
            <p>Rozumíme ti, protože jsme tady pro tebe jako člověka, ne jako číslo spisu. Your story matters, honey!</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">
          <span className="rainbow-text">Co Říkají Naši Klienti</span> 💬
        </h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"Ondra mi pomohl dostat se z průšvihu tak elegantně, že jsem z toho měl orgasmus... tedy organizmus... tedy byl jsem organizovaný!"</p>
            <span className="testimonial-author">- Spokojený klient</span>
          </div>
          <div className="testimonial">
            <p>"Konečně právník, který chápe, že můj byznys s drag show potřebuje právní ochranu! Slay, queen! 👑"</p>
            <span className="testimonial-author">- Ivana Lott</span>
          </div>
          <div className="testimonial">
            <p>"Ondra mi pomohl s registrovaným partnerstvím a celý proces byl tak smooth jako moje freshly waxed legs! 10/10 would recommend! 💕"</p>
            <span className="testimonial-author">- Jakub & Martin</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2 className="section-title">
          <span className="rainbow-text">Pojďme Si Popovídat!</span> 📞
        </h2>
        <div className="contact-content">
          <p className="contact-text">
            Máš právní problém? Potřebuješ radu? Nebo jen chceš probrat, jak úžasně vypadáš dnes?
            <br/>
            <strong>Jsme tady pro tebe, bestie!</strong>
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href="mailto:ondra.urban@pravnik.cz">ondra.urban@pravnik.cz</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <a href="tel:+420777888999">+420 777 888 999</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Duhová 69, 110 00 Praha 1</span>
            </div>
          </div>
          <button className="cta-button">
            ✨ Objednat Konzultaci ✨
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>🏳️‍🌈 JUDr. Ondra Urban - Právní služby s láskou a stylem 🏳️‍🌈</p>
          <p className="footer-small">
            © 2025 | Všechna práva vyhrazena | Made with 💖 and ✨
          </p>
          <div className="pride-hearts">
            ❤️ 🧡 💛 💚 💙 💜 🤎 🖤 🤍 💗
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
