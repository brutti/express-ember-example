import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('quote');
  },

  actions: {
    saveQuote(newQuote) {
      newQuote.save().then(() => {
        this.transitionTo('quotes');
      }).catch((error) => {
        console.log(error);
      });
    },

    abortQuote() {
      this.transitionTo('quotes');
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
        (confirmation) ? model.rollbackAttributes() : transition.abort();
      }

    }
  }

});
