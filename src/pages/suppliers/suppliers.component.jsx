import React, { useContext, useEffect, useState } from 'react';

import { SupplierContext } from '../../providers/supplier/supplier.provider';

import {
  firestore,
  convertSuppliersSnapshotToMap,
} from '../../firebase/firebase.utils';

import './suppliers.styles.scss';

const SupplierPage = () => {
  const { suppliers, updateSuppliers } = useContext(SupplierContext);

  useEffect(() => {
    const supplierRef = firestore.collection('suppliers');

    supplierRef.get().then(snapshot => {
      const suppliersMap = convertSuppliersSnapshotToMap(snapshot);
      updateSuppliers(suppliersMap);
    });

    return () => {
      supplierRef();
    };
  }, [prevProps]);

  return <div></div>;
};

export default SupplierPage;
