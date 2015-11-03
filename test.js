var expect = require('chai').expect;
var fs = require('fs');
var transform = require('./main.js');

describe('Test transformations', function(){
  var original = fs.readFileSync('testIn.bmp');
  var originalOffset = original.readUInt16LE(10);
  
  var created = fs.readFileSync('testOut.bmp');
  var createdOffset  = created.readUInt16LE(10);

  it("Check Offset to image in new file", function(){
    expect(createdOffset).to.equal(originalOffset);
  });

  it("Check Header bytes not altered", function(){
    for(var i = 0; i < originalOffset; i++){
      expect(created[i]).to.equal(original[i]);
    }
  });

  it("Check Body pixels transformed as expected", function(){
    for(var i = originalOffset; i < original.length; i++){
      expect(created[i]).to.equal(0xFF - original[i]);
    }
  });
});
