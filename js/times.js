// TODO: Refactor the code to determine whether these places are open; too much repetition.
var refreshClock = setInterval(function() {
    var now = moment()
        .tz("America/Chicago");
    var dotw = now.day();
    var dotwnames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var hr = now.hours();
    var hrform = (hr % 12 == 0 ? 12 : (hr % 12));
    var min = now.minutes();
    var minform = (min < 10 ? '0' + min : min);
    var sec = now.seconds();
    var secform = (sec < 10 ? '0' + sec : sec);
    var mer = (hr > 12 ? 'PM' : 'AM');
    $('#dotw')
        .html(dotwnames[dotw]);
    $('#12-hour-time')
        .html(hrform + ':' + minform + ':' + secform + ' ' + mer);
    $('#24-hour-time')
        .html(hr + ":" + minform + ":" + secform);
    // Cafeterias:
    // Bruce
    var bruce = $('#bruce');
    if (bruceOpen(dotw, hr, min, sec)) {
        bruce.attr('class', 'lbf success');
        bruce.html('OPEN');
    } else {
        bruce.attr('class', 'lbf danger');
        bruce.html('Closed');
    }
    // Kerr
    var kerr = $('#kerr');
    if (kerrOpen(dotw, hr, min, sec)) {
        kerr.attr('class', 'lbf success');
        kerr.html('OPEN');
    } else {
        kerr.attr('class', 'lbf danger');
        kerr.html('Closed');
    }
    // Mean Greens
    var mg = $('#mg');
    if (mgOpen(dotw, hr, min, sec)) {
        mg.attr('class', 'lbf success');
        mg.html('OPEN');
    } else {
        mg.attr('class', 'lbf danger');
        mg.html('Closed');
    }
    // Champs
    var champs = $('#champs');
    if (champsOpen(dotw, hr, min, sec)) {
        champs.attr('class', 'lbf success');
        champs.html('OPEN');
    } else {
        champs.attr('class', 'lbf danger');
        champs.html('Closed');
    }
    // West
    var west = $('#west');
    if (westOpen(dotw, hr, min, sec)) {
        west.attr('class', 'lbf success');
        west.html('OPEN');
    } else {
        west.attr('class', 'lbf danger');
        west.html('Closed');
    }
    // University Union Restaurants:
    // Avesta
    var avesta = $('#avesta');
    if (avestaOpen(dotw, hr, min, sec)) {
        avesta.attr('class', 'lbf success');
        avesta.html('OPEN');
    } else {
        avesta.attr('class', 'lbf danger');
        avesta.html('CLOSED');
    }
    // Corner Store
    var corner = $('#corner');
    if (cornerOpen(dotw, hr, min, sec)) {
        corner.attr('class', 'lbf success');
        corner.html('OPEN');
    } else {
        corner.attr('class', 'lbf danger');
        corner.html('CLOSED');
    }
    // FTG Pantry / Krispy Krunchy
    var ftg = $('#ftg');
    if (ftgOpen(dotw, hr, min, sec)) {
        ftg.attr('class', 'lbf success');
        ftg.html('OPEN');
    } else {
        ftg.attr('class', 'lbf danger');
        ftg.html('CLOSED');
    }
    // Campus Chat Food Court
    var campuschat = $('#campuschat');
    if (campuschatOpen(dotw, hr, min, sec)) {
        campuschat.attr('class', 'lbf success');
        campuschat.html('OPEN');
    } else {
        campuschat.attr('class', 'lbf danger');
        campuschat.html('CLOSED');
    }
    // Burger King
    var burgerking = $('#burgerking');
    if (burgerkingOpen(dotw, hr, min, sec)) {
        burgerking.attr('class', 'lbf success');
        burgerking.html('OPEN');
    } else {
        burgerking.attr('class', 'lbf danger');
        burgerking.html('CLOSED');
    }
    // Chick-Fil-A
    var chickfila = $('#chickfila');
    if (Open(dotw, hr, min, sec)) {
        chickfila.attr('class', 'lbf success');
        chickfila.html('OPEN');
    } else {
        chickfila.attr('class', 'lbf danger');
        chickfila.html('CLOSED');
    }
    // Fuzzy's Taco Shop
    var fuzzy = $('#fuzzy');
    if (Open(dotw, hr, min, sec)) {
        fuzzy.attr('class', 'lbf success');
        fuzzy.html('OPEN');
    } else {
        fuzzy.attr('class', 'lbf danger');
        fuzzy.html('CLOSED');
    }
    // Jamba Juice
    var jamba = $('#jamba');
    if (jambaOpen(dotw, hr, min, sec)) {
        jamba.attr('class', 'lbf success');
        jamba.html('OPEN');
    } else {
        jamba.attr('class', 'lbf danger');
        jamba.html('CLOSED');
    }
    // Starbucks
    var starbucks = $('#starbucks');
    if (starbucksOpen(dotw, hr, min, sec)) {
        starbucks.attr('class', 'lbf success');
        starbucks.html('OPEN');
    } else {
        starbucks.attr('class', 'lbf danger');
        starbucks.html('CLOSED');
    }
    // Taco Bueno
    var tacobueno = $('#tacobueno');
    if (tacobuenoOpen(dotw, hr, min, sec)) {
        tacobueno.attr('class', 'lbf success');
        tacobueno.html('OPEN');
    } else {
        tacobueno.attr('class', 'lbf danger');
        tacobueno.html('CLOSED');
    }
    // Which Wich
    var whichwich = $('#whichwich');
    if (whichwichOpen(dotw, hr, min, sec)) {
        whichwich.attr('class', 'lbf success');
        whichwich.html('OPEN');
    } else {
        whichwich.attr('class', 'lbf danger');
        whichwich.html('CLOSED');
    }
    // Biz Cafe
    var biz = $('#biz');
    if (bizOpen(dotw, hr, min, sec)) {
        biz.attr('class', 'lbf success');
        biz.html('OPEN');
    } else {
        biz.attr('class', 'lbf danger');
        biz.html('CLOSED');
    }
    // Go! Station
    var gostation = $('#gostation');
    if (gostationOpen(dotw, hr, min, sec)) {
        gostation.attr('class', 'lbf success');
        gostation.html('OPEN');
    } else {
        gostation.attr('class', 'lbf danger');
        gostation.html('CLOSED');
    }
    // Cafe GAB
    var gabcafe = $('#gabcafe');
    if (gabcafeOpen(dotw, hr, min, sec)) {
        gabcafe.attr('class', 'lbf success');
        gabcafe.html('OPEN');
    } else {
        gabcafe.attr('class', 'lbf danger');
        gabcafe.html('CLOSED');
    }
    // Khush Roti
    var khushroti = $('#khushroti');
    if (khushrotiOpen(dotw, hr, min, sec)) {
        khushroti.attr('class', 'lbf success');
        khushroti.html('OPEN');
    } else {
        khushroti.attr('class', 'lbf danger');
        khushroti.html('CLOSED');
    }
    // Park Place Market
    var parkplace = $('#parkplace');
    if (parkplaceOpen(dotw, hr, min, sec)) {
        parkplace.attr('class', 'lbf success');
        parkplace.html('OPEN');
    } else {
        parkplace.attr('class', 'lbf danger');
        parkplace.html('CLOSED');
    }
    // Discovery Perks
    var perks = $('#perks');
    if (perksOpen(dotw, hr, min, sec)) {
        perks.attr('class', 'lbf success');
        perks.html('OPEN');
    } else {
        perks.attr('class', 'lbf danger');
        perks.html('CLOSED');
    }
}, 1000);

function bruceOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 6) {
        if (day != 5) {
            if (hr >= 7 && hr < 21) {
                open = true;
            }
        } else {
            if (hr >= 7 && hr < 20) {
                open = true;
            }
        }
    }
    return open;
}

function kerrOpen(day, hr, min, sec) {
    open = false;
    if (day == 5 && hr >= 7 && (hr <= 14 && min < 30)) {
        open = true;
    } else if (day == 7 && hr >= 7 && hr < 20) {
        open = true;
    } else if (day == 6) {
        if (hr >= 7 && (hr <= 14 && min < 30)) {
            open = true;
        } else if ((hr >= 16 && min >= 30) && hr < 8) {
            open = true;
        }
    } else {
        if (hr >= 7 && hr < 20) {
            open = true;
        }
    }
    return open;
}

function mgOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if (hr >= 7 && (hr < 9 || hr == 9 && min < 30)) {
            open = true;
        } else if (hr >= 11 && hr < 14) {
            open = true;
        } else if ((hr >= 16 && min >= 30 || hr >= 17) && hr < 20) {
            open = true;
        }
    }
    if (day == 5) {
        if (hr >= 7 && (hr < 9 || hr == 9 && min < 30)) {
            open = true;
        } else if (hr >= 11 && hr < 14) {
            open = true;
        }
    }
    return open;
}

function champsOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if (hr >= 7 && (hr < 9 || hr == 9 && min < 30)) {
            open = true;
        } else if (hr >= 11 && hr < 14) {
            open = true;
        } else if ((hr >= 16 && min >= 30 || hr >= 17) && hr < 20) {
            open = true;
        }
    }
    if (day == 5) {
        if (hr >= 7 && (hr < 9 || hr == 9 && min < 30)) {
            open = true;
        } else if (hr >= 11 && hr < 14) {
            open = true;
        }
    }
    return open;
}

function westOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if (hr >= 11 && hr < 14) {
            open = true;
        }
        if ((hr >= 16 && min >= 30 || hr >= 17) && hr < 19) {
            open = true;
        }
    } else if (day == 5) {
        if (hr >= 11 && hr < 14) {
            open = true;
        }
    }
    return open;
}

function avestaOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 6) {
        if (hr >= 11 && hr < 14) {
            open = true;
        }
    }
    return open;
}

function cornerOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if ((hr >= 7 && min >= 30 || hr >= 8) && hr < 21) {
            open = true;
        }
    } else if (day == 5) {
        if ((hr >= 7 && min >= 30 || hr >= 8) && hr < 18) {
            open = true;
        }
    }
    return open;
}

function ftgOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if ((hr >= 7 && min >= 30 || hr >= 8) && (hr <= 17 || hr <= 17 && min <= 30)) {
            open = true;
        }
    } else if (day == 5) {
        if ((hr >= 7 && min >= 30 || hr >= 8) && hr <= 16) {
            open = true;
        }
    }
    return open;
}

function campuschatOpen(day, hr, min, sec) {
    open = false;
    if (day > 1 && day < 6) {
        if (hr >= 10 && (hr <= 15 || hr <= 15 && min <= 30)) {
            open = true;
        }
    }
    return open;
}

function burgerkingOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if ((hr >= 7 && min >= 30 || hr >= 8) && hr <= 21) {
            open = true;
        }
    } else if (day == 5) {
        if ((hr >= 7 && min >= 30 || hr >= 8) && hr <= 20) {
            open = true;
        }
    } else if (day == 6) {
        if (hr >= 11 && hr <= 21) {
            open = true;
        }
    }
    return open;
}

function chickfilaOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if ((hr >= 7 && min >= 30 || hr >= 8) && hr <= 21) {
            open = true;
        }
    } else if (day == 5) {
        if ((hr >= 7 && min >= 30 || hr >= 8) && hr <= 20) {
            open = true;
        }
    } else if (day == 6) {
        if (hr >= 11 && hr <= 21) {
            open = true;
        }
    }
    return open;
}

function fuzzyOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 6) {
        if (hr >= 11 && hr <= 23) {
            open = true;
        }
    } else if (day == 6) {
        if (hr >= 10 && hr <= 23) {
            open = true;
        }
    } else if (day == 0) {
        if (hr >= 12 && hr <= 23) {
            open = true;
        }
    }
    return open;
}

function jambaOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if ((hr >= 7 && min >= 45 || hr >= 8) && hr <= 19) {
            open = true;
        }
    } else if (day == 5) {
        if ((hr >= 7 && min >= 30 || hr >= 8) && hr <= 15) {
            open = true;
        }
    } else if (day == 6) {
        if (hr >= 11 && hr <= 15) {
            open = true;
        }
    }
    return open;
}

function starbucksOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if ((hr >= 7 && min >= 30 || hr >= 8) && hr <= 20) {
            open = true;
        }
    } else if (day == 5) {
        if ((hr >= 7 && min >= 30 || hr >= 8) && hr <= 19) {
            open = true;
        }
    } else if (day == 6) {
        if (hr >= 9 && hr <= 17) {
            open = true;
        }
    }
    return open;
}

function tacobuenoOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if ((hr >= 10 && min >= 30 || hr >= 11) && hr <= 21) {
            open = true;
        }
    } else if (day == 5) {
        if ((hr >= 10 && min >= 30 || hr >= 11) && hr <= 20) {
            open = true;
        }
    } else if (day == 6) {
        if (hr >= 11 && hr <= 21) {
            open = true;
        }
    }
    return open;
}

function whichwichOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if (hr >= 11 && hr <= 19) {
            open = true;
        }
    } else if (day == 5 || day == 6) {
        if (hr >= 11 && hr <= 15) {
            open = true;
        }
    }
    return open;
}

function bizOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if ((hr >= 7 && hr >= 30 || hr >= 8) && hr <= 22) {
            open = true;
        }
    } else if (day == 5) {
        if ((hr >= 7 && hr >= 30 || hr >= 8) && hr <= 17) {
            open = true;
        }
    }
    return open;
}

function gostationOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if ((hr >= 7 && min >= 30 || hr >= 8) && hr <= 20) {
            open = true;
        }
    } else if (day == 5) {
        if ((hr >= 7 && min >= 30 || hr >= 8) && hr <= 14) {
            open = true;
        }
    }
    return open;
}

function gabcafeOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if ((hr >= 7 && min >= 30 || hr >= 8) && hr <= 19) {
            open = true;
        }
    } else if (day == 5) {
        if ((hr >= 7 && min >= 30 || hr >= 8) && hr <= 15) {
            open = true;
        }
    }
    return open;
}

function khushrotiOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if (hr >= 8 && hr <= 15) {
            open = true;
        }
    } else if (day == 5) {
        if (hr >= 8 && hr <= 14) {
            open = true;
        }
    }
    return open;
}

function parkplaceOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if (hr >= 9 && hr <= 15) {
            open = true;
        }
    } else if (day == 5) {
        if (hr >= 9 && hr <= 14) {
            open = true;
        }
    }
    return open;
}

function perksOpen(day, hr, min, sec) {
    open = false;
    if (day > 0 && day < 5) {
        if (hr >= 8 && hr <= 18) {
            open = true;
        }
    } else if (day == 5) {
        if (hr >= 8 && (hr <= 14 || hr <= 14 && hr <= 30)) {
            open = true;
        }
    }
    return open;
}
