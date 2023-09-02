import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/Button';

const SpecialOffers = () => {
  return (
    <section className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container pb-14'>
      <div className='flex-1'>
        <img
          src={offer}
          width={773}
          height={687}
          className='object-contain w-full'
          alt='offer'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='capitalize font-bold text-4xl font-palanquin mb-4'>
          <span className='text-coral-red'>special</span> offer
        </h2>
        <p className='info-text mb-4'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='info-text mb-4'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className='flex flex-wrap gap-4 mt-7'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
