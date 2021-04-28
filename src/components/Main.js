import React, { Component } from 'react'
import dai from '../dai.png'

class Main extends Component {

  state = { balance: 10 };

  increaseInterest = () => {
    console.log(this.state)
    const { balance } = this.state;
    let temp = balance;
    temp = temp + (temp * (0.1));
    temp = Math.round(temp*100)/100;
    console.log(temp)
    this.setState({ balance: temp});
    console.log("interest issued")
  };

  componentDidMount() {
    setInterval(this.increaseInterest, 5000);
  }

  render() {
    return (
      <div id="content" className="mt-3">

        <table className="table table-borderless text-muted text-center">
          <thead>
            <tr>
              <th scope="col" className="style-text">Staking Balance</th>
              <th scope="col" className="style-text">Reward Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="style-text">{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} mDAI</td>
              <td className="style-text">{this.state.balance} KuberCoin</td>
            </tr>
          </tbody>
        </table>

        <div className="card mb-4" >

          <div className="card-body">

            <form className="mb-3" onSubmit={(event) => {
                event.preventDefault()
                let amount
                amount = this.input.value.toString()
                amount = window.web3.utils.toWei(amount, 'Ether')
                this.props.stakeTokens(amount)
              }}>
              <div>
                <label className="float-left"><b>Stake Tokens</b></label>
                <span className="float-right text-muted">
                  Balance: {window.web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')}
                </span>
              </div>
              <div className="input-group mb-4">
                <input
                  type="text"
                  ref={(input) => { this.input = input }}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src={dai} height='32' alt=""/>
                    &nbsp;&nbsp;&nbsp; mDAI
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary btn-block btn-lg">STAKE!</button>
            </form>
            <button
              type="submit"
              className="btn btn-link btn-block btn-sm"
              onClick={(event) => {
                event.preventDefault()
                this.props.unstakeTokens()
              }}>
                UN-STAKE...
              </button>
          </div>
        </div>

      </div>
    );
  }
}

export default Main;
