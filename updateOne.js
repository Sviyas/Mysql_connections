exports.updateOne = (connection, options) => {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE ${options.table_name} SET ${options.updating_fields} WHERE ${options.key} = ?`,
        [...options.updating_values, options.value],
        (err, results) => {
          if (err) return reject(err);
  
          // logger.info(`Updated successfully - affected rows - ${results.affectedRows}`);
          return resolve(results);
        }
      );
    });
  };
  