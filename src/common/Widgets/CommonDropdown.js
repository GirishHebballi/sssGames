import React, { Component } from 'react';

class CommonDropdown extends Component {

    constructor(props) {
        super(props)
        this.state = {dropDownValue: this.props.default || ""};
        console.log("Printing dropdown state : " + this.state.dropDownValue);
        console.log(this.props.default);
        console.log(this.props.default || "")
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value);
          this.setState({dropDownValue : event.target.value});
          this.props.afterChange(event.target.value)
    }

    render() {
        return (
            <div class="form-group form-control-sm row mt-1  mb-1 pb-1 pt-1">
            <label for={this.props.id} className="col-sm-3 col-form-label text-right">{this.props.labelName}</label>
            <div className="col-sm-4">
                <select className="form-control form-control-sm" id={this.props.id} value={this.state.dropDownValue} onChange={this.handleChange}>
                    {this.props.options.map((optionItem) => <option>{optionItem}</option>)}
                </select>
            </div>
            <div className="col-sm-3 mt-0 text-left">
                    <span style={{ color: "red" }}> <small className="text-left"></small></span>
                </div>
        </div>
        )
    }
}

export default CommonDropdown;