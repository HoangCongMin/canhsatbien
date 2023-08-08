export function FormatImage(content:string){
    return 'https://canhsatbien.vn/' + content
}

export function FormatLink(content:string){
    return 'https://csbr.3i.com.vn/' + content
}

export function FormatMeida(conten:string){
    return 'https://csbe.3i.com.vn' + conten
}


export function Ingrp(conten:string){
    return  conten.split(":")[1];

}

export function Date_Time(value :string, showHourse?:boolean){
    var dateObj = new Date(value);

    var outputString = ("0" + dateObj.getDate()).slice(-2) + "/" +
    ("0" + (dateObj.getMonth() + 1)).slice(-2) + "/" +
    dateObj.getFullYear() + " " +
    ("0" + dateObj.getHours()).slice(-2) + ":" +
    ("0" + dateObj.getMinutes()).slice(-2) + ":00";

    if (showHourse) {
      outputString = ("0" + dateObj.getDate()).slice(-2) + "/" +
      ("0" + (dateObj.getMonth() + 1)).slice(-2) + "/" +
      dateObj.getFullYear() + " ";
    }
    return outputString
}