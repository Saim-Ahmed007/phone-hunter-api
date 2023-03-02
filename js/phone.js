const loadPhones = () => {
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}
const displayPhone = (phones) => {
    const phoneContainer = document.getElementById('phone-container')
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('phone')
        phoneDiv.innerHTML = `
        <img src = "${phone.image}" alt = "">
        <h4>Brand : ${phone.brand} </h4>
        <p>Phone Name : ${phone.phone_name} </p>
        <p>Slug : ${phone.slug}</p>
        <button class = "button" onClick = "ShowPhoneDetail('${phone.slug}')">Show Details</button>
    
        `
        phoneContainer.appendChild(phoneDiv)

    });

}
const ShowPhoneDetail = (slug) => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))
}
const displayPhoneDetails = (phoneDetail) => {

    
    document.getElementById('phone-details').innerHTML = `
        <img src = "${phoneDetail.image}" alt = "">
        <h4>Phone Model : ${phoneDetail.slug} </h4>
        <p>Phone Name : ${phoneDetail.name} </p>
        <p>Relese Date : ${phoneDetail.releaseDate}</p>
        <p>Brand : ${phoneDetail.brand}</p>
        <p>Storage : ${phoneDetail.mainFeatures.storage}</p>
        <p>DisplaySize : ${phoneDetail.mainFeatures.displaySize}</p>
        <p>Memory : ${phoneDetail.mainFeatures.memory}</p>


  `


}

loadPhones();