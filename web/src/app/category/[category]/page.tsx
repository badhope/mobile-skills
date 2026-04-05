import CategoryPageClient from './CategoryPageClient';

export function generateStaticParams() {
  return [
    { category: 'functional' },
    { category: 'professional' },
    { category: 'creative' },
    { category: 'character' },
    { category: 'fiction' }
  ];
}

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  return <CategoryPageClient params={params} />;
}
