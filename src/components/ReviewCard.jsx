import { star } from '../assets/icons';

const ReviewCard = ({ review }) => {
  return (
    <div className='flex justify-center items-center flex-col mb-6'>
      <img
        src={review.imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px] mb-6'
      />
      <p className='max-w-sm text-center info-text mb-3'>{review.feedback}</p>
      <div className='flex justify-center items-center gap-2.5 mb-2'>
        <img src={star} width={24} height={24} className='object-contain m-0' />
        <p className='text-xl font-montserrat text-slate-gray'>
          ({review.rating})
        </p>
      </div>
      <h3 className='font-palanquin text-3xl text-center font-bold'>
        {review.customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
