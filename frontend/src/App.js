import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ESP32Status = () => {
  const [statusCode, setStatusCode] = useState(null);

  const fetchStatus = async () => {
    try {
      const response = await axios.get('http://web-back-umt4.onrender.com/api/status');
      setStatusCode(response.data.statusCode);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Server Error:', error.response.data);
        console.error('Status Code:', error.response.status);
      } else if (error.request) {
        // Request was made but no response received
        console.error('No Response from Server:', error.request);
      } else {
        // Other errors (e.g., network error, config error)
        console.error('Error Setting Up Request:', error.message);
      }
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
