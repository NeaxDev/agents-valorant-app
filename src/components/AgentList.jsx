import { useEffect, useState } from "react";
import { getAgents } from "../api/fetchAgents";
import { AgentCard } from "./AgentCard";
import "../components/AgentList.css";

export const AgentList = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchAgentsData = async () => {
      const result = await getAgents("agents");

      if (!result) {
        console.log("ocurrio un error");
        return;
      }

      setAgents(result.data);
    };

    fetchAgentsData();
  }, []);

  return (
    <ul className="container">
      {agents.map((agent) => {
        return <AgentCard key={agent.uuid} agent={agent} />;
      })}
    </ul>
  );
};
