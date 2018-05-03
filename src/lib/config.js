const config = {
  development: {
      service: {
          url: (process.env.REACT_APP_HOST || process.env.REACT_APP_HOST === '') ? process.env.REACT_APP_HOST : 'http://localhost:3000'
      }
  },
};
export default Object.assign(config, config.development);
