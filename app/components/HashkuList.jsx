var React = require('react');

var HashkuList = React.createClass({
  render: function() {
    var {hashkus, word1, word2} = this.props;

    var renderHashkus = () => {
      return hashkus.map((hashku, index) => {
        return <p key={index}>{hashku}</p>
      });
    };

    return (
      <div className="hashku-list">
        <p>{word1}</p>
        <p>{word2}</p>
        {renderHashkus()}
      </div>
    );
  }
});

module.exports = HashkuList;