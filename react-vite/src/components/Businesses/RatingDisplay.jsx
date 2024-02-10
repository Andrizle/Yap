import { useEffect, useState } from "react";

const RatingDisplay = ({ stars, onChange, type }) => {
  const [activeRating, setActiveRating] = useState(stars)

  useEffect(() => {
    setActiveRating(stars)
  }, [stars, type])

  return (
    <>
    <div className="rating-input">
      <div className={activeRating >= 1 ? 'filled' : 'empty'} >
        <i className="fa fa-star"></i>
      </div>
      <div className={activeRating >= 2 ? 'filled' : 'empty'} >
        <i className="fa fa-star"></i>
      </div>
      <div className={activeRating >= 3 ? 'filled' : 'empty'} >
        <i className="fa fa-star"></i>
      </div>
      <div className={activeRating >= 4 ? 'filled' : 'empty'} >
        <i className="fa fa-star"></i>
      </div>
      <div className={activeRating === 5 ? 'filled' : 'empty'} >
        <i className="fa fa-star"></i>
      </div>
    </div>
    </>
  );
};

export default RatingDisplay;
