import { renderPDF } from '../src/index';

/**
 * Add additional unit tests here to ensure your code works properly for all use cases.
 * Feel free to adjust the structure of tests as suites your needs
 */
describe('renderPDF', () => {
  
  it('chooses BestPDFEngine if the file requires Annotation, Encryption and Search', () => {
    const fileInfoByte = 111;
    const pathToPDFFile = './example.pdf';
    const pdfWrapper = renderPDF(pathToPDFFile, fileInfoByte);
    expect(pdfWrapper.engineName).toEqual('BestPDFEngine');
    // Expect pdfWrapper.annotate() to work
    // Expect pdfWrapper.encrypt() to work
    // Expect pdfWrapper.search() to work
  });
});