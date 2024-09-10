import React, { useState, useEffect } from 'react';

const ESP32Status = () => {
  const [statusCode, setStatusCode] = useState(null);

  const fetchStatus = async () => {
    try {
      const response = await fetch('http://web-back-umt4.onrender.com/api/status');
      if (response.ok) {
        const data = await response.json();
        setStatusCode(data.statusCode);
      } else {
        console.error('Failed to fetch status. Status:', response.status);
      }
    } catch (error) {
      console.error('Error fetching status:', error);
    }
  };

  useEffect(() => {
    fetchStatus();
    const interval = setInterval(fetchStatus, 5000); // Fetch every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">ESP32-S3 Status</h2>
      <p className="text-xl">
        Current Status Code: {statusCode !== null ? statusCode : 'Loading...'}
      </p>
    </div>
  );
};

export default ESP32Status;
