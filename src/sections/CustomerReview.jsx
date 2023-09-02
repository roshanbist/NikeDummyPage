import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants';

const CustomerReview = () => {
  return (
    <section className='max-container py-12'>
      <h3 className='font-palanquin text-center text-4xl font-bold capitalize mb-4'>
        what our <span className='text-coral-red'>customers</span> say?
      </h3>
      <p className='info-text m-auto max-w-lg text-center'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className='mt-12 flex flex-1 flex-wrap justify-evenly items-center max-lg:flex-col max-sm:gap-5 gap-14 '>
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} review={review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
