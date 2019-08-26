function solve() {

   let playerOneCards = document.querySelectorAll("#player1Div > img")
   let playerTwoCards = document.querySelectorAll("#player2Div > img")
   let leftSpan = document.querySelectorAll("#result > span")[0]
   let rightSpan = document.querySelectorAll("#result > span")[2]
   let pickedLeftCards = []
   let pickedRightCards = []
   let cardCombo = ""
   let historyElement = document.getElementById("history")

   Array.from(playerOneCards).forEach(card => {

      card.addEventListener('click', () => {
         pickedLeftCards.push(card)
         let divCard = document.createElement("div")
         let cardName = card.name
         divCard.textContent = cardName
         leftSpan.appendChild(divCard)
         card.src = "images/whiteCard.jpg"

         if (rightSpan.childNodes.length > 0 && leftSpan.childNodes.length > 0) {
            let leftCard = +leftSpan.textContent
            let rightCard = +rightSpan.textContent
            if (leftCard > rightCard) {
               pickedLeftCards[0].style.border = "2px solid green"
               pickedRightCards[0].style.border = "2px solid red"

               cardCombo += `[${leftCard} vs ${rightCard}] `
               pickedRightCards = []
               pickedLeftCards = []
               leftSpan.textContent = ""
               rightSpan.textContent = ""

            } else if (rightCard > leftCard) {
               pickedRightCards[0].style.border = "2px solid green"
               pickedLeftCards[0].style.border = "2px solid red"


               cardCombo += `[${leftCard} vs ${rightCard}] `
               pickedRightCards = []
               pickedLeftCards = []
               rightSpan.textContent = ""
               leftSpan.textContent = ""

            }else if(rightCard === leftCard){
               cardCombo += `[${leftCard} vs ${rightCard}] `
               pickedRightCards = []
               pickedLeftCards = []
               rightSpan.textContent = ""
               leftSpan.textContent = ""

            }

         }
         historyElement.textContent = cardCombo
      })
   })

   Array.from(playerTwoCards).forEach(card => {

      card.addEventListener('click', () => {
         pickedRightCards.push(card)
         let divCard = document.createElement("div")
         let cardName = card.name
         divCard.textContent = cardName
         rightSpan.appendChild(divCard)
         card.src = "images/whiteCard.jpg"
         if (rightSpan.childNodes.length > 0 && leftSpan.childNodes.length > 0) {
            let leftCard = +leftSpan.textContent
            let rightCard = +rightSpan.textContent
            if (leftCard > rightCard) {

               pickedLeftCards[0].style.border = "2px solid green"
               pickedRightCards[0].style.border = "2px solid red"

               cardCombo += `[${leftCard} vs ${rightCard}] `

               pickedRightCards = []
               pickedLeftCards = []

               leftSpan.textContent = ""
               rightSpan.textContent = ""

            } else if (rightCard > leftCard) {

               pickedRightCards[0].style.border = "2px solid green"
               pickedLeftCards[0].style.border = "2px solid red"

               cardCombo += `[${leftCard} vs ${rightCard}] `

               pickedRightCards = []
               pickedLeftCards = []

               rightSpan.textContent = ""
               leftSpan.textContent = ""

            }else if(rightCard === leftCard){
               cardCombo += `[${leftCard} vs ${rightCard}] `
               pickedRightCards = []
               pickedLeftCards = []
               rightSpan.textContent = ""
               leftSpan.textContent = ""

            }

         }
         historyElement.textContent = cardCombo
      })
   })

}