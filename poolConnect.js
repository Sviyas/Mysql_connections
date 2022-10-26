//  get a pool connection
exports.poolConnect = pool => {
    // console.log('Database running....');
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) return reject(err);
        return resolve(connection);
      });
    });
  };