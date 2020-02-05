import Button from './Button';
import React from 'react';
import PropTypes from 'prop-types';

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
    static propTypes = {
        clickHandle: PropTypes.func,
    };

    renderButton(name, orange = false, wide = false) {
        return <Button name={name} clickHandle={this.handleClick} orange={orange} wide={wide}/>
    }

    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <div className="component-button-panel">
                <div>
                    {this.renderButton("AC")}
                    {this.renderButton("+/-")} 
                    {this.renderButton("%")} 
                    {this.renderButton("÷", true)} 
                </div>
                <div>
                    {this.renderButton("7")}
                    {this.renderButton("8")} 
                    {this.renderButton("9")} 
                    {this.renderButton("x", true)}
                </div>
                <div>
                    {this.renderButton("4")}
                    {this.renderButton("5")} 
                    {this.renderButton("6")} 
                    {this.renderButton("-", true)}
                </div>
                <div>
                    {this.renderButton("1")}
                    {this.renderButton("2")} 
                    {this.renderButton("3")} 
                    {this.renderButton("+", true)}
                </div>
                <div>
                    {this.renderButton("0", false, true)}
                    {this.renderButton(".")} 
                    {this.renderButton("+", true)} 
                </div>
            </div>
        );
    }
}