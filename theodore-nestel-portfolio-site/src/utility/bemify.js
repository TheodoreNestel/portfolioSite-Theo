




//ARJUN's most controversial piece of code 


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
     if (className?.startsWith("--")) className = element ? `${block}__${element}${className}` : block + className
    //^^^^^ this doesnt work will need to fix
    
    // Don't be stupid and forget to return like Arjun
    return className
    
  })
  
  return [element ? `${block}__${element}` : block, ...formedClasses].filter(c => !!c).join(" ")
  
}

//Ngl this hurts my brain but you cant argue with results so ... just crtl c - ctrl v 


export default bemify2;