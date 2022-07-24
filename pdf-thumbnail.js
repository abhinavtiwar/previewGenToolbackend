const { PDFNet } = require('@pdftron/pdfnet-node');

async function main() {
  const doc = await PDFNet.PDFDoc.createFromFilePath(filename);

  // set the output resolution
  const pdfdraw = await PDFNet.PDFDraw.create(92);

  // Rasterize the first page in the document and save the result as PNG.
  const pg = await doc.getPage(1);
  await pdfdraw.export(pg, output_filename, "PNG");
}
PDFNet.runWithCleanup(main);