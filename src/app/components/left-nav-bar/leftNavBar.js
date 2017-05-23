import angular from 'angular';

let leftNavBar = () => {
    return {
        template: require('./leftNavBar.html'),
        controller: 'leftNavBarCtrl',
        controllerAs: 'leftNavBar'
    }
};

class leftNavBarCtrl {
    constructor() {
        this.message = 'https://github.com/preboot/angular-webpack';
    }
}

const MODULE_NAME = 'leftNavBar';

angular.module(MODULE_NAME, [])
    .directive('leftNavBar', leftNavBar)
    .controller('leftNavBarCtrl', leftNavBarCtrl);

export default MODULE_NAME;