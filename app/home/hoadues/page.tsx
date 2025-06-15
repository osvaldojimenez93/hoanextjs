import React from 'react';
import Image from 'next/image';
import QRCode from '../../../public/QR Code.png';

export default function Page() {
    return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">North San Antonio Hills HOA Dues</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4">Pay Your HOA Dues</h2>
        <p className="mb-4">
          Your $50.00 a year helps to ensure your property values are protected.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Breakfast in the Park</li>
          <li>Halloween Party</li>
          <li>Newsletter</li>
          <li>Roadrunner Park Maintenance</li>
          <li>Entrance Sign Maintenance</li>
          <li>Communicates with City, County, and State for:</li>
          <ul className="list-disc pl-10">
            <li>Land Use and Zoning</li>
            <li>Streets and Utilities</li>
            <li>Nearby Area Developments</li>
            <li>Subdivision Access</li>
            <li>Emergency Services</li>
          </ul>
        </ul>
        <p className="mb-4">
          If you know that you have not paid your HOA dues, you can do so by the following means:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=LERPRZ6EAMKG6&source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Credit Card Payments via Paypal
            </a>{' '}
            (Paypal account is not required)
          </li>
          <li>Use the following QR Code from your phone:</li>
        </ul>
        <div className="mb-6">
          <Image src={QRCode} alt="QR Code for HOA Dues Payment" width={200} height={200} />
        </div>
        <ul className="list-disc pl-6 mb-4">
          <li>Cash payments can be made to the treasurer at the next HOA meeting.</li>
          <li>
            Check payments can be mailed to the following address:
            <address className="mt-2">
              <strong>PLEASE MAIL YOUR CHECKS TO:</strong>
              <br />
              NSAH-HOA
              <br />
              4015 Summer Breeze
              <br />
              SAN ANTONIO, TEXAS 78253
            </address>
          </li>
        </ul>
        <p className="mb-4">
          PLEASE ALWAYS ENSURE YOU KEEP YOUR RECEIPT FOR YOUR RECORDS.
        </p>
      </section>

      <section>
        <p className="text-gray-700">
          We are currently working on setting up a system that will allow you to check your HOA payment effective date to avoid any double payments.
        </p>
      </section>
    </div>
  );
};