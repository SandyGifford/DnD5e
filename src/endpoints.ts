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

// server urlBase: "http://www.dnd5eapi.co/api"
// client urlBase: "/dnd5e"

export interface ResponseLike {
	json(): Promise<any>;
}
export type FetchLike = (input: string) => Promise<ResponseLike>;

export default class Endpoints {
	constructor(private fetchFunc: FetchLike, private urlBase: string) {}

	public abilityScores(): Promise<NamedAPIResourceList<AbilityScoreName>>;
	public abilityScores(index: number): Promise<AbilityScore>;
	public abilityScores(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/ability-scores/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}

	public skills(): Promise<NamedAPIResourceList<SkillName>>;
	public skills(index: number): Promise<Skill>;
	public skills(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/skills/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}

	public proficiencies(): Promise<NamedAPIResourceList<ProficiencyName>>;
	public proficiencies(index: number): Promise<Proficiency>;
	public proficiencies(className: ClassName): Promise<Proficiency>;
	public proficiencies(indexer?: number | ClassName): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/proficiencies/${typeof indexer !== "undefined" ? indexer : ""}`)
			.then(r => r.json());
	}

	public languages(): Promise<NamedAPIResourceList<LanguageName>>;
	public languages(index: number): Promise<Language>;
	public languages(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/languages/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}

	public classes(): Promise<NamedAPIResourceList<ClassName>>;
	public classes(index: number): Promise<CharClass>;
	public classes(className: ClassName): Promise<CharClass>;
	public classes(indexer?: number | ClassName): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/classes/${typeof indexer !== "undefined" ? indexer : ""}`)
			.then(r => r.json());
	}


	public subClasses(): Promise<NamedAPIResourceList<SubClassName>>;
	public subClasses(index: number): Promise<CharSubClass>;
	public subClasses(className: ClassName): Promise<CharSubClass>;
	public subClasses(indexer?: number | ClassName): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/subclasses/${typeof indexer !== "undefined" ? indexer : ""}`)
			.then(r => r.json());
	}

	public features(): Promise<NamedAPIResourceList<FeatureName>>;
	public features(index: number): Promise<Feature>;
	public features(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/features/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}

	public classLevel(className: ClassName, level: Level): Promise<ClassLevel> {
		return this.fetchFunc(`${this.urlBase}/classes/${className}/level/${level}`)
			.then(r => r.json());
	}

	public races(): Promise<NamedAPIResourceList<RaceName>>;
	public races(index: number): Promise<Race>;
	public races(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/races/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}

	public subRaces(): Promise<NamedAPIResourceList<SubRaceName>>;
	public subRaces(index: number): Promise<SubRace>;
	public subRaces(race: RaceName): Promise<SubRace>;
	public subRaces(indexer?: any): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/subraces/${typeof indexer !== "undefined" ? indexer : ""}`)
			.then(r => r.json());
	}

	public traits(): Promise<NamedAPIResourceList<TraitName>>;
	public traits(index: number): Promise<Trait>;
	public traits(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/traits/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}

	public equipment(): Promise<NamedAPIResourceList<EquipmentName>>;
	public equipment(index: number): Promise<Equipment>;
	public equipment(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/equipment/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}

	public conditions(): Promise<NamedAPIResourceList<ConditionName>>;
	public conditions(index: number): Promise<Condition>;
	public conditions(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/conditions/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}

	public damageTypes(): Promise<NamedAPIResourceList<DamageTypeName>>;
	public damageTypes(index: number): Promise<DamageType>;
	public damageTypes(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/damage-types/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}

	public magicSchools(): Promise<NamedAPIResourceList<MagicSchoolName>>;
	public magicSchools(index: number): Promise<MagicSchool>;
	public magicSchools(index?: number): Promise<any> {
		return this.fetchFunc(`${this.urlBase}/magic-schools/${typeof index !== "undefined" ? index : ""}`)
			.then(r => r.json());
	}
}
