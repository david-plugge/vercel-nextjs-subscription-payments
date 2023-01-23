'use client';
import { usePathname } from 'next/navigation';
import { PageMeta } from 'types';

interface Props {
  meta?: PageMeta;
}

export default function Head({ meta: pageMeta }: Props) {
  const pathname = usePathname();
  const meta = {
    title: 'Next.js Subscription Starter',
    description: 'Brought to you by Vercel, Stripe, and Supabase.',
    cardImage: '/og.png',
    ...pageMeta
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <link href="/favicon.ico" rel="shortcut icon" />
      <meta content={meta.description} name="description" />
      <meta
        property="og:url"
        content={`https://subscription-starter.vercel.app${pathname}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.cardImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vercel" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.cardImage} />
    </>
  );
}
