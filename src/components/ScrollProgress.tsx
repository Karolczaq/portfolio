type ScrollProgressProps = {
  progress: number; // Accept progress as a prop
  zIndex?: number;
};

export default function ScrollProgress({
  progress,
  zIndex = 50,
}: ScrollProgressProps) {
  return (
    <div
      className="fixed top-0 left-0 h-1 bg-amber-500"
      style={{
        width: `${progress}%`,
        zIndex,
      }}
    />
  );
}
