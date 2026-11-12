import { rockHornsPixels } from "../lib/rock-horns";
import { ImageResponse } from "next/og";

export const size = {
  height: 32,
  width: 32
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", height: "100%", position: "relative", width: "100%" }}>
        {rockHornsPixels.map(([x, y]) => (
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
