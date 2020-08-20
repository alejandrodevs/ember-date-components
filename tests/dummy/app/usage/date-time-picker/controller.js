import Controller from '@ember/controller';
import moment from 'moment';
import { computed } from '@ember/object';

/* eslint-disable no-console */
export default Controller.extend({
  date1: computed(function () {
    return {
      value: null,
    };
  }),

  date2: computed(function () {
    return {
      value: moment().add(2, 'months'),
    };
  }),

  date3: computed(function () {
    return {
      min: moment().subtract(5, 'days'),
      max: moment().add(10, 'days'),
    };
  }),

  actions: {
    updateDate1(val) {
      this.set('date1.value', val);
    },

    updateDateTime(date) {
      console.log(date);
    },
  },
});
