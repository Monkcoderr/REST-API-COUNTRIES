

const container = document.querySelector('.countries-container')

const card = document.createElement('a')
card.classList.add('country-card')
// const imge = document.createElement('img')
// imge.src = "https://flagcdn.com/wf.svg"
// card.append(imge)

const cardHTMl = `<img src="https://flagcdn.com/wf.svg" alt="flag">
                <div class="card-text">
                    <h3 class="card-title">India</h3>
                    <p><b>Population: </b>8100000</p>
                    <p><b>Region: </b>Asia</p>
                    <p><b>Capital: </b>Delhi</p>
                </div>`

                card.innerHTML = cardHTMl
                container.append(card)
                
        