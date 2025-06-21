'use client';

import { pdfjs } from 'react-pdf';

// Use a simple absolute path to the worker file in the public directory
pdfjs.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.min.mjs';