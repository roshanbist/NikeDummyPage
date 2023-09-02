const ServiceCard = ({ service }) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='w-11 h-11 justify-center items-center bg-coral-red rounded-full flex mb-5'>
        <img src={service.imgURL} alt={service.label} width={24} height={24} />
      </div>
      <h3 className='font-palanquin text-3xl leading-normal font-bold mb-3'>
        {service.label}
      </h3>
      <p className='font-montserrat break-words text-lg leading-normal text-slate-gray'>
        {service.subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
