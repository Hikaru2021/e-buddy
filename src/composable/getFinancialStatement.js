import { ref } from "vue";
import { reactive } from "vue";

const getDb = () => {
  const expenses = ref([]);
  const month = ref();
  const week1 = ref();
  const week2 = ref();
  const week3 = ref();
  const week4 = ref();
  const week5 = ref();
  const error = ref(null);

  const load = async (offset) => {
    try {
      let data = await fetch("http://localhost:3000/expenses");
      if (!data.ok) {
        throw Error("no data fetched");
      }
      expenses.value = await data.json();
      expenses.value.sort((a, b) => new Date(b.date) - new Date(a.date));

      //Get Month
      var curr = new Date();
      curr.setHours(0, 0, 0, 0);
      var firstdayofMonth = new Date(
        curr.getFullYear(),
        curr.getMonth() + offset,
        1
      );
      var lastdayofMonth = new Date(
        curr.getFullYear(),
        curr.getMonth() + offset + 1,
        0
      );
      lastdayofMonth.setHours(23, 59, 59, 999);
      var lastDay = lastdayofMonth.getDate();

      expenses.value = expenses.value.filter(
        (expense) =>
          new Date(expense.date) >= firstdayofMonth &&
          new Date(expense.date) <= lastdayofMonth
      );

      //Get whole month expenses
      month.value = getExpenses(firstdayofMonth, lastdayofMonth);

      //Get Week 1 expenses
      var firstDayOfWeek = firstdayofMonth;
      var first = firstDayOfWeek.getDate();
      var last = first + (6 - firstDayOfWeek.getDay());
      var lastDayOfWeek = new Date(firstDayOfWeek);
      lastDayOfWeek.setDate(last);
      lastDayOfWeek.setHours(23, 59, 59, 999);

      week1.value = getExpenses(firstDayOfWeek, lastDayOfWeek);

      //Get Week 2
      first = last + 1;
      last = first + 6;
      firstDayOfWeek.setDate(first);
      lastDayOfWeek = new Date(firstDayOfWeek);
      lastDayOfWeek.setDate(last);
      lastDayOfWeek.setHours(23, 59, 59, 999);

      week2.value = getExpenses(firstDayOfWeek, lastDayOfWeek);

      //Get Week 3
      first = last + 1;
      last = first + 6;
      firstDayOfWeek.setDate(first);
      lastDayOfWeek = new Date(firstDayOfWeek);
      lastDayOfWeek.setDate(last);
      lastDayOfWeek.setHours(23, 59, 59, 999);

      week3.value = getExpenses(firstDayOfWeek, lastDayOfWeek);

      //Get Week 4
      first = last + 1;
      last = first + 6;
      firstDayOfWeek.setDate(first);
      lastDayOfWeek = new Date(firstDayOfWeek);
      lastDayOfWeek.setDate(last);
      lastDayOfWeek.setHours(23, 59, 59, 999);

      week4.value = getExpenses(firstDayOfWeek, lastDayOfWeek);

      //Get Week 5
      first = last + 1;
      last = first + 6;
      firstDayOfWeek.setDate(first);
      if (firstDayOfWeek.getDate() <= lastDay) {
        lastDayOfWeek = new Date(firstDayOfWeek);
        if (last >= lastDay) lastDayOfWeek.setDate(lastDay);
        else lastDayOfWeek.setDate(last);
        lastDayOfWeek.setHours(23, 59, 59, 999);

        week5.value = getExpenses(firstDayOfWeek, lastDayOfWeek);
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  function getExpenses(firstday, lastday) {
    var week = expenses.value.filter(
      (expense) =>
        new Date(expense.date) >= firstday && new Date(expense.date) <= lastday
    );

    var housing = week.filter((expense) => expense.type == "Housing");
    housing = housing.reduce((accummulator, object) => {
      return accummulator + object.amount;
    }, 0);

    var food = week.filter((expense) => expense.type == "Food");
    food = food.reduce((accummulator, object) => {
      return accummulator + object.amount;
    }, 0);

    var transport = week.filter((expense) => expense.type == "Transport");
    transport = transport.reduce((accummulator, object) => {
      return accummulator + object.amount;
    }, 0);

    var others = week.filter((expense) => expense.type == "Others");
    others = others.reduce((accummulator, object) => {
      return accummulator + object.amount;
    }, 0);

    return {
      labels: ["Housing", "Food", "Transport", "Others"],
      datasets: [
        {
          backgroundColor: [
            "#ff0000",
            "#008000",
            "#0000ff",
            "#ffa500"
          ],
          data: [housing, food, transport, others],
        },
      ],
    };
  }

  return {
    expenses,
    month,
    week1,
    week2,
    week3,
    week4,
    week5,
    error,
    load,
  };
};

export default getDb;
