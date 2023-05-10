import moment from "moment";

const today = new Date();

today.setDate(today.getDate() - 1);
const monthNow = today.toISOString().split("T")[0];

const mounth = new Date();
mounth.setMonth(today.getMonth() - 1);
const lastMounth = mounth.toISOString().split("T")[0];

const convertDate = (date) => {
  return moment(date).format("ll");
};

export { monthNow, lastMounth, convertDate };
