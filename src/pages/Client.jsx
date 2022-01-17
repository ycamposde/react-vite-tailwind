import { useParams } from "react-router-dom";

const CLient = () => {
  const params = useParams();
  return (
    <div>
      Desde Client id: { params.id }
    </div>
  );
}

export default CLient;