export default function CaseStudyParagraph({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\/(?:nowplaying|queue|skip|stop|play)\b|\b(?:Supabase|Stripe Checkout|Resend|Cloudflare Turnstile|TanStack Query|React Query|React Hook Form|Zod|i18next|Bank of Georgia|FFmpeg|yt-dlp|discord\.js|Next\.js|Vercel|Google Search Console|GitHub Actions)\b)/g);
  return <p>{parts.map((part, i) => part.startsWith('`') ? <code key={i}>{part.slice(1,-1)}</code> : part.startsWith('**') ? <strong key={i}>{part.slice(2,-2)}</strong> : /^\/(play|queue|skip|stop|nowplaying)$/.test(part) ? <code key={i}>{part}</code> : i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}</p>;
}
