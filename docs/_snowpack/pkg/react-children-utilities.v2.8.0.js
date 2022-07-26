import { isValidElement, Children, cloneElement } from '/_snowpack/pkg/react.v18.2.0.js';

const hasChildren = (element) => isValidElement(element) && Boolean(element.props.children);

const hasComplexChildren = (element) => isValidElement(element) &&
    hasChildren(element) &&
    Children.toArray(element.props.children).reduce((response, child) => response || isValidElement(child), false);

const deepFilter = (children, deepFilterFn) => Children.toArray(children)
    .filter(deepFilterFn)
    .map((child) => {
    if (isValidElement(child) && hasComplexChildren(child)) {
        // Clone the child that has children and filter them too
        return cloneElement(child, {
            ...child.props,
            children: deepFilter(child.props.children, deepFilterFn),
        });
    }
    return child;
});

const deepFind = (children, deepFindFn) => {
    // eslint-disable-next-line @typescript-eslint/init-declarations
    let found;
    Children.toArray(children).find((child, index, findChildren) => {
        if (deepFindFn(child, index, findChildren)) {
            found = child;
            return true;
        }
        if (isValidElement(child) && hasComplexChildren(child)) {
            // Find inside the child that has children
            found = deepFind(child.props.children, deepFindFn);
            return typeof found !== 'undefined';
        }
        return false;
    });
    return found;
};

const deepForEach = (children, deepForEachFn) => {
    Children.forEach(children, (child, index) => {
        if (isValidElement(child) && hasComplexChildren(child)) {
            // Each inside the child that has children
            deepForEach(child.props.children, deepForEachFn);
        }
        deepForEachFn(child, index);
    });
};

const deepMap = (children, deepMapFn) => Children.toArray(children).map((child, index, mapChildren) => {
    if (isValidElement(child) && hasComplexChildren(child)) {
        // Clone the child that has children and map them too
        return deepMapFn(cloneElement(child, {
            ...child.props,
            children: deepMap(child.props.children, deepMapFn),
        }));
    }
    return deepMapFn(child, index, mapChildren);
});

const filter = (children, filterFn) => Children.toArray(children).filter(filterFn);

const getElementName = (element) => {
    if (!isValidElement(element)) {
        return null;
    }
    return typeof element.type === 'string' ? element.type : element.type.name;
};

// eslint-disable-next-line max-lines-per-function
const groupByType = (children, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/prefer-readonly-parameter-types
types = [], rest = 'rest') => {
    const typeNames = types.map((type) => (typeof type === 'string' ? type : type.name));
    return Children.toArray(children).reduce((acc, child) => {
        const elementName = getElementName(child);
        const key = elementName !== null && typeNames.includes(elementName) ? elementName : rest;
        if (typeof acc[key] === 'undefined') {
            acc[key] = [];
        }
        acc[key] = [...acc[key], child];
        return acc;
    }, {});
};

const childToString = (child) => {
    if (typeof child === 'undefined' || child === null || typeof child === 'boolean') {
        return '';
    }
    if (JSON.stringify(child) === '{}') {
        return '';
    }
    return child.toString();
};
const onlyText = (children) => {
    if (!(children instanceof Array) && !isValidElement(children)) {
        return childToString(children);
    }
    return Children.toArray(children).reduce((text, child) => {
        let newText = '';
        if (isValidElement(child) && hasChildren(child)) {
            newText = onlyText(child.props.children);
        }
        else if (isValidElement(child) && !hasChildren(child)) {
            newText = '';
        }
        else {
            newText = childToString(child);
        }
        return text.concat(newText);
    }, '');
};

const onlyValid = (children) => deepFilter(children, (child) => isValidElement(child));

var reactChildrenUtilities = {
    ...Children,
    deepFilter,
    deepFind,
    deepForEach,
    deepMap,
    filter,
    getElementName,
    groupByType,
    hasChildren,
    hasComplexChildren,
    onlyText,
    onlyValid,
};

export default reactChildrenUtilities;
export { deepFilter, deepFind, deepForEach, deepMap, filter, getElementName, groupByType, hasChildren, hasComplexChildren, onlyText, onlyValid };
