const pdf = require('pdf-thumbnail');
const pdfBuffer = require('fs').readFileSync('./static/samplefiles/exPDF.pdf');
 
pdf(
  pdfBuffer, /*Buffer or stream of the pdf*/
  options
)
  .then(data /*Stream of the image*/ => {
    // ...
  })
  .catch(err => console.log(err))