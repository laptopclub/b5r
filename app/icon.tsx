import { ImageResponse } from "next/og";

export const size = {
  height: 32,
  width: 32
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#100f0f",
          color: "#cecdc3",
          display: "flex",
          fontFamily: "monospace",
          fontSize: 14,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          width: "100%"
        }}
      >
        b5r
      </div>
    ),
    size
  );
}
