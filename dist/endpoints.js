"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endpoints = /** @class */ (function () {
    function Endpoints(fetchFunc, urlBase) {
        this.fetchFunc = fetchFunc;
        this.urlBase = urlBase;
    }
    Endpoints.prototype.abilityScores = function (index) {
        return this.fetchFunc(this.urlBase + "/ability-scores/" + (typeof index !== "undefined" ? index : ""))
            .then(function (r) { return r.json(); });
    };
    Endpoints.prototype.skills = function (index) {
        return this.fetchFunc(this.urlBase + "/skills/" + (typeof index !== "undefined" ? index : ""))
            .then(function (r) { return r.json(); });
    };
    Endpoints.prototype.proficiencies = function (indexer) {
        return this.fetchFunc(this.urlBase + "/proficiencies/" + (typeof indexer !== "undefined" ? indexer : ""))
            .then(function (r) { return r.json(); });
    };
    Endpoints.prototype.languages = function (index) {
        return this.fetchFunc(this.urlBase + "/languages/" + (typeof index !== "undefined" ? index : ""))
            .then(function (r) { return r.json(); });
    };
    Endpoints.prototype.classes = function (indexer) {
        return this.fetchFunc(this.urlBase + "/classes/" + (typeof indexer !== "undefined" ? indexer : ""))
            .then(function (r) { return r.json(); });
    };
    Endpoints.prototype.subClasses = function (indexer) {
        return this.fetchFunc(this.urlBase + "/subclasses/" + (typeof indexer !== "undefined" ? indexer : ""))
            .then(function (r) { return r.json(); });
    };
    Endpoints.prototype.features = function (index) {
        return this.fetchFunc(this.urlBase + "/features/" + (typeof index !== "undefined" ? index : ""))
            .then(function (r) { return r.json(); });
    };
    Endpoints.prototype.classLevel = function (className, level) {
        return this.fetchFunc(this.urlBase + "/classes/" + className + "/level/" + level)
            .then(function (r) { return r.json(); });
    };
    Endpoints.prototype.races = function (index) {
        return this.fetchFunc(this.urlBase + "/races/" + (typeof index !== "undefined" ? index : ""))
            .then(function (r) { return r.json(); });
    };
    Endpoints.prototype.subRaces = function (indexer) {
        return this.fetchFunc(this.urlBase + "/subraces/" + (typeof indexer !== "undefined" ? indexer : ""))
            .then(function (r) { return r.json(); });
    };
    Endpoints.prototype.traits = function (index) {
        return this.fetchFunc(this.urlBase + "/traits/" + (typeof index !== "undefined" ? index : ""))
            .then(function (r) { return r.json(); });
    };
    Endpoints.prototype.equipment = function (index) {
        return this.fetchFunc(this.urlBase + "/equipment/" + (typeof index !== "undefined" ? index : ""))
            .then(function (r) { return r.json(); });
    };
    Endpoints.prototype.conditions = function (index) {
        return this.fetchFunc(this.urlBase + "/conditions/" + (typeof index !== "undefined" ? index : ""))
            .then(function (r) { return r.json(); });
    };
    Endpoints.prototype.damageTypes = function (index) {
        return this.fetchFunc(this.urlBase + "/damage-types/" + (typeof index !== "undefined" ? index : ""))
            .then(function (r) { return r.json(); });
    };
    Endpoints.prototype.magicSchools = function (index) {
        return this.fetchFunc(this.urlBase + "/magic-schools/" + (typeof index !== "undefined" ? index : ""))
            .then(function (r) { return r.json(); });
    };
    return Endpoints;
}());
exports.default = Endpoints;
