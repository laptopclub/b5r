import { ImageResponse } from "next/og";

export const size = {
  height: 32,
  width: 32
};

export const contentType = "image/png";

const hornPixels: ReadonlyArray<readonly [number, number]> = [
  [0, 0], [1, 0], [9, 0], [10, 0],
  [0, 1], [1, 1], [9, 1], [10, 1],
  [0, 2], [1, 2], [9, 2], [10, 2],
  [0, 3], [1, 3], [9, 3], [10, 3],
  [0, 4], [1, 4], [8, 4], [9, 4], [10, 4],
  [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5],
  [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6],
  [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7],
  [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8],
  [2, 9], [3, 9], [4, 9], [5, 9], [6, 9], [7, 9],
  [2, 10], [3, 10], [4, 10], [5, 10], [6, 10],
  [2, 11], [3, 11], [4, 11], [5, 11], [6, 11]
];

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", height: "100%", position: "relative", width: "100%" }}>
        {hornPixels.map(([x, y]) => (
          <div
            key={`${x}-${y}`}
            style={{
              background: "#6f6e69",
              height: 2,
              left: x * 2 + 5,
              position: "absolute",
              top: y * 2 + 4,
              width: 2
            }}
          />
        ))}
      </div>
    ),
    size
  );
}
