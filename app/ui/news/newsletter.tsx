"use client";

import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import '../../lib/pdf-config';

export default function Newsletter() {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset: number) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <div className="flex flex-col w-full">
            {/* Navigation controls at the top */}
            <div className="mb-4 flex items-center justify-between">
                <p className="text-sm md:text-base">
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <div className="space-x-2">
                    <button
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                        className="rounded bg-blue-500 px-2 py-1 md:px-3 md:py-1.5 text-white disabled:bg-gray-300 text-xs md:text-sm transition hover:bg-blue-600"
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        disabled={pageNumber >= (numPages || 0)}
                        onClick={nextPage}
                        className="rounded bg-blue-500 px-2 py-1 md:px-3 md:py-1.5 text-white disabled:bg-gray-300 text-xs md:text-sm transition hover:bg-blue-600"
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* PDF Document with responsive sizing */}
            <div className="flex justify-center">
                <Document
                    file="/pdfs/NSAH_Newsletter_02_2025.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                    className="w-full">
                    <Page 
                        pageNumber={pageNumber} 
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="shadow-lg"
                        scale={1}
                        width={window.innerWidth > 1024 ? 800 : undefined}
                    />
                </Document>
            </div>
        </div>
    );
}