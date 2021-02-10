import React from "react";

class ProfileSetup extends React.Component {
	constructor(props) {
		super(props);

		this.state = {setupCompleteState: false};

		this.submitProfile = this.submitProfile.bind(this)
	}

	submitProfile() {
		this.setState({
			setupCompleteState: true,
		});
	}

	render() {
		if (this.state.setupCompleteState) {
			return (
				<p>Profile has been setup</p>
			) 
		} else {
			return (
				<div>
					<form>
						<label htmlFor='name'>Your name</label>
						<input type='text' name='name' />
						<label htmlFor='nickname'>Your username (other users will identify you this way)</label>
						<input type='text' name='nickname' />
						<label htmlFor='bio'>Your story</label>
						<textarea name='bio'></textarea>
					</form>
					<button onClick={this.submitProfile}>submit</button>
				</div>
			);
		}
	}
};

export default ProfileSetup;