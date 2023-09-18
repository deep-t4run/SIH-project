import React from "react";

function SuccessPage({ predictionResult }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-400">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Prediction Result</h2>
        <p>
          The prediction result for mental disorders is:{" "}
          <strong>{predictionResult}</strong>
        </p>
      </div>
    </div>
  );
}

export default SuccessPage;
