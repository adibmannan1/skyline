const HeroImage = ({ src}) => {
  
  return (
    <div className={`image md:pb-10`}>
      <img src={src} alt='house-image'  />
    </div>
  );
};


export default HeroImage