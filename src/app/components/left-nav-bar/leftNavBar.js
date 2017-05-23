import angular from 'angular';
import people from '../../model/people.json';

let leftNavBar = () => {
    return {
        template: require('./leftNavBar.html'),
        controller: 'leftNavBarCtrl',
        controllerAs: 'leftNavBar'
    }
};

const getRowsQuantity = (a, b) => {
    if (a.length > b.length) {
        return a.length;
    }
};

class leftNavBarCtrl {
    constructor() {
        this.people = people.People;
        this.displayContent = false;
        this.person = {};
        this.tableRows;
    }

    clickHandler(person) {
        this.displayContent = true;
        this.person = person;
    }
}

const MODULE_NAME = 'leftNavBar';

angular.module(MODULE_NAME, [])
    .directive('leftNavBar', leftNavBar)
    .controller('leftNavBarCtrl', leftNavBarCtrl);

export default MODULE_NAME;