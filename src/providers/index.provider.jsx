import { createPack } from 'react-component-pack';

import ImportProvider from './import/import.provider';
import SupplierProvider from './supplier/supplier.provider';
import MappingProvider from './mapping/mapping.provider';

const ProviderPack = createPack(
  ImportProvider,
  SupplierProvider,
  MappingProvider
);

export default ProviderPack;
