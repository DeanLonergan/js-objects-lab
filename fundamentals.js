const aCar = {
  owner: "Joe Bloggs",
  type: {
    make: "Toyota",
    model: "Corolla",
    cc: 1.8
  },
  mileage: 10000,
  registration: { year: 201, county: "WD", number: 1058 }
};

aCar.colour = {
  exterior: "red",
  interior: { texture: "leather", colour: "cream" },
},

console.log(aCar.owner + " drives a " + aCar.type.make);

console.log(
  "Registration: " +
    aCar.registration.year +
    "-" +
    aCar.registration.county +
    "-" +
    aCar.registration.number
);

console.log(
  "It is a " + aCar.colour.exterior 
    + " car with " + aCar.mileage 
    + " miles on the clock and a " 
    + aCar.colour.interior.colour + " "
    + aCar.colour.interior.texture 
    + " interior."
);