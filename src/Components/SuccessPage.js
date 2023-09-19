import React from "react";

function SuccessPage({ predictionResult }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div className="bg-gray-800 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl text-white font-semibold mb-4">
          Prediction Result
        </h2>
        <p className="text-white">
          The prediction result for mental disorders is:{" "}
          <strong>{predictionResult}</strong>
        </p>
      </div>
    </div>
  );
}

export default SuccessPage;
