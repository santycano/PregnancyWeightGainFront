const express = require('express');
const path = require('path');
const ngApp = express();
ngApp.use(express.static('./dist/PregnancyWeightGain'));
ngApp.get('/*', function (request, response) {
  response.sendFile(path.join(__dirname, '/src/app/app.component.html'));
});
ngApp.listen(process.env.PORT || 4200);
