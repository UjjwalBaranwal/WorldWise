import { useNavigate } from "react-router";
import Button from "./Button";
function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1); //this go to one level back form where it come
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
