import React from "react";

export class State extends React.Component {
  constructor() {
    super();
    this.state = {
        firstName: "",
        lastName: "",
        emailid:"abc@gmail.com",
        Address:"",
        State:"",
        gender:"",
        agree:"",
    };
  }
  inputChangeHandler = (e) => {
    this.setState({
        [e.target.name] :e.target.value
    })
};

render() {
  return (
    <div>
        <form>
      
       FirstName: <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={(e) => {
            this.inputChangeHandler(e);
          }}
        />

       LastName: <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={(e) => {
            this.inputChangeHandler(e);
          }}
        />
      
      E-mail: <input
          type="text"
          name="emailid"
          value={this.state.emailid}
          onChange={(e) => {
            this.inputChangeHandler(e);
          }}
        />

        Address: <input
          type="text"
          name="Address"
          value={this.state.Address}
          onChange={(e) => {
            this.inputChangeHandler(e);
          }}
        />

            State : <select
                    name = "state"
                    onChange = { e => {
                        this.inputChangeHandler(e);
                    }}
                    >
                        <option
                            value = "Ghaziabad"
                        >Ghaziabad</option>

                        <option
                            value = "Delhi"
                        >Delhi</option>

                        <option
                            value = "Noida"
                        >Noida</option>

                    </select>
     
      
        <div>
        Gender : <input
                    type = "radio"
                    name = "gender"
                    value = "Male"
                    onChange = { e => {
                        this.inputChangeHandler(e);
                    }}
                />Male

                <input
                    type = "radio"
                    name = "gender"
                    value = "FeMale"
                    onChange = { e => {
                        this.inputChangeHandler(e);
                    }}
                />FeMale
        </div>
        <div>
                <input
                    type = "checkbox"
                    name = "terms"
                    value = {true}
                    onChange = { e => {
                        this.inputChangeHandler(e);
                    }}
                />Terms and Conditions Applied
        </div>      
        
          <button onClick={()=>{alert(JSON.stringify(this.state))}} >
              Submit
          </button>
      </form>
    </div>
  );
}
}

