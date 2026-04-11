import { Canvas } from "@react-three/fiber";
import { Float, Html, OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { Suspense, useMemo, useState } from "react";
import { Color } from "three";
import Scene from "./components/Scene";
import {
  aboutContent,
  contactContent,
  heroContent,
  experienceContent,
  projects,
  sectionMeta,
  skillsContent,
} from "./content";

const sectionContent = {
  about: aboutContent,
  projects: { title: "Project Arsenal", items: projects },
  skills: skillsContent,
  experience: experienceContent,
  contact: contactContent,
};

function StorySection({ title, children }) {
  return (
    <section className="story-section">
      <div className="story-heading">
        <span className="story-bar" />
        <h3>{title}</h3>
      </div>
      {children}
    </section>
  );
}

function IntroBillboard() {
  return (
    <Html position={[0, 2.65, -1.8]} center transform distanceFactor={5.5}>
      <div className="scene-badge">
        <span>Neo Tokyo Portfolio</span>
      </div>
    </Html>
  );
}

function StoryPanel({ activeSection, onClose }) {
  if (!activeSection) return null;

  const meta = sectionMeta[activeSection];
  const content = sectionContent[activeSection];

  return (
    <aside className="story-panel">
      <div className="story-panel-top">
        <div>
          <p className="eyebrow">{meta.kicker}</p>
          <h2>{content.title}</h2>
        </div>
        <button className="modal-close" onClick={onClose} aria-label="Close panel">
          Close
        </button>
      </div>

      <div className="story-scroll">
        {activeSection === "about" && (
          <div className="story-stack">
            <StorySection title="Profile">
              <p className="lead">{content.summary}</p>
            </StorySection>
            <StorySection title="Highlights">
              <div className="stats-row">
                {content.stats.map((item) => (
                  <div key={item.label} className="stat-tile">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </StorySection>
            <StorySection title="Builder Notes">
              <div className="grid two">
                {content.highlights.map((item) => (
                  <div key={item.title} className="info-tile">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </StorySection>
            <StorySection title="Education">
              <div className="timeline">
                {content.education.map((item) => (
                  <div key={item.title} className="timeline-item education-item">
                    <span>{item.period}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </StorySection>
            <StorySection title="Achievements">
              <div className="achievement-list">
                {content.achievements.map((item) => (
                  <div key={item} className="info-tile">
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </StorySection>
          </div>
        )}

        {activeSection === "projects" && (
          <div className="story-stack">
            {content.items.map((project) => (
              <StorySection key={project.title} title={project.title}>
                <div className="project-card">
                  <p className="project-label">{project.label}</p>
                  <p>{project.description}</p>
                  <p className="stack">{project.stack.join(" · ")}</p>
                  <div className="project-links">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                    <a href={project.repo} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </StorySection>
            ))}
          </div>
        )}

        {activeSection === "skills" && (
          <div className="story-stack">
            <StorySection title="Skill Constellation">
            <p className="lead">{content.summary}</p>
            </StorySection>
            <StorySection title="Capability Panels">
            <div className="grid two">
                {content.groups.map((group) => (
                  <div key={group.name} className="info-tile">
                    <h3>{group.name}</h3>
                    <p>{group.items.join(" · ")}</p>
                  </div>
                ))}
            </div>
            </StorySection>
            <StorySection title="Core Strengths">
              <div className="marquee-grid">
                {content.core.map((item) => (
                  <div key={item} className="skill-pill">
                    {item}
                  </div>
                ))}
              </div>
            </StorySection>
          </div>
        )}

        {activeSection === "experience" && (
          <div className="story-stack">
            {content.stops.map((stop) => (
              <StorySection key={stop.year + stop.title} title={stop.title}>
                <div className="timeline-item">
                  <span>{stop.year}</span>
                  <div>
                    <h3>{stop.title}</h3>
                    <p>{stop.text}</p>
                  </div>
                </div>
              </StorySection>
            ))}
          </div>
        )}

        {activeSection === "contact" && (
          <div className="story-stack">
            <StorySection title="Collaboration">
            <p className="lead">{content.summary}</p>
            </StorySection>
            <StorySection title="Channels">
            <div className="contact-grid">
              {content.links.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="contact-tile">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
            </StorySection>
            <StorySection title="Resume">
            <a href={content.resumeHref} className="resume-button" target="_blank" rel="noreferrer">
              Download Resume
            </a>
            </StorySection>
          </div>
        )}
      </div>
    </aside>
  );
}

function HeroPanel({ onJump, activeSection }) {
  return (
    <div className="hud">
      <div className="hero-copy">
        <p className="eyebrow">{heroContent.kicker}</p>
        <div className="anime-tag">Anime UI Mode</div>
        <h1>
          {heroContent.name}
          <span>{heroContent.subtitle}</span>
        </h1>
        <p className="hero-text">{heroContent.description}</p>
        <div className="actions">
          <button onClick={() => onJump("projects")}>{heroContent.primaryAction}</button>
          <button className="secondary" onClick={() => onJump("about")}>
            {heroContent.secondaryAction}
          </button>
        </div>
      </div>

      <aside className="control-panel">
        <div className="panel-header">
          <p className="panel-title">Story Scroll</p>
          <span className="panel-caption">Open a chapter</span>
        </div>
        <div className="nav-scroll">
          {Object.entries(sectionMeta).map(([key, value], index) => (
            <button
              key={key}
              className={activeSection === key ? "nav-chip active" : "nav-chip"}
              onClick={() => onJump(key)}
            >
              <span className="chip-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="chip-icon">{value.icon}</span>
              <span>{value.label}</span>
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}

function EnvironmentEffects() {
  const colors = useMemo(
    () => [new Color("#36f3ff"), new Color("#ff7b72"), new Color("#8dff8a")],
    [],
  );

  return (
    <>
      <color attach="background" args={["#04070d"]} />
      <fog attach="fog" args={["#04070d", 10, 28]} />
      <Stars radius={120} depth={55} count={2800} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={140} speed={0.5} size={3} scale={[16, 8, 16]} color={colors[0]} />
      <Float speed={1.2} floatIntensity={0.5} rotationIntensity={0.08}>
        <IntroBillboard />
      </Float>
    </>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  const modalOpen = Boolean(activeSection);

  return (
    <div className="app-shell">
      <div className={modalOpen ? "ui-layer dimmed" : "ui-layer"}>
        <HeroPanel onJump={setActiveSection} activeSection={activeSection} />
      </div>

      <Canvas camera={{ position: [0, 4, 11], fov: 42 }}>
        <Suspense fallback={null}>
          <EnvironmentEffects />
          <Scene activeSection={activeSection} onSelect={setActiveSection} modalOpen={modalOpen} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2.05}
            minAzimuthAngle={-0.8}
            maxAzimuthAngle={0.8}
            target={[0, 2.2, 0]}
          />
        </Suspense>
      </Canvas>

      <div className={modalOpen ? "footer-bar dimmed" : "footer-bar"}>
        <span>Click any glowing object inside the room</span>
        <span>Built with React + Three.js + React Three Fiber</span>
      </div>

      <StoryPanel activeSection={activeSection} onClose={() => setActiveSection(null)} />
    </div>
  );
}
