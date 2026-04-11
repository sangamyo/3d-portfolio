import { Float, MeshDistortMaterial, RoundedBox, Text, Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { sectionMeta } from "../content";

function RoomBase() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
        <planeGeometry args={[24, 24]} />
        <meshStandardMaterial color="#0a1220" metalness={0.2} roughness={0.9} />
      </mesh>

      <RoundedBox args={[16, 7.5, 0.3]} radius={0.18} position={[0, 3.6, -6]}>
        <meshStandardMaterial color="#0d1628" metalness={0.15} roughness={0.8} />
      </RoundedBox>

      <RoundedBox args={[0.4, 7.5, 12]} radius={0.1} position={[-8, 3.6, 0]}>
        <meshStandardMaterial color="#08111f" metalness={0.2} roughness={0.9} />
      </RoundedBox>

      <RoundedBox args={[0.4, 7.5, 12]} radius={0.1} position={[8, 3.6, 0]}>
        <meshStandardMaterial color="#08111f" metalness={0.2} roughness={0.9} />
      </RoundedBox>
    </group>
  );
}

function NeonFrame() {
  return (
    <group position={[0, 3.6, -5.8]}>
      <RoundedBox args={[12, 5.4, 0.08]} radius={0.12}>
        <meshStandardMaterial color="#12203f" emissive="#36f3ff" emissiveIntensity={0.45} />
      </RoundedBox>
      <RoundedBox args={[11.3, 4.7, 0.12]} radius={0.08} position={[0, 0, 0.08]}>
        <meshStandardMaterial color="#07111e" metalness={0.25} roughness={0.65} />
      </RoundedBox>
      <Text
        position={[0, 1.35, 0.2]}
        fontSize={0.7}
        color="#dffcff"
        anchorX="center"
        anchorY="middle"
      >
        HARI OM
      </Text>
      <Text
        position={[0, 0.5, 0.2]}
        fontSize={0.25}
        color="#7fffd4"
        anchorX="center"
        anchorY="middle"
      >
        AI DEVELOPER | PROBLEM SOLVER
      </Text>
      <Text
        position={[0, -0.2, 0.2]}
        fontSize={0.19}
        maxWidth={8.8}
        textAlign="center"
        color="#8ba6c7"
        anchorX="center"
        anchorY="middle"
      >
        Step into the room. Click the glowing artifacts. Explore a portfolio designed like a futuristic mission control.
      </Text>
    </group>
  );
}

function Hotspot({ color, position, onClick, active, children }) {
  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.15} floatIntensity={0.45}>
        <group onClick={onClick}>
          {children}
        </group>
      </Float>
      <pointLight color={color} intensity={active ? 24 : 12} distance={5.5} />
    </group>
  );
}

function AvatarBeacon({ active, onClick }) {
  const meshRef = useRef(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.55;
  });

  return (
    <Hotspot
      position={[-4.8, 1.2, -0.6]}
      color="#ff7b72"
      onClick={onClick}
      active={active}
    >
      <group ref={meshRef}>
        <mesh position={[0, 1.05, 0]}>
          <sphereGeometry args={[0.45, 32, 32]} />
          <meshStandardMaterial color="#ffc0b9" emissive="#ff7b72" emissiveIntensity={0.4} />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <capsuleGeometry args={[0.48, 1.2, 8, 16]} />
          <meshStandardMaterial color="#1f2e4c" emissive="#ff7b72" emissiveIntensity={0.15} />
        </mesh>
      </group>
    </Hotspot>
  );
}

function ProjectsCluster({ active, onClick }) {
  return (
    <Hotspot
      position={[0, 1.2, 1.1]}
      color="#36f3ff"
      onClick={onClick}
      active={active}
    >
      <group>
        <mesh rotation={[0.45, 0.4, 0]}>
          <boxGeometry args={[1.8, 1.2, 1.1]} />
          <meshStandardMaterial color="#0b1f30" emissive="#36f3ff" emissiveIntensity={0.35} />
        </mesh>
        <mesh position={[0, 0, 0.64]}>
          <planeGeometry args={[1.3, 0.8]} />
          <meshStandardMaterial color="#a6fbff" emissive="#36f3ff" emissiveIntensity={1.4} />
        </mesh>
      </group>
    </Hotspot>
  );
}

function SkillsGalaxy({ active, onClick }) {
  const groupRef = useRef(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.35;
  });

  return (
    <Hotspot
      position={[4.8, 2, -1]}
      color="#8dff8a"
      onClick={onClick}
      active={active}
    >
      <group ref={groupRef}>
        <mesh>
          <sphereGeometry args={[0.48, 32, 32]} />
          <meshStandardMaterial color="#9df6af" emissive="#8dff8a" emissiveIntensity={0.8} />
        </mesh>
        <Torus args={[1.2, 0.04, 12, 64]} rotation={[1.25, 0.25, 0.5]}>
          <meshStandardMaterial color="#d9ffe0" emissive="#8dff8a" emissiveIntensity={0.8} />
        </Torus>
        <Torus args={[1.65, 0.03, 12, 64]} rotation={[0.35, 1.25, 0]}>
          <meshStandardMaterial color="#d9ffe0" emissive="#8dff8a" emissiveIntensity={0.55} />
        </Torus>
      </group>
    </Hotspot>
  );
}

function ExperiencePath({ active, onClick }) {
  return (
    <Hotspot
      position={[-1.5, 0.5, -3.1]}
      color="#ffd866"
      onClick={onClick}
      active={active}
    >
      <group rotation={[0, 0.2, 0]}>
        {[0, 1, 2, 3].map((index) => (
          <mesh key={index} position={[index * 0.8, index * 0.14, -index * 0.3]}>
            <cylinderGeometry args={[0.18, 0.18, 0.18, 32]} />
            <meshStandardMaterial color="#ffe08c" emissive="#ffd866" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>
    </Hotspot>
  );
}

function ContactPortal({ active, onClick }) {
  return (
    <Hotspot
      position={[5.4, 1.4, 2.5]}
      color="#b68cff"
      onClick={onClick}
      active={active}
    >
      <mesh>
        <torusKnotGeometry args={[0.68, 0.18, 128, 24]} />
        <MeshDistortMaterial
          color="#ceb6ff"
          emissive="#b68cff"
          emissiveIntensity={0.95}
          speed={2}
          distort={0.22}
        />
      </mesh>
    </Hotspot>
  );
}

function LightingRig() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[6, 8, 5]} intensity={1.8} color="#c9f6ff" />
      <spotLight position={[-6, 6, 4]} angle={0.4} intensity={35} penumbra={0.6} color="#ff9187" />
      <spotLight position={[7, 6, -2]} angle={0.35} intensity={30} penumbra={0.6} color="#77ffe4" />
      <pointLight position={[0, 4.8, -4.8]} intensity={18} distance={12} color="#3fd1ff" />
    </>
  );
}

export default function Scene({ activeSection, onSelect, modalOpen }) {
  return (
    <group>
      <LightingRig />
      <RoomBase />
      <NeonFrame />

      <AvatarBeacon active={activeSection === "about"} onClick={() => onSelect("about")} />
      <ProjectsCluster active={activeSection === "projects"} onClick={() => onSelect("projects")} />
      <SkillsGalaxy active={activeSection === "skills"} onClick={() => onSelect("skills")} />
      <ExperiencePath active={activeSection === "experience"} onClick={() => onSelect("experience")} />
      <ContactPortal active={activeSection === "contact"} onClick={() => onSelect("contact")} />
    </group>
  );
}
