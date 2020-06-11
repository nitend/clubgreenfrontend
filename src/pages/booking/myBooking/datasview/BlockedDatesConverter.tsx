import { Booking } from "../../../../generated/graphql";
import moment, { Moment } from "moment";

export const generateBlockedDaysList = async (bookings: Booking[]) => {

    var blockedDays: Moment[] = [];
    if(bookings){

      bookings.map((dateRange) => {
          var start = moment(dateRange.from).startOf("d");
          var end = moment(dateRange.to)
          do{               
              blockedDays.push(start);
              start = start.add(1, "day");               
          } while(start.isBefore(end))

          return dateRange;
      })
    }
    return blockedDays;
}