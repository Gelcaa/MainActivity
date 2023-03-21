console.log("Hello, Welcome to De La Salle University!");

const firstName = "Angelica";
const lastName = "Buan";
const age = 20;
const hobbies = ["watching k-drama", "playing bass", "arts", "learning to code", "playing with my dogs"];
const homeAddress = {
        houseNumber: "Blk 39 Lot 7",
        street: "Paris street",
        subdivision: "Town & COuntry Southville",
        barangay: "Sto. Tomas",
        city: "Biñan",
        province: "Laguna",
    zipCode: "4024"
};
        

console.log(`My Name is ${firstName} ${lastName}, ${age} yrs old`)
console.log(`My hobbies are ${hobbies.join(", ")}`)
console.log(`I live in ${homeAddress.houseNumber} ${homeAddress.street}, ${homeAddress.subdivision}, ${homeAddress.barangay}, ${homeAddress.city}, ${homeAddress.province} ${homeAddress.zipCode}`);
    


