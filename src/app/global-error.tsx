"use client";

/**
 * Last-resort boundary: replaces the root layout, so it defines its own
 * <html>/<body> and cannot rely on global styles or theme scripts. It
 * follows the OS colour scheme.
 */
export default function GlobalError({
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <style>{`
          :root { color-scheme: light dark; }
          body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 24px;
            font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
            background: #ffffff; color: #0a0a0a; }
          h1 { font-size: clamp(2rem, 6vw, 3.25rem); line-height: 1.05; letter-spacing: -0.03em; margin: 0 0 16px; }
          p { margin: 0 0 28px; color: #525252; max-width: 32rem; line-height: 1.6; }
          button { height: 48px; padding: 0 24px; border: 0; background: #0a0a0a; color: #ffffff;
            font: inherit; font-weight: 500; cursor: pointer; }
          button:focus-visible { outline: 2px solid #2b4bff; outline-offset: 3px; }
          @media (prefers-color-scheme: dark) {
            body { background: #0a0a0a; color: #f5f5f5; }
            p { color: #a3a3a3; }
            button { background: #f5f5f5; color: #0a0a0a; }
            button:focus-visible { outline-color: #7c93ff; }
          }
        `}</style>
        <main>
          <h1>Something went wrong.</h1>
          <p>An unexpected error occurred. Please try again.</p>
          <button type="button" onClick={() => retry()}>
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
