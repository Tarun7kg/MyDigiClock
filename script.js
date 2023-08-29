
setInterval(()=>{
  let a = new Date()
  let h = a.getHours()
  let m = a.getMinutes()
  let s = a.getSeconds()
  let d = a.toLocaleDateString()
  
  date.innerHTML = d
  hours.innerHTML = h
  min.innerHTML = m
  sec.innerHTML = s
},1000)