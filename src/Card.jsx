function Card({ title, description, buttonText }) {
    return (
      <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <button data-track="true">{buttonText}</button>
      </div>
    );
  }
  
  export default Card;
  