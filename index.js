function gameCombinations() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("button-1").textContent;
    b2 = document.getElementById("button-2").textContent;
    b3 = document.getElementById("button-3").textContent;
    b4 = document.getElementById("button-4").textContent;
    b5 = document.getElementById("button-5").textContent;
    b6 = document.getElementById("button-6").textContent;
    b7 = document.getElementById("button-7").textContent;
    b8 = document.getElementById("button-8").textContent;
    b9 = document.getElementById("button-9").textContent;

    if ((b1 == 'X' || b1 == 'x') && (b2 == 'X' || b2 == 'x') && (b3 == 'X' || b3=='x')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "X is the Winner"
    } else if ((b4 == 'X' || b4 == 'x') && (b5 == 'X' || b5 == 'x') && (b6 == 'X' || b6=='x')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "X is the Winner"
    }else if ((b7 == 'X' || b7 == 'x') && (b8 == 'X' || b8 == 'x') && (b9 == 'X' || b9=='x')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "X is the Winner"
    }else if ((b1 == 'X' || b1 == 'x') && (b4 == 'X' || b4 == 'x') && (b7 == 'X' || b7=='x')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "X is the Winner"
    }else if ((b2 == 'X' || b2 == 'x') && (b5 == 'X' || b5 == 'x') && (b8 == 'X' || b8=='x')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "X is the Winner"
    }else if ((b3 == 'X' || b3 == 'x') && (b6 == 'X' || b6 == 'x') && (b9 == 'X' || b9=='x')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "X is the Winner"
    }else if ((b1 == 'X' || b1 == 'x') && (b5 == 'X' || b5 == 'x') && (b9 == 'X' || b9=='x')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "X is the Winner"
    }else if ((b3 == 'X' || b3 == 'x') && (b5 == 'X' || b5 == 'x') && (b7 == 'X' || b7=='x')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "X is the Winner"
    }else if ((b1 == 'O' || b1 == 'o') && (b2 == 'O' || b2 == 'o') && (b3 == 'O' || b3=='o')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "O is the Winner"
    } else if ((b4 == 'O' || b4 == 'o') && (b5 == 'O' || b5 == 'o') && (b6 == 'O' || b6=='o')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "O is the Winner"
    }else if ((b7 == 'O' || b7 == 'o') && (b8 == 'O' || b8 == 'o') && (b9 == 'O' || b9=='o')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "O is the Winner"
    }else if ((b1 == 'O' || b1 == 'o') && (b4 == 'O' || b4 == 'o') && (b7 == 'O' || b7=='o')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "O is the Winner"
    }else if ((b2 == 'O' || b2 == 'o') && (b5 == 'O' || b5 == 'o') && (b8 == 'O' || b8=='o')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "O is the Winner"
    }else if ((b3 == 'O' || b3 == 'o') && (b6 == 'O' || b6 == 'o') && (b9 == 'O' || b9=='o')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "O is the Winner"
    }else if ((b1 == 'O' || b1 == 'o') && (b5 == 'O' || b5 == 'o') && (b9 == 'O' || b9=='o')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "O is the Winner"
    }else if ((b3 == 'O' || b3 == 'o') && (b5 == 'O' || b5 == 'o') && (b7 == 'O' || b7=='o')){
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("winner").textContent = "O is the Winner"
    }
}