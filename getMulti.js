exports.getMulti = (connection, options) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `select ${options.projection}  from ${options.table_names} where ${options.conditions} `,
        options.value,
        (err, results) => {
          if (err) return reject(err);
          return resolve(results);
        }
      );
    });
  };