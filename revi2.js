for (var num = 2; num <= 200; num++) {
    var primo = true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        console.log(num);
    }
}
