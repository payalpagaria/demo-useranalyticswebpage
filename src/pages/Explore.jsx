import { useNavigate } from "react-router-dom";

function Explore() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Explore</h2>
      <p>
        Discover different sections and understand how users interact with
        exploratory content.
      </p>

      <div className="actions">
        <button onClick={() => navigate("/engage")}>
          Go to Engage
        </button>

        <button onClick={() => navigate("/analyze")}>
          Go to Analyze
        </button>
      </div>

      <div className="secondary-actions">
        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Explore;
