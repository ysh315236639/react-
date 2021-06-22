import Loader from 'react-loader-spinner';
import { Suspense, LazyExoticComponent } from 'react';

const loadComp = (Com: LazyExoticComponent<any>) => () => (
  <Suspense fallback={<Loader type="Puff" color="#00bfff" height={100} width={100} timeout={3000} />}>
    <Com />
  </Suspense>
);

export default loadComp;
