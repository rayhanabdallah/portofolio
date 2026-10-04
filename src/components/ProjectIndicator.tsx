import { motion, useTransform } from 'framer-motion';

interface ProjectIndicatorProps {
  project: { number: string; title: string };
  index: number;
  progress: ReturnType<typeof import('framer-motion').useSpring>;
  reduceMotion?: boolean;
}

export default function ProjectIndicator({ project, index, progress, reduceMotion }: ProjectIndicatorProps) {
  const start = 0.18 + index * 0.16;
  const end = start + 0.16;
  const itemOpacity = useTransform(
    progress,
    [start - 0.05, start, end - 0.05, end],
    [0.3, 1, 1, 0.3]
  );
  const itemScale = useTransform(
    progress,
    [start - 0.05, start, end - 0.05, end],
    [0.97, 1.02, 1.02, 0.97]
  );

  return (
    <motion.div
      style={{
        opacity: reduceMotion ? 1 : itemOpacity,
        scale: reduceMotion ? 1 : itemScale,
      }}
      className="flex items-center gap-3 transition-all duration-300"
    >
      <span className="font-mono text-xs font-bold text-[#aa3bff] dark:text-[#c084fc]">
        {project.number}
      </span>
      <span className="text-sm font-medium text-[#08060d] dark:text-[#f3f4f6]">
        {project.title}
      </span>
    </motion.div>
  );
}
