import { ChevronRight } from "lucide-react";
import CategoryList from "./_components/category-list";
import Header from "./_components/header";
import ProductList from "./_components/product-list";
import PromoBanner from "./_components/promo-banner";
import Search from "./_components/search";
import { Button } from "./_components/ui/button";
// import { db } from "./_lib/prisma";

// const products = db.product.findMany({
//   where: {
//     discountPercentage: {
//       gt: 0,
//     },
//   },
//   take: 10,
//   include: {
//     restaurant: {
//       select: {
//         name: true,
//       },
//     },
//   },
// });

const Home = async () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <PromoBanner
          src="/promo-banner-01.png"
          alt="30% de desconto em pizzas!"
        />
      </div>

      <div className="pt-6">
        <div className="mb-4 flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos recomendados</h2>
          <Button
            className="flex h-fit items-center p-0 text-primary hover:bg-transparent"
            variant="ghost"
          >
            <span className="text-xs">Ver todos</span>
            <ChevronRight size={16} />
          </Button>
        </div>
        <ProductList />
      </div>
    </>
  );
};

export default Home;
