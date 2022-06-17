function correctDate(date){
    const newDate = new Date(date);
    return newDate.toLocaleDateString('zh-Hans-CN')
}
function getIsoCodeEur(string){
    return string.slice(-1).replace(/\u20AC/g, "EUR");
}

function getData() {
    const hotelDetails = {};
    if (!document.querySelector("#main > div.pageWrapper")) {
        console.error('Lanza esta función en Centara Grand Hotels');
    } else {
        hotelDetails['guests'] = document.querySelector("#main > div.pageWrapper > header > div:nth-child(2) > div > div > div.search-bar-mobile-container_searchButton > button > div > div.criteria-button-mobile_guests > span.criteria-button-mobile_subtitle > span:nth-child(1)").innerText;
        hotelDetails['children'] = document.querySelector("#main > div.pageWrapper > header > div:nth-child(2) > div > div > div.search-bar-mobile-container_searchButton > button > div > div.criteria-button-mobile_guests > span.criteria-button-mobile_subtitle > span:nth-child(2)").innerText;
        const numberChildren = parseInt(hotelDetails['children'].match(/\d+/)[0]);
        const numberGuests = parseInt(hotelDetails['guests'].match(/\d+/)[0]);
        const checkIn = document.querySelector("#main > div.pageWrapper > header > div:nth-child(2) > div > div > div.search-bar-mobile-container_searchButton > button > div > div.criteria-button-mobile_dates > span.criteria-button-mobile_subtitle > span > span:nth-child(1)").innerText;
        const checkOut = document.querySelector("#main > div.pageWrapper > header > div:nth-child(2) > div > div > div.search-bar-mobile-container_searchButton > button > div > div.criteria-button-mobile_dates > span.criteria-button-mobile_subtitle > span > span:nth-child(2)").innerText;
        hotelDetails['total-guests'] =  numberChildren + numberGuests;
        hotelDetails['language'] = document.querySelector("#main > div.pageWrapper > header > div.user-bar_container > div.user-bar_wrapper > div.user-bar_right > div.language-selection_container.language-selection_hideOnMobile > div > select").value;
        hotelDetails['best-price'] = document.querySelector("#auto-child-card-DLGDD0 > div > div > div.thumb-cards_right > div.thumb-cards_priceMessages > div.thumb-cards_priceContainer > ins > span:nth-child(2)").innerText;
        hotelDetails['currency'] = getIsoCodeEur(hotelDetails['best-price'])
        // No he conseguido solucionar el error en el año
        hotelDetails['check-In'] = correctDate(checkIn);
        hotelDetails['check-Out'] = correctDate(checkOut);
    
        hotelDetails['max-guests'] = document.querySelector("#auto-parent-card-0 > div > div > div.app_col-sm-12.app_col-md-8.app_col-lg-8 > div.thumb-cards_cardHeader > div.thumb-cards_urgencyTriggerAndRoomInfo > div > div.guests-and-roomsize_item.guests-and-roomsize_guests").innerText;
        hotelDetails['total-beds'] = document.querySelector("#auto-parent-card-0 > div > div > div.app_col-sm-12.app_col-md-8.app_col-lg-8 > div.thumb-cards_cardHeader > div.thumb-cards_urgencyTriggerAndRoomInfo > div > div.guests-and-roomsize_item.guests-and-roomsize_bed > span").innerText;
        hotelDetails['size-room'] = document.querySelector("#auto-parent-card-0 > div > div > div.app_col-sm-12.app_col-md-8.app_col-lg-8 > div.thumb-cards_cardHeader > div.thumb-cards_urgencyTriggerAndRoomInfo > div > div.guests-and-roomsize_item.guests-and-roomsize_size").innerText;
        return hotelDetails
    }
}

