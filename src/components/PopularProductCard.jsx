import { star } from '../assets/icons';

const PopularProductCard = ({ productDetail }) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:pb-10'>
      <img
        src={productDetail.imgURL}
        alt={productDetail.name}
        width={127}
        height={103}
        className='w-[280px] h-[280px] max-sm:mx-auto'
      />
      <div className='max-sm:mt-6 mt-5 flex justify-start gap-2.5 mb-2 max-sm:mx-auto max-sm:w-[280px]'>
        <img src={star} alt='rating' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          4.5
        </p>
      </div>
      <h3 className='text-2xl font-palanquin font-semibold leading-normal max-sm:mx-auto max-sm:w-[280px]'>
        {productDetail.name}
      </h3>
      <p className='leading-normal font-semibold font-montserrat text-coral-red text-2xl max-sm:mx-auto max-sm:w-[280px]'>
        {productDetail.price}
      </p>
    </div>
  );
};

export default PopularProductCard;
