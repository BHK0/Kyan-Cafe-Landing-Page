import Image from 'next/image';
import { Link } from '../components/Link';
import MenuCard from '../components/MenuCard';

const menuItems = Array(12).fill().map((_, i) => ({
  id: `menu-item-${i}`,
  name: ["Kyan Latte", "Caramel Mocha", "Spanish Latte"][i % 3],
  description: [
    "Special coffee with whipped milk",
    "Rich coffee with chocolate and caramel",
    "Unique blend of Spanish coffee"
  ][i % 3],
  price: ["18 SAR", "20 SAR", "22 SAR"][i % 3],
  calories: ["120", "180", "150"][i % 3],
  image: "/coffe-cub-kyan.webp",
  tags: i % 3 === 0 ? ["Best Seller", "Featured"] : undefined
}));

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="pt-14 md:pt-0">
        <div className="sticky top-14 md:top-0 z-10 bg-gray-50/95 dark:bg-gray-900/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex-shrink-0" prefetch={true}>
                <Image
                  src="/logo.png"
                  alt="Kyan Logo"
                  width={50}
                  height={50}
                  className="hover:opacity-90 transition-opacity"
                />
              </Link>
              
              <Link
                href="/#menu"
                prefetch={true}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#00BED6] transition-colors"
              >
                <span className="text-sm font-medium">Return to Homepage</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 dark:text-white">Drinks Menu</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Enjoy a variety of special drinks</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {menuItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 