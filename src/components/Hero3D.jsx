import { useMemo } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import { TECH_STACK } from '../data/techStack'

const GLOBE_RADIUS = 1.5

function fibonacciSpherePoints(n, radius) {
  const points = []
  const offset = 2 / n
  const increment = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < n; i++) {
    const y = i * offset - 1 + offset / 2
    const r = Math.sqrt(Math.max(0, 1 - y * y))
    const phi = i * increment
    const x = Math.cos(phi) * r
    const z = Math.sin(phi) * r
    points.push(new THREE.Vector3(x, y, z).multiplyScalar(radius))
  }
  return points
}

function Compartment({ position, color, icon: Icon }) {
  const quaternion = useMemo(() => {
    const normal = position.clone().normalize()
    return new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal)
  }, [position])

  const panelPos = useMemo(() => position.clone().multiplyScalar(1.04), [position])
  const iconPos = useMemo(() => position.clone().multiplyScalar(1.07), [position])

  return (
    <group>
      <mesh position={panelPos} quaternion={quaternion}>
        <circleGeometry args={[0.17, 32]} />
        <meshStandardMaterial color="#17171A" metalness={0.3} roughness={0.6} />
      </mesh>
      <mesh position={panelPos} quaternion={quaternion}>
        <ringGeometry args={[0.15, 0.17, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} side={THREE.DoubleSide} />
      </mesh>
      <Html position={iconPos} center distanceFactor={5.5} style={{ pointerEvents: 'none' }}>
        <Icon size={19} color={color} />
      </Html>
    </group>
  )
}

function Globe() {
  const points = useMemo(() => fibonacciSpherePoints(TECH_STACK.length, GLOBE_RADIUS), [])

  return (
    <group>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS - 0.06, 48, 48]} />
        <meshStandardMaterial color="#0F0F12" metalness={0.4} roughness={0.7} />
      </mesh>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS - 0.02, 16, 12]} />
        <meshBasicMaterial color="#3A3A40" wireframe transparent opacity={0.2} />
      </mesh>

      {TECH_STACK.map((tech, i) => (
        <Compartment key={tech.id} position={points[i]} color={tech.color} icon={tech.icon} />
      ))}
    </group>
  )
}

export default function Hero3D() {
  return (
    <div className="relative overflow-hidden w-full h-[380px] sm:h-[460px]">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 2, 4]} intensity={30} color="#FF6B45" />
        <pointLight position={[-3, -2, 2]} intensity={20} color="#7C6FF0" />
        <Globe />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  )
}