angular.module('dynamic.form.module',[]);
angular.module('offerApp', ['ui.router','dynamic.form.module']);
angular.module('offerApp').constant('resourcePath', '/');
angular.module('offerApp').constant('viewPath', 'views/');
angular.module('offerApp').constant('geolocation_msgs', {
        'errors.location.unsupportedBrowser':'Browser does not support location services',
        'errors.location.permissionDenied':'You have rejected access to your location',
        'errors.location.positionUnavailable':'Unable to determine your location',
        'errors.location.timeout':'Service timeout has been reached'});
