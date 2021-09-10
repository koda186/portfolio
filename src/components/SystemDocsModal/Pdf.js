import React, { useState } from 'react';

import { Document, Page, pdfjs } from 'react-pdf';
import DemoDay from './images/DemoDayPrintOuts.pdf'
import "./index.css";

//PDFjs worker from an external cdn
//Will implement on server
{/*const url =
"https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf"*/}

export default function Test() {

	pdfjs.GlobalWorkerOptions.workerSrc =
	`//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

  /*To Prevent right click on screen*/
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

	function onDocumentLoadSuccess({ numPages }) {
	setNumPages(numPages);
	setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

return (
	<>
  <div>

	  <div className="pagec">
	    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
	  </div>

	  <div className="buttonc">
	    <button
	      type="button"
	      disabled={pageNumber <= 1}
	      onClick={previousPage}
	      className="Pre"

	    >
	    Previous
	    </button>

	    <button
	      type="button"
	      disabled={pageNumber >= numPages}
	      onClick={nextPage}

	    >
	    Next
	    </button>

			<div className="pdf-main">
				<Document
					file={DemoDay}
					onLoadSuccess={onDocumentLoadSuccess}
					>
					<Page pageNumber={pageNumber} />
				</Document>

	    </div>
    </div>
  </div>
	</>
);
}
