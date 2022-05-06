//BEM naming convention Block , Element , Modifier 
//class="Card"
//class="Card__Img"
//class="Card__Img--modifierName"


//write a function 



function bemify(block){ //this needs to return a function with block as the base
    //then the function needs to attach all classes passed in after 
    return function(...classes){

        if (!classes.length) return block; //if nothing return jsut the block

         let items = classes; //the whole array of classes is not inside one variable 

            let element = `${block}__${items.shift()}` //this grabs the element which will always be the first item passed into the func this also removes the first item from our array  ie: "Block__item[0]"

            let otherClasses = items.map((item)=>{ //we run a map to grab the css modifiers  
                if(item.startsWith("--")){
                    return `${element}${item}` //this in theory would return something like : Block__Element--modifier
                }

                else {
                    return item //and this would add your regular classes that are neither the main element or a modifier 
                }
            })

            //only potential issue is that otherClasses is an array and I would need to join that with element ****
        return [element , ...otherClasses].join(" ")


    }
}


//better bem

// For logging to codepen dom
const p = document.querySelector("#test") //this wont work as we dont actually have this variable in our code
//this was used as part of the demo in the code pen 
const log = (value) => p.innerHTML = value

// SOME EXAMPLE CASES
// const bem = bemify("card")
// bem("image") => "card__image"
// bem() => "card"
// bem("image", [true, "active"]) => "card__image active"
// bem("image", [false, "active"]) => "card__image"
// bem("image", [false, "active", "inactive"]) => "card__image inactive"
// bem("image", false ? "active" : "inactive") => "card__image inactive"
// bem("image", false ? "active" : "") => "card__image"
// bem(null, [true, "active"]) => "card active"
// bem(null, [true, "--active"]) => "card card--active" ?? "card card__--active" ?? "card active" ?? throw error

const bemify2 = (block) => (element, ...classes) => {
  
  const formedClasses = classes.map(c => {
    
    // Some extra protec
    if (!c) return
    
    // Assume its a string and assign the initial value
    let className = c
    
    // Its an array (conditional)
    if (Array.isArray(c)) {
      
      // Destructure our array for condition and classnames
      const [condition, classIfTrue, classIfFalse] = c
      
      // Return the approrpiate classname
      className = condition ? classIfTrue : classIfFalse //this line checks the conditional we passed into the potential array

    }
    
    // Moar protec
    if (!className || typeof className !== "string") return
    
    // Apply Bem Stuff
    if (className.startsWith("--")) className = element ? `${block}__${element}${className}` : block + className
    
    // Don't be stupid and forget to return like Arjun
    return className
    
  })
  
  return [element ? `${block}__${element}` : block, ...formedClasses].filter(c => !!c).join(" ")
  
}

// Test this thing out
const bem = bemify("card")

// A fake state variable
const isValid = false

// Log it to the dom
log(bem("image", "active", "hello", [isValid, "--valid", "--invalid"]))



export default bemify;