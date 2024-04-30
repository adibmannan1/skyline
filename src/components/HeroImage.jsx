const HeroImage = ({ src, width }) => {
  
  return (
    <div className={`image pb-10`}>
      <img src={src} alt='house-image' style={{ width: `${width}%` }} />
    </div>
  );
};


export default HeroImage