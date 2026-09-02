// question - 1
function describeValue(value) {
    const valueType = typeof value
    let truthyOrFalsy;
    if (!!value) {
        truthyOrFalsy = "truthy";
    } else {
        truthyOrFalsy = "falsy";
    }
    return `${valueType} | ${truthyOrFalsy}`;
}

// tests
// console.log(describeValue("hello"));
// console.log(describeValue(""));
// console.log(describeValue(25));
// console.log(describeValue(0));
// console.log(describeValue(true));
// console.log(describeValue(null));
// console.log(describeValue(undefined));
