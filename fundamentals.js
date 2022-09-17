const aCar = {
  owner: "Joe Bloggs",
  previous_owners: [
    { name: "Pat Smith", address: "1 Main Street" },
    { name: "Sheila Dwyer", address: "2 High Street" }
  ],
  type: {
    make: "Toyota",
    model: "Corolla",
    cc: 1.8
  },
  features : ['Parking assist', 'Alarm', 'Tow-bar'],
  registration: { year: 201, county: "WD", number: 1058 }
};

aCar.mileage = 10000;

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
  "It is a " + aCar.colour.exterior + " car with " + 
  aCar.mileage + " miles on the clock and a " + 
  aCar.colour.interior.colour + " " + 
  aCar.colour.interior.texture + " interior."
);

console.log(
  '\nFirst owner: ' + 
  aCar.previous_owners[0].name + 
  " - " + 
  aCar.previous_owners[0].address)

console.log("\nFeatures:");
  for (let i = 0 ; i < aCar.features.length ; i += 1) {
    console.log(aCar.features[i]) ;
}

console.log("\nPrevious owners: ");
for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
  console.log(aCar.previous_owners[i].name);
}