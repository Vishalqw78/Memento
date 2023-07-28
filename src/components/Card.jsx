const Card = ({ image, selected, onClick }) => {
    return (
      <div className="card">
        <div className={selected ? 'selected' : ''}>
          <img alt="" src={image} className="card-face" />
  
          <img
            alt=""
            className="card-back"
            src={'/assets/memory.png'} // Placeholder image URL
            onClick={onClick}
          />
        </div>
      </div>
    );
  };
  //this is Updated version
  export default Card;
  