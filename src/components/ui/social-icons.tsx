import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function LinkedinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 21v-7.8h2.6l.4-3h-3v-1.9c0-.87.24-1.46 1.5-1.46h1.6V4.14C15.9 4.06 15 4 13.94 4c-2.22 0-3.74 1.35-3.74 3.85v2.15H7.6v3h2.6V21h3.3z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M21.6 7.2s-.21-1.5-.87-2.16c-.83-.87-1.76-.87-2.19-.92C15.5 4 12 4 12 4h-.01s-3.5 0-6.54.12c-.43.05-1.36.05-2.19.92-.66.66-.87 2.16-.87 2.16S2.17 8.95 2.17 10.7v1.6c0 1.75.22 3.5.22 3.5s.21 1.5.87 2.16c.83.87 1.92.84 2.4.93 1.74.17 7.34.22 7.34.22s3.5 0 6.54-.12c.43-.05 1.36-.05 2.19-.92.66-.66.87-2.16.87-2.16s.22-1.75.22-3.5v-1.6c0-1.75-.22-3.5-.22-3.5zM9.98 14.6V8.9l5.4 2.86-5.4 2.84z" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.9 3h3l-6.6 7.55L23 21h-6.1l-4.8-6.27L6.6 21H3.6l7.06-8.08L2 3h6.25l4.34 5.73L18.9 3zm-1.06 16.17h1.66L7.24 4.74H5.46l12.38 14.43z" />
    </svg>
  );
}
