import angular from 'angular';
import leftNavBar from './components/left-nav-bar/leftNavBar';
import personContent from './components/person-content/personContent';
import people from './model/people.json';
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
        this.people = people.People;
    }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [leftNavBar, personContent])
    .directive('app', app)
    .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;