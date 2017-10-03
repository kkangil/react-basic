import React from 'react';

class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            stack : ['HTML','CSS'],
            tech : '',
        };
        this.change = this.handleChange.bind(this);
        this.add = this._stackAdd.bind(this);
    };
    _stackAdd(){
        const StackAdd = this.state.stack.concat(this.state.tech);
        this.setState({
            stack : StackAdd,
            tech : '',
        });
    };
    handleChange(e){
        this.setState({ tech : e.target.value });
    };
    render(){
        const Stack = this.state.stack.map((v,i)=>{
            return <p key={i}>{v}</p>
        })
        return(
            <div>
                <h2>{this.props.title}</h2>
                <input type="text" value={this.state.tech} onChange={this.change}/>
                <button onClick={this.add}>add</button>
                <div>
                    {Stack}
                </div>
            </div>
        );
    };
}

export default Content;