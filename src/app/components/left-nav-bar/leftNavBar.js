import angular from 'angular';
import people from '../../model/people.json';

const generateArrayWithRandomValuesBySize = items => {
    let resultArray = [];

    for(let i = 0; i < items; i++) {
        resultArray.push(Math.random());
    }

    return resultArray;
};

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
        this.displayContent = false;
        this.person = {};
        this.tableRows;
    }

    clickHandler(person) {
        this.displayContent = true;
        this.person = person;
        this.calculateRating(person.rating);
    }

    calculateRating(rating) {
        const maxRating = 5;

        this.filledHearts = generateArrayWithRandomValuesBySize(rating);
        this.emptyHearts = generateArrayWithRandomValuesBySize(maxRating - rating);
    }
}

const MODULE_NAME = 'leftNavBar';

angular.module(MODULE_NAME, [])
    .directive('leftNavBar', leftNavBar)
    .controller('leftNavBarCtrl', leftNavBarCtrl);

export default MODULE_NAME;