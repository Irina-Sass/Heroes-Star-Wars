export class VehicleList {
  constructor(container, createVehicle) {
    this.container = container;
    this.createVehicle = createVehicle;
  }

//   clear() {
//     while (this.container.firstChild) {
//       this.container.firstChild.remove();
//     }
//   }

  render(arrVehicles) {
    arrVehicles.forEach((element) => {
      const vehicle = this.createVehicle(element);
      this.container.appendChild(vehicle);
    });
  }
}
