const phoneNumbers = ['+989393676765', '+989393456123', '+989393455465', '+989393456722', '+989393456765'];
function formatMiddlePhoneNumber(arr) {
    const middleIndex = Math.floor(arr.length / 2);
    let phoneNumber = arr[middleIndex];
    phoneNumber = '0' + phoneNumber.slice(3);
    return phoneNumber;
}
console.log(formatMiddlePhoneNumber(phoneNumbers)); 