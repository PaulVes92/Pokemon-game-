import React from "react";
import { Link } from "react-router-dom";

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userId = this.props.userId;

    return (
      <div>
        <div>
          <h2>Pokemon give me you're money game</h2>

          <p>
            This game was made so i could get rich suckas
          </p>
          <p>
            sucky sucky five dolla
          </p>
        </div>

        <div className="btnPart">
          <Link to={"/match/ai"} className={"btn"}>
            AI Match
          </Link>
          {userId ? (
            <Link to={"/match/online"} className={"btn"}>
              Online Match
            </Link>
          ) : (
            <div className="btnDeActive">Online Match</div>
          )}
        </div>
      </div>
    );
  }
}
