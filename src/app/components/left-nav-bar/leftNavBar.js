import angular from 'angular';

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
        controllerAs: 'leftNavBar',
        scope: {
            people: '='
        },
        bindToController: true
    }
};

class leftNavBarCtrl {
    constructor($scope) {
        this.displayContent = false;
        this.person = {};
        this.tableRows;
    }

    $onInit() {
        this.calculateRating(this.people);
    }

    clickHandler(person) {
        this.displayContent = true;
        this.person = person;
    }

    calculateRating(people) {
        const maxRating = 5;
        for(let person in people) {
            const filledHearts = generateArrayWithRandomValuesBySize(people[person].rating);
            const emptyHearts = generateArrayWithRandomValuesBySize(maxRating - people[person].rating);
            people[person].filledHearts = filledHearts;
            people[person].emptyHearts = emptyHearts;
        }
    }
}

const MODULE_NAME = 'leftNavBar';

angular.module(MODULE_NAME, [])
    .directive('leftNavBar', leftNavBar)
    .controller('leftNavBarCtrl', leftNavBarCtrl);

export default MODULE_NAME;