"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DnD5e;
(function (DnD5e) {
    function abilityScores(index) {
        return fetch(`http://www.dnd5eapi.co/api/ability-scores/${typeof index !== "undefined" ? index : ""}`)
            .then(r => r.json());
    }
    DnD5e.abilityScores = abilityScores;
    function skills(index) {
        return fetch(`http://www.dnd5eapi.co/api/skills/${typeof index !== "undefined" ? index : ""}`)
            .then(r => r.json());
    }
    DnD5e.skills = skills;
    function proficiencies(indexer) {
        return fetch(`http://www.dnd5eapi.co/api/proficiencies/${typeof indexer !== "undefined" ? indexer : ""}`)
            .then(r => r.json());
    }
    DnD5e.proficiencies = proficiencies;
    function languages(index) {
        return fetch(`http://www.dnd5eapi.co/api/languages/${typeof index !== "undefined" ? index : ""}`)
            .then(r => r.json());
    }
    DnD5e.languages = languages;
    function classes(indexer) {
        return fetch(`http://www.dnd5eapi.co/api/classes/${typeof indexer !== "undefined" ? indexer : ""}`)
            .then(r => r.json());
    }
    DnD5e.classes = classes;
    function subClasses(indexer) {
        return fetch(`http://www.dnd5eapi.co/api/subclasses/${typeof indexer !== "undefined" ? indexer : ""}`)
            .then(r => r.json());
    }
    DnD5e.subClasses = subClasses;
    function features(index) {
        return fetch(`http://www.dnd5eapi.co/api/features/${typeof index !== "undefined" ? index : ""}`)
            .then(r => r.json());
    }
    DnD5e.features = features;
    function classLevel(className, level) {
        return fetch(`http://www.dnd5eapi.co/api/classes/${className}/level/${level}`)
            .then(r => r.json());
    }
    DnD5e.classLevel = classLevel;
    function races(index) {
        return fetch(`http://www.dnd5eapi.co/api/races/${typeof index !== "undefined" ? index : ""}`)
            .then(r => r.json());
    }
    DnD5e.races = races;
    function subRaces(indexer) {
        return fetch(`http://www.dnd5eapi.co/api/subraces/${typeof indexer !== "undefined" ? indexer : ""}`)
            .then(r => r.json());
    }
    DnD5e.subRaces = subRaces;
    function traits(index) {
        return fetch(`http://www.dnd5eapi.co/api/traits/${typeof index !== "undefined" ? index : ""}`)
            .then(r => r.json());
    }
    DnD5e.traits = traits;
    function equipment(index) {
        return fetch(`http://www.dnd5eapi.co/api/equipment/${typeof index !== "undefined" ? index : ""}`)
            .then(r => r.json());
    }
    DnD5e.equipment = equipment;
    function conditions(index) {
        return fetch(`http://www.dnd5eapi.co/api/conditions/${typeof index !== "undefined" ? index : ""}`)
            .then(r => r.json());
    }
    DnD5e.conditions = conditions;
    function damageTypes(index) {
        return fetch(`http://www.dnd5eapi.co/api/damage-types/${typeof index !== "undefined" ? index : ""}`)
            .then(r => r.json());
    }
    DnD5e.damageTypes = damageTypes;
    function magicSchools(index) {
        return fetch(`http://www.dnd5eapi.co/api/magic-schools/${typeof index !== "undefined" ? index : ""}`)
            .then(r => r.json());
    }
    DnD5e.magicSchools = magicSchools;
})(DnD5e || (DnD5e = {}));
exports.default = DnD5e;
