function ageCheck() {
  let age = prompt("Enter your Age.");
      if (age <=12) {
          alert("You are a child.");
      } else if (age <=19) {
          alert("You are a teenager.");
      } else if (age >=19) {
          alert("You are an adult.");
      } else {
          alert("You did not provide a Age.");
      }
}