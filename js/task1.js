function fw(str) {
    var newStr = '',
        i
    for (i = 0; i < str.length; i++) {
        if ('aeiou'.includes(str[i].toLowerCase()))
            continue;
        newStr += str[i];
    }
    console.log(newStr);
}

fw("This channel is almost a year old!");