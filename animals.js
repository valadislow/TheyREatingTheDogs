const petsData = [
    {
        petName: "Stella",
        type: 'dog',
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        type: 'dog',
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        type: 'cat',
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        type: "snake",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        type: 'dog',
        weightInKilos: 28,
        breed: "Bull-dog"
    },
    {
        petName: "Sharick",
        type: "dog",
        age: 0.5,
        weightInKilos: 20,
        breed: "Street dog"
    }
];



function showInfo() {
    let petNum = document.querySelector("#petNum").value - 1;

    console.log(petsData[petNum].petName)
    petArea = document.querySelector(".selectedPetInfo")
    pet = petsData[petNum]
    str = `${pet.petName} the ${pet.type} is ${pet.age} years old. This weights 
    ${pet.weightInKilos} and is a ${pet.breed} breed`
    petArea.textContent = str

}