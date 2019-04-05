import { NamedAPIResourceList, AbilityScoreName, AbilityScore, SkillName, Skill, ProficiencyName, Proficiency, ClassName, LanguageName, Language, CharClass, SubClassName, CharSubClass, FeatureName, Feature, Level, ClassLevel, RaceName, Race, SubRaceName, SubRace, TraitName, Trait, MagicSchool, MagicSchoolName, DamageType, DamageTypeName, Condition, ConditionName, Equipment, EquipmentName } from "./typings";
export interface ResponseLike {
    json(): Promise<any>;
}
export declare type FetchLike = (input: string) => Promise<ResponseLike>;
export declare class Endpoints {
    private fetchFunc;
    private urlBase;
    constructor(fetchFunc: FetchLike, urlBase: string);
    /**
     * Gets all ability score types
     * @returns A promise that resolves to a `NamedAPIResourceList` containing all ability score types
     */
    abilityScores(): Promise<NamedAPIResourceList<AbilityScoreName>>;
    /**
     * Gets a specified ability score by index
     * @param index The index of the ability score (as it appears in the response from `abilityScores()`)
     * @returns An `AbilityScore` object representing the requested ability score
     */
    abilityScores(index: number): Promise<AbilityScore>;
    /**
     * Gets all skills
     * @returns A promise that resolves to a `NamedAPIResourceList` containing all skills
     */
    skills(): Promise<NamedAPIResourceList<SkillName>>;
    /**
     * Gets a specified skill by index
     * @param index The index of the skill (as it appears in the response from `skills()`)
     * @returns A `Skill` object representing the requested skill
     */
    skills(index: number): Promise<Skill>;
    /**
     * Gets all proficiencies
     * @returns A promise that resolves to a `NamedAPIResourceList` containing all proficiencies
     */
    proficiencies(): Promise<NamedAPIResourceList<ProficiencyName>>;
    /**
     * Gets a specified proficiency by index
     * @param index The index of the proficiency (as it appears in the response from `proficiencies()`)
     * @returns A `Proficiency` object representing the requested proficiency
     */
    proficiencies(index: number): Promise<Proficiency>;
    /**
     * Gets all proficiencies for a given class name
     * @param className The class name to get proficiencies for
     * @returns A promise that resolves to a `NamedAPIResourceList` containing all proficiencies
     */
    proficiencies(className: ClassName): Promise<NamedAPIResourceList<ProficiencyName>>;
    /**
     * Gets all languages
     * @returns A promise that resolves to a `NamedAPIResourceList` containing all languages
     */
    languages(): Promise<NamedAPIResourceList<LanguageName>>;
    /**
     * Gets a specified language by index
     * @param index The index of the language (as it appears in the response from `languages()`)
     * @returns A `Language` object representing the requested language
     */
    languages(index: number): Promise<Language>;
    /**
     * Gets all character class types
     * @returns A promise that resolves to a `NamedAPIResourceList` containing all character class types
     */
    classes(): Promise<NamedAPIResourceList<ClassName>>;
    /**
     * Gets a specified character class type by index
     * @param index The index of the character class type (as it appears in the response from `classes()`)
     * @returns A `CharClass` object representing the requested character class type
     */
    classes(index: number): Promise<CharClass>;
    /**
     * Gets a specified character class type
     * @param className The name of the class
     * @returns A `CharClass` object representing the requested character class type
     */
    classes(className: ClassName): Promise<CharClass>;
    /**
     * Gets all character sub-class types
     * @returns A promise that resolves to a `NamedAPIResourceList` containing all character sub-class types
     */
    subClasses(): Promise<NamedAPIResourceList<SubClassName>>;
    /**
     * Gets a specified character sub-class type by index
     * @param index The index of the character sub-class type (as it appears in the response from `subClasses()`)
     * @returns A `CharSubClass` object representing the requested character sub-class type
     */
    subClasses(index: number): Promise<CharSubClass>;
    /**
     * Gets a specified character sub-class type
     * @param className The name of the sub-class
     * @returns A `CharSubClass` object representing the requested character sub-class type
     */
    subClasses(className: ClassName): Promise<CharSubClass>;
    /**
     * Gets all feature types
     * @returns A promise that resolves to a `NamedAPIResourceList` containing all feature types
     */
    features(): Promise<NamedAPIResourceList<FeatureName>>;
    /**
     * Gets a specified feature type by index
     * @param index The index of the feature type (as it appears in the response from `features()`)
     * @returns A `Feature` object representing the requested feature type
     */
    features(index: number): Promise<Feature>;
    /**
     * Gets information about a class at a certain level
     * @param className The name of the class
     * @param level The level (1-20)
     * @returns A promise which resolves to a `ClassLevel` object detailing that level
     */
    classLevel(className: ClassName, level: Level): Promise<ClassLevel>;
    /**
     * Gets all character races
     * @returns A promise that resolves to a `NamedAPIResourceList` containing all character races
     */
    races(): Promise<NamedAPIResourceList<RaceName>>;
    /**
     * Gets a specified character race by index
     * @param index The index of the character race (as it appears in the response from `races()`)
     * @returns A `Race` object representing the requested character race
     */
    races(index: number): Promise<Race>;
    /**
     * Gets all character sub-races
     * @returns A promise that resolves to a `NamedAPIResourceList` containing all character sub-races
     */
    subRaces(): Promise<NamedAPIResourceList<SubRaceName>>;
    /**
     * Gets a specified character sub-race by index
     * @param index The index of the character sub-race (as it appears in the response from `subRaces()`)
     * @returns A `SubRace` object representing the requested character sub-race
     */
    subRaces(index: number): Promise<SubRace>;
    /**
     * Gets all traits
     * @returns A promise that resolves to a `NamedAPIResourceList` containing all traits
     */
    traits(): Promise<NamedAPIResourceList<TraitName>>;
    /**
     * Gets a specified trait by index
     * @param index The index of the trait (as it appears in the response from `traits()`)
     * @returns A `Trait` object representing the requested trait
     */
    traits(index: number): Promise<Trait>;
    /**
     * Gets all equipment
     * @returns A promise that resolves to a `NamedAPIResourceList` containing all equipment
     */
    equipment(): Promise<NamedAPIResourceList<EquipmentName>>;
    /**
     * Gets a specified equipment by index
     * @param index The index of the equipment (as it appears in the response from `equipment()`)
     * @returns An `Equipment` object representing the requested equipment
     */
    equipment(index: number): Promise<Equipment>;
    /**
     * Gets all character conditions
     * @returns A promise that resolves to a `NamedAPIResourceList` containing all character conditions
     */
    conditions(): Promise<NamedAPIResourceList<ConditionName>>;
    /**
     * Gets a specified character condition by index
     * @param index The index of the character condition (as it appears in the response from `conditions()`)
     * @returns A `Condition` object representing the requested character condition
     */
    conditions(index: number): Promise<Condition>;
    /**
     * Gets all damage types
     * @returns A promise that resolves to a `NamedAPIResourceList` containing all damage types
     */
    damageTypes(): Promise<NamedAPIResourceList<DamageTypeName>>;
    /**
     * Gets a specified damage type by index
     * @param index The index of the damage type (as it appears in the response from `damageTypes()`)
     * @returns A `DamageType` object representing the requested damage type
     */
    damageTypes(index: number): Promise<DamageType>;
    /**
     * Gets all magic schools
     * @returns A promise that resolves to a `NamedAPIResourceList` containing all magic schools
     */
    magicSchools(): Promise<NamedAPIResourceList<MagicSchoolName>>;
    /**
     * Gets a specified magic school by index
     * @param index The index of the magic school (as it appears in the response from `magicSchools()`)
     * @returns A `MagicSchool` object representing the requested magic school
     */
    magicSchools(index: number): Promise<MagicSchool>;
}
