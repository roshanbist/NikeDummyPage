import PopularProductCard from '../components/PopularProductCard';
import { products } from '../constants';

const PopularProducts = () => {
  return (
    <section id='products' className='max-container pb-5 sm:pb-24'>
      <div className='gap-5 mb-8 sm:mb-16'>
        <h2 className='text-4xl font-palanquin text-black capitalize font-bold mb-2'>
          Our <span className='text-coral-red'>popular</span> products
        </h2>
        <p className='text-slate-gray lg:max-w-lg font-montserrat'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className='sm:grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3  sm:gap-4 '>
        {products.map((product) => (
          <PopularProductCard key={product.name} productDetail={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
