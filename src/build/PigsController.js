var PigsController = /** @class */ (function () {
    function PigsController() {
        this.pigs = [];
    }
    PigsController.prototype.add = function (pig) {
        this.pigs.push(pig);
        localStorage.userArray = JSON.stringify(this.pigs);
    };
    PigsController.prototype.getAll = function () {
        return JSON.parse(localStorage.userArray);
    };
    PigsController.prototype.delete = function (name) {
        this.pigs = this.pigs.filter(function (pig) {
            return pig.name !== name;
        });
        localStorage.userArray = JSON.stringify(this.pigs);
    };
    return PigsController;
}());
export { PigsController };
