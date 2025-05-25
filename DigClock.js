
setInterval(() => {
  let time = new Date();

  let hour = String(time.getHours()).padStart(2, '0')
  let minutes =  String(time.getMinutes()).padStart(2, '0')
  let second =  String(time.getSeconds()).padStart(2, '0')

  let date = document.getElementById("date");
  date.textContent = `${hour} : ${minutes} : ${second}`;
}, 1000);
