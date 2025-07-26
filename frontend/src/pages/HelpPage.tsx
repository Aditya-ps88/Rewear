import React from 'react';

const HelpPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-eco-cream">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-eco-brown">Need Help?</h2>
        <p className="mb-4 text-eco-green-primary text-center">
          If you have any questions, issues, or need support, please reach out to us!
        </p>
        <div className="bg-eco-tan rounded-lg p-4 text-center mb-4">
          <span className="font-semibold text-eco-brown">Support Email:</span><br />
          <a href="mailto:support@rewear.com" className="text-eco-green-primary underline">support@rewear.com</a>
        </div>
        <p className="text-center text-gray-600">
          We aim to respond to all queries within 24 hours. Thank you for being part of the ReWear community!
        </p>
      </div>
    </div>
  );
};

export default HelpPage; 