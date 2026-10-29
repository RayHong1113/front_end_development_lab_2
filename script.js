/**
 *  This function target the celestial-name element in the HTML and 
 * set its text content to the name of the celestial body.
 *
 * @returns {void} 
 */
function populateHeader() {
    const fname = "Kepler-442b"
    let myHead = document.getElementById("celestial-name")
    myHead.textContent = fname
}

/**
 *  This function display a hidden fact about the celestial body.
 * 
 * @returns {void} 
 */
function revealSpaceFactButton() {
    let funFact = `Because it orbits a long-lived orange dwarf and has a size 
                consistent with a rocky composition, scientists consider it one of the top candidates 
                for a potentially "super-habitable" planet`
    let spaceFact = document.getElementById("space-fact")
    let myButton = document.getElementById("reveal-fact")
    myButton.addEventListener("click", (event) => {
        spaceFact.textContent = funFact
        spaceFact.style.display = "block"
    })
}

document.addEventListener("DOMContentLoaded", (event) => {
    
    const distance = 1196
    const planetType = "Super-Earth (likely rocky)"
    const discoveryDate = "2015 (by NASA's Kepler space telescope)"
    const size = "About 34% larger than Earth (radius 1.34 times Earth's)"
    const mass = "Estimated at roughly 2.3 times Earth's mass"
    const keyFact = [planetType, discoveryDate, size, mass, `About ${distance.toLocaleString()} light-years from Earth`]
    


    //Set head
    populateHeader()

    //Set Button
    revealSpaceFactButton()

    //Set section
    let infoSection = document.getElementById("celestial-info")
    let newParagraph = document.createElement("p")
    newParagraph.textContent = `Key Facts
    Planet Type: ${planetType}
    Discovery Date: ${discoveryDate}
    Size: ${size}
    Mass: ${mass}
    Distance: About ${distance.toLocaleString()} light-years from Earth`
    infoSection.appendChild(newParagraph)

    //Arrow function
    const convertLightYearToKM = (distance) => {
        console.log(distance * 9460730472580.8)
    }
    try{
        // Code to try
        convertLightYearToKM(distance)
    } catch (error) {
        // Code to run if an error occurs
        console.error(error);
    }

    for (const pr of keyFact) {
        console.log(pr);
    }

    let factList = document.createElement("ul");
    
    for (let i = 0; i < keyFact.length; i++) {
        let li = document.createElement("li");
        li.textContent = keyFact[i];
        factList.appendChild(li);
    }
   
    infoSection.appendChild(factList);
})