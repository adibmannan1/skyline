const HeroImage = ({ src}) => {
  
  return (
    <div className={`image pb-10`}>
      <img src={src} alt='house-image'  />
    </div>
  );
};


export default HeroImage