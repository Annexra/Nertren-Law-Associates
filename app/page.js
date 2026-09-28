import DisclaimerGate from "../components/DisclaimerGate";
import Reveal from "../components/Reveal";
import { Icon, Avatar, Frame } from "../components/Art";

const courts = [
  "High Court of Judicature at Madras",
  "District and Subordinate Courts across Tamil Nadu",
  "Courts and Tribunals in Chennai",
  "Waqf and HR&CE Authorities",
];

const people = [
  {
    name: "Adv. T. Kavin Kumar", ini: "KK", photo: "", // photo: e.g. "/team/kavin-kumar.jpg"
    role: "Founder & Proprietor", enrol: "M.S.3172/2021", main: true,
    quals: "B.E. (Electronics & Communication Engineering), MBA, LL.B. (Hons.), Registered Patent Agent (India)",
    bio: "A litigation and intellectual property practitioner with an academic background across engineering, management and law. Practising since 2021, he has represented clients in constitutional, civil and intellectual property matters. His technical training helps in understanding complex inventions, technologies and commercial disputes.",
    focus: "Writ petitions, civil litigation, trademark litigation, patent litigation, Waqf matters, HR&CE matters.",
  },
  {
    name: "Adv. V. Pavithra", ini: "VP", photo: "", role: "Associate Counsel", enrol: "M.S.738/2022",
    bio: "Assists clients through pleadings, procedural compliance, execution of decrees, evidence-related proceedings and court appearances.",
    focus: "Civil litigation and execution proceedings. Has also handled Section 138 cheque dishonour cases.",
  },
  {
    name: "Adv. A. Malathi", ini: "AM", photo: "", role: "Associate Counsel", enrol: "M.S.167/2024",
    bio: "Practises in civil and family disputes, High Court writs and appeals, and other High Court matters.",
    focus: "Civil disputes, family disputes, High Court writs and appeals.",
  },
];

const practice = [
  ["Writ petitions and constitutional remedies", "Matters under Articles 226 and 227 of the Constitution before the Madras High Court: judicial review of governmental and administrative action, statutory decisions, service disputes, educational matters and regulatory actions. Each writ is assessed for maintainability, alternative remedies and strategy before proceedings begin.", "writ"],
  ["Civil litigation and dispute resolution", "Property rights, partition suits, recovery proceedings, contractual disputes, injunctions, declarations, possession claims and specific performance. The firm assists from pre-litigation advice through pleadings, trial, evidence, arguments and appeals, identifying risks early and preserving evidence.", "civil"],
  ["Trademark litigation and brand protection", "Infringement, passing-off, deceptive similarity, misuse of trade names and unauthorised commercial exploitation of brands. Services include legal opinions, cease-and-desist drafting and practical enforcement strategy.", "trademark"],
  ["Patent litigation and IP disputes", "Patent ownership, infringement and validity disputes for inventors, startups and enterprises. The founder's engineering background and registration as a Patent Agent add a technical perspective to complex inventions.", "patent"],
  ["Waqf matters", "Proceedings involving Waqf administration, management disputes, property issues and related statutory matters. Historical records, title documents and statutory provisions are reviewed closely before any action.", "waqf"],
  ["HR&CE matters", "Advisory and litigation under Hindu Religious and Charitable Endowments laws, including temple administration, governance, regulatory proceedings and property disputes.", "hrce"],
  ["Execution proceedings", "Enforcing decrees through execution, attachment and other lawful mechanisms under civil procedure, with enforcement planned so that the decree delivers real relief.", "execution"],
];

const steps = [
  ["Initial consultation", "A preliminary discussion to understand the dispute."],
  ["Document review and conflict assessment", "Analysis of records and a professional conflict check."],
  ["Legal assessment and strategic advice", "Evaluation of merits and facts, and identification of risks."],
  ["Drafting and filing", "Pleadings, notices and other documents, prepared in compliance with procedure."],
  ["Court representation", "Advocacy before courts, tribunals or authorities."],
  ["Periodic updates", "Transparent communication on material developments."],
  ["Matter closure", "Proper conclusion and systematic record keeping."],
];

export default function Home() {
  return (
    <>
      <DisclaimerGate />
      <Reveal />
      <header>
        <div className="wrap bar">
          <a className="logo" href="#top"><img className="logo-img" src="/images/logo.jpg" alt="" width="44" height="44" />Nertren Law Associates</a>
          <nav aria-label="Main">
            <a href="#about">About</a><a href="#team">Team</a><a href="#practice">Practice</a>
            <a href="#process">Process</a><a href="#careers">Careers</a><a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <div className="hero">
          <img className="hero-img" src="/images/hero.webp" alt="" width="1536" height="1024" fetchPriority="high" />
          <div className="wrap hero-in">
            <h1><span className="ln"><span>Nertren Law</span></span><span className="ln"><span>Associates</span></span></h1>
            <p>An independent litigation and advisory practice in Tamil Nadu, appearing before courts, tribunals and statutory authorities, with a working understanding of commercial, regulatory and intellectual property issues.</p>
          </div>
          <div className="wrap">
            <div className="court">
              <b>Appears before</b>
              <ul>{courts.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
        </div>

        <section id="about"><div className="wrap about-grid">
          <Frame src="/images/about.webp" alt="Brass scales of justice beside law books and a pen" w={900} h={1200} par />
          <div>
            <h2 data-reveal>About the firm</h2>
            <p className="lead" data-reveal>A sole proprietorship founded by Advocate Kavin Kumar, headquartered in Erode District.</p>
            <p data-reveal>The firm was set up to handle both traditional litigation and modern intellectual property disputes. It works across constitutional remedies, civil litigation, intellectual property, Waqf matters, HR&CE matters and execution proceedings.</p>
            <p data-reveal>Effective representation goes beyond court appearances. It takes careful preparation, thorough legal research, a clear reading of the facts and procedural discipline.</p>
            <p data-reveal>Each matter gets individual attention. No matter is accepted before an evaluation of its legal merits, the available evidence and practical considerations.</p>
            <p data-reveal>The practice rests on professional integrity, legal scholarship, client confidentiality, diligent preparation and responsible advocacy, in strict adherence to the Bar Council of India Rules.</p>
          </div>
        </div></section>

        <section id="team"><div className="wrap">
          <h2 data-reveal>Professional profiles</h2>
          <div className="people">
            {people.map((p) => (
              <article key={p.name} className={`person${p.main ? " main" : ""}`}>
                <div><Avatar initials={p.ini} photo={p.photo} name={p.name} /><h3>{p.name}</h3><div className="role">{p.role}</div><small>Enrolment No. {p.enrol}</small></div>
                <div>
                  {p.quals && <p className="focus">{p.quals}</p>}
                  <p>{p.bio}</p>
                  <p className="focus">{p.focus}</p>
                </div>
              </article>
            ))}
          </div>
        </div></section>

        <section id="practice"><div className="wrap">
          <h2 data-reveal>Practice areas</h2>
          <p className="lead">Select an area to read more.</p>
          <Frame cls="banner" src="/images/practice.webp" alt="Scales of justice, a gavel, a trademark token and a patent drawing on a desk" w={1600} h={900} pos="50% 60%" par />
          <div style={{ marginTop: 22 }}>
            {practice.map(([t, d, ic]) => (
              <details key={t}><summary><span className="ttl"><Icon name={ic} />{t}</span></summary><p>{d}</p></details>
            ))}
            <div className="plain"><span className="ttl"><Icon name="writ" />Legal opinions and advisory services</span></div>
            <div className="plain" style={{ border: 0 }}><span className="ttl"><Icon name="patent" />Intellectual property advisory and enforcement</span></div>
          </div>
        </div></section>

        <section id="process"><div className="wrap">
          <h2 data-reveal>How an engagement works</h2>
          <Frame cls="banner wide" src="/images/process.webp" alt="Statue of Lady Justice beside a stack of law books" w={1536} h={625} pos="15% 50%" par />
          <ol className="steps">
            {steps.map(([t, d], i) => <li key={t} data-reveal style={{ "--i": i }}><b>{t}</b><span>{d}</span></li>)}
          </ol>
          <p className="note">Representation begins only after the conflict check is cleared, the engagement is formally accepted and applicable legal requirements are met. All client communications and documents are treated as strictly confidential, subject to applicable law and professional ethics.</p>
        </div></section>

        <section id="careers"><div className="wrap">
          <h2 data-reveal>Careers and internships</h2>
          <p className="lead">Managed for administrative planning, in conformity with the Bar Council of India Rules.</p>
          <Frame cls="banner tall" src="/images/careers.webp" alt="Build your future: legal careers, internships, growth" w={1536} h={1024} pos="45% 30%" />
          <div className="two">
            <div className="box"><h3>Internship programme</h3>
              <p>Open through the year to students of recognised regular LL.B. programmes. Internships are instructional: regulatory compliance, legal research, case law analysis and drafting assistance.</p>
              <p><b>Eligibility:</b> 3rd year or above of a 5-year integrated course, or 2nd year or above of a 3-year course.</p>
              <p><b>Timeline:</b> apply at least 45 to 60 days before your preferred start date.</p></div>
            <div className="box"><h3>Lateral hires and retainers</h3>
              <p>Practising advocates, patent specialists and other legal professionals may submit credentials for review against existing administrative requirements.</p>
              <p><b>How to apply:</b> email a CV and a brief statement of interest naming preferred practice areas to <a href="mailto:advocates@nertren.in">advocates@nertren.in</a>. Use the subject line "Application for Internship — [Month, Year]" or "Application for Associate Position".</p></div>
          </div>
          <p className="note">Receipt of an application does not commit the firm to accept an applicant or create any professional relationship. Review depends on institutional capacity and internal evaluation criteria.</p>
        </div></section>

        <section id="contact" className="contactsec">
          <img className="bgimg" src="/images/office.webp" alt="" width="1536" height="1024" loading="lazy" decoding="async" />
          <div className="wrap">
          <h2 data-reveal>Office and contact</h2>
          <div className="box contact" data-reveal style={{ marginTop: 24 }}><dl>
            <dt>Principal office</dt><dd>190/3, NTK Complex, Gobi Main Road, Erode District – 638458, Tamil Nadu, India</dd>
            <dt>Email</dt><dd><a href="mailto:advocates@nertren.in">advocates@nertren.in</a></dd>
            <dt>Mobile</dt><dd><a href="tel:+919688775599">09688775599</a></dd>
            <dt>Website</dt><dd>www.nertren.in</dd>
          </dl></div>
          <p className="note">Where appropriate, the firm coordinates with other professionals and local counsel to ensure effective representation across regions.</p>
        </div></section>
      </main>

      <footer><div className="wrap">
        <div className="footer-brand"><img className="logo-img" src="/images/logo.jpg" alt="" width="44" height="44" /><strong>Nertren Law Associates</strong></div>
        <h3>Website disclaimer and BCI compliance notice</h3>
        <p>This website is for general information only and is not legal advice, solicitation, advertisement, invitation or inducement. Accessing it, or sending an email, does not create an advocate-client relationship. Obtain independent legal advice before acting on anything found here. No warranty is given about the completeness, accuracy or suitability of the information. Past results do not guarantee or predict future results; every matter depends on its own facts, evidence and procedure.</p>
        <h3>Privacy policy</h3>
        <p>Information you provide voluntarily is used only for administrative and communication purposes. It is not sold, rented or shared with third parties, except where required by law or professional ethical obligations.</p>
        <h3>Terms of use</h3>
        <p>Using this website means you accept these terms. The content is informational, and the firm may change, add or amend it at any time without prior notice.</p>
      </div></footer>
    </>
  );
}
