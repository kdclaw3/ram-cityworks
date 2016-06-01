var ram = require('./index.js');
chai = require('chai');
expect = chai.expect;
done = chai.done;

describe("ram-oracle match function", function() {
  it("determines if password hashes are truthy", function() {

    var hashedCityworksPassword = '5F4DCC3B5AA765D61D8327DEB882CF99',
        inputPassword = 'password';
    var matches = ram.match(hashedCityworksPassword,inputPassword);

    expect(matches).to.deep.equal(true);

  });
  it("determines if password hashes are falsey", function() {

    var hashedCityworksPassword = '5F4DCC3B5AA765D61D8327DEB882CF99',
        inputPassword = 'incorrect_password';
    var matches = ram.match(hashedCityworksPassword,inputPassword);

    expect(matches).to.deep.equal(false);

  });
});
