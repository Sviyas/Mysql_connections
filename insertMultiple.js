exports.insertIntoMultiData = (connection, options) => {
    return new Promise((resolve, reject) => {
      const baseQ = `INSERT INTO SET ? ; `;
  
      let genQ = baseQ.repeat(options.data.length);
  
      // genQ = replaceAll(genQ, 'INSERT INTO ?', `INSERT INTO ${options.table_name}`);
      genQ = genQ.replace(/INSERT INTO/g, `INSERT INTO ${options.table_name}`);
  
      // Make an multiple query at a time
      connection.query(`${genQ}`, options.data, (err, results) => {
        if (err) return reject(err);
  
        logger.info(`Multiple data inserted!`);
  
        /**
         *  Convert standard format to array of object for the issue
         * object or array of object by returning insertIntoMultiData fn
         * */
        return resolve([].concat(results));
      });
    });
  };
  