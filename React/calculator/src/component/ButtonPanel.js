import Button from './Button';
import React from 'react';
import PropTypes from 'prop-types';

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
    static propTypes = {
        clickHandle: PropTypes.func,
    };

    handleClick = buttonName => {
        this.props.clickHandle(buttonName);
    };

    render() {
        return (
            <div className="component-button-panel">
                <div>
                    <Button name="AC" clickHandle={this.handleClick} />
                    <Button name="+/-" clickHandle={this.handleClick} />
                    <Button name="%" clickHandle={this.handleClick} />
                    <Button name="÷" clickHandle={this.handleClick} orange />
                </div>
                <div>
                    <Button name="7" clickHandle={this.handleClick} />
                    <Button name="8" clickHandle={this.handleClick} />
                    <Button name="9" clickHandle={this.handleClick} />
                    <Button name="x" clickHandle={this.handleClick} orange />
                </div>
                <div>
                    <Button name="4" clickHandle={this.handleClick} />
                    <Button name="5" clickHandle={this.handleClick} />
                    <Button name="6" clickHandle={this.handleClick} />
                    <Button name="-" clickHandle={this.handleClick} orange />
                </div>
                <div>
                    <Button name="1" clickHandle={this.handleClick} />
                    <Button name="2" clickHandle={this.handleClick} />
                    <Button name="3" clickHandle={this.handleClick} />
                    <Button name="+" clickHandle={this.handleClick} orange />
                </div>
                <div>
                    <Button name="0" clickHandle={this.handleClick} wide />
                    <Button name="." clickHandle={this.handleClick} />
                    <Button name="+" clickHandle={this.handleClick} orange />
                </div>
            </div>
        );
    }
}