
import React, { Component } from 'react';
import { render } from 'react-dom';
export default ({ name }) => <h1>Hello {name}! </h1>;

class CSV1 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

render() {
    return (
      <div>
        
        <p>
          Start editing to see some magic happen :)
          <p/>
          Test to see if stackblitz reverts my code.
        </p>

        <CSV1 csvLine1='1,3,"apple"'>
        </CSV1>


      </div>
      
    );
  }
}

render(<CSV1 />, document.getElementById('root1'));