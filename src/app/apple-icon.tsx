import { ImageResponse } from "next/og";
import { MARK_PATH } from "@/components/brand/mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <svg width="128" height="128" viewBox="0 0 64 64">
          <path d={MARK_PATH} fill="#0a0a0a" />
        </svg>
      </div>
    ),
    size,
  );
}
