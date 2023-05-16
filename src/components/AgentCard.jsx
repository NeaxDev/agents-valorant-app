import { Link } from "react-router-dom";
import "../components/AgentCard.css";

export const AgentCard = ({ agent }) => {
  return (
    <li className="agentCard">
      <Link to={`agent/${agent.uuid}`}>
        {agent.fullPortraitV2 ? (
          <img
            className="agentImage"
            src={agent.fullPortraitV2}
            alt={agent.displayName}
            width={380}
            height={390}
          />
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Sin_fotograf%C3%ADa.jpg"
            alt={agent.displayName}
            className="agentImage"
            width={380}
            height={390}
          />
        )}
      </Link>
      <div>{agent.displayName}</div>
    </li>
  );
};
