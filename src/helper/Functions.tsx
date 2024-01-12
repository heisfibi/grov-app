export const goFixed = () => { 
    const body = document.getElementsByTagName("body")[0]
    body.classList.add("overflow-hidden")
  }

  export const leaveFixed = () => { 
    const body = document.getElementsByTagName("body")[0]
    body.classList.remove("overflow-hidden")
  }
