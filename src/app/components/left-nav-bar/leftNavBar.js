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

        this.filledHearts = this.generateArrayWithRandomValuesBySize(rating);
        this.emptyHearts = this.generateArrayWithRandomValuesBySize(maxRating - rating);
    }

    generateArrayWithRandomValuesBySize(items) {
        let resultArray = [];

        for(let i = 0; i < items; i++) {
            resultArray.push(Math.random());
        }

        return resultArray;
    }
}

const MODULE_NAME = 'leftNavBar';

angular.module(MODULE_NAME, [])
    .directive('leftNavBar', leftNavBar)
    .controller('leftNavBarCtrl', leftNavBarCtrl);

export default MODULE_NAME;