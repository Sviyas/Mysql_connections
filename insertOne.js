exports.insertOne = (connection, options) => {
    // console.log(options);
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO ${options.table_name} SET ?`, options.data, (err, results) => {
        if (err) return reject(err);
        return resolve(results);
      });
    });
  };