"use client";

import { Document, Page } from 'react-pdf';
import { useState, useEffect } from 'react';
import '../../lib/pdf-config';

export default function Newsletter() {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [scale, setScale] = useState<number>(1);

    // Handle window resize for responsive design
    useEffect(() => {
        // Set initial width
        setWindowWidth(window.innerWidth);
        updateScale(window.innerWidth);
        
        // Add event listener for window resize
        const handleResize = () => {
            const width = window.innerWidth;
            setWindowWidth(width);
            updateScale(width);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Clean up
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Update scale based on window width
    const updateScale = (width: number) => {
        if (width <= 480) setScale(0.6);
        else if (width <= 768) setScale(0.8);
        else setScale(1);
    };

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
            <div className="mb-2 md:mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <p className="text-sm md:text-base text-center sm:text-left">
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <div className="flex justify-center sm:justify-end space-x-2">
                    <button
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                        className="rounded min-w-[80px] bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:hover:bg-gray-300 text-xs md:text-sm transition"
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        disabled={pageNumber >= (numPages || 0)}
                        onClick={nextPage}
                        className="rounded min-w-[80px] bg-blue-500 px-2 py-1 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:hover:bg-gray-300 text-xs md:text-sm transition"
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
                    className="w-full max-w-full"
                    loading={<p className="text-center my-4">Loading document...</p>}
                    error={<p className="text-center text-red-500 my-4">Failed to load PDF.</p>}
                >
                    <Page 
                        pageNumber={pageNumber} 
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="shadow-lg mx-auto"
                        scale={scale}
                        width={Math.min(windowWidth - 20, 800)}
                    />
                </Document>
            </div>
        </div>
    );
}