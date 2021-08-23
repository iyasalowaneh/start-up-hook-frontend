import { useSelector } from "react-redux";
//components
import IdeaItem from "./IdeaItem";
import { IdeaDiv } from "../../style";
import "./Ideas.css";
const IdeaList = () => {
	const ideas = useSelector((state) => state.ideas.ideas);
	let ideaArray = ideas
		.filter((_idea) => _idea.status === true)
		.map((idea) => <IdeaItem idea={idea} key={idea?.id} />);

	return (
		<>
			<div>
				<div class="row">{ideaArray}</div>
			</div>
		</>
	);
};

export default IdeaList;
