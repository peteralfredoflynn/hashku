var React = require('react');

var HashkuForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var word1 = this.refs.word1.value;
    var word2 = this.refs.word2.value;
    
    this.props.onSubmitHashku(word1, word2);
    this.refs.word1.value = '';
    this.refs.word2.value = '';

  },
  render: function() {
    return(
      <div className="row hashku-form">
        <div className="column small-centered small-10 medium-7">
          <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="first hashtag" ref="word1" name="word1"/>
            <input type="text" placeholder="second hashtag" ref="word2" name="word2"/>
            <button className="button expanded hollow">Hashku!</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = HashkuForm;