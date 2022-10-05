export class Athlete {

  constructor(athlete_id: number, first_name: string, last_name: string, nickname: string, gender: string, DOB: string, organization: string, weight_category: string, nationality: string, ranking:number, points:number) {
    this.athlete_id = athlete_id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.nickname = nickname;
    this.gender = gender;
    this.DOB = DOB;
    this.organization = organization;
    this.weight_category = weight_category;
    this.nationality = nationality;
    this.ranking = ranking;
    this.points = points;

  }

    private athlete_id:number;
    private first_name:string;
    private last_name:string;
    private nickname:string;
    private gender:string;
    private DOB:string;
    private organization:string;
    private weight_category:string;
    private nationality:string;
    public ranking:any;
    public points:number;



  get _ranking(): number {
    return this.ranking;
  }

  get _athlete_id(): number {
    return this.athlete_id;
  }

  get _first_name(): string {
    return this.first_name;
  }

  get _last_name(): string {
    return this.last_name;
  }

  get _nickname(): string {
    return this.nickname;
  }

  get _gender(): string {
    return this.gender;
  }

  get _DOB(): string {
    return this.DOB;
  }

  get _organization(): string {
    return this.organization;
  }

  get _weight_category(): string {
    return this.weight_category;
  }

  get _nationality(): string {
    return this.nationality;
  }
}
