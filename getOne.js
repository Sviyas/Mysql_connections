// get a all data from given table
exports.getOne = (connection, options) => {
    console.log(options);
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT ${options.projection} FROM ${options.table_name} WHERE ${options.condition}`,
        options.value,
        (err, result) => {
          if (err) return reject(err);
          return resolve(result);
        }
      );
    });
  };