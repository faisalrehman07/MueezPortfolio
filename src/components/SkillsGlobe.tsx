import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { candidateData } from '../data/candidate';
import { 
  Globe, 
  RotateCcw, 
  Play, 
  Pause, 
  Sparkles, 
  CheckCircle2, 
  LayoutGrid
} from 'lucide-react';

interface SkillsGlobeProps {
  onSelectSkill?: (skillName: string) => void;
}

export const SkillsGlobe: React.FC<SkillsGlobeProps> = ({ onSelectSkill }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<typeof candidateData.skills[0] | null>(candidateData.skills[0]);
  const [isRotating, setIsRotating] = useState(true);
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('3d');

  // Filter skills based on selected category
  const activeSkills = useMemo(() => {
    if (selectedCategory === 'all') return candidateData.skills;
    return candidateData.skills.filter(s => s.category === selectedCategory);
  }, [selectedCategory]);

  // Keep refs for animation loop
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereGroupRef = useRef<THREE.Group | null>(null);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const isRotatingRef = useRef(isRotating);
  isRotatingRef.current = isRotating;

  // Track 2D projected positions of 3D nodes for crisp interactive badges
  const [projectedNodes, setProjectedNodes] = useState<{
    id: string;
    name: string;
    x: number;
    y: number;
    visible: boolean;
    scale: number;
    category: string;
    original: typeof candidateData.skills[0];
  }[]>([]);

  useEffect(() => {
    if (!mountRef.current || viewMode !== '3d') return;

    const width = mountRef.current.clientWidth || 500;
    const height = 480;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 240;
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Clear previous canvas
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    mountRef.current.appendChild(renderer.domElement);

    // Group for all sphere elements
    const sphereGroup = new THREE.Group();
    sphereGroupRef.current = sphereGroup;
    scene.add(sphereGroup);

    // Inner wireframe sphere
    const sphereRadius = 85;
    const wireframeGeo = new THREE.SphereGeometry(sphereRadius, 18, 18);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x1e293b,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
    sphereGroup.add(wireframeMesh);

    // Subtle MBA Gold Orbit rings
    const ringGeo1 = new THREE.RingGeometry(sphereRadius + 4, sphereRadius + 5, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    sphereGroup.add(ringMesh1);

    const ringGeo2 = new THREE.RingGeometry(sphereRadius + 10, sphereRadius + 11, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    sphereGroup.add(ringMesh2);

    // Generate node 3D positions using Fibonacci sphere distribution
    const count = activeSkills.length;
    const nodeVectors: { vector: THREE.Vector3; skill: typeof candidateData.skills[0] }[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1 || 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const vector = new THREE.Vector3(x * sphereRadius, y * sphereRadius, z * sphereRadius);
      nodeVectors.push({ vector, skill: activeSkills[i] });

      // Add a small 3D glowing sphere mesh at each node
      const pointGeo = new THREE.SphereGeometry(2.5, 12, 12);
      const isGold = activeSkills[i].category === 'mba' || activeSkills[i].category === 'cx';
      const pointMat = new THREE.MeshBasicMaterial({
        color: isGold ? 0xf59e0b : 0x38bdf8,
      });
      const pointMesh = new THREE.Mesh(pointGeo, pointMat);
      pointMesh.position.copy(vector);
      sphereGroup.add(pointMesh);
    }

    // Animation & 2D Projection Loop
    let animationFrameId: number;
    let autoRotationSpeed = 0.0035;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isRotatingRef.current && !isDraggingRef.current) {
        sphereGroup.rotation.y += autoRotationSpeed;
        sphereGroup.rotation.x += autoRotationSpeed * 0.3;
      }

      // Project each node's 3D position to 2D screen coordinates
      const tempVec = new THREE.Vector3();
      const projected: typeof projectedNodes = [];

      nodeVectors.forEach(({ vector, skill }, idx) => {
        tempVec.copy(vector);
        tempVec.applyMatrix4(sphereGroup.matrixWorld);

        // Calculate z-depth for visibility (only show or emphasize front facing)
        const isFacingFront = tempVec.z > -40;

        tempVec.project(camera);

        const x = (tempVec.x * 0.5 + 0.5) * width;
        const y = (-(tempVec.y * 0.5) + 0.5) * height;
        const scale = Math.max(0.7, (tempVec.z + 100) / 180);

        projected.push({
          id: `node-${idx}`,
          name: skill.name,
          x,
          y,
          visible: isFacingFront,
          scale,
          category: skill.category,
          original: skill,
        });
      });

      setProjectedNodes(projected);
      renderer.render(scene, camera);
    };

    animate();

    // Mouse Drag Interactions for 3D rotation
    const dom = renderer.domElement;

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      sphereGroup.rotation.y += deltaX * 0.008;
      sphereGroup.rotation.x += deltaY * 0.008;

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch support for mobile devices
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
      const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;

      sphereGroup.rotation.y += deltaX * 0.008;
      sphereGroup.rotation.x += deltaY * 0.008;

      previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };

    dom.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    dom.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);

    // Responsive Resize Handler
    const handleResize = () => {
      if (!mountRef.current || !renderer || !camera) return;
      const newWidth = mountRef.current.clientWidth;
      camera.aspect = newWidth / height;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      dom.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      dom.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [activeSkills, viewMode]);

  const resetRotation = () => {
    if (sphereGroupRef.current) {
      sphereGroupRef.current.rotation.set(0, 0, 0);
    }
  };

  return (
    <div className="w-full space-y-6">
      
      {/* Category Filter Chips & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
        
        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5">
          {candidateData.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                // Also select the first matching skill
                const first = cat.id === 'all' 
                  ? candidateData.skills[0] 
                  : candidateData.skills.find(s => s.category === cat.id);
                if (first) setSelectedSkill(first);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                  : 'text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-700/70 border border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* View & Rotation Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode(viewMode === '3d' ? 'grid' : '3d')}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-slate-200 flex items-center gap-1.5 transition-colors"
            title="Toggle between 3D Globe and 2D Grid view"
          >
            {viewMode === '3d' ? <LayoutGrid className="w-3.5 h-3.5 text-sky-400" /> : <Globe className="w-3.5 h-3.5 text-amber-400" />}
            <span>{viewMode === '3d' ? 'Grid View' : '3D Globe'}</span>
          </button>

          {viewMode === '3d' && (
            <>
              <button
                onClick={() => setIsRotating(!isRotating)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                title={isRotating ? 'Pause Rotation' : 'Start Rotation'}
                aria-label={isRotating ? 'Pause 3D rotation' : 'Resume 3D rotation'}
              >
                {isRotating ? <Pause className="w-4 h-4 text-amber-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
              </button>

              <button
                onClick={resetRotation}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Reset Globe Orientation"
                aria-label="Reset rotation angle"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* 3D Interactive WebGL Globe Canvas Container */}
      {viewMode === '3d' ? (
        <div className="relative w-full h-[480px] rounded-2xl glass-panel border border-slate-800 overflow-hidden select-none cursor-grab active:cursor-grabbing">
          
          {/* Subtle Ambient Instructions */}
          <div className="absolute top-3 left-4 z-20 flex items-center gap-1.5 text-[11px] text-slate-400 pointer-events-none bg-slate-900/70 px-2.5 py-1 rounded-full border border-slate-800">
            <Globe className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
            <span>Interactive 3D Sphere • Drag or touch to rotate</span>
          </div>

          <div className="absolute top-3 right-4 z-20 text-[11px] font-mono text-sky-400 bg-sky-950/60 px-2.5 py-1 rounded-full border border-sky-500/30">
            {activeSkills.length} Verified Competencies
          </div>

          {/* Three.js Canvas Mount Point */}
          <div ref={mountRef} className="w-full h-full" />

          {/* Projected 2D Interactive Labels (Zero pixelation, 100% accessible text) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {projectedNodes.map((node) => {
              const isSelected = selectedSkill?.name === node.name;
              const isGold = node.category === 'mba' || node.category === 'cx';

              return (
                <div
                  key={node.id}
                  style={{
                    position: 'absolute',
                    left: `${node.x}px`,
                    top: `${node.y}px`,
                    transform: `translate(-50%, -50%) scale(${node.scale})`,
                    opacity: node.visible ? 1 : 0.25,
                    pointerEvents: node.visible ? 'auto' : 'none',
                    zIndex: Math.round(node.scale * 10),
                    transition: 'opacity 0.2s ease',
                  }}
                  onClick={() => {
                    setSelectedSkill(node.original);
                    if (onSelectSkill) onSelectSkill(node.name);
                  }}
                  className={`cursor-pointer px-2.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all shadow-lg ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 font-bold scale-110 ring-2 ring-amber-300 ring-offset-2 ring-offset-slate-950 shadow-amber-500/30'
                      : isGold
                      ? 'bg-slate-900/90 text-amber-200 border border-amber-500/40 hover:border-amber-400 hover:text-white hover:bg-slate-800'
                      : 'bg-slate-900/90 text-sky-200 border border-sky-500/40 hover:border-sky-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {node.name}
                </div>
              );
            })}
          </div>

        </div>
      ) : (
        /* Accessible 2D Grid View (Fallback) */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {activeSkills.map((skill, idx) => {
            const isSelected = selectedSkill?.name === skill.name;
            return (
              <div
                key={idx}
                onClick={() => setSelectedSkill(skill)}
                className={`p-4 rounded-xl cursor-pointer transition-all border text-left ${
                  isSelected
                    ? 'bg-amber-950/20 border-amber-400 shadow-lg shadow-amber-500/10'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-sky-400">
                    {skill.categoryLabel}
                  </span>
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-slate-600'}`} />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{skill.name}</h4>
                <p className="text-xs text-slate-400 leading-snug">{skill.description}</p>
                <div className="mt-2 pt-2 border-t border-slate-800 text-[11px] text-slate-300 font-medium">
                  {skill.context}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Selected Skill Spotlight Card */}
      {selectedSkill && (
        <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900 border border-amber-400/30 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-in fade-in duration-200">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-400/10 text-amber-300 border border-amber-400/30 uppercase">
                {selectedSkill.categoryLabel}
              </span>
              <span className="text-xs text-slate-400">• Verified Professional Application</span>
            </div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              {selectedSkill.name}
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              {selectedSkill.description}
            </p>
          </div>

          <div className="sm:text-right shrink-0 p-3 rounded-xl bg-slate-950/70 border border-slate-800">
            <span className="text-[10px] text-slate-400 block uppercase font-mono">Demonstrated Impact:</span>
            <span className="text-xs font-semibold text-emerald-400 font-mono">
              {selectedSkill.context}
            </span>
          </div>
        </div>
      )}

    </div>
  );
};
