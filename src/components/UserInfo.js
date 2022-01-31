import React from "react";

class UserInfo extends React.Component {
	render() {
		return (
			<div style={{ border: "1px solid grey", margin: "5px" }}>
				<p>Name: {this.props.name}</p>
				<p>Email: {this.props.email}</p>
				<p>Website: {this.props.website}</p>
			</div>
		);
	}
}

export default UserInfo;