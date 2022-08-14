function clickRating() {
    const buttons = document.querySelectorAll('.rating-button');
    
    buttons.forEach((button, index) => button.addEventListener('click', () => {
        buttons.forEach(b => b.style.backgroundColor = "hsl(213, 19%, 18%)");
        button.style.backgroundColor = "hsl(217, 12%, 63%)";
        button.style.color = "hsl(0, 0%, 100%)";
        clickSubmit(index);
      })
)}

function clickSubmit(index) {
    document.querySelector('#submit-button').addEventListener('click', () => {
      document.querySelector('.submited').style.zIndex = "0";
      let para = document.getElementById('rating-para');
      let rating = document.querySelectorAll('.rating-button')[index].innerText;
      para.innerHTML = `You selected ${rating} out of 5`;
    })
  }
  clickRating();

  