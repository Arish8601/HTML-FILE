const connectToDatabase = () => {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation like a database connection
      setTimeout(() => {
        resolve("Connected successfully....");
      }, 1000);
    });
  };
  
  connectToDatabase()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
  
