import { NamedAPIResourceList, AbilityScoreName, AbilityScore, SkillName, Skill, ProficiencyName, Proficiency, ClassName, LanguageName, Language, CharClass, SubClassName, CharSubClass, FeatureName, Feature, Level, ClassLevel, RaceName, Race, SubRaceName, SubRace, TraitName, Trait, MagicSchool, MagicSchoolName, DamageType, DamageTypeName, Condition, ConditionName, Equipment, EquipmentName } from "./typings";
export interface ResponseLike {
    json(): Promise<any>;
}
export declare type FetchLike = (input: string) => Promise<ResponseLike>;
export declare class Endpoints {
    private fetchFunc;
    private urlBase;
    constructor(fetchFunc: FetchLike, urlBase: string);
    abilityScores(): Promise<NamedAPIResourceList<AbilityScoreName>>;
    abilityScores(index: number): Promise<AbilityScore>;
    skills(): Promise<NamedAPIResourceList<SkillName>>;
    skills(index: number): Promise<Skill>;
    proficiencies(): Promise<NamedAPIResourceList<ProficiencyName>>;
    proficiencies(index: number): Promise<Proficiency>;
    proficiencies(className: ClassName): Promise<Proficiency>;
    languages(): Promise<NamedAPIResourceList<LanguageName>>;
    languages(index: number): Promise<Language>;
    classes(): Promise<NamedAPIResourceList<ClassName>>;
    classes(index: number): Promise<CharClass>;
    classes(className: ClassName): Promise<CharClass>;
    subClasses(): Promise<NamedAPIResourceList<SubClassName>>;
    subClasses(index: number): Promise<CharSubClass>;
    subClasses(className: ClassName): Promise<CharSubClass>;
    features(): Promise<NamedAPIResourceList<FeatureName>>;
    features(index: number): Promise<Feature>;
    classLevel(className: ClassName, level: Level): Promise<ClassLevel>;
    races(): Promise<NamedAPIResourceList<RaceName>>;
    races(index: number): Promise<Race>;
    subRaces(): Promise<NamedAPIResourceList<SubRaceName>>;
    subRaces(index: number): Promise<SubRace>;
    subRaces(race: RaceName): Promise<SubRace>;
    traits(): Promise<NamedAPIResourceList<TraitName>>;
    traits(index: number): Promise<Trait>;
    equipment(): Promise<NamedAPIResourceList<EquipmentName>>;
    equipment(index: number): Promise<Equipment>;
    conditions(): Promise<NamedAPIResourceList<ConditionName>>;
    conditions(index: number): Promise<Condition>;
    damageTypes(): Promise<NamedAPIResourceList<DamageTypeName>>;
    damageTypes(index: number): Promise<DamageType>;
    magicSchools(): Promise<NamedAPIResourceList<MagicSchoolName>>;
    magicSchools(index: number): Promise<MagicSchool>;
}
