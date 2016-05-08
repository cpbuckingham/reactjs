var React = require('react');
require (people.js);


]


var App = React.createClass({
  getInitialState: function(){
    return people[0]
  },

  render:function() {
    return (
      <div>
        <h2> Name </h2>
        <img src={this.state.avatar} alt=""/>
      </div>
    )
  }
})

ReactDOM.render(<App></App>, document.body);
