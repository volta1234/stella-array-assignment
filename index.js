const items = [
    { name: "Edward", value: 21 },
    { name: "Brian", value: 37 },
    { name: "Andrew", value: 45 },
    { name: "Tom", value: -12 },
    { name: "Happiness", value: 13 },
    { name: "Brady", value: 37 }
  ]


  function sortItems(items) {
    let sorted = []
    let unsorted = [...items]

    for(let i=0;i<items.length;i++){
        let smallest = unsorted[0].value
        let indexOfSmallest = 0

        for(let j=1;j<unsorted.length;j++){
            if(unsorted[j].value < smallest){
                smallest = unsorted[j].value
                indexOfSmallest = j
            }
        }

        sorted.push(unsorted[indexOfSmallest])
        let final = unsorted.splice(indexOfSmallest)
        final.shift()
        unsorted = unsorted.concat(final)
    }

    return sorted;
}
