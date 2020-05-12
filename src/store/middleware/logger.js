const logger = (param) => (store) => (next) => (action) => {
  console.log("Logging", param);
  next(action);
};

export default logger;
//curring
//n=>1
