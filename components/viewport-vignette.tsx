const gradient = "radial-gradient(ellipse at center, rgb(16 15 15 / 0.88) 0%, rgb(16 15 15 / 0) 72%)";

export function ViewportVignette() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <div className="absolute -left-[24vw] -top-[20vh] h-[44vh] w-[76vw] -rotate-[18deg] blur-3xl" style={{ backgroundImage: gradient }} />
      <div className="absolute -right-[22vw] -top-[26vh] h-[38vh] w-[72vw] rotate-[14deg] blur-3xl" style={{ backgroundImage: gradient }} />
      <div className="absolute -bottom-[22vh] -left-[18vw] h-[42vh] w-[70vw] rotate-[12deg] blur-3xl" style={{ backgroundImage: gradient }} />
      <div className="absolute -bottom-[18vh] -right-[26vw] h-[46vh] w-[78vw] -rotate-[16deg] blur-3xl" style={{ backgroundImage: gradient }} />
    </div>
  );
}
