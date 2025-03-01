import type { Schema, Struct } from '@strapi/strapi';

export interface ProductsProductAttribute extends Struct.ComponentSchema {
  collectionName: 'components_products_product_attributes';
  info: {
    description: '';
    displayName: 'Product Attribute';
    icon: 'bulletList';
  };
  attributes: {
    optionName: Schema.Attribute.String;
    values: Schema.Attribute.Component<
      'products.product-attribute-value',
      true
    >;
  };
}

export interface ProductsProductAttributeValue extends Struct.ComponentSchema {
  collectionName: 'components_products_product_attribute_values';
  info: {
    displayName: 'Product Attribute Value';
    icon: 'expand';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'products.product-attribute': ProductsProductAttribute;
      'products.product-attribute-value': ProductsProductAttributeValue;
    }
  }
}
