import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Simplified, brand-inspired tool/language marks. These are original vector
 * recreations (not the trademarked logo assets) used because lucide-react
 * ships no brand icons in this project's version.
 */

export function PythonIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 2c-4 0-3.8 1.7-3.8 1.7v1.8h3.9v.6H6.6S4 6 4 10s2.3 3.8 2.3 3.8h1.4v-1.9S7.6 9.6 9.9 9.6h3.8s2.2 0 2.2-2.1V4.3S16.2 2 12 2z"
        fill="#3776AB"
      />
      <path
        d="M12 22c4 0 3.8-1.7 3.8-1.7v-1.8h-3.9v-.6h5.5s2.6 0 2.6-4-2.3-3.8-2.3-3.8h-1.4v1.9s.1 2.3-2.2 2.3H10.3s-2.2 0-2.2 2.1v3.5S7.8 22 12 22z"
        fill="#FFD43B"
      />
      <circle cx="9.3" cy="4.4" r="0.7" fill="#fff" />
      <circle cx="14.7" cy="19.6" r="0.7" fill="#1a1a1a" />
    </svg>
  );
}

export function SqlIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3z"
        fill="#4479A1"
      />
      <path
        d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6"
        stroke="#4479A1"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5"
        stroke="#336791"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PowerBiIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="3" y="12" width="4" height="9" rx="0.8" fill="#F2C811" />
      <rect x="10" y="7" width="4" height="14" rx="0.8" fill="#F2C811" />
      <rect x="17" y="3" width="4" height="18" rx="0.8" fill="#E6AD10" />
    </svg>
  );
}

export function ExcelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2.5" fill="#1D6F42" />
      <path
        d="M7.5 7.5l4 4.5-4 4.5m9-9l-4 4.5 4 4.5"
        stroke="#fff"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ReactIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.3">
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

export function NextjsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="12" cy="12" r="10" fill="#000" />
      <path d="M8.5 8v8.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8.5 8l7.2 9.2" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M15.5 8v6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function JavaScriptIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E" />
      <path
        d="M12.7 16.7c.3.6.8 1.1 1.7 1.1.8 0 1.2-.4 1.2-.9 0-.6-.5-.9-1.4-1.2l-.5-.2c-1.4-.6-2.4-1.3-2.4-2.9 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.7 1.5l-1.5.9c-.3-.6-.7-.8-1.2-.8s-.9.3-.9.8c0 .5.3.8 1.2 1.1l.5.2c1.6.7 2.6 1.4 2.6 3 0 1.7-1.3 2.6-3.1 2.6-1.7 0-2.8-.8-3.3-1.8z"
        fill="#1a1a1a"
      />
      <path
        d="M9.7 11.4h1.8v5.1c0 1.9-.9 2.6-2.4 2.6-1.3 0-2.2-.6-2.6-1.6l1.5-.9c.2.5.5.8 1 .8.6 0 .7-.4.7-1z"
        fill="#1a1a1a"
      />
    </svg>
  );
}

export function Html5Icon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M3 2h18l-1.6 18-7.4 2-7.4-2L3 2z" fill="#E44D26" />
      <path d="M12 3.6v16.8l6-1.6 1.4-15.2H12z" fill="#F16529" />
      <path
        d="M12 8.6H8l.2 2.2h3.8v2.1H7.5l.5 5 4 1.1 4-1.1.4-4.6H12"
        fill="#fff"
      />
    </svg>
  );
}

export function Css3Icon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M3 2h18l-1.6 18-7.4 2-7.4-2L3 2z" fill="#1572B6" />
      <path d="M12 3.6v16.8l6-1.6 1.4-15.2H12z" fill="#33A9DC" />
      <path
        d="M12 8.6h4.2l-.2 2.1H12v2.1h3.8l-.4 4-3.4 1-3.4-1-.2-2.1h2.1l.1 1 1.5.4 1.5-.4.2-2H8.3l-.5-5.1H12z"
        fill="#fff"
      />
    </svg>
  );
}

export function NodejsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 2.2l8 4.6v10.4l-8 4.6-8-4.6V6.8l8-4.6z"
        stroke="#539E43"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M12 6.8c-2.9 0-5.2 2.3-5.2 5.2S9.1 17.2 12 17.2s5.2-2.3 5.2-5.2S14.9 6.8 12 6.8z"
        fill="#539E43"
      />
    </svg>
  );
}

export function GitIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <circle cx="6" cy="18" r="2.2" fill="#F05033" />
      <circle cx="6" cy="7" r="2.2" fill="#F05033" />
      <circle cx="15" cy="12" r="2.2" fill="#F05033" />
      <path d="M6 9.2V15.8" stroke="#F05033" strokeWidth="1.6" />
      <path d="M8 12h5" stroke="#F05033" strokeWidth="1.6" />
    </svg>
  );
}

export function DockerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M3 12.5c1.5-1.6 4-1.7 5-1.7h9c1.7 0 3.2.6 3.2 2.7 0 3.4-3 6-8.2 6-4.6 0-8-2.5-9-7z"
        fill="#2496ED"
      />
      <rect x="5" y="8.2" width="2.4" height="2.4" fill="#2496ED" />
      <rect x="8" y="8.2" width="2.4" height="2.4" fill="#2496ED" />
      <rect x="11" y="8.2" width="2.4" height="2.4" fill="#2496ED" />
      <rect x="8" y="5.4" width="2.4" height="2.4" fill="#2496ED" />
    </svg>
  );
}

export function AwsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <rect width="24" height="24" rx="4" fill="#232F3E" />
      <text
        x="12"
        y="14.5"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="8"
        fontWeight="700"
        fill="#FF9900"
      >
        AWS
      </text>
      <path
        d="M5 17c3.5 2 10.5 2 14 0"
        stroke="#FF9900"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function FigmaIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M9 2h3v5H9a2.5 2.5 0 010-5z" fill="#F24E1E" />
      <path d="M12 2h3a2.5 2.5 0 010 5h-3V2z" fill="#FF7262" />
      <path d="M12 7h3a2.5 2.5 0 010 5h-3V7z" fill="#A259FF" />
      <path d="M9 7h3v5H9a2.5 2.5 0 010-5z" fill="#1ABCFE" />
      <circle cx="9" cy="14.5" r="2.5" fill="#0ACF83" />
    </svg>
  );
}

export function PostgresqlIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M12 2.5c-5 0-8.5 3.8-8.5 9 0 5.6 4 10 8.7 10 1.6 0 2.9-.4 3.9-1.1-.2.9-.3 1.9-.1 2.6h1.7c-.3-1.4-.2-2.9.3-4.3 2-2 3-5 3-8.1 0-5.3-3.9-8.1-9-8.1z"
        fill="#336791"
      />
      <path
        d="M9.5 9.5c.6-.3 1.3-.2 1.7.3M13 9c.6-.3 1.3-.2 1.7.3"
        stroke="#fff"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TensorflowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M11 2l7 4v3.2l-4-2.3v4.6l4 2.3v3.2l-4-2.3V19l-3 1.7V3.7L4 6v3.2l4-2.3v4.6l-4 2.3v3.2l4-2.3V19l3 1.7"
        fill="#FF6F00"
      />
    </svg>
  );
}

export function FlutterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M6 14.5L14.5 6h5L11 14.5H6z" fill="#42A5F5" />
      <path d="M11 14.5h5L11.5 20h-5L11 14.5z" fill="#0D47A1" />
      <path d="M6 14.5l5.5 5.5-2.7 0L6 14.5z" fill="#42A5F5" opacity="0.6" />
    </svg>
  );
}

export function FirebaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M6 20l2.5-16 3 6-1.4 2.8L6 20z" fill="#FFA000" />
      <path d="M6 20l7-13.4 4.5 8.4L6 20z" fill="#FFCA28" />
      <path d="M6 20l11.5-5 1.5-.9-4-7.5L6 20z" fill="#FF8F00" />
    </svg>
  );
}

export function VscodeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M16.5 2.5L7 10.5 3.5 8 2 9l4 3-4 3 1.5 1 3.5-2.5 9.5 8L21 20V4l-4.5-1.5z"
        fill="#2489CA"
      />
      <path d="M16.5 6.2v11.6L9.6 12l6.9-5.8z" fill="#fff" fillOpacity="0.9" />
    </svg>
  );
}

export function TailwindIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M6 12.5c.7-2.8 2.5-4.2 5.3-4.2 4.2 0 4.7 3.2 6.7 3.7-.7 2.8-2.5 4.2-5.3 4.2-4.2 0-4.7-3.2-6.7-3.7z"
        fill="#38BDF8"
      />
      <path
        d="M2 16.2c.7-2.8 2.5-4.2 5.3-4.2 4.2 0 4.7 3.2 6.7 3.7-.7 2.8-2.5 4.2-5.3 4.2-4.2 0-4.7-3.2-6.7-3.7z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function VercelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M12 3l10 17H2L12 3z" fill="currentColor" />
    </svg>
  );
}

export function SupabaseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="#3ECF8E" />
    </svg>
  );
}

export function GoogleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
      <path
        d="M21.6 12.2c0-.7-.06-1.4-.19-2.05H12v3.9h5.4a4.6 4.6 0 01-2 3.02v2.5h3.2c1.9-1.75 3-4.3 3-7.37z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.7 0 4.97-.9 6.6-2.42l-3.2-2.5c-.9.6-2.05.95-3.4.95-2.6 0-4.8-1.76-5.6-4.12H3.1v2.6A10 10 0 0012 22z"
        fill="#34A853"
      />
      <path
        d="M6.4 13.9a6 6 0 010-3.8V7.5H3.1a10 10 0 000 9l3.3-2.6z"
        fill="#FBBC05"
      />
      <path
        d="M12 6c1.47 0 2.8.5 3.84 1.5l2.87-2.87A9.96 9.96 0 0012 2a10 10 0 00-8.9 5.5l3.3 2.6C7.2 7.76 9.4 6 12 6z"
        fill="#EA4335"
      />
    </svg>
  );
}
