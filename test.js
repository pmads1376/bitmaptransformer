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

  it("Check Header", function(done){
    for(var i = 0; i < originalOffset; i++){
      expect(created[i]).to.equal(original[i]);
    }
    done();
  });

  it("Check Body", function(done){
    for(var i = originalOffset; i < original.legth; i++){
      expect(0xFF - created[i]).to.eql(original[i]);
    }
    done();
  });
});
