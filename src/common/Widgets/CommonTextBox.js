import React, { Component } from 'react';

class CommonTextBox extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="form-group form-control-sm  row mt-1 mb-1 pb-1 pt-1">
                <label for={this.props.id} className="col-sm-3 col-form-label text-right">{this.props.labelName}</label>
                <div className="col-sm-4 mt-0">
                    <input type={this.props.type || "text"} className="form-control form-control-sm" id={this.props.id} placeholder={this.props.placeholder} style={{ backgroundColor: "white`" }} />
                </div>
                <div className="col-sm-3 mt-0 text-left">
        <span style={{ color: "red" }}> <small className="text-left">{this.props.error}</small></span>
                </div>
            </div>
        );
    }


}
export default CommonTextBox;