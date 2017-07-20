
var shelljs = require('shelljs');

shelljs.cp('-R', './src/components/tour/tour.scss', './dist/esm/components/tour/tour.scss');
shelljs.cp('-R', './src/components/tour/tour.scss', './dist/umd/components/tour/tour.scss');
