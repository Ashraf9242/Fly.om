import { useState, useEffect, useRef } from 'react'
import { T, type Lang } from './translations'

const WA_URL = 'https://wa.me/96893283983'
const IG_URL = 'https://www.instagram.com/fly.om_'

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const [lang, setLang] = useState<Lang>('ar')
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const s = localStorage.getItem('flyom-theme')
    return s === 'light' ? 'light' : 'dark'
  })
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', message: '', date: '' })
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const t = T[lang]

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('flyom-theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [lang])

  useScrollReveal()

  const navLinks = [
    { href: '#about',        label: t.nav.about },
    { href: '#services',     label: t.nav.services },
    { href: '#pricing',      label: t.nav.pricing },
    { href: '#gallery',      label: t.nav.gallery },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#faq',          label: t.nav.faq },
    { href: '#contact',      label: t.nav.contact },
  ]

  const formRef = useRef<HTMLFormElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\nMessage: ${form.message}`
    )
    window.open(`${WA_URL}?text=${msg}`, '_blank')
  }

  function toggleFaq(key: string) {
    setOpenFaq(prev => prev === key ? null : key)
  }

  return (
    <>
      {/* ── Floating WhatsApp ──────────────────────────── */}
      <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="float-wa" aria-label="WhatsApp">
        <i className="fa-brands fa-whatsapp" />
      </a>

      {/* ── Navbar ────────────────────────────────────── */}
      <nav className="navbar">
        <div className="container navbar__inner">
          <a href="#" className="navbar__logo">fly<span>.om_</span></a>

          <ul className="navbar__links">
            {navLinks.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>

          <div className="navbar__actions">
            <button className="btn-lang" onClick={() => setLang(l => l === 'en' ? 'ar' : 'en')}>
              {t.nav.langToggle}
            </button>
            <button className="btn-theme" onClick={() => setTheme(th => th === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
              <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} />
            </button>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">{t.nav.book}</a>
            <button
              className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
        ))}
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: 'center' }} onClick={() => setMenuOpen(false)}>
          {t.nav.book}
        </a>
        <div className="mobile-menu__controls">
          <button className="btn-lang" onClick={() => setLang(l => l === 'en' ? 'ar' : 'en')}>
            {t.nav.langToggle}
          </button>
          <button className="btn-theme" onClick={() => setTheme(th => th === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
            <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} />
          </button>
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="hero" id="home">
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__gradient" />

        <div className="container hero__content">
          <div className="hero__badge" data-reveal>
            <i className="fa-solid fa-location-dot" /> {t.hero.badge}
          </div>
          <h1 className="hero__title" data-reveal data-delay="1">
            {t.hero.line1}<br /><em>{t.hero.line2}</em>
          </h1>
          <p className="hero__sub" data-reveal data-delay="2">{t.hero.sub}</p>
          <div className="hero__ctas" data-reveal data-delay="3">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
              <i className="fa-brands fa-whatsapp" /> {t.hero.cta1}
            </a>
            <a href="#contact" className="btn-hero-ghost">
              <i className="fa-solid fa-envelope" /> {t.hero.cta2}
            </a>
          </div>
        </div>

        <div className="hero__scroll">
          <i className="fa-solid fa-chevron-down" />
          <span>{t.hero.scroll}</span>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────── */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {t.stats.map((s, i) => (
              <div key={i} data-reveal data-delay={`${i + 1}`}>
                <div className="stats__n">{s.n}</div>
                <div className="stats__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────── */}
      <section className="about" id="about">
        <div className="container">
          <div className="about__grid">
            <div>
              <div className="section-label" data-reveal>{t.about.label}</div>
              <h2 className="section-title" data-reveal data-delay="1">{t.about.title}</h2>
              <p className="section-desc" style={{ marginTop: '1rem' }} data-reveal data-delay="2">
                {t.about.body}
              </p>

              <div data-reveal data-delay="3">
                <div style={{ marginTop: '1.5rem', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                  {t.about.rolesTitle}
                </div>
                <div className="about__roles">
                  {t.about.roles.map(r => <span key={r} className="about__role">{r}</span>)}
                </div>
              </div>

              <div data-reveal data-delay="4">
                <div style={{ marginTop: '1.25rem', fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  {t.about.teamsTitle}
                </div>
                <div className="about__teams">
                  {t.about.teams.map(tm => <div key={tm} className="about__team">{tm}</div>)}
                </div>
              </div>
            </div>

            <div className="about__visual" data-reveal data-delay="1">
              <div className="about__img">
                <img src="/assets/service_training.png" alt="Ibrahim Al-Ghafri" />
              </div>
              <div className="about__img-badge">
                <div className="about__badge-icon"><i className="fa-solid fa-award" /></div>
                <div className="about__badge-text">
                  <strong>IPPI Certified</strong>
                  <small>Licensed Pilot & Rigger</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <section className="services" id="services">
        <div className="container">
          <div className="services__header">
            <div className="section-label" data-reveal>{t.services.label}</div>
            <h2 className="section-title" data-reveal data-delay="1">{t.services.title}</h2>
          </div>
          <div className="services__grid">
            {t.services.items.map((s, i) => (
              <div className="svc-card" key={i} data-reveal data-delay={`${(i % 3) + 1}`}>
                <div className="svc-card__emoji">{s.icon}</div>
                <div className="svc-card__title">{s.title}</div>
                <div className="svc-card__desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────── */}
      <section className="pricing" id="pricing">
        <div className="container">
          <div className="pricing__header">
            <div className="section-label" data-reveal>{t.pricing.label}</div>
            <h2 className="section-title" data-reveal data-delay="1">{t.pricing.title}</h2>
          </div>

          <div className="packages__grid">
            {t.pricing.packages.map((pkg, i) => (
              <div
                key={i}
                className={`pkg-card${pkg.featured ? ' pkg-card--featured' : ''}`}
                data-reveal
                data-delay={`${i + 1}`}
              >
                {pkg.featured && pkg.featuredLabel && (
                  <div className="pkg-card__featured-badge">{pkg.featuredLabel}</div>
                )}
                <div className="pkg-card__num">{t.pricing.packageLabel} {pkg.num}</div>
                <div className="pkg-card__emoji">{pkg.emoji}</div>
                <div className="pkg-card__name">{pkg.name}</div>
                <div className="pkg-card__subtitle">{pkg.subtitle}</div>
                <div className="pkg-card__price">
                  <span className="pkg-card__currency">{pkg.currency}</span>
                  {pkg.price}
                </div>
                <div className="pkg-card__per">{t.pricing.perPerson}</div>
                <ul className="pkg-card__features">
                  {pkg.features.map((f, fi) => (
                    <li key={fi} className="pkg-card__feature">
                      <i className="fa-solid fa-check" />{f}
                    </li>
                  ))}
                </ul>
                {pkg.note && <div className="pkg-card__note">{pkg.note}</div>}
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="pkg-card__btn">
                  <i className="fa-brands fa-whatsapp" />{t.pricing.bookWA}
                </a>
              </div>
            ))}
          </div>

          <div className="pricing__footer" data-reveal>
            <div className="pricing__footer-item">
              <i className="fa-regular fa-clock" />
              <strong>{t.pricing.hoursTitle}:</strong>
            </div>
            {t.pricing.hours.map((h, i) => (
              <div key={i} className="pricing__footer-item">
                <strong>{h.day}</strong>&nbsp;{h.time}
              </div>
            ))}
            <div className="pricing__footer-divider" />
            <div className="pricing__footer-item">{t.pricing.note}</div>
          </div>
        </div>
      </section>

      {/* ── Gallery ───────────────────────────────────── */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="gallery__header">
            <div className="section-label" data-reveal>{t.gallery.label}</div>
            <h2 className="section-title" data-reveal data-delay="1">{t.gallery.title}</h2>
          </div>
          <div className="gallery__grid" data-reveal data-delay="2">
            <div className="gallery__item gallery__item--tall">
              <img src="/assets/hero_pov.png" alt="Paragliding POV" />
            </div>
            <div className="gallery__item">
              <img src="/assets/gallery_desert.png" alt="Desert launch" />
            </div>
            <div className="gallery__item">
              <img src="/assets/gallery_coastal.png" alt="Coastal flight" />
            </div>
            <div className="gallery__item">
              <img src="/assets/service_sunset.png" alt="Sunset flight" />
            </div>
            <div className="gallery__item">
              <img src="/assets/service_tandem.png" alt="Tandem flight" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────── */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="testimonials__header">
            <div className="section-label" data-reveal>{t.testimonials.label}</div>
            <h2 className="section-title" data-reveal data-delay="1">{t.testimonials.title}</h2>
          </div>
          <div className="testimonials__grid">
            {t.testimonials.items.map((tc, i) => (
              <div className="t-card" key={i} data-reveal data-delay={`${i + 1}`}>
                <div className="t-card__stars">{'★★★★★'}</div>
                <p className="t-card__quote">"{tc.quote}"</p>
                <div className="t-card__author">
                  <div className="t-card__avatar">{tc.initials}</div>
                  <div>
                    <div className="t-card__name">{tc.name}</div>
                    <div className="t-card__meta">{tc.meta}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="faq__header">
            <div className="section-label" data-reveal>{t.faq.label}</div>
            <h2 className="section-title" data-reveal data-delay="1">{t.faq.title}</h2>
            <p className="section-desc" style={{ marginTop: '0.75rem' }} data-reveal data-delay="2">{t.faq.subtitle}</p>

            <div className="fear-meter" data-reveal data-delay="3">
              <div className="fear-meter__caption">{t.faq.meter.label}</div>
              <div className="fear-meter__row">
                <span className="fear-meter__end">😰</span>
                <div className="fear-meter__track">
                  <div className="fear-meter__dot" />
                </div>
                <span className="fear-meter__end">😎</span>
              </div>
              <div className="fear-meter__labels">
                <span>{t.faq.meter.scared}</span>
                <span>{t.faq.meter.brave}</span>
              </div>
              <div className="fear-meter__note">{t.faq.meter.note}</div>
            </div>
          </div>

          <div className="faq__body">
            {t.faq.categories.map((cat, ci) => (
              <div key={ci} className="faq__category">
                <h3 className="faq__cat-heading">{cat.heading}</h3>
                <div className="faq__list">
                  {cat.items.map((item, ii) => {
                    const key = `${ci}-${ii}`
                    const isOpen = openFaq === key
                    return (
                      <div key={ii} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
                        <button className="faq-item__q" onClick={() => toggleFaq(key)}>
                          <span>{item.q}</span>
                          <i className="fa-solid fa-chevron-down faq-item__icon" />
                        </button>
                        <div className="faq-item__a-wrap">
                          <p className="faq-item__a">{item.a}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="faq__cta" data-reveal>
            <p className="faq__cta-text">{t.faq.ctaText}</p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-hero-primary btn-book-glow">
              <i className="fa-brands fa-whatsapp" /> {t.faq.ctaBtn}
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────── */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact__header">
            <div className="section-label" data-reveal>{t.contact.label}</div>
            <h2 className="section-title" data-reveal data-delay="1">{t.contact.title}</h2>
          </div>

          <div className="contact__grid">
            <div>
              <div className="contact__info" data-reveal data-delay="1">
                <div className="contact__item">
                  <div className="contact__icon"><i className="fa-solid fa-location-dot" /></div>
                  <div>
                    <div className="contact__item-title">Location</div>
                    <div className="contact__item-val">{t.contact.location}</div>
                  </div>
                </div>
                <div className="contact__item">
                  <div className="contact__icon"><i className="fa-brands fa-whatsapp" /></div>
                  <div>
                    <div className="contact__item-title">WhatsApp</div>
                    <div className="contact__item-val">
                      <a href={WA_URL} target="_blank" rel="noopener noreferrer">{t.contact.whatsapp}</a>
                    </div>
                  </div>
                </div>
                <div className="contact__item">
                  <div className="contact__icon"><i className="fa-brands fa-instagram" /></div>
                  <div>
                    <div className="contact__item-title">Instagram</div>
                    <div className="contact__item-val">
                      <a href={IG_URL} target="_blank" rel="noopener noreferrer">{t.contact.instagram}</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact__map" data-reveal data-delay="2">
                <iframe
                  src="https://maps.google.com/maps?q=Al+Sawadi+Beach+Barka+Oman&output=embed&z=14"
                  title="Al-Sawadi Beach"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <form ref={formRef} className="contact__form" onSubmit={handleSubmit} data-reveal data-delay="2">
              <div className="form__group">
                <label className="form__label">{t.contact.form.name}</label>
                <input
                  className="form__input" type="text" required
                  placeholder={t.contact.form.name}
                  value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className="form__group">
                <label className="form__label">{t.contact.form.phone}</label>
                <input
                  className="form__input" type="tel"
                  placeholder={t.contact.form.phone}
                  value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                />
              </div>
              <div className="form__group">
                <label className="form__label">{t.contact.form.date}</label>
                <input
                  className="form__input" type="date"
                  value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                />
              </div>
              <div className="form__group">
                <label className="form__label">{t.contact.form.message}</label>
                <textarea
                  className="form__textarea"
                  placeholder={t.contact.form.message}
                  value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                />
              </div>
              <button type="submit" className="btn-submit">
                <i className="fa-brands fa-whatsapp" style={{ marginInlineEnd: '0.5rem' }} />
                {t.contact.form.send}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div>
              <div className="footer__logo">fly<span>.om_</span></div>
              <p className="footer__desc">{t.footer.desc}</p>
              <div className="footer__socials">
                {[
                  { icon: 'fa-brands fa-instagram', href: IG_URL, label: 'Instagram' },
                  { icon: 'fa-brands fa-whatsapp', href: WA_URL, label: 'WhatsApp' },
                  { icon: 'fa-brands fa-tiktok', href: 'https://www.tiktok.com/@fly_om?_r=1&_t=ZS-96yyk5NfZhK', label: 'TikTok' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label={s.label}>
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="footer__col-title">{t.footer.services}</div>
              <ul className="footer__col-links">
                {t.footer.serviceLinks.map(l => <li key={l}><a href="#services">{l}</a></li>)}
              </ul>
            </div>

            <div>
              <div className="footer__col-title">{t.footer.company}</div>
              <ul className="footer__col-links">
                {t.footer.companyLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}
              </ul>
            </div>

            <div>
              <div className="footer__col-title">{t.footer.contact}</div>
              <ul className="footer__col-links">
                <li><a href={WA_URL} target="_blank" rel="noopener noreferrer">{t.footer.contactLinks[0]}</a></li>
                <li><a href={IG_URL} target="_blank" rel="noopener noreferrer">{t.footer.contactLinks[1]}</a></li>
                <li><a href="#contact">{t.footer.contactLinks[2]}</a></li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__copy">{t.footer.rights}</div>
            <div className="footer__legal">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
