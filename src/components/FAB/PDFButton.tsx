import { AiOutlineDownload } from "react-icons/ai";
import labels from "../../assets/labels.json";
type PrintButtonProps = {
  filename: string;
  pdfUrl: string;
};
export default ({ filename, pdfUrl }: PrintButtonProps) => {
  return (
    <>
      <a href={pdfUrl} download={filename} className="fab primary-button">
        <span>
          <AiOutlineDownload />
        </span>
        {labels.printFeature.PDFBtn}
      </a>
    </>
  );
};
