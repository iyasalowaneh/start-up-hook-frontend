//React
import { useSelector } from "react-redux";

//styling
import { IdeaDiv, ButtonCard, L, ListImage, Divv } from "../../style";
import DotLoader from "react-spinners/DotLoader";
import moment from "moment";

const IdeaItemHome = (props) => {
	const idea = props.idea;

	const loading = useSelector((state) => state.ideas.loading);

	const ideaProgress = (idea?.recievedFund / idea?.fundAmount) * 100;
	const users = useSelector((state) => state.users.users);
	let user = users.find((user) => user.id === idea?.ownerId);
	if (loading) return <DotLoader />;
	return (
		<>
			<div class="col-sm-4">
				<div class="profile-card-4 text-center">
					<ListImage src={idea.ideaPicture} class="img img-responsive" />
					<div class="profile-content">
						<div class="profile-name">{idea.ideaName}</div>
						<div class="profile-description">
							<h5>Fund Typy</h5>
							{idea.fundType === "all" && (
								<p>Donation , Investment or Consultation</p>
							)}
							{idea.fundType === "donation" && <p>Donation</p>}
							{idea.fundType === "investmen" && <p>Investment</p>}
							{idea.fundType === "consultation" && <p>Consultation</p>}
							<img
								src="https://img.icons8.com/office/16/000000/money--v1.png"
								alt="money"
							/>
							<address>
								{idea.recievedFund}JD of {idea.fundAmount}JD{" "}
							</address>
						</div>
						<div class="row">
							<div class="col-xs-4">
								<div class="progress">
									<div
										class="progress-bar progress-bar-striped bg-success"
										role="progressbar"
										style={{ width: `${ideaProgress}%` }}
										aria-valuenow={idea.recievedFund}
										aria-valuemin="0"
										aria-valuemax={idea.fundAmount}
									>
										{parseInt(ideaProgress)}%
									</div>
								</div>
							</div>

							<div class="col-xs-4">
								<div class="profile-overview">
									<small class="text-muted">
										Idea created at {moment(idea?.createdAt).format("ll")} by{" "}
										<b>
											{user?.firstName} {user?.lastName}
										</b>
									</small>
									<L to={`/ideas/${idea?.slug}`}>
										<ButtonCard>More detials about my idea</ButtonCard>
									</L>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default IdeaItemHome;
