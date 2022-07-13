import { Serializer as ФормаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-s-s8-форма';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФормаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
