import * as s from "./styles";

const Figure: React.FC<{ param: string[] }> = ({ param }) => {
  return <s.Figure param={param} />;
};

export default Figure;
