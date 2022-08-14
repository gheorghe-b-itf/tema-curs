let changeCalendar = function () {


    document.querySelector('.prevMonth').addEventListener("click", () => {
        obj.selectedMonth.month = obj.selectedMonth.month - 1;
        createDynamicCalendar(obj.selectedMonth);
    })

    document.querySelector('.nextMonth').addEventListener("click", () => {
        obj.selectedMonth.month = obj.selectedMonth.month + 1;
        createDynamicCalendar(obj.selectedMonth);
    })
}

changeCalendar();