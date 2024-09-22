import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

const Spinner = () => {
  return <ClipLoader cssOverride={override} />;
};

export default Spinner;
