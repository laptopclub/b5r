import { rockHornsPixels } from "../lib/rock-horns";

type RockHornsIconProps = {
  className?: string;
};

export function RockHornsIcon({ className }: RockHornsIconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" shapeRendering="crispEdges" viewBox="0 0 26 30" xmlns="http://www.w3.org/2000/svg">
      <mask id="rock-horns-cutout">
        <rect fill="white" height="30" width="26" />
        {rockHornsPixels.map(([x, y]) => (
          <rect fill="black" height="2" key={`${x}-${y}`} width="2" x={x * 2} y={y * 2} />
        ))}
      </mask>
      <rect fill="currentColor" height="30" mask="url(#rock-horns-cutout)" width="26" />
    </svg>
  );
}
