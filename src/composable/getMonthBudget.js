import {ref} from "vue";

const getMonthBudget = () => {
    const monthBudget = ref(0);
    const monthBudgetLeft = ref(0);
    const thisMonthsExpenses = ref(0);
    const expenses = ref([]);
    const budget = ref([]);
    const error = ref(null);

    const loadMonthBudget = async () => {
        try {
            let data = await fetch("http://localhost:3000/expenses")
            if(!data.ok) {
                throw Error("no data fetched");
            }
            expenses.value = await data.json();
            expenses.value.sort((a, b) => new Date(b.date) - new Date(a.date));

            //Get this month
            var today = new Date();
            today.setHours(0, 0, 0, 0);
            var firstday = new Date(today.getFullYear(), today.getMonth(), 1);
            var lastday = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            lastday.setHours(23, 59, 59, 999);

            const thismonth = expenses.value.filter(
                (expense) =>
                new Date(expense.date) >= firstday &&
                new Date(expense.date) <= lastday
            );
            thisMonthsExpenses.value = thismonth.reduce((accummulator, object) => {
                return accummulator + object.amount;
            }, 0);
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
        try {
            let data = await fetch("http://localhost:3000/budget")
            if(!data.ok) {
                throw Error("no data fetched");
            }
            budget.value = await data.json();
            monthBudget.value = budget.value.monthlyBudget;
            monthBudgetLeft.value = monthBudget.value - thisMonthsExpenses.value;
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    }

    return {
        monthBudgetLeft,
        loadMonthBudget
    }
};

export default getMonthBudget;