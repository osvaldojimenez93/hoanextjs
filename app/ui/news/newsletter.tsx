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
        <>
            <Document
                file="/pdfs/NSAH_Newsletter_02_2025.pdf"
                onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <div className="mt-4 flex items-center justify-between">
                <p className="text-sm">
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <div className="space-x-2">
                    <button
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                        className="rounded bg-blue-500 px-3 py-1 text-white disabled:bg-gray-300"
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        disabled={pageNumber >= (numPages || 0)}
                        onClick={nextPage}
                        className="rounded bg-blue-500 px-3 py-1 text-white disabled:bg-gray-300"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}