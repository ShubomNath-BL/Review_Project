window.addEventListener("DOMContentLoaded", (event) => {
    
});
const save = () => {
    let homeAddressData = createHomeAddress();
    createAndUpdateStorage(homeAddressData);
    alert("save");    
}

function createAndUpdateStorage(homeAddressData){
    let homeAddressList = JSON.parse(localStorage.getItem("HomeAddressList"));
    if(homeAddressList != undefined){
        homeAddressList.push(homeAddressData);
    }else{
        homeAddressList = [homeAddressData]
    }
    alert(homeAddressList.toString());
    localStorage.setItem("HomeAddressList", JSON.stringify(homeAddressData))
}

const createHomeAddress = () => {
    let homeAddressData = new HomeAddressData();
    homeAddressData.city = getInputValueById("#city");
    homeAddressData.street = getInputValueById("#street");
    homeAddressData.landmark = getInputValueById("#landmark");
    homeAddressData.pincode = getInputValueById("#pincode");
    return homeAddressData;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}