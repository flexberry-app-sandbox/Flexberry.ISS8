import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерФормы: DS.attr('string'),
  наименование: DS.attr('string'),
  видПоддержки: DS.belongsTo('i-i-s-i-s-s8-вид-поддержки', { inverse: null, async: false }),
  форма: DS.belongsTo('i-i-s-i-s-s8-форма', { inverse: 'условие', async: false })
});

export let ValidationRules = {
  номерФормы: {
    descriptionKey: 'models.i-i-s-i-s-s8-условие.validations.номерФормы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-i-s-s8-условие.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  видПоддержки: {
    descriptionKey: 'models.i-i-s-i-s-s8-условие.validations.видПоддержки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  форма: {
    descriptionKey: 'models.i-i-s-i-s-s8-условие.validations.форма.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УсловиеE', 'i-i-s-i-s-s8-условие', {
    номерФормы: attr('Номер формы', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    видПоддержки: belongsTo('i-i-s-i-s-s8-вид-поддержки', 'Вид поддержки', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });
};
