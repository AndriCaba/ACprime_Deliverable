'use client';
import { useRouter } from 'next/navigation';
import { articles } from '@/lib/constants';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function InsightDetails({ params }) {
  const { insightId } = params;
  const article = articles.find((article) => article.id === insightId);

  if (!article || !article.content) {
    return <p className="py-12 text-center">Page not Found.</p>;
  }

  return (
    <div className="bg-navy-500/20">
      <div className="container py-12 lg:px-12">
        <div className="mx-auto mb-8 flex flex-col items-center justify-center gap-6 lg:flex-row">
          <div className="w-full text-navy-100">
            <p className="mb-2 capitalize">{article.type}</p>
            <h1 className="mb-6 text-3xl font-semibold md:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mb-4 font-medium">{article.subtitle}</p>
            <p className="mb-1 text-sm font-light">{article.date}</p>
            <div className="mb-2 flex gap-2">
              {article.tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="rounded border border-navy-100/50 p-2 text-xs text-navy-100"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
          <div className="flex h-auto w-full items-center justify-center">
            <Image
              src={article.img2}
              alt={article.title}
              width={600}
              height={250}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </div>
        </div>
        <div>{article.content}</div>
        <div className="flex w-full justify-center">
          <Button
            variant="primary"
            className="h-auto px-4 py-2 text-xs lg:px-12"
          >
            {article.cta}
          </Button>
        </div>
      </div>
    </div>
  );
}
