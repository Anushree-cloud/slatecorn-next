import moment from "moment"
import { dateFormates } from "../constants/date"

export const formatDate = (date = new Date(), format = dateFormates.fullDate) => {
	return moment(date).format(format)
}