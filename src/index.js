import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Tom',
            age: 18,
            balance: 89,
        }
    }

    charge(num){
        console.log(num)
        this.setState({balance: this.state.balance + num})
    }

    render(){
        return <div>
            <p>用户名：{this.state.name}</p>
            <p>年龄：{this.state.age}</p>
            <p>余额：{this.state.balance}</p>
            {this.state.balance < 100 ? <div style={{color: 'red'}}>警告：余额低于100，请立即充值！</div> : <div>您的资金充足</div>}
            <button onClick={() => this.charge(100)}>先充个100再说</button>
        </div>
    }
}

const myh1 = <div id="mydiv" title="div aaa">
    <h2>会员中心</h2>
    <Hello></Hello>
</div>

ReactDOM.render(myh1, document.getElementById('app'))