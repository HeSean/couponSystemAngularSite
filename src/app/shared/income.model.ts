
export class Income {
  id: number;
  name;
  amount;
  description;
  date;

  constructor(id, name, amount, description, date) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.description = description;
    this.date = date;
  }
}
