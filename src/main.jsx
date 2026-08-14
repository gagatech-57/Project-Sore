import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, RoundedBox, Float } from "@react-three/drei";
import {
  Mic, Sparkles, Wifi, ShieldCheck, BatteryCharging, Camera,
  Navigation, BrainCircuit, Volume2, ArrowRight, Play, Menu, X,
  Cpu, Eye, MessageCircle, Zap, Bluetooth, Smartphone, LockKeyhole,
  ChevronDown
} from "lucide-react";
import "./styles.css";
import "./styles.mobile.css";

const features = [
  { icon: Mic, title: "Voice First", text: "Speak naturally. SORE listens, understands and responds without reaching for your phone." },
  { icon: BrainCircuit, title: "AI Answers", text: "Your voice is converted to text, processed by AI and returned as a natural spoken answer." },
  { icon: Wifi, title: "Always Connected", text: "Wi‑Fi and Bluetooth provide the bridge to AI services and future companion-device features." },
  { icon: ShieldCheck, title: "Privacy Minded", text: "A physical interaction control and visible status light make the device state clear." },
  { icon: BatteryCharging, title: "Made to Carry", text: "A compact rechargeable architecture keeps the concept portable and wearable." },
  { icon: Zap, title: "Action Ready", text: "The software architecture can grow from answering questions into executing useful actions." },
  { icon: Bluetooth, title: "Phone Companion", text: "Future versions can work with a phone for calls, messages, navigation and device controls." },
  { icon: LockKeyhole, title: "User Controlled", text: "Wake, listen and action states are designed to be explicit and controllable." },
  { icon: MessageCircle, title: "Natural Interaction", text: "The goal is simple: talk to SORE as naturally as you would talk to a person." }
];

const current = [
  "Natural voice questions and conversations",
  "AI answers through the built-in speaker",
  "Press-to-talk interaction",
  "Wi‑Fi / Bluetooth connectivity",
  "Status LED feedback",
  "Hands-free everyday assistance"
];

const future = [
  "Camera-based vision and scene understanding",
  "Object and environment recognition",
  "Navigation and location assistance",
  "Phone and smart-device actions",
  "Personalized memory and context",
  "More languages and offline capabilities"
];

const architecture = [
  ["Voice input", "Dual MEMS microphones capture the user's speech."],
  ["Device controller", "SORE handles audio, buttons, LEDs, power and connectivity."],
  ["AI processing", "STT → AI reasoning → TTS produces the response."],
  ["Voice output", "The amplifier drives the speaker so SORE can speak back."],
  ["Future actions", "Tools can be added for navigation, phone control and smart actions."]
];

function Ring() {
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.86, 0.28]}>
      <torusGeometry args={[0.43, 0.045, 24, 64]} />
      <meshStandardMaterial color="#5e94ff" emissive="#3c7dff" emissiveIntensity={3.5} metalness={0.35} roughness={0.25} />
    </mesh>
  );
}

function SpeakerGrille() {
  return (
    <group position={[0, -0.12, 0.91]}>
      {Array.from({ length: 6 }).map((_, r) =>
        Array.from({ length: 7 }).map((__, c) => (
          <mesh key={`${r}-${c}`} position={[(c - 3) * 0.09, (r - 2.5) * 0.065, 0]}>
            <sphereGeometry args={[0.012, 10, 10]} />
            <meshStandardMaterial color="#030509" />
          </mesh>
        ))
      )}
    </group>
  );
}

function SoreModel() {
  return (
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.12}>
      <group rotation={[0.04, -0.18, 0.02]}>
        <RoundedBox args={[1.55, 2.05, 0.42]} radius={0.22} smoothness={5} position={[0, 0, 0]}>
          <meshStandardMaterial color="#10151e" metalness={0.65} roughness={0.24} />
        </RoundedBox>
        <mesh position={[0, 0.02, 0.22]}>
          <boxGeometry args={[1.38, 1.87, 0.035]} />
          <meshStandardMaterial color="#070a10" metalness={0.15} roughness={0.35} />
        </mesh>
        <Ring />
        <mesh position={[-0.52, 0.78, 0.255]}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshStandardMaterial color="#071018" emissive="#57d7ff" emissiveIntensity={1.8} />
        </mesh>
        <mesh position={[0.52, 0.78, 0.255]}>
          <sphereGeometry args={[0.035, 16, 16]} />
          <meshStandardMaterial color="#071018" emissive="#57d7ff" emissiveIntensity={1.8} />
        </mesh>
        <mesh position={[0, -0.78, 0.25]}>
          <boxGeometry args={[0.32, 0.055, 0.035]} />
          <meshStandardMaterial color="#222a35" metalness={0.4} roughness={0.35} />
        </mesh>
        <SpeakerGrille />
        <mesh position={[0.79, 0.34, 0]}>
          <boxGeometry args={[0.045, 0.34, 0.13]} />
          <meshStandardMaterial color="#252c38" metalness={0.6} roughness={0.28} />
        </mesh>
        <mesh position={[0.79, -0.08, 0]}>
          <boxGeometry args={[0.045, 0.22, 0.13]} />
          <meshStandardMaterial color="#252c38" metalness={0.6} roughness={0.28} />
        </mesh>
        <mesh position={[0, 1.05, 0]}>
          <torusGeometry args={[0.24, 0.035, 18, 48]} />
          <meshStandardMaterial color="#1b222c" metalness={0.8} roughness={0.22} />
        </mesh>
      </group>
    </Float>
  );
}

function Product3D() {
  return (
    <div className="canvas-wrap">
      <Canvas camera={{ position: [0, 0.2, 4.8], fov: 38 }} dpr={[1, 2]}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[3, 4, 5]} intensity={2.2} color="#dce9ff" />
        <pointLight position={[-3, 1, 2]} intensity={30} distance={7} color="#397cff" />
        <pointLight position={[2, -2, 1]} intensity={16} distance={6} color="#8a5cff" />
        <SoreModel />
        <Environment preset="city" />
        <OrbitControls enablePan={false} minDistance={3.1} maxDistance={6.5} enableDamping dampingFactor={0.08} />
      </Canvas>
      <div className="drag-hint"><span>↔</span> Drag to rotate • Scroll to zoom</div>
    </div>
  );
}

function ProductViews() {
  const [view, setView] = useState("3d");
  return (
    <div className="viewer-card">
      <div className="viewer-head">
        <div><span className="eyebrow">INTERACTIVE PRODUCT VIEW</span><h3>See SORE from every angle.</h3></div>
        <span className="live-dot">● 3D</span>
      </div>
      <div className="viewer-tabs">
        <button className={view === "3d" ? "active" : ""} onClick={() => setView("3d")}>360° 3D</button>
        <button className={view === "front" ? "active" : ""} onClick={() => setView("front")}>Front</button>
        <button className={view === "side" ? "active" : ""} onClick={() => setView("side")}>Side</button>
        <button className={view === "back" ? "active" : ""} onClick={() => setView("back")}>Back</button>
      </div>
      {view === "3d" ? <Product3D/> : <StaticView type={view}/>}
    </div>
  );
}

function StaticView({ type }) {
  return (
    <div className={`static-view ${type}`}>
      <div className="static-device">
        {type === "front" && <>
          <div className="static-ring"></div><span className="static-logo">SORE</span><i></i><i></i>
        </>}
        {type === "side" && <><div className="side-btn a"></div><div className="side-btn b"></div><div className="side-port"></div></>}
        {type === "back" && <><div className="back-clip"></div><div className="back-grille"></div><span className="static-logo">SORE</span></>}
      </div>
      <span className="view-label">{type.toUpperCase()} VIEW</span>
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [demo, setDemo] = useState(false);
  const go = (id) => { setMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="app">
      <header className="nav">
        <button className="brand" onClick={() => go("home")}><span className="brand-mark">S</span><span>SORE</span></button>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          <button onClick={() => go("product")}>Product</button>
          <button onClick={() => go("features")}>Features</button>
          <button onClick={() => go("how")}>How it works</button>
          <button onClick={() => go("prototype")}>Prototype</button>
          <button onClick={() => go("roadmap")}>Roadmap</button>
        </nav>
        <button className="nav-cta" onClick={() => go("prototype")}>Explore SORE <ArrowRight size={16}/></button>
        <button className="menu-btn" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-copy">
            <div className="pill"><span></span> EARLY PROTOTYPE • VOICE AI</div>
            <h1>Your voice.<br/><em>Your AI.</em><br/>Always with you.</h1>
            <p>SORE is a compact wearable AI companion designed around a simple interaction: speak naturally, receive an answer, and keep moving without opening a screen.</p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("product")}>Explore SORE <ArrowRight size={18}/></button>
              <button className="ghost" onClick={() => setDemo(true)}><Play size={16}/> See how it works</button>
            </div>
            <div className="hero-tags"><span><Mic size={14}/> Voice AI</span><span><Sparkles size={14}/> Wearable</span><span><ShieldCheck size={14}/> User controlled</span></div>
          </div>
          <div className="hero-3d"><Product3D/><div className="hero-label">REAL-TIME 3D MODEL<br/><small>Drag • Rotate • Zoom</small></div></div>
        </section>

        <section id="how" className="section workflow-section">
          <div className="section-title"><span className="eyebrow">THE CORE LOOP</span><h2>How SORE works</h2><p>One simple voice interaction connects the physical device to AI processing and back to your ear.</p></div>
          <div className="workflow">
            {[[Mic,"01","You speak","Ask a question or give a command."],[Cpu,"02","SORE listens","Microphones capture your voice."],[BrainCircuit,"03","AI processes","STT → AI reasoning → TTS."],[Volume2,"04","SORE replies","The answer is spoken back."],[Zap,"05","Future actions","Tools can execute useful actions."]].map(([Icon,n,title,text]) =>
              <div className="flow-card" key={n}><span className="flow-number">{n}</span><Icon size={25}/><h3>{title}</h3><p>{text}</p></div>
            )}
          </div>
        </section>

        <section id="product" className="section product-section">
          <div className="split">
            <div className="product-info">
              <span className="eyebrow">THE PRODUCT</span>
              <h2>Small enough to carry.<br/><em>Natural enough to talk to.</em></h2>
              <p>SORE is imagined as a compact wearable device that keeps AI interaction close to you. The first version focuses on voice. Future versions can add vision, navigation and action capabilities without changing the core idea.</p>
              <div className="spec-grid">
                <div><b>Voice</b><span>Primary interaction</span></div>
                <div><b>Wi‑Fi + BLE</b><span>Connectivity</span></div>
                <div><b>USB‑C</b><span>Rechargeable</span></div>
                <div><b>Vision ready</b><span>Future expansion</span></div>
              </div>
            </div>
            <ProductViews/>
          </div>
        </section>

        <section id="features" className="section">
          <div className="section-title"><span className="eyebrow">CAPABILITIES</span><h2>Built around conversation.</h2><p>Everything starts with voice and expands through software, sensors and connected tools.</p></div>
          <div className="feature-grid">{features.map(({icon:Icon,title,text}) =>
            <article className="feature-card" key={title}><div className="icon-box"><Icon size={21}/></div><h3>{title}</h3><p>{text}</p><span className="feature-arrow">↗</span></article>
          )}</div>
        </section>

        <section id="prototype" className="section prototype-section">
          <div className="section-title left"><span className="eyebrow">ENGINEERING CONCEPT</span><h2>Inside SORE.</h2><p>The first prototype keeps the electronics focused on voice capture, processing, connectivity and spoken output.</p></div>
          <div className="prototype-grid">
            <div className="prototype-visual">
              <div className="pcb">
                <div className="chip">ESP32-S3</div><div className="pcb-battery">Li‑Po<br/>BATTERY</div><div className="pcb-mic">MEMS<br/>MIC ×2</div><div className="pcb-amp">AUDIO<br/>AMP</div><div className="pcb-led"></div><div className="pcb-lines"></div>
              </div>
              <div className="callout c1"><span></span>Controller + connectivity</div><div className="callout c2"><span></span>Dual voice microphones</div><div className="callout c3"><span></span>Speaker audio chain</div><div className="callout c4"><span></span>Rechargeable power</div>
            </div>
            <div className="architecture">
              {architecture.map(([title,text],i) => <div className="arch-row" key={title}><span>0{i+1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
              <div className="arch-note"><Camera size={18}/><div><b>Vision is future-ready.</b><p>A camera can be added later for “what is in front of me?” style interactions and visual understanding.</p></div></div>
            </div>
          </div>
        </section>

        <section className="section capability-section">
          <div className="cap-card current"><div className="cap-head"><span className="status-dot green"></span><div><span className="eyebrow">CURRENT</span><h2>What SORE does</h2></div></div><ul>{current.map(x=><li key={x}><span>✓</span>{x}</li>)}</ul></div>
          <div className="cap-card future"><div className="cap-head"><span className="status-dot purple"></span><div><span className="eyebrow">FUTURE</span><h2>What SORE can become</h2></div></div><ul>{future.map(x=><li key={x}><Sparkles size={15}/>{x}</li>)}</ul></div>
        </section>

        <section id="roadmap" className="section roadmap-section">
          <div className="section-title"><span className="eyebrow">ROADMAP</span><h2>Start with voice.<br/><em>Grow into a companion.</em></h2><p>A modular product direction keeps the first prototype simple while leaving room for richer capabilities.</p></div>
          <div className="roadmap">
            {[["V1","Voice Core","Voice input, AI answers, speaker output and connectivity.","CURRENT"],["V2","Vision","Camera support, scene understanding and object awareness.","NEXT"],["V3","Actions","Navigation, phone controls and useful tool execution.","PLANNED"],["V4","Companion","Context, memory, personalization and richer assistance.","VISION"]].map(([v,t,d,s],i)=>
              <div className="road-item" key={v}><div className="road-line"><span>{v}</span>{i<3&&<i/>}</div><div className="road-copy"><small>{s}</small><h3>{t}</h3><p>{d}</p></div></div>
            )}
          </div>
        </section>

        <section className="cta-section">
          <span className="eyebrow">THE IDEA</span><h2>The future is conversational.</h2><p>SORE is being imagined as an AI you can simply talk to — no screen required for the first interaction.</p>
          <button className="primary" onClick={() => go("product")}>Explore the 3D product <ArrowRight size={18}/></button>
        </section>
      </main>

      <footer><div className="footer-brand"><span className="brand-mark">S</span><b>SORE</b><p>AI voice companion concept.</p></div><div className="footer-links"><button onClick={()=>go("product")}>Product</button><button onClick={()=>go("features")}>Features</button><button onClick={()=>go("roadmap")}>Roadmap</button></div><span className="copyright">Prototype concept • 2026</span></footer>

      {demo && <div className="modal-backdrop" onClick={()=>setDemo(false)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setDemo(false)}><X/></button><span className="eyebrow">SORE INTERACTION</span><h2>Ask. Process. Reply.</h2><div className="demo-flow"><div><Mic/><b>You</b><span>“SORE, what is the weather?”</span></div><ArrowRight/><div><BrainCircuit/><b>AI</b><span>Understands the request</span></div><ArrowRight/><div><Volume2/><b>SORE</b><span>“It’s 32°C with light rain.”</span></div></div></div></div>}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
