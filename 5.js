class ElectroMech {
    constructor(name, power) {
      this.name = name;
        this.power = power;
      this.isPlugged = false;
    }
    plugIn() {
      console.log(this.name + " is on");
      this.isPlugged = true;
    }
    getPowerUse() {
      return this.isPlugged ? this.power : 0;
    }
  } 
   const Computer = new ElectroMech('Computer', 1000);
   const Microwave = new ElectroMech('Microwave', 600);
  
  console.log(Computer.getPowerUse() + Microwave.getPowerUse());
  
  Computer.plugIn();
  console.log(Computer.getPowerUse() + Microwave.getPowerUse());
  Microwave.plugIn();
  console.log(Computer.getPowerUse() + Microwave.getPowerUse());