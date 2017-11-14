module.exports = function (expr, logType) {
  if (process.env.NODE_ENV !== 'test') {
    switch (logType) {
      case 'info':
        console.info(expr);
        break;
      default:
        console.log(expr);
    }

  }
};