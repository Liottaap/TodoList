import React from 'react';


function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;
        if (!localStorageItem) {
          parsedItem = initialValue;
          localStorage.setItem(itemName, JSON.stringify(parsedItem));
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }, 2000);
  }, []); // Se ejecuta solo una vez

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    } catch (error) {
      setError(true);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,

  };
}

export { useLocalStorage };