exports.insertIntoMultiTables = (connection, options) => {
    return new Promise((resolve, reject) => {
      const baseQ = `INSERT INTO ? SET ? ; `;
  
      let genQ = baseQ.repeat(options.length);
  
      const data = [];
  
      // make our query with data array
      options.forEach(v => {
        genQ = genQ.replace('INSERT INTO ?', `INSERT INTO ${v.table_name}`);
        data.push(v.data);
      });
  
      // Make an multiple query at a time
      connection.query(`${genQ}`, data, (err, results) => {
        if (err) return reject(err);
  
        logger.info(`Multiple data inserted!`);
        return resolve(results);
      });
    });
  };