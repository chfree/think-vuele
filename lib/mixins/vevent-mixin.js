import { isEmpty } from 'main/utils';
export default {
  computed: {
    vevent: function vevent() {
      var eventName = (Object.keys(this.$listeners) || [''])[0];
      if (isEmpty(eventName)) {
        return null;
      }
      if (isEmpty(this.$listeners[eventName])) {
        return null;
      }
      return this.$listeners[eventName]['fns'].name.replace(' ', '_');
    }
  }
};