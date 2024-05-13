const HeroImage = ({ src}) => {
  
  return (
    <div className={`image md:pb-10 w-[90%] m-auto`}>
      <img src={src} alt='house-image'  />
    </div>
  );
};


export default HeroImage