exports.getAll = (connection, options) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT ${options.projection} FROM ${options.table_names}`, (err, results) => {
        if (err) return reject(err);
  
        return resolve(results);
      });
    });
  };