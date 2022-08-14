let changeCalendar = function () {


    document.querySelector('.prevMonth').addEventListener("click", () => {
        month = month - 1;
        createDynamicCalendar()
    })

    document.querySelector('.nextMonth').addEventListener("click", () => {
        month = month + 1;
        createDynamicCalendar()
    })
}

// changeCalendar();