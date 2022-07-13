import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерФормы: DS.attr('string'),
  наименование: DS.attr('string'),
  условие: DS.hasMany('i-i-s-i-s-s8-условие', { inverse: 'форма', async: false })
});

export let ValidationRules = {
  номерФормы: {
    descriptionKey: 'models.i-i-s-i-s-s8-форма.validations.номерФормы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-i-s-s8-форма.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  условие: {
    descriptionKey: 'models.i-i-s-i-s-s8-форма.validations.условие.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормаE', 'i-i-s-i-s-s8-форма', {
    номерФормы: attr('Номер формы', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    условие: hasMany('i-i-s-i-s-s8-условие', 'Условие', {
      номерФормы: attr('Номер формы', { index: 0 }),
      наименование: attr('Наименование', { index: 1 }),
      видПоддержки: belongsTo('i-i-s-i-s-s8-вид-поддержки', 'Вид поддержки', {
        наименование: attr('Наименование', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('ФормаL', 'i-i-s-i-s-s8-форма', {
    номерФормы: attr('Номер формы', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });
};
