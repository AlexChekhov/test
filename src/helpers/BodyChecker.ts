export function postChecker(body: any) {
    if (body.hasOwnProperty('id', 'payment', 'currency', 'paymentee'))
        return true;
    else return false;
}

export function getChecker(body: any) {
    if (body.hasOwnProperty('grouping'))
        return true;
    else return false;
}
