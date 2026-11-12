import { rockHornsPixels } from "../lib/rock-horns";

type RockHornsIconProps = {
  className?: string;
};

export function RockHornsIcon({ className }: RockHornsIconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" shapeRendering="crispEdges" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <mask id="rock-horns-cutout">
        <rect fill="white" height="32" width="32" />
        <g transform="translate(6.25 4.75) scale(0.75)">
          {rockHornsPixels.map(([x, y]) => (
            <rect fill="black" height="2" key={`${x}-${y}`} width="2" x={x * 2} y={y * 2} />
          ))}
        </g>
      </mask>
      <rect fill="currentColor" height="32" mask="url(#rock-horns-cutout)" width="32" />
    </svg>
  );
}
