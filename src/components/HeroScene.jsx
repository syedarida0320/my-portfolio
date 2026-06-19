import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

function createSparkleTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64
  const ctx = canvas.getContext('2d')
  const c = 32

  const gradient = ctx.createRadialGradient(c, c, 0, c, c, c)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.1, 'rgba(255,255,255,0.8)')
  gradient.addColorStop(0.3, 'rgba(255,240,200,0.3)')
  gradient.addColorStop(1, 'rgba(255,240,200,0)')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)

  ctx.strokeStyle = 'rgba(255,255,255,0.5)'
  ctx.lineWidth = 1.5
  ctx.beginPath()
  ctx.moveTo(6, c); ctx.lineTo(58, c)
  ctx.moveTo(c, 6); ctx.lineTo(c, 58)
  ctx.moveTo(12, 12); ctx.lineTo(52, 52)
  ctx.moveTo(52, 12); ctx.lineTo(12, 52)
  ctx.stroke()

  const tex = new THREE.CanvasTexture(canvas)
  return tex
}

function SparkleSprite({ data, texture }) {
  const ref = useRef()
  const { position, phase, speed, baseScale } = data

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    const pulse = 0.2 + 0.8 * (0.5 + 0.5 * Math.sin(t * speed * 2 + phase))
    const s = baseScale * pulse
    ref.current.scale.set(s, s, 1)
    ref.current.material.opacity = 0.2 + 0.8 * (0.5 + 0.5 * Math.sin(t * speed * 2.5 + phase * 1.5))
  })

  return (
    <sprite ref={ref} position={position} scale={[baseScale, baseScale, 1]}>
      <spriteMaterial
        map={texture}
        transparent
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        color="#F0CD6E"
        opacity={0.8}
      />
    </sprite>
  )
}

function Sparkles({ count = 50 }) {
  const texture = useMemo(() => createSparkleTexture(), [])

  const data = useMemo(() => {
    const arr = []
    for (let i = 0; i < count; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
        ],
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 1.2,
        baseScale: 0.08 + Math.random() * 0.25,
      })
    }
    return arr
  }, [count])

  return (
    <group>
      {data.map((d, i) => (
        <SparkleSprite key={i} data={d} texture={texture} />
      ))}
    </group>
  )
}

function Particles({ count = 120 }) {
  const mesh = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5
    }
    return pos
  }, [count])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      dummy.position.set(positions[i3], positions[i3 + 1], positions[i3 + 2])
      const phase = i * 0.02
      dummy.position.x += Math.sin(t * 0.15 + phase) * 0.008
      dummy.position.y += Math.cos(t * 0.12 + phase) * 0.008
      dummy.rotation.set(
        t * 0.05 + phase,
        t * 0.03 + phase,
        t * 0.04 + phase
      )
      const s = 0.4 + Math.sin(t * 0.08 + i * 0.1) * 0.2
      dummy.scale.setScalar(s)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    }
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <icosahedronGeometry args={[0.12, 0]} />
      <meshStandardMaterial
        color="#D4AF37"
        emissive="#D4AF37"
        emissiveIntensity={0.15}
        transparent
        opacity={0.5}
      />
    </instancedMesh>
  )
}

function FloatingShapes() {
  const group = useRef()

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime()
    group.current.rotation.x = Math.sin(t * 0.02) * 0.1 + pointer.y * 0.05
    group.current.rotation.y = Math.sin(t * 0.015) * 0.1 + pointer.x * 0.05
  })

  const shapes = useMemo(() => {
    const arr = []
    for (let i = 0; i < 6; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6 - 3,
        ],
        scale: 0.3 + Math.random() * 0.5,
        type: Math.random() > 0.5 ? 'octahedron' : 'tetrahedron',
        color: ['#D4AF37', '#F0CD6E', '#9AA3C6', '#6B7494'][Math.floor(Math.random() * 4)],
      })
    }
    return arr
  }, [])

  return (
    <group ref={group}>
      {shapes.map((s, i) => (
        <Float key={i} speed={0.5 + Math.random() * 0.5} rotationIntensity={0.3} floatIntensity={0.4}>
          <mesh position={s.position} scale={s.scale}>
            {s.type === 'octahedron' ? (
              <octahedronGeometry />
            ) : (
              <tetrahedronGeometry />
            )}
            <meshStandardMaterial
              color={s.color}
              transparent
              opacity={0.12}
              wireframe
              emissive={s.color}
              emissiveIntensity={0.05}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Stars
          radius={30}
          depth={40}
          count={400}
          factor={3}
          saturation={0}
          fade
          speed={0.5}
        />
        <Particles count={100} />
        <Sparkles count={60} />
        <FloatingShapes />
      </Canvas>
    </div>
  )
}
