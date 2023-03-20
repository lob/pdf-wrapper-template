/**
 * Implement this interface. 
 * Engine name is just an example, feel free to structure this as you see fit
 */ 
interface PDFWrapper {
  engineName: string;
}

/**
 * 
 * @param pathToPDFFile The path to a pdf file
 * @param fileInfo A binary represenation of the attributes required to render the PDF.
 * You can choose which LSB represents which characteristic (annotation, encryption, search)
 * @returns 
 */
export function renderPDF(pathToPDFFile: string, fileInfo: number): PDFWrapper {
  // Implementation goes here. You can leave it in this file or move it elsewhere
  const pdfWrapper: PDFWrapper = {
    engineName: 'SoSoPDFEngine'
  };
  return pdfWrapper;
}

// Feel free to use or remove this run function
function run() {
  console.info('Hello from the index file')
}

run();