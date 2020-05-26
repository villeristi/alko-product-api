import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import {getImages} from '../modules/product/util';

const ProductSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    index: true,
    set: (value) => parseInt(value),
  },
  name: {
    type: String,
    required: true,
    index: true,
  },
  manufacturer: {
    type: String,
    index: true,
  },
  country: {
    type: String,
    index: true,
  },
  district: {
    type: String,
    index: true,
  },
  vintage: {
    type: String,
    index: true,
  },
  size: {
    index: true,
    type: Number,
    set: (value) => parseFloat(value.replace(',', '.')).toFixed(2),
    get: (value) => parseFloat(value.toFixed(2)),
  },
  price: {
    index: true,
    required: true,
    type: Number,
    set: (value) => parseFloat(value).toFixed(2),
    get: (value) => parseFloat(value.toFixed(2)),
  },
  pricePerLitre: {
    index: true,
    type: Number,
    set: (value) => parseFloat(value).toFixed(2),
    get: (value) => parseFloat(value.toFixed(2)),
  },
  isNewInStock: {
    type: Boolean,
    index: true,
    default: true,
  },
  type: {
    type: String,
    index: true,
  },
  subtype: {
    type: String,
    index: true,
  },
  specialGroup: {
    type: String,
    index: true,
  },
  beerType: {
    type: String,
    index: true,
  },
  labelNote: {
    type: String,
    index: true,
  },
  note: {
    type: String,
    index: true,
  },
  grapes: {
    type: [String],
    index: true,
    set: (value) => value.split(',').filter((val) => val.trim() !== ''),
    get: (value) => value.length ? value.join(', ') : undefined,
  },
  characterization: {
    type: [String],
    index: true,
    set: (value) => value.split(',').map((val) => val.trim().toLowerCase()),
    get: (value) => value.length ? value.join(', ') : undefined,
  },
  packaging: {
    type: String,
    index: true,
  },
  closure: {
    type: String,
    index: true,
  },
  alcoholPercentage: {
    type: Number,
    index: true,
    set: (value) => parseFloat(value).toFixed(2),
  },
  energy: {
    type: Number,
    index: true,
    set: (value) => parseFloat(value).toFixed(2),
  },
  stock: {
    type: String,
    required: true,
    index: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

/**
 * Virtuals
 */
ProductSchema.virtual('images')
  .get(function () {
    return getImages(this.productId)
  });

/**
 * Methods
 */
ProductSchema.method({});

/**
 * Statics
 */
ProductSchema.statics = {

  /**
   * Get product
   * @param productId
   * @returns {Promise.<*>}
   */
  async get(productId) {
    try {
      return await this.findOne({productId}).exec();
    } catch (e) {
      new Error('No such product exists!', 404);
    }
  },
};

/**
 * Plugins
 */
ProductSchema.plugin(mongoosePaginate);

/**
 * @typedef Product
 */
export default mongoose.model('Product', ProductSchema);
