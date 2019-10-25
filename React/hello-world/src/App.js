import React, { PureComponent, Fragment} from 'react'
import "./App.css"
import AppItem from './AppItem';

class App extends PureComponent {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.submit = this.submit.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.state = {
            inputValue: "哈哈",
            list: ["第一天", "第二天"],
        }
    }

    handleChange(e) {
       this.setState({inputValue:e.target.value}) 
    }

    submit(e) {
        this.setState({
            list:[...this.state.list, this.state.inputValue],
        })
    }

    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: [...list]
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="aaaa">输入框</label>
                    <input id="aaaa" className="input" value={this.state.inputValue} onChange={this.handleChange}/>
                    <button onClick={this.submit}>
                        增加
                    </button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index)=> {
                            return (    
                                <AppItem key={index+item} content={item} index={index} deleteItem={this.deleteItem} />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default App