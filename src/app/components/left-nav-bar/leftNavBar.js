import angular from 'angular';
import people from '../../model/people.json';

let leftNavBar = () => {
    return {
        template: require('./leftNavBar.html'),
        controller: 'leftNavBarCtrl',
        controllerAs: 'leftNavBar'
    }
};

class leftNavBarCtrl {
    constructor() {
        this.people = people.People;
        this.searchText = '';
        console.log(people);
    }
}

const MODULE_NAME = 'leftNavBar';

angular.module(MODULE_NAME, [])
    .directive('leftNavBar', leftNavBar)
    .controller('leftNavBarCtrl', leftNavBarCtrl);

export default MODULE_NAME;