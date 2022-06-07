let datdeSample = `2022-06-05T04:00:00.000Z`;
// var date = new Date(sample);
// date.toISOString().substring(0, 10);
// console.log(date);

const testConvert = (sample) => {
    let dt = new Date(sample);
    let dd = dt.getDate();
    let mm = dt.getMonth() + 1;
    let yyyy = dt.getFullYear();

    if (dd<10) {
        dd = '0' + dd;
    }
    if (mm<10) {
        mm = '0' + mm;
    }
    return mm + '/' + dd + '/' + yyyy;

}


console.log(testConvert(datdeSample));
