import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  описание: DS.attr('string'),
  пользователь: DS.belongsTo('i-i-s-i-s-s8-пользователь', { inverse: null, async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-i-s-s8-вид-поддержки.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описание: {
    descriptionKey: 'models.i-i-s-i-s-s8-вид-поддержки.validations.описание.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-i-s-s8-вид-поддержки.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВидПоддержкиE', 'i-i-s-i-s-s8-вид-поддержки', {
    наименование: attr('Наименование', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    пользователь: belongsTo('i-i-s-i-s-s8-пользователь', 'Пользователь', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ВидПоддержкиL', 'i-i-s-i-s-s8-вид-поддержки', {
    наименование: attr('Наименование', { index: 0 }),
    описание: attr('Описание', { index: 1 }),
    пользователь: belongsTo('i-i-s-i-s-s8-пользователь', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
