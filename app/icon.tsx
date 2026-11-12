import { ImageResponse } from "next/og";

export const size = {
  height: 32,
  width: 32
};

export const contentType = "image/png";

const pixelMap = [
  "0000000000##0",
  "0##0000000##0",
  "0##0000000##0",
  "0##0000000##0",
  "0##0000000##0",
  "0##0##0##0##0",
  "0##0##0##0##0",
  "0#00##0##00#0",
  "0##0#00000##0",
  "0###00####0#0",
  "0#####0####00",
  "0#######00##0",
  "0########0##0",
  "00#####0###00",
  "000#######000"
] as const;

const pixels = pixelMap.reduce<ReadonlyArray<readonly [number, number]>>((result, row, y) => {
  const filledCells = Array.from(row).reduce<ReadonlyArray<readonly [number, number]>>((cells, cell, x) => {
    return cell === "#" ? [...cells, [x, y]] : cells;
  }, []);

  return [...result, ...filledCells];
}, []);

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", height: "100%", position: "relative", width: "100%" }}>
        {pixels.map(([x, y]) => (
          <div
            key={`${x}-${y}`}
            style={{
              background: "#ffffff",
              height: 2,
              left: x * 2 + 3,
              position: "absolute",
              top: y * 2 + 1,
              width: 2
            }}
          />
        ))}
      </div>
    ),
    size
  );
}
