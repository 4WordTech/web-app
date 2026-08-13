import { ImageResponse } from "next/og";

export const alt = "4wordtech — IT services for businesses that need to ship";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          color: "#f5f5f0",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#C8F542",
          }}
        >
          4wordtech
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            IT services that ship.
          </div>
          <div style={{ fontSize: 28, color: "#a3a39a", maxWidth: 720 }}>
            Websites, apps, cloud, AI, and support — from first brief to live
            product.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
