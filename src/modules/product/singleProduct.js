import Product from '../../models/Product';
import {getCurrentUrl} from './util';

/**
 * The handler for single product
 * @param ctx
 * @returns {Promise.<void>}
 */
export default async (ctx) => {
  try {
    const {params: {productId}} = ctx;
    const product = await Product.get(productId);

    ctx.body = ctx.serializer('product', {
      pluralizeType: false,
      keyForAttribute: 'camelCase',
      dataLinks: {
        self: getCurrentUrl(ctx),
      },
      attributes: [
        'productId',
        'name',
        'manufacturer',
        'size',
        'price',
        'pricePerLitre',
        'isNewInStock',
        'type',
        'subtype',
        'specialGroup',
        'beerType',
        'country',
        'district',
        'vintage',
        'labelNote',
        'note',
        'grapes',
        'characterization',
        'packaging',
        'closure',
        'alcoholPercentage',
        'energy',
        'stock',
        'images',
        'createdAt',
        'updatedAt',
      ],
    })
      .serialize(product);
  } catch (e) {
    ctx.throw(404, e);
  }
};
