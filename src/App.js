import React from "react";
import users from "./users.json";
// Components
import UserInfo from "./components/UserInfo";
import Counter from "./components/Counter";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			count: 10,
		};

		this.increment = this.increment.bind(this);
		this.substract = this.substract.bind(this);
	}

	// method to increment the counter
	increment() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1,
			};
		});
	}

	// method to decrement the counter
	substract() {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1,
			};
		});
	}

	render() {
		// const data = users.map((user) => {
		// 	return (
		// 		<UserInfo
		// 			name={user.name}
		// 			email={user.email}
		// 			website={user.website}
		// 		/>
		// 	);
		// });

		return (
			<div>
				<Counter
					count={this.state.count}
					increment={this.increment}
					substract={this.substract}
				/>
				{/* {data} */}

				{users.map((user, i) => {
					if (i === 0 || i < this.state.count) {
						return (
							<UserInfo
								key={user.email}
								name={user.name}
								email={user.email}
								website={user.website}
							/>
						);
					}

					return null;
				})}
			</div>
		);
	}
}

export default App;