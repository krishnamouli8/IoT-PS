import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ESP32Status = () => {
  const [statusCode, setStatusCode] = useState(null);

  const fetchStatus = async () => {
    try {
      const response = await axios.get('http://172.168.0.123:5000/api');
      setStatusCode(response.data.statusCode);
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