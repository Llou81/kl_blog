export class Tip {
  sport: string;
  home: string;
  away: string;
  tip: string;
  stake: number;
  odd: number;
  description: string;
  date: any;

  constructor(sport, home, away, tip, stake, odd, description, date) {
    this.sport = sport;
    this.home = home;
    this.away = away;
    this.tip = tip;
    this.stake = stake;
    this.odd = odd;
    this.description = description;
    this.date = date;
  }
}
