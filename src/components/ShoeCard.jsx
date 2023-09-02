const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  //   const {thumbnail, bigShoe} = shoeItem

  const handleThumbnailClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl  ${
        imgURL.bigShoe === bigShoeImg
          ? 'border-coral-red'
          : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleThumbnailClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 p-4 rounded-xl'>
        <img
          src={imgURL.thumbnail}
          alt='shoe collection'
          width={127}
          height={105}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
