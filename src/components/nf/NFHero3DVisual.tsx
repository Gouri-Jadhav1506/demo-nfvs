import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Sparkles, Layers, Compass, Users, Eye, RotateCw } from 'lucide-react';
import ventureStudioHub from '../../assets/venture_studio_hub.jpg';

interface NFHero3DVisualProps {
  isDark?: boolean;
}

interface Node3D {
  x: number;
  y: number;
  z: number;
  label: string;
  stage: string;
  color: string;
}

export const NFHero3DVisual: React.FC<NFHero3DVisualProps> = ({ isDark = false }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [viewMode, setViewMode] = useState<'3d' | 'campus'>('3d');
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);

  // Mouse & rotation state
  const rotRef = useRef({ x: 0.3, y: 0.4, vx: 0.003, vy: 0.005 });
  const targetRotRef = useRef({ x: 0.3, y: 0.4 });
  const mouseRef = useRef({ isDown: false, lastX: 0, lastY: 0 });
  const animFrameId = useRef<number | null>(null);

  // 3D Nodes representing the Venture Building Matrix
  const nodes: Node3D[] = [
    { x: 0, y: -110, z: 0, label: 'Idea Discovery', stage: 'Stage 1', color: '#D9A72E' },
    { x: 95, y: -30, z: 55, label: 'Validation Lab', stage: 'Stage 2', color: '#38BDF8' },
    { x: 60, y: 85, z: 75, label: 'AICTE-NISP IP', stage: 'Stage 3', color: '#34D399' },
    { x: -60, y: 85, z: 75, label: 'Company Entity', stage: 'Stage 4', color: '#A78BFA' },
    { x: -95, y: -30, z: 55, label: 'Turnkey Launch', stage: 'Stage 5', color: '#F472B6' },
    { x: 0, y: 0, z: -90, label: 'Venture Capital', stage: 'Scale', color: '#F59E0B' },
  ];

  // Edges connecting nodes to form a structural venture lattice
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 0], // Outer ring
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], // Hub connections
    [0, 2], [1, 3], [2, 4], [3, 0], [4, 1], // Diagonal bracing
  ];

  // Rotate 3D point around X and Y
  const project3D = useCallback(
    (x: number, y: number, z: number, rx: number, ry: number, cx: number, cy: number, fov: number) => {
      // Rotate around Y
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;

      // Rotate around X
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      // Perspective projection
      const distance = fov + z2;
      const scale = distance > 10 ? fov / distance : 1;
      return {
        px: cx + x1 * scale,
        py: cy + y2 * scale,
        depth: z2,
        scale,
      };
    },
    []
  );

  useEffect(() => {
    if (viewMode !== '3d') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 460);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 420);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle constellation in background
    const particles = Array.from({ length: 32 }, () => ({
      x: (Math.random() - 0.5) * 260,
      y: (Math.random() - 0.5) * 260,
      z: (Math.random() - 0.5) * 260,
      size: Math.random() * 1.5 + 0.8,
      speed: Math.random() * 0.002 + 0.001,
      angle: Math.random() * Math.PI * 2,
    }));

    let pulse = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      pulse += 0.03;

      const cx = width / 2;
      const cy = height / 2;
      const fov = 380;

      // Smooth damp rotation towards target
      if (!mouseRef.current.isDown) {
        targetRotRef.current.y += rotRef.current.vy;
        targetRotRef.current.x = Math.sin(pulse * 0.4) * 0.15 + 0.2;
      }
      rotRef.current.x += (targetRotRef.current.x - rotRef.current.x) * 0.06;
      rotRef.current.y += (targetRotRef.current.y - rotRef.current.y) * 0.06;

      const rx = rotRef.current.x;
      const ry = rotRef.current.y;

      // 1. Draw Subtle Background Constellation Particles
      particles.forEach((p) => {
        p.angle += p.speed;
        const px = p.x + Math.sin(p.angle) * 12;
        const py = p.y + Math.cos(p.angle) * 12;
        const proj = project3D(px, py, p.z, rx, ry, cx, cy, fov);

        ctx.fillStyle = isDark
          ? `rgba(56, 189, 248, ${0.15 + Math.sin(pulse + p.size) * 0.1})`
          : `rgba(18, 59, 115, ${0.15 + Math.sin(pulse + p.size) * 0.08})`;
        ctx.beginPath();
        ctx.arc(proj.px, proj.py, p.size * proj.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Concentric Orbital Rings
      [145, 175].forEach((radius, ringIdx) => {
        ctx.beginPath();
        const steps = 64;
        for (let i = 0; i <= steps; i++) {
          const theta = (i / steps) * Math.PI * 2;
          const tiltFactor = ringIdx === 0 ? 0.35 : -0.25;
          const ox = Math.cos(theta) * radius;
          const oz = Math.sin(theta) * radius;
          const oy = Math.sin(theta + pulse * (ringIdx === 0 ? 1 : -1)) * 14 * tiltFactor;

          const proj = project3D(ox, oy, oz, rx, ry, cx, cy, fov);
          if (i === 0) ctx.moveTo(proj.px, proj.py);
          else ctx.lineTo(proj.px, proj.py);
        }
        ctx.strokeStyle = isDark
          ? ringIdx === 0
            ? 'rgba(217, 167, 46, 0.25)'
            : 'rgba(56, 189, 248, 0.18)'
          : ringIdx === 0
          ? 'rgba(217, 167, 46, 0.35)'
          : 'rgba(18, 59, 115, 0.2)';
        ctx.lineWidth = ringIdx === 0 ? 1.2 : 0.8;
        ctx.stroke();
      });

      // 3. Project Nodes
      const projectedNodes = nodes.map((n, idx) => {
        const proj = project3D(n.x, n.y, n.z, rx, ry, cx, cy, fov);
        return { ...proj, ...n, index: idx };
      });

      // 4. Draw Lattice Edges with Gradient Glow
      edges.forEach(([i, j]) => {
        const n1 = projectedNodes[i];
        const n2 = projectedNodes[j];

        const avgDepth = (n1.depth + n2.depth) / 2;
        const alpha = Math.max(0.12, Math.min(0.65, 0.35 + avgDepth / 240));

        const grad = ctx.createLinearGradient(n1.px, n1.py, n2.px, n2.py);
        grad.addColorStop(0, n1.color);
        grad.addColorStop(1, n2.color);

        ctx.beginPath();
        ctx.moveTo(n1.px, n1.py);
        ctx.lineTo(n2.px, n2.py);
        ctx.strokeStyle = grad;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        // Animated traveling light pulse along edge
        const t = (Math.sin(pulse * 1.5 + (i + j)) + 1) / 2;
        const pulseX = n1.px + (n2.px - n1.px) * t;
        const pulseY = n1.py + (n2.py - n1.py) * t;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 1.8, 0, Math.PI * 2);
        ctx.fill();
      });

      // 5. Draw Central Venture Core
      const coreProj = project3D(0, 0, 0, rx, ry, cx, cy, fov);
      const coreRadius = (16 + Math.sin(pulse * 2) * 2.5) * coreProj.scale;
      const coreGrad = ctx.createRadialGradient(
        coreProj.px,
        coreProj.py,
        2,
        coreProj.px,
        coreProj.py,
        coreRadius * 2.5
      );
      coreGrad.addColorStop(0, '#D9A72E');
      coreGrad.addColorStop(0.5, isDark ? 'rgba(56, 189, 248, 0.4)' : 'rgba(18, 59, 115, 0.4)');
      coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(coreProj.px, coreProj.py, coreRadius * 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#D9A72E';
      ctx.beginPath();
      ctx.arc(coreProj.px, coreProj.py, 5 * coreProj.scale, 0, Math.PI * 2);
      ctx.fill();

      // 6. Draw Nodes sorted by depth (back to front)
      projectedNodes.sort((a, b) => a.depth - b.depth);

      projectedNodes.forEach((node) => {
        const isSelected = activeNodeIndex === node.index;
        const baseRadius = isSelected ? 8 : 6;
        const nodeRadius = baseRadius * node.scale;

        // Outer glow ring
        ctx.beginPath();
        ctx.arc(node.px, node.py, nodeRadius * 2, 0, Math.PI * 2);
        ctx.fillStyle = node.color + '26';
        ctx.fill();

        // Node Circle
        ctx.beginPath();
        ctx.arc(node.px, node.py, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Node Label
        ctx.font = `bold ${Math.max(9, Math.round(10 * node.scale))}px 'Plus Jakarta Sans', sans-serif`;
        ctx.fillStyle = isDark ? '#F1F5F9' : '#0B1F3A';
        ctx.textAlign = 'center';
        ctx.fillText(node.label, node.px, node.py + nodeRadius + 14);

        // Stage indicator pill
        ctx.font = `600 ${Math.max(8, Math.round(8.5 * node.scale))}px monospace`;
        ctx.fillStyle = '#D9A72E';
        ctx.fillText(node.stage, node.px, node.py - nodeRadius - 6);
      });

      animFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [viewMode, isDark, activeNodeIndex, project3D]);

  // Pointer interaction handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    mouseRef.current.isDown = true;
    mouseRef.current.lastX = e.clientX;
    mouseRef.current.lastY = e.clientY;
    setIsInteracting(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!mouseRef.current.isDown) return;
    const dx = e.clientX - mouseRef.current.lastX;
    const dy = e.clientY - mouseRef.current.lastY;

    targetRotRef.current.y += dx * 0.008;
    targetRotRef.current.x = Math.max(-1.1, Math.min(1.1, targetRotRef.current.x - dy * 0.008));

    mouseRef.current.lastX = e.clientX;
    mouseRef.current.lastY = e.clientY;
  };

  const handlePointerUp = () => {
    mouseRef.current.isDown = false;
    setTimeout(() => setIsInteracting(false), 800);
  };

  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none">
      {/* View Switcher: Interactive 3D Model vs Campus Hub Image */}
      <div className="flex items-center justify-between pb-3">
        <div className="inline-flex items-center gap-1.5 p-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-2xs backdrop-blur-md">
          <button
            type="button"
            onClick={() => setViewMode('3d')}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewMode === '3d'
                ? 'bg-[#123B73] text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D9A72E]" />
            <span>Interactive 3D Engine</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('campus')}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'campus'
                ? 'bg-[#123B73] text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-[#D9A72E]" />
            <span>Campus Hub View</span>
          </button>
        </div>

        {viewMode === '3d' && (
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <RotateCw className="w-3 h-3 text-[#D9A72E] animate-spin" style={{ animationDuration: '6s' }} />
            <span>Drag to inspect 3D lattice</span>
          </span>
        )}
      </div>

      {/* Main Container */}
      <div
        className={`relative rounded-2xl overflow-hidden border-2 shadow-xl transition-all duration-300 min-h-[340px] sm:min-h-[400px] lg:min-h-[420px] flex items-center justify-center ${
          isDark
            ? 'border-slate-700/80 bg-radial from-slate-900 via-[#0B1F3A] to-slate-950 shadow-slate-950/60'
            : 'border-[#DCE3EC] bg-radial from-[#F0F5FA] via-[#E8F0F8] to-[#FFFFFF] shadow-slate-200/80'
        }`}
      >
        {viewMode === '3d' ? (
          <div
            className="w-full h-full relative cursor-grab active:cursor-grabbing select-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <canvas ref={canvasRef} className="w-full h-[360px] sm:h-[400px] lg:h-[420px] block" />

            {/* Subtle Overlay Badge: 3D Innovation Engine */}
            <div className="absolute bottom-4 left-4 right-4 pointer-events-none flex items-center justify-between text-xs z-10">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-[#123B73]/90 text-white text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md border border-white/20">
                  Venture Architecture
                </span>
                <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                  {nodes[activeNodeIndex]?.label}
                </span>
              </div>
              <div className="text-[10px] font-mono text-[#D9A72E] font-bold">
                60 FPS Engine
              </div>
            </div>

            {/* Quick Node Selector Pills */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-center gap-1.5 flex-wrap z-10 pointer-events-auto">
              {nodes.map((node, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveNodeIndex(i)}
                  className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border transition-all cursor-pointer ${
                    activeNodeIndex === i
                      ? 'bg-[#123B73] text-white border-[#D9A72E]'
                      : 'bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {node.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* View Mode 2: Authentic Campus Facility Photography */
          <div className="w-full h-full relative">
            <img
              src={ventureStudioHub}
              alt="NF Venture Studio - Open innovation hub and startup prototyping workspace"
              className="w-full h-[340px] sm:h-[400px] lg:h-[420px] object-cover object-center block"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 text-white z-10">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded bg-[#123B73] text-[10px] font-mono uppercase tracking-wider text-[#D9A72E] font-bold">
                  Campus Venture Studio
                </span>
                <span className="text-[11px] text-slate-300 font-mono">Pune, MH</span>
              </div>
              <div className="text-sm sm:text-base font-bold leading-snug">
                Turnkey Incubation &amp; Startup Prototyping
              </div>
              <p className="text-xs text-slate-200 line-clamp-1 mt-0.5">
                Bridging student talent, faculty research, and venture capital.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Floating Badges */}
      <div
        className={`hidden sm:flex absolute -bottom-3.5 -right-3.5 items-center gap-2.5 px-3.5 py-2 rounded-xl border shadow-lg backdrop-blur-md z-20 ${
          isDark ? 'bg-slate-900/95 border-slate-700 text-white' : 'bg-white/95 border-[#DCE3EC] text-[#0B1F3A]'
        }`}
      >
        <div className="w-7 h-7 rounded-lg bg-emerald-700 flex items-center justify-center text-white shrink-0">
          <Users className="w-3.5 h-3.5 text-white" />
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
            Industry Network
          </div>
          <div className="text-xs font-black">50+ CXO Mentors</div>
        </div>
      </div>
    </div>
  );
};
