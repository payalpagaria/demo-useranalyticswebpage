import { useNavigate } from "react-router-dom";

function Engage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Engage</h2>
      <p>Simulate engagement actions such as clicks and interactions.</p>

      <div className="actions">
        <button onClick={() => alert("User engaged!")}>
          Like
        </button>

        <button onClick={() => alert("Subscribed!")}>
          Subscribe
        </button>
      </div>

      <div className="actions">
        <button onClick={() => navigate("/explore")}>
          Go to Explore
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

export default Engage;
