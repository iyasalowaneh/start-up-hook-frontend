//styling
import { useSelector } from "react-redux";
import { IdeaDiv, ButtonCard, L, ListImage, Divv } from "../../style";
const IdeaItem = (props) => {
  const idea = props.idea;

  const ideaProgress = (idea.recievedFund / idea.fundAmount) * 100;
  const users = useSelector((state) => state.users.users);
  let user = users.find((user) => user.id === idea.ownerId);

  return (
    <>
      <div class="col-sm-3">
        <IdeaDiv class="card">
          <ListImage
            src={idea.ideaPicture}
            class="card-img-top"
            alt={idea.name}
          />
          <div class="card-body">
            <Divv>
              <h5 class="card-title">{idea.ideaName}</h5>
            </Divv>
            <>
              <img
                src="https://img.icons8.com/office/16/000000/money--v1.png"
                alt="money"
              />
              <address>
                {idea.recievedFund}$ of {idea.fundAmount}${" "}
              </address>
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
            </>
            <p class="card-text">
              <small class="text-muted">
                Idea created at {idea.createdAt.slice(0, 10)} by{" "}
                {user?.firstName} {user?.lastName}
              </small>
            </p>

            <L to={`/ideas/${idea.slug}`}>
              <ButtonCard>More detials about my idea</ButtonCard>
            </L>
          </div>
        </IdeaDiv>
      </div>
    </>
  );
};

export default IdeaItem;
