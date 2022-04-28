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

export default bemify;