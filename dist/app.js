"use strict";
// const names: Array<string> = ['Max', 'Manuel']; // string[]
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// })
// promise.then(data => {
//   data.split(' ');
// })
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: 'Max' }, { age: 30 }));
var mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
var mergedObj2 = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.age);
function countAndDescribe(element) {
    var descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got one element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe(['Sports', 'Cooking']));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
console.log(extractAndConvert({ name: 'Max' }, 'name'));
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());
var numberStorage = new DataStorage();
// function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
//   return {title: title, description: description, completeUntil: date};
// }
function createCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
;
var names = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();
//# sourceMappingURL=app.js.map