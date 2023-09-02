import { useState } from 'react';
import { arrowRight } from '../assets/icons';
import { bigShoe1 } from '../assets/images';
import Button from '../components/Button';
import ShoeCard from '../components/ShoeCard';
import { shoes, statistics } from '../constants';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  const bigShoeChangeHandler = (shoeImg) => {
    setBigShoeImg(shoeImg);
  };

  return (
    <section
      id='home'
      className='w-full flex flex-col xl:flex xl:flex-row gap-10 max-container min-h-screen padding-b xl:mb-10 max-sm:mb-12'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start pt-28'>
        <p className='text-xl font-montserrat text-coral-red mb-5 sm:mb-10'>
          Our Summer Collection
        </p>
        <h1 className='capitalize font-semibold max-sm:text-[48px] max-sm:leading-[54px] text-[72px] leading-[82px] md:text-8xl font-palanquin mb-6'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            {' '}
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike </span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mb-10 max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label='Shop now' iconURL={arrowRight} />
        <div className='flex flex-wrap w-full max-sm:mt-10 mt-20 max-sm:gap-8 gap-16'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='font-montserrat leading-7 text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={510}
          className='object-contain relative z-10'
        />

        <div className='flex gap-2.5 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoeItem, i) => (
            <div key={i}>
              <ShoeCard
                imgURL={shoeItem}
                changeBigShoeImage={bigShoeChangeHandler}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
