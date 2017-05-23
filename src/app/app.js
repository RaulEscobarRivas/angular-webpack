import angular from 'angular';
import leftNavBar from './components/left-nav-bar/leftNavBar';
import '../style/app.css';

let app = () => {
    return {
        template: require('./app.html'),
        controller: 'AppCtrl',
        controllerAs: 'app'
    }
};

class AppCtrl {
    constructor() {
        this.url = 'https://github.com/preboot/angular-webpack';
    }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [leftNavBar])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;