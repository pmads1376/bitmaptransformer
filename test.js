var expect = require('chai').expect;
var fs = require('fs');
var transform = require('./main.js');

describe('Test transformations', function(){
  var original = fs.readFileSync('testIn.bmp');
  var originalOffset = original.readUInt16LE(10);
  
  var created = fs.readFileSync('testOut.bmp');
  var createdOffset  = created.readUInt16LE(10);

  it("Check Offset", function(){
    expect(createdOffset).to.equal(originalOffset);
  });

  it("Check Header", function(){
    for(var i = 0; i < originalOffset; i++){
      expect(created[i]).to.equal(original[i]);
    }
  });

  it("Check Body", function(){
    for(var i = originalOffset; i < original.length; i++){
      expect(created[i]).to.equal(0xFF - original[i]);
    }
  });
});
