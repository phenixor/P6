import { useState, useEffect } from 'react';

function BackendInfo() {
  const [backendData, setBackendData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../Backend.json');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        setBackendData(data);
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchData();
  }, []);
  return backendData;
}

export default BackendInfo;