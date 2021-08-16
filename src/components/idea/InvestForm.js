import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fundIdea } from "../../store/actions/ideaAction";

const InvestForm = () => {
  const ideas = useSelector((state) => state.ideas.ideas);

  const ideaSlug = useParams().ideaSlug;
  const _idea = ideas.find((idea) => idea.slug === ideaSlug);
  console.log(_idea);

  const [idea, setIdea] = useState({
    amount: "",
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setIdea({ ...idea, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newIdea = { ...idea, ideaId: _idea.id };
    dispatch(fundIdea(newIdea));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Enter your fund Amount"
        name="amount"
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default InvestForm;