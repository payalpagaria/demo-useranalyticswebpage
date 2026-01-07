import { useNavigate } from "react-router-dom";

function Analyze() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Analyze</h2>
      <p>View insights based on user interaction data.</p>


      <div className="actions">
        <button onClick={() => navigate("/explore")}>
          Go to Explore
        </button>

        <button onClick={() => navigate("/engage")}>
          Go to Engage
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

export default Analyze;
