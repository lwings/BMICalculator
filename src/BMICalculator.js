import React from "react";

const propNames = {
    w: "Weight",
    h: "Height"
};

function  calBMI(weight,height) {
    return (weight*1.0)/(height*1.0);
}

class BMIDisplayBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const weight = this.props.weight;
        const height = this.props.height;
        if (height>0) {
            return (
                <p>Your BMI is {calBMI(weight, height)}</p>
            );
        }
        return(
            <p></p>
        );

    }
}

class BMIInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.props.onhandleInputChange(e.target.value);
    }

    render() {
        const propvalue = this.props.propValue;
        const propname = this.props.propName;
        return (
            <fieldset>
                <legend>Enter your {propNames[propname]} :</legend>
                <input value={propvalue}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class BMICalculator extends React.Component {
    constructor(props) {
        super(props);

        this.handleHeightChange = this.handleHeightChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.state = {weight:0,height:0}
    }
    handleWeightChange(w){
        this.setState({weight:w})
    }
    handleHeightChange(h){
        this.setState({height:h})
    }

    render() {
        return (
            <div>
                <BMIInput
                    propName='w'
                    propValue={this.state.weight}
                    onhandleInputChange={this.handleWeightChange}
                />
                <BMIInput
                    propName='h'
                    propValue={this.state.height}
                    onhandleInputChange={this.handleHeightChange}
                />
                <BMIDisplayBar
                    weight={this.state.weight}
                    height={this.state.height}
                />
            </div>
        );
    }

}

export default BMICalculator;
