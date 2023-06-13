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