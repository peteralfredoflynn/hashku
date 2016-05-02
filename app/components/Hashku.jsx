var React = require('react');
var hashkuAPI = require('../api/hashkuAPI');
var HashkuForm = require('HashkuForm');
var HashkuList = require('HashkuList');

var Hashku = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSubmitHashku: function(word1, word2) {

    var self = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      hash1: word1,
      hash2: word2,
      hashkus: undefined
    });

    hashkuAPI.getHashkus(word1, word2).then(function (data) {
      console.log(data);

      var hashkus = data.hashkus;

      self.setState({
        hashkus: hashkus,
        isLoading: false
      });
    }, function (errorMessage) {
      self.setState({
        isLoading: false,
        errorMessage: errorMessage.message
      });
    });
  },
  render: function() {
    var {isLoading, hashkus, errorMessage} = this.state;

    function renderHashkus() {
      if (isLoading) {
        return <h3 className="text-center">Creating Hashkus...</h3>;
      } else if (hashkus) {
        return <HashkuList hashkus={hashkus}/>;
      }
    }
    
    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <h3 className="text-center">{errorMessage}</h3>
        );
      }
    }

    return (
      <div className="row">
        <div className="column small-centered small-11 medium-8">
          <HashkuForm onSubmitHashku={this.handleSubmitHashku} />
          {renderHashkus()}
        </div>
      </div>
    );
  }
});

module.exports = Hashku; 