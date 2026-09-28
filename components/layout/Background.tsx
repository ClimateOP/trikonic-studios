export function Background() {
  return (
    <>
      <div className="bg-layer" />
      <div
        className="pointer-events-none fixed -left-24 -top-36 -z-10 size-[500px] rounded-full bg-accent opacity-25 blur-[80px]"
        style={{ animation: 'float1 18s ease-in-out infinite' }}
      />
      <div
        className="pointer-events-none fixed -bottom-32 -right-20 -z-10 size-[450px] rounded-full bg-accent-2 opacity-25 blur-[80px]"
        style={{ animation: 'float2 22s ease-in-out infinite' }}
      />
      {/* Triangle motif */}
      <div className="triangle pointer-events-none fixed right-[8%] top-[18%] -z-10 hidden size-72 border border-accent/20 bg-accent/5 blur-[1px] md:block" />
    </>
  );
}
