var fs = require('fs');

fs.readFile("./testIn.bmp", transform);

function transform(err, buffer) {
  if(err)throw err; 
  else {
    var offset = buffer.readUInt16LE(10); // offset to the image in the buffer
    var image = buffer.slice(offset, buffer.length);//get bytes
    var length = image.length; //reduce lookup time in for loop by assigning length

    for(var i = offset; i < buffer.length; i++){
      buffer[i] = 0xFF- buffer[i]; //transform to flip image
    }
  
  fs.writeFile('./testOut.bmp', buffer, function(err){
    if(err) console.log(err);
    else console.log("File Writen");
  });
  }
}
