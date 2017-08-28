import 'babel-polyfill';
import {readFile, utils} from 'xlsx';
import Product from '../../models/Product';
import dotenv from 'dotenv';

import connectToMongoDB from '../../config/db';

// Configure dotenv
dotenv.config();

const args = process.argv;

if (args.length > 3) {
  throw new Error('Too many arguments, you should input something like: yarn importData path/to/file.xls...');
}

// Make connection
connectToMongoDB()
  .then(() => {
    const workbook = readFile(args[2]);
    const sheet = workbook.Sheets['Alkon Hinnasto Tekstitiedostona']; // The name of the sheet where data exists
    const products = utils.sheet_to_json(sheet, {
      raw: true,
      range: 4,
      // Name object keys by their column
      header: [
        'productId',
        'name',
        'manufacturer',
        'size',
        'price',
        'pricePerLitre',
        'isNewInStock',
        'priceOrder',
        'type',
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
        'acids',
        'sugar',
        'wort',
        'color',
        'ERP',
        'energy',
        'stock',
      ],
    });

    products.forEach(async (product) => {
      const prod = new Product(product);
      const createdProd = await prod.save();
      console.log(`Created product ${createdProd.name}`);
    });
  });
