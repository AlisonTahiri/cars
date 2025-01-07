import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { productType } from "./productType";
import { carMakeType } from "./carMakeType";
import { userType } from "./userType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, productType, categoryType, carMakeType, userType],
};
