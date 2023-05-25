import React from "react";

class AddHobby extends React.Component {
  state = {
    name: "",
    language: ""
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "") {
      alert("Add Hobby!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "" , language: ""});
  };
  render() {
    return (
      <div className="ui main">
        
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <input
              width="40"
              type="text"
              name="name"
              placeholder="Hobby"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />

          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white  font-Manrope font-normal mt-6 py-6 px-60 rectangle transform 
                                transition duration-300 hover:scale-110"> + Add Skill</button>
        </form>
      </div>
    );
  }
}

export default AddHobby;
