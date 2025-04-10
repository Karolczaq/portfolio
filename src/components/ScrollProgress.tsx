export default function ScrollProgress({
  progress,
  zIndex,
}: {
  progress: number;
  zIndex: number;
}) {
  return (
    <div
      style={{ width: `${progress}%`, zIndex: zIndex }}
      className="absolute transition-all top-0 h-[0.3rem] bg-amber-100"
    ></div>
  );
}
