import {
	NamedAPIResourceList,
	AbilityScoreName,
	AbilityScore,
	SkillName,
	Skill,
	ProficiencyName,
	Proficiency,
	ClassName,
	LanguageName,
	Language,
	CharClass,
	SubClassName,
	CharSubClass,
	FeatureName,
	Feature,
	Level,
	ClassLevel,
	RaceName,
	Race,
	SubRaceName,
	SubRace,
	TraitName,
	Trait,
	MagicSchool,
	MagicSchoolName,
	DamageType,
	DamageTypeName,
	Condition,
	ConditionName,
	Equipment,
	EquipmentName
} from "./typings";

export interface ResponseLike {
	json(): Promise<any>;
}
export type FetchLike = (input: string) => Promise<ResponseLike>;

export class Endpoints {
	constructor(private fetchFunc: FetchLike, private urlBase: string) {}

	/**
	 * Gets all ability score types
	 * @returns A promise that resolves to a `NamedAPIResourceList` containing all ability score types
	 */
	public abilityScores(): Promise<NamedAPIResourceList<AbilityScoreName>>;
	/**
	 * Gets a specified ability score by index
	 * @param index The index of the ability score (as it appears in the response from `abilityScores()`)
	 * @returns An `AbilityScore` object representing the requested ability score
	 */
	public abilityScores(index: number): Promise<AbilityScore>;
	public abilityScores(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/ability-scores/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}


	/**
	 * Gets all skills
	 * @returns A promise that resolves to a `NamedAPIResourceList` containing all skills
	 */
	public skills(): Promise<NamedAPIResourceList<SkillName>>;
	/**
	 * Gets a specified skill by index
	 * @param index The index of the skill (as it appears in the response from `skills()`)
	 * @returns A `Skill` object representing the requested skill
	 */
	public skills(index: number): Promise<Skill>;
	public skills(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/skills/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}


	/**
	 * Gets all proficiencies
	 * @returns A promise that resolves to a `NamedAPIResourceList` containing all proficiencies
	 */
	public proficiencies(): Promise<NamedAPIResourceList<ProficiencyName>>;
	/**
	 * Gets a specified proficiency by index
	 * @param index The index of the proficiency (as it appears in the response from `proficiencies()`)
	 * @returns A `Proficiency` object representing the requested proficiency
	 */
	public proficiencies(index: number): Promise<Proficiency>;
	public proficiencies(className: ClassName): Promise<Proficiency>;
	public proficiencies(indexer?: number | ClassName): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/proficiencies/${typeof indexer !== "undefined" ? indexer : ""}`)
			.then(r => r.json());
	}


	/**
	 * Gets all languages
	 * @returns A promise that resolves to a `NamedAPIResourceList` containing all languages
	 */
	public languages(): Promise<NamedAPIResourceList<LanguageName>>;
	/**
	 * Gets a specified language by index
	 * @param index The index of the language (as it appears in the response from `languages()`)
	 * @returns A `Language` object representing the requested language
	 */
	public languages(index: number): Promise<Language>;
	public languages(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/languages/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}


	/**
	 * Gets all character class types
	 * @returns A promise that resolves to a `NamedAPIResourceList` containing all character class types
	 */
	public classes(): Promise<NamedAPIResourceList<ClassName>>;
	/**
	 * Gets a specified character class type by index
	 * @param index The index of the character class type (as it appears in the response from `classes()`)
	 * @returns A `CharClass` object representing the requested character class type
	 */
	public classes(index: number): Promise<CharClass>;
	public classes(className: ClassName): Promise<CharClass>;
	public classes(indexer?: number | ClassName): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/classes/${typeof indexer !== "undefined" ? indexer : ""}`)
			.then(r => r.json());
	}



	/**
	 * Gets all character sub-class types
	 * @returns A promise that resolves to a `NamedAPIResourceList` containing all character sub-class types
	 */
	public subClasses(): Promise<NamedAPIResourceList<SubClassName>>;
	/**
	 * Gets a specified character sub-class type by index
	 * @param index The index of the character sub-class type (as it appears in the response from `subClasses()`)
	 * @returns A `CharSubClass` object representing the requested character sub-class type
	 */
	public subClasses(index: number): Promise<CharSubClass>;
	public subClasses(className: ClassName): Promise<CharSubClass>;
	public subClasses(indexer?: number | ClassName): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/subclasses/${typeof indexer !== "undefined" ? indexer : ""}`)
			.then(r => r.json());
	}


	/**
	 * Gets all feature types
	 * @returns A promise that resolves to a `NamedAPIResourceList` containing all feature types
	 */
	public features(): Promise<NamedAPIResourceList<FeatureName>>;
	/**
	 * Gets a specified feature type by index
	 * @param index The index of the feature type (as it appears in the response from `features()`)
	 * @returns A `Feature` object representing the requested feature type
	 */
	public features(index: number): Promise<Feature>;
	public features(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/features/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}

	/**
	 * Gets information about a class at a certain level
	 * @param className The name of the class
	 * @param level The level (1-20)
	 * @returns A promise which resolves to a `ClassLevel` object detailing that level
	 */
	public classLevel(className: ClassName, level: Level): Promise<ClassLevel> {
		return this.fetchFunc(`${this.urlBase}/classes/${className}/level/${level}`)
			.then(r => r.json());
	}


	/**
	 * Gets all character races
	 * @returns A promise that resolves to a `NamedAPIResourceList` containing all character races
	 */
	public races(): Promise<NamedAPIResourceList<RaceName>>;
	/**
	 * Gets a specified character race by index
	 * @param index The index of the character race (as it appears in the response from `races()`)
	 * @returns A `Race` object representing the requested character race
	 */
	public races(index: number): Promise<Race>;
	public races(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/races/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}


	/**
	 * Gets all character sub-races
	 * @returns A promise that resolves to a `NamedAPIResourceList` containing all character sub-races
	 */
	public subRaces(): Promise<NamedAPIResourceList<SubRaceName>>;
	/**
	 * Gets a specified character sub-race by index
	 * @param index The index of the character sub-race (as it appears in the response from `subRaces()`)
	 * @returns A `SubRace` object representing the requested character sub-race
	 */
	public subRaces(index: number): Promise<SubRace>;
	public subRaces(race: RaceName): Promise<SubRace>;
	public subRaces(indexer?: any): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/subraces/${typeof indexer !== "undefined" ? indexer : ""}`)
			.then(r => r.json());
	}


	/**
	 * Gets all traits
	 * @returns A promise that resolves to a `NamedAPIResourceList` containing all traits
	 */
	public traits(): Promise<NamedAPIResourceList<TraitName>>;
	/**
	 * Gets a specified trait by index
	 * @param index The index of the trait (as it appears in the response from `traits()`)
	 * @returns A `Trait` object representing the requested trait
	 */
	public traits(index: number): Promise<Trait>;
	public traits(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/traits/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}


	/**
	 * Gets all equipment
	 * @returns A promise that resolves to a `NamedAPIResourceList` containing all equipment
	 */
	public equipment(): Promise<NamedAPIResourceList<EquipmentName>>;
	/**
	 * Gets a specified equipment by index
	 * @param index The index of the equipment (as it appears in the response from `equipment()`)
	 * @returns An `Equipment` object representing the requested equipment
	 */
	public equipment(index: number): Promise<Equipment>;
	public equipment(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/equipment/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}


	/**
	 * Gets all character conditions
	 * @returns A promise that resolves to a `NamedAPIResourceList` containing all character conditions
	 */
	public conditions(): Promise<NamedAPIResourceList<ConditionName>>;
	/**
	 * Gets a specified character condition by index
	 * @param index The index of the character condition (as it appears in the response from `conditions()`)
	 * @returns A `Condition` object representing the requested character condition
	 */
	public conditions(index: number): Promise<Condition>;
	public conditions(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/conditions/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}


	/**
	 * Gets all damage types
	 * @returns A promise that resolves to a `NamedAPIResourceList` containing all damage types
	 */
	public damageTypes(): Promise<NamedAPIResourceList<DamageTypeName>>;
	/**
	 * Gets a specified damage type by index
	 * @param index The index of the damage type (as it appears in the response from `damageTypes()`)
	 * @returns A `DamageType` object representing the requested damage type
	 */
	public damageTypes(index: number): Promise<DamageType>;
	public damageTypes(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/damage-types/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}


	/**
	 * Gets all magic schools
	 * @returns A promise that resolves to a `NamedAPIResourceList` containing all magic schools
	 */
	public magicSchools(): Promise<NamedAPIResourceList<MagicSchoolName>>;
	/**
	 * Gets a specified magic school by index
	 * @param index The index of the magic school (as it appears in the response from `magicSchools()`)
	 * @returns A `MagicSchool` object representing the requested magic school
	 */
	public magicSchools(index: number): Promise<MagicSchool>;
	public magicSchools(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/magic-schools/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}
}
