const path = require('path');

module.exports = function override(config, env) {
    // Modify the output path for the static files
     config.output = {
       ...config.output
     };
  return config;
};
  
