exports.foreignKeyMode = (connection, mode) => {
    return new Promise((resolve, reject) => {
      connection.query(`SET FOREIGN_KEY_CHECKS = ?`, mode, err => {
        if (err) return reject(err);
  
        logger.info(mode === 0 ? 'Foreign key Disabled' : 'Foreign key Enabled');
        return resolve(true);
      });
    });
  };
  