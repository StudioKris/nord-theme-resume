import "./FloatingActionButton.css";
import PDFButton from "./PDFButton";
import PrintButton from "./PrintButton";
type PrintButtonProps = {
  filename: string;
  pdfUrl: string;
};
export default ({ filename, pdfUrl }: PrintButtonProps) => {

  if(pdfUrl) {
    return (
      <PDFButton pdfUrl={pdfUrl} filename={filename}/>
    );
  } else {

  return (
    <PrintButton />
  );
  }

};
