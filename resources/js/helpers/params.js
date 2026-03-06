const params = function(obj) {
    let str = "";
    for (let key in obj) {
        if (str !== "") {
            str += "&";
        }
        str += key + "=" + encodeURIComponent(obj[key]);
    }
    return str;
};

export default params;
