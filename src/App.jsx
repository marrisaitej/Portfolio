import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Icon from './components/Icon.jsx';
import { useReveal } from './hooks/useReveal.js';
import { education, projects, skills, socials } from './data/portfolio.js';
import './styles/App.css';

const roles = ['Full Stack Developer', 'React Developer', 'MERN Stack Developer', 'Problem Solver'];
const techFloat = [['HTML5','5'],['CSS3','3'],['JavaScript','JS'],['React','⚛'],['Node.js','⬡'],['MongoDB','◉']];
const placeholderHref = (url) => url.includes('REPLACE_') ? '#' : url;

function SectionHeading({ eyebrow, title, accent }) { return <div className="section-heading reveal"><span className="eyebrow">{eyebrow}</span><h2>{title} <span>{accent}</span></h2></div>; }
function SocialLinks({ compact = false }) { return <div className={`social-links ${compact ? 'compact' : ''}`}>
  <a href={placeholderHref(socials.github)} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Icon name="github"/></a>
  <a href={placeholderHref(socials.linkedin)} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Icon name="linkedin"/></a>
  <a href={`mailto:${socials.email}`} aria-label="Send email"><Icon name="mail"/></a>
</div>; }

export default function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [formMessage, setFormMessage] = useState('');
  useReveal();
  useEffect(() => { const timer = setInterval(() => setRoleIndex((n) => (n + 1) % roles.length), 2600); return () => clearInterval(timer); }, []);
  const submit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(form.get('subject'));
    const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`);
    setFormMessage('Your email app is opening with your message. Add your email address in src/data/portfolio.js first.');
    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
  };
  return <>
    <Navbar />
    <main>
      <section className="hero" id="home"><div className="hero-grid" aria-hidden="true"/><div className="hero-inner">
        <div className="hero-copy"><p className="eyebrow reveal"><span className="eyebrow-dot"/> AVAILABLE FOR OPPORTUNITIES</p>
          <h1 className="reveal">Hi, I’m<br/><span className="gradient-text">MARRI SAI BABU</span></h1>
          <p className="hero-role reveal">I’m a <span key={roleIndex}>{roles[roleIndex]}</span><i className="caret"/></p>
          <p className="hero-description reveal">I am a passionate Full Stack Developer skilled in building responsive, user-friendly, and dynamic web applications. I enjoy developing modern websites using React.js, Node.js, Express.js, and MongoDB. I love learning new technologies and creating innovative solutions to real-world problems.</p>
          <div className="hero-actions reveal"><a className="button button-primary" href="/resume.pdf" download><Icon name="download"/> Download Resume</a><SocialLinks/></div>
          <a className="scroll-hint" href="#about"><span/> SCROLL TO EXPLORE</a>
        </div>
        <div className="hero-visual reveal"><div className="portrait-glow"><div className="portrait-ring"><img src="/profile-photo.jpg" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = '/profile-placeholder.svg'; }} alt="MARRI SAI BABU profile photo" fetchPriority="high"/></div></div>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          {techFloat.map(([name, mark], i) => <div className={`float-chip chip-${i+1}`} key={name}><span>{mark}</span>{name}</div>)}
          <div className="visual-label"><span className="visual-pulse"/> BUILDING DIGITAL EXPERIENCES</div>
        </div>
      </div><div className="hero-bottom"><span>01 / 06</span><span>SCROLL DOWN <Icon name="chevron"/></span></div></section>

      <section className="section about-section" id="about"><div className="container"><SectionHeading eyebrow="A LITTLE ABOUT ME" title="More than code," accent="I build experiences."/>
        <div className="about-grid"><article className="glass-card about-main reveal"><div className="card-index">01 / PROFILE</div><h3>Turning ideas into<br/><span className="gradient-text">digital reality.</span></h3><p>I’m a Full Stack Developer who enjoys creating modern, responsive web applications. From thoughtful interfaces to dependable backend workflows, I like bringing each part together into a useful product.</p><p>My goal is to keep learning, solve real-world problems, and build experiences that feel clear and effortless to use.</p><div className="about-tags"><span>✳ Problem solving</span><span>⌘ Continuous learning</span><span>◇ Product thinking</span></div></article>
          <div className="about-side"><article className="glass-card mini-card reveal"><span className="mini-icon">✦</span><div className="card-index">CAREER OBJECTIVE</div><h3>Make technology<br/>feel human.</h3><p>Grow as a developer while building meaningful applications with a thoughtful team.</p></article><article className="glass-card mini-card reveal"><span className="mini-icon">⌘</span><div className="card-index">OUTSIDE THE EDITOR</div><h3>Curiosity drives<br/>the craft.</h3><p>Exploring new tools, ideas, and better ways to bring solutions to life.</p></article></div>
        </div><div className="stats-row reveal"><div><strong>05</strong><span>PROJECT CONCEPTS</span></div><div><strong>14<span>+</span></strong><span>TECHNOLOGIES</span></div><div><strong>—</strong><span>CERTIFICATIONS <small>add your count</small></span></div></div>
      </div></section>

      <section className="section skills-section" id="skills"><div className="container"><SectionHeading eyebrow="THE TOOLKIT" title="My Technical" accent="Skills"/><p className="section-lead reveal">Tools and technologies I use to turn ideas into reliable, polished applications.</p>
        <div className="skills-grid">{skills.map((group, gi) => <article className="glass-card skill-group reveal" key={group.category}><div className="skill-heading"><span className="skill-count">0{gi+1}</span><h3>{group.category}</h3></div><div className="skill-list">{group.items.map((skill) => <div className="skill-item" key={skill.name}><div className="skill-meta"><span className="skill-mark">{skill.mark}</span><span>{skill.name}</span><small>{skill.level}%</small></div><div className="skill-track"><span style={{'--skill-level': `${skill.level}%`}}/></div></div>)}</div></article>)}</div>
      </div></section>

      <section className="section projects-section" id="projects"><div className="container"><SectionHeading eyebrow="SELECTED WORK" title="My Recent" accent="Projects"/><p className="section-lead reveal">A selection of ideas and applications. Replace preview images and links with your live work.</p>
        <div className="projects-grid">{projects.map((project, i) => <article className="project-card reveal" key={project.title}><a className="project-image" href="#contact" aria-label={`Ask about ${project.title}`}><img src={project.image} alt={`${project.title} project preview placeholder`} loading="lazy"/><span className="project-number">0{i+1}</span><span className="image-arrow"><Icon name="arrow"/></span></a><div className="project-body"><span className="eyebrow">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="project-actions"><a href={project.demo} aria-label={`Live demo for ${project.title}`}>Live Demo <Icon name="arrow"/></a><a href={project.code} aria-label={`GitHub code for ${project.title}`}><Icon name="github"/> GitHub Code</a></div></div></article>)}</div>
      </div></section>

      <section className="section education-section" id="education"><div className="container"><SectionHeading eyebrow="THE JOURNEY" title="Education &" accent="Certificates"/><p className="section-lead reveal">The learning and milestones behind my development journey.</p>
        <div className="timeline">{education.map((item, i) => <article className="timeline-item reveal" key={item.title}><div className="timeline-marker">0{i+1}</div><div className="glass-card timeline-card"><span className="eyebrow">{item.date}</span><h3>{item.title}</h3><h4>{item.place}</h4><p>{item.detail}</p></div></article>)}</div>
      </div></section>

      <section className="section contact-section" id="contact"><div className="container"><SectionHeading eyebrow="HAVE A PROJECT IN MIND?" title="Let’s Work" accent="Together"/><p className="section-lead reveal">Have an idea or an opportunity? Send a note and let’s start a conversation.</p>
        <div className="contact-grid"><div className="contact-intro reveal"><div className="contact-orb">✳</div><h3>Let’s make something<br/><span className="gradient-text">worth remembering.</span></h3><p>I’m always interested in learning about new projects and ways to build useful things together.</p><div className="contact-detail"><span className="contact-detail-icon"><Icon name="mail"/></span><div><small>EMAIL</small><a href={`mailto:${socials.email}`}>{socials.email}</a></div></div><div className="contact-detail"><span className="contact-detail-icon"><Icon name="github"/></span><div><small>FIND ME ONLINE</small><SocialLinks compact/></div></div></div>
          <form className="glass-card contact-form reveal" onSubmit={submit}><div className="form-row"><label>Your name<input name="name" placeholder="Jane Smith" required autoComplete="name"/></label><label>Email address<input name="email" type="email" placeholder="jane@example.com" required autoComplete="email"/></label></div><label>Subject<input name="subject" placeholder="What would you like to build?" required/></label><label>Message<textarea name="message" rows="5" placeholder="Tell me a little about your project…" required/></label><button className="button button-primary" type="submit">Send Message <Icon name="arrow"/></button>{formMessage && <p className="form-message" role="status">{formMessage}</p>}</form>
        </div>
      </div></section>
    </main>
    <footer className="footer"><div className="container footer-top"><div><a className="brand" href="#home">MyName<span>&lt;/&gt;</span></a><p>Full Stack Developer · Building with purpose.</p></div><SocialLinks compact/><nav aria-label="Footer navigation">{['About','Skills','Projects','Contact'].map((x)=><a href={`#${x.toLowerCase()}`} key={x}>{x}</a>)}</nav></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} MARRI SAI BABU. All rights reserved.</span><a href="#home">BACK TO TOP ↑</a><span>DESIGNED WITH INTENTION <b>✳</b></span></div></footer>
    <a className="back-to-top" href="#home" aria-label="Back to top"><Icon name="arrow"/></a>
  </>;
}
