import React from '/_snowpack/pkg/react.v18.2.0.js';

const usePassiveLayoutEffect = React[typeof document !== 'undefined' && document.createElement !== void 0 ? 'useLayoutEffect' : 'useEffect'];

export default usePassiveLayoutEffect;
