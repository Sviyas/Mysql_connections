exports.deleteOne = (connection, options) => {
    // console.log(options);
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM ${options.table_name} WHERE ${options.condition}`, options.value, (err, result) => {
        if (err) return reject(err);
        // console.log(result);
        return resolve(result);
      });
    });
  };