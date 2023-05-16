import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAgents } from "../api/fetchAgents";
import "../pages/DetailsPage.css";

export const DetailsPage = () => {
  const { id } = useParams();

  const [agent, setAgent] = useState({});

  useEffect(() => {
    const getAgentById = async () => {
      const result = await getAgents(`agents/${id}`);
      console.log(result.data);
      setAgent(result.data);
    };

    getAgentById();
  }, [id]);

  if (agent.role !== undefined) {
    console.log(agent.role);
  }

  return (
    <div className="detailsContainer">
      {agent.fullPortraitV2 ? (
        <img
          src={agent.fullPortraitV2}
          alt={agent.title}
          className="col agentImg"
        />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Sin_fotograf%C3%ADa.jpg"
          alt={agent.displayName}
          width={380}
          height={390}
        />
      )}

      <div className="col agentDetails">
        <p className="titleDetails">
          <strong>Nombre: </strong>
          {agent.displayName}
        </p>

        <p className="titleDetails">
          <strong>
            Descripción: <br />
          </strong>
          {agent.description}
        </p>

        {agent.role && (
          <>
            <p className="titleDetails">
              <strong>
                Rol: <br />
              </strong>
              {agent.role.displayName}
            </p>

            <p className="titleDetails">
              <strong>
                Descripción del Rol: <br />
              </strong>
              {agent.role.description}
            </p>
          </>
        )}

        <br />
      </div>
    </div>
  );
};
