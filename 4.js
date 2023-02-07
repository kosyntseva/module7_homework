function ElectroMech(name, power) {
    this.name = name,
    this.power = power,
      this.isPlugged = false
  }
   ElectroMech.prototype.plugIn = function (name) {
     console.log(this.name + ' is on');
     this.isPlugged = true;
   };//включить
  
   ElectroMech.prototype.unplug = function (name) {
     console.log(this.name + ' is off');
     this.isPlugged = false;
   };//выключить
  
  ElectroMech.prototype.getPowerUse = function () {
    return this.isPlugged ? this.power : 0;
   };//потребляемая мощность включенных устройств
  
  const Computer = new ElectroMech('Computer', 60 );
  const Microwave = new ElectroMech('Microwave', 600);
  
  Computer.plugIn(1000)
  Microwave.plugIn(600)
  console.log(Computer.getPowerUse() + Microwave.getPowerUse());