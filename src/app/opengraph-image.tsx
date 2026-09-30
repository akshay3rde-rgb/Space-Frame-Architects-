import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#171717",
          color: "#FAF9F6",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, opacity: 0.7 }}>
          INDORE, INDIA &nbsp;&middot;&nbsp; EST. 1999
        </div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <div style={{ display: "flex", fontSize: 108 }}>SpaceFrame</div>
          <div style={{ display: "flex", fontSize: 108, fontStyle: "italic", opacity: 0.85 }}>
            Architects
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 2, opacity: 0.7 }}>
          25+ Years of Architecture &nbsp;&middot;&nbsp; Madhya Pradesh
        </div>
      </div>
    ),
    { ...size }
  );
}
