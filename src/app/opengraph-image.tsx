import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { MARK_PATH } from "@/components/brand/mark";
import { site } from "@/content/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontFile = (weight: 500 | 800) =>
  readFile(
    path.join(
      process.cwd(),
      `node_modules/@fontsource/open-sans/files/open-sans-latin-${weight}-normal.woff`,
    ),
  );

export default async function OpenGraphImage() {
  const [extraBold, medium] = await Promise.all([fontFile(800), fontFile(500)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#0a0a0a",
          padding: "72px 80px",
          fontFamily: "Open Sans",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="88" height="88" viewBox="0 0 64 64">
            <path d={MARK_PATH} fill="#0a0a0a" />
          </svg>
          <div
            style={{
              display: "flex",
              marginLeft: 14,
              fontSize: 68,
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            tevonax
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              maxWidth: 940,
            }}
          >
            {site.tagline}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 32,
              width: 120,
              height: 6,
              background: "#2b4bff",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 500,
            color: "#525252",
          }}
        >
          Web platforms · Mobile apps · Custom software
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Open Sans", data: extraBold, weight: 800, style: "normal" },
        { name: "Open Sans", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
