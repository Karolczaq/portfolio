type ScrollProgressProps = {
  progress: number;
  zIndex?: number;
};

export default function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <div
      className="fixed top-0 left-0 h-1 bg-amber-500 z-50"
      style={{
        width: `${progress}%`,
      }}
    />
  );
}
