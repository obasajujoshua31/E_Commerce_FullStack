import { AttributeValue } from './attributeValue.entity';
import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Attribute } from './attribute.entity';

@Injectable()
export class AttributeService {
  private async getAttributeRepo() {
    const attributeRepo = await getRepository(Attribute);
    return attributeRepo;
  }

  public async getAllAttributes() {
    const attributeRepo = await this.getAttributeRepo();
    return attributeRepo.find({
      join: {
        alias: 'attribute',
        leftJoinAndSelect: {
          attributeValues: 'attribute.attributeValues',
          products: 'attributeValues.products',
        },
      },
    });
  }

  public async getOneAttribute(attribute_id) {
    const attributeRepo = await this.getAttributeRepo();
    const attribute = await attributeRepo.findOne({
      where: {
        attribute_id,
      },
      join: {
        alias: 'attribute',
        leftJoinAndSelect: {
          attributeValues: 'attribute.attributeValues',
          products: 'attributeValues.products',
        },
      },
    });

    // console.log(attribute);
    return attribute;
  }
}
