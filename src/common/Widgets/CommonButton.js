import React, { Component } from 'react';

class CommonButton extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="form-group row p-2">
            <div className="col-sm-10">
                <button type="submit" className="btn btn-info rounded-pill" style={{ boxShadow: '10px 5px 5px #CED4D3' }} >{this.props.labelName}</button>
            </div>
        </div>
        );
    }

}

export default CommonButton;