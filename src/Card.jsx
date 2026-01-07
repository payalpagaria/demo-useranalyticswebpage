import { useNavigate } from "react-router-dom";

function Card({ title, description, buttonText, route }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        data-track="true"
        onClick={() => navigate(route)}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Card;
