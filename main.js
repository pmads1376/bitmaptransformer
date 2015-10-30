var fs = require('fs');

fs.readFile("./testIn.bmp", transform);

function transform(err, buffer) {
  if(err){
    throw err;
  } else {

    var offset = buffer.readUInt16LE(10); // provides the offset to the image
    var image = buffer.slice(offset, buffer.length);
    var length = image.length;

    for(var i = offset; i < length; i++){
      buffer[i] = 0xFF - buffer[i];
    }
  
  fs.writeFile('./testOut.bmp', buffer, function(err){
    if(err) console.log(err);
    else console.log("File Writen");
  });
  }
}
