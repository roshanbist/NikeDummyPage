import Button from '../components/Button';
import shoe8 from '../assets/images/shoe8.svg';

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container pb-14'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='capitalize font-bold text-4xl font-palanquin lg:max-w-lg mb-4'>
          we provide you
          <span className='text-coral-red'>super</span>
          <br />
          <span className='text-coral-red'>quality </span> Shoes
        </h2>
        <p className='lg:max-w-lg info-text mb-4'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='lg:max-w-lg info-text mb-4'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-8'>
          <Button label='View details' />
        </div>
      </div>
      <div className='flex-1 flex justify-end items-center'>
        <img
          src={shoe8}
          alt='shoe8'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
