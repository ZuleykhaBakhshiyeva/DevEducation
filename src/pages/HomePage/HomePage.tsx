import './HomePage.scss';
import { DiscountItem } from './components/DiscountItem/DiscountItem';
import { Hero } from './components/hero/hero';
import { LeatestBlog } from './components/LeatestBlog/LeatestBlog';
import { Logos } from './components/Logos/Logos';
import { Subscribe } from './components/Subscribe/Subscribe';
import { TopCategories } from './components/TopCategories/TopCategories';
import { TrendingProduct } from './components/TrendingProduct/TrendingProduct';
import { Unique } from './components/Unique/Unique';
import { FeaturedProducts } from './components/FeaturedProducts/FeaturedProducts';
import { LatestProducts } from './components/LatestProducts/LatestProducts';
import { ShopexOffer } from './components/ShopexOffer/ShopexOffer';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts/>
      <LatestProducts/>
      <ShopexOffer/>
      <Unique />
      <TrendingProduct />
      <DiscountItem />
      <TopCategories />
      <Subscribe />
      <Logos />
      <LeatestBlog />
    </>
  );
};
